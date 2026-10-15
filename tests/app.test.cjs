const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const source = fs.readFileSync('app.js', 'utf8');

function harness({ blockedStorage = false, stored = {} } = {}) {
  const nodes = new Map();
  function node(id) {
    if (!nodes.has(id)) nodes.set(id, {
      textContent: '', innerHTML: '', value: '', options: [], style: {}, dataset: {}, children: [], events: {},
      classList: { toggle() {}, add() {}, remove() {} },
      setAttribute(key, value) { this[key] = value; },
      addEventListener(type, handler) { this.events[type] = handler; },
      appendChild(child) { this.children.push(child); },
      querySelector() { return this.children[0] || null; },
      focus() {},
    });
    return nodes.get(id);
  }
  const context = vm.createContext({
    console, URL, URLSearchParams, Intl, Date, AbortController,
    setTimeout: () => 1, clearTimeout() {}, setInterval: () => 1, clearInterval() {},
    localStorage: {
      getItem(key) { if (blockedStorage) throw Error('blocked'); return stored[key] ?? null; },
      setItem(key, value) { if (blockedStorage) throw Error('blocked'); stored[key] = value; },
    },
    document: {
      addEventListener() {},
      documentElement: { getAttribute() { return 'dark'; }, setAttribute() {} },
      getElementById: node, querySelector: node, querySelectorAll: () => [],
      createElement: () => node(Symbol()),
    },
    window: { addEventListener() {}, location: { search: '', href: 'https://example.com/' } },
    history: { replaceState() {} }, navigator: {},
  });
  vm.runInContext(fs.readFileSync('locales.js', 'utf8'), context);
  // Load production functions without the automatic initial network request.
  vm.runInContext(source.slice(0, source.lastIndexOf('(function(){')), context);
  return { run: code => vm.runInContext(code, context), node, context };
}

test('blocked storage and unavailable map do not prevent initialization', () => {
  const h = harness({ blockedStorage: true });
  h.run('initTheme(); initMap(); bind(); applyLang(); rebuildFavs(); renderRecent();');
  assert.match(h.node('map').textContent, /Harita/);
});

test('malformed storage and unsupported language recover safely', () => {
  const h = harness({ stored: { wandex_lang_v1: 'xx', wandex_favs_v1: '{}', wandex_recent_v1: '[null, {}, {"name":"Paris"}]' } });
  assert.equal(h.run('lang'), 'tr');
  assert.equal(h.run('getFavs().length'), 0);
  assert.equal(h.run('getRecent().length'), 1);
});

test('city URL requires coordinates and rejects invalid ranges', () => {
  const h = harness();
  h.context.window.location.search = '?city=Paris';
  assert.equal(h.run('readUrlRestore().type'), 'city');
  h.context.window.location.search = '?city=Paris&lat=999&lon=2';
  assert.equal(h.run('readUrlRestore().type'), 'city');
  h.context.window.location.search = '?city=Zero&lat=0&lon=0';
  assert.equal(h.run('readUrlRestore().ctx.lat'), 0);
  assert.equal(h.run('normalizeCtx({name:"Bad",lat:null,lon:2})'), null);
});

test('missing measurements do not create a travel score or count as zero', () => {
  const h = harness();
  assert.equal(h.run('computeTravelScore()'), null);
  assert.equal(h.run('cW = {cw:{temperature:22,windspeed:null}}; computeTravelScore().score'), 100);
  assert.equal(h.run('cW = {cw:{temperature:null,windspeed:null}}; cA = {aqiVal:null}; computeTravelScore()'), null);
  assert.equal(h.run('fmtDayLen(0)'), '0sa 0dk');
});

test('hourly forecast handles quarter-hour observations and preserves city-local labels', () => {
  const h = harness();
  assert.equal(h.run('hourlyIndex(["2026-10-15T00:00","2026-10-15T01:00","2026-10-15T02:00"], "2026-10-15T01:45")'), 1);
  assert.equal(h.run('fmtTime("2026-10-15T23:00")'), '23:00');
  assert.equal(h.run('lastCtx = {timezone:"Asia/Tokyo"}; fmtTime("2026-10-15T10:00:00+00:00")'), '19:00');
});

test('an older weather response cannot overwrite a newer selection', async () => {
  const h = harness();
  let resolve;
  h.context.fetch = () => new Promise(r => { resolve = r; });
  const pending = h.run('renderVersion = 1; loadWeather({lat:1,lon:2}, 1)');
  h.run('renderVersion = 2; cW = {newCity:true}');
  resolve({ ok: true, json: async () => ({ current_weather: {temperature:99} }) });
  await pending;
  assert.equal(h.run('cW.newCity'), true);
});

test('failed source clears old city data and reports the failed provider', async () => {
  const h = harness();
  h.run(`cW = {cw:{temperature:99}};
    loadWeather = async () => { throw Error('offline'); };
    loadAir = loadSun = loadFx = loadCrypto = loadCountry = loadHolidays = async () => {};`);
  await h.run('renderAll({name:"Paris",country:"France",countryCode:"FR",lat:48.8,lon:2.3,timezone:"Europe/Paris"})');
  assert.equal(h.node('kpiTemp').textContent, '—');
  assert.match(h.node('sourceStatus').textContent, /Open-Meteo Weather/);
  assert.equal(h.run('pendingLoads'), 0);
});

test('external text is escaped before insertion into HTML', () => {
  const h = harness({ stored: { wandex_favs_v1: '[{"name":"<img src=x onerror=alert(1)>","lat":1,"lon":2}]' } });
  h.run('rebuildFavs()');
  assert.doesNotMatch(h.node('favSelect').innerHTML, /<img/);
  assert.match(h.node('favSelect').innerHTML, /&lt;img/);
});


test('temperature preference persists and updates comparison without changing raw data', () => {
  const stored = {};
  const h = harness({ stored });
  h.run(`lastCtx = {name:'Paris'}; compareCtx = {name:'London'};
    compareData = {temp:0}; cW = {cw:{temperature:20,windspeed:5}, times:[], t2m:[], pop:[], wnd:[], wcode:[], dtime:[], tmax:[], tmin:[], dpop:[], dwc:[]};
    setTemperatureUnit('f');`);
  assert.equal(h.node('kpiTemp').textContent, '68°F');
  assert.match(h.node('compareRows').innerHTML, /32°F/);
  assert.equal(h.run('cW.cw.temperature'), 20);
  assert.equal(stored.wandex_unit_v1, 'f');
  assert.equal(h.run('formatTemperature(null)'), '—');
  const restored = harness({ stored });
  assert.equal(restored.run('formatTemperature(100)'), '212°F');
});

test('favourites toggle on and off without duplicates', () => {
  const h = harness();
  h.run(`lastCtx = {name:'Paris',country:'France',countryCode:'FR',lat:48.8,lon:2.3}; toggleFavourite();`);
  assert.equal(h.run('getFavs().length'), 1);
  assert.equal(h.node('btnSave')['aria-pressed'], 'true');
  h.run('toggleFavourite()');
  assert.equal(h.run('getFavs().length'), 0);
  assert.equal(h.node('btnSave')['aria-pressed'], 'false');
});

test('ambiguous city searches wait for a selection and preserve the selected coordinates', async () => {
  const h = harness();
  h.node('q').value = 'Springfield';
  h.run(`searchCities = async () => [
    {name:'Springfield', country:'US', countryCode:'US', lat:42.1, lon:-72.5},
    {name:'Springfield', country:'US', countryCode:'US', lat:39.8, lon:-89.6}
  ]; renderAll = async ctx => { lastCtx = ctx; };`);
  await h.run('doSearch()');
  assert.equal(h.run('lastCtx'), null);
  assert.equal(h.node('cityResults').hidden, false);
  const choices = h.node('cityResultsList').children;
  assert.equal(choices.length, 2);
  await choices[1].events.click();
  assert.equal(h.run('lastCtx.lat'), 39.8);
  assert.equal(h.run('getRecent()[0].lon'), -89.6);
});

test('stale city selections are ignored after a newer query starts', async () => {
  const h = harness();
  h.run('searchVersion = 2; renderAll = async ctx => { lastCtx = ctx; };');
  await h.run('activateSearchResult({name:"Old",lat:1,lon:2}, "main", 1)');
  assert.equal(h.run('lastCtx'), null);
});

test('compare search also requires choosing between multiple results', async () => {
  const h = harness();
  h.node('compareQ').value = 'Paris';
  h.run(`searchCities = async () => [
    {name:'Paris',country:'France',lat:48.8,lon:2.3},
    {name:'Paris',country:'US',lat:33.6,lon:-95.5}
  ]; loadCompareData = async () => { compareData = {temp:10}; };`);
  await h.run('doCompareSearch()');
  assert.equal(h.run('compareCtx'), null);
  await h.node('cityResultsList').children[0].events.click();
  assert.equal(h.run('compareCtx.country'), 'France');
  assert.equal(h.node('comparePanel').hidden, false);
});


test('trip plans persist independently for cities with the same name', () => {
  const stored = {};
  const h = harness({stored});
  h.run(`lastCtx = {name:'Paris',country:'France',lat:48.8,lon:2.3}; renderTripPlan();
    planDraft.notes = 'Museum at 10:00'; planDraft.date = '2027-01-12';
    planDraft.checked = ['taskDocuments']; persistTripPlan();
    lastCtx = {name:'Paris',country:'US',lat:33.6,lon:-95.5}; renderTripPlan();`);
  assert.equal(h.node('planNotes').value, '');
  h.run(`planDraft.notes = 'Second city'; persistTripPlan();
    lastCtx = {name:'Paris',country:'France',lat:48.8,lon:2.3}; renderTripPlan();`);
  assert.equal(h.node('planNotes').value, 'Museum at 10:00');
  assert.equal(h.node('planDate').value, '2027-01-12');
  assert.equal(h.run('planDraft.checked.length'), 1);
  const restored = harness({stored});
  restored.run(`lastCtx = {name:'Paris',country:'France',lat:48.8,lon:2.3}; renderTripPlan();`);
  assert.equal(restored.node('planNotes').value, 'Museum at 10:00');
});

test('trip plans remain in memory when saving is blocked', () => {
  const h = harness({blockedStorage:true});
  h.run(`lastCtx = {name:'A',lat:1,lon:2}; renderTripPlan();
    planDraft.notes = 'Keep me'; persistTripPlan();`);
  assert.match(h.node('planSaveStatus').textContent, /oturumda/);
  h.run(`lastCtx = {name:'B',lat:3,lon:4}; renderTripPlan();
    lastCtx = {name:'A',lat:1,lon:2}; renderTripPlan();`);
  assert.equal(h.node('planNotes').value, 'Keep me');
});

test('checklist controls save progress and plain text export preserves notes', () => {
  const h = harness();
  h.run(`lastCtx = {name:'Tokyo',country:'Japan',lat:35,lon:139}; renderTripPlan();`);
  const checkbox = h.node('planChecklist').children[0].children[0];
  checkbox.checked = true;
  checkbox.events.change();
  assert.match(h.node('planProgress').textContent, /1\/5/);
  h.run(`planDraft.notes = '<script>my plain text notes</script>'; persistTripPlan();`);
  const text = h.run('tripPlanText()');
  assert.match(text, /Tokyo, Japan/);
  assert.match(text, /\[x\] Kimlik/);
  assert.match(text, /<script>my plain text notes<\/script>/);
  checkbox.checked = false;
  checkbox.events.change();
  assert.match(h.node('planProgress').textContent, /0\/5/);
});

test('trip download creates a UTF-8 text file and releases its object URL', async () => {
  const h = harness();
  let blob, downloaded = false, removed = false, revoked;
  h.context.Blob = Blob;
  h.context.URL = class extends URL {
    static createObjectURL(value) { blob = value; return 'blob:plan'; }
    static revokeObjectURL(value) { revoked = value; }
  };
  const anchor = {click() { downloaded = true; }, remove() { removed = true; }};
  h.context.document.body = {appendChild() {}};
  h.run(`lastCtx = {name:'Tokyo',country:'Japan',lat:35,lon:139}; renderTripPlan();`);
  h.context.document.createElement = () => anchor;
  h.context.setTimeout = callback => callback();
  h.run('exportTripPlan()');
  assert.equal(downloaded, true);
  assert.equal(removed, true);
  assert.equal(anchor.download, 'Wandex-Tokyo-plan.txt');
  assert.equal(revoked, 'blob:plan');
  assert.match(await blob.text(), /Tokyo, Japan/);
});

test('forecast suggestion ignores missing data and ranks rain and temperature', () => {
  const h = harness();
  h.run(`cityNow = () => '2027-01-01T10:00';`);
  const result = h.run(`bestForecastDay({
    dtime:['2026-12-31','2027-01-01','2027-01-02','2027-01-03'],
    tmin:[20,20,18,null], tmax:[24,24,24,24], dpop:[0,90,10,0]
  })`);
  assert.equal(result.date, '2027-01-02');
  assert.equal(h.run('bestForecastDay({dtime:["2027-01-01"],tmin:[null],tmax:[24],dpop:[0]})'), null);
  assert.equal(h.run('bestForecastDay(null)'), null);
});

test('corrupt plan storage and unknown checklist items are safely normalized', () => {
  const h = harness({stored:{wandex_plans_v1:'[null]'}});
  h.run(`lastCtx = {name:'A',lat:1,lon:2}; renderTripPlan();`);
  assert.equal(h.node('planNotes').value, '');
  assert.equal(h.run(`normalizePlan({notes:'x'.repeat(5000),checked:['taskDocuments','invalid','taskDocuments']}).notes.length`), 4000);
  assert.equal(h.run(`normalizePlan({checked:['taskDocuments','invalid','taskDocuments']}).checked.length`), 1);
});

test('requests bypass browser cache and reject API errors even with HTTP 200', async () => {
  const h = harness();
  let options;
  h.context.fetch = async (_, opts) => { options = opts; return {ok:true, json:async () => ({error:true, reason:'bad request'})}; };
  await assert.rejects(h.run('gfetch("https://example.com/data")'), /API error/);
  assert.equal(options.cache, 'no-store');
});

test('weather timestamps must match current city time and invalid data never enters state', async () => {
  const h = harness();
  h.run(`cityNow = () => '2027-01-01T14:00';
    gfetch = async () => ({timezone:'Europe/Istanbul',current_weather:{time:'2026-12-31T14:00',temperature:20,windspeed:5},hourly:{time:[]},daily:{time:['2027-01-01']}});`);
  await assert.rejects(h.run('loadWeather({lat:41,lon:29,timezone:"Europe/Istanbul"})'));
  assert.equal(h.run('cW'), null);
  assert.equal(h.run('sourceRecords["Open-Meteo Weather"]'), undefined);
  h.run(`gfetch = async () => ({timezone:'Europe/Istanbul',current_weather:{time:'2027-01-01T13:45',temperature:0,windspeed:0},hourly:{time:[]},daily:{time:['2027-01-01']}});`);
  await h.run('loadWeather({lat:41,lon:29,timezone:"Europe/Istanbul"})');
  assert.equal(h.run('cW.cw.temperature'), 0);
  assert.match(h.node('sourceDetails').innerHTML, /2027-01-01T13:45/);
});

test('missing and stale crypto timestamps are rejected without sample prices', async () => {
  const h = harness();
  h.run(`gfetch = async () => ({bitcoin:{usd:10},ethereum:{usd:20},solana:{usd:30}});`);
  await assert.rejects(h.run('loadCrypto()'));
  assert.equal(h.run('cCrypto'), null);
  h.run(`gfetch = async () => Object.fromEntries(['bitcoin','ethereum','solana'].map(coin => [coin,{usd:10,last_updated_at:Math.floor(Date.now()/1000)-3600}]));`);
  await assert.rejects(h.run('loadCrypto()'));
  assert.equal(h.run('cCrypto'), null);
  h.run(`gfetch = async () => Object.fromEntries(['bitcoin','ethereum','solana'].map(coin => [coin,{usd:10,last_updated_at:Math.floor(Date.now()/1000)}]));`);
  await h.run('loadCrypto()');
  assert.equal(h.run('cCrypto.bitcoin.usd'), 10);
});

test('daily FX requires a valid source timestamp and three numeric positive rates', async () => {
  const h = harness();
  h.run(`gfetch = async () => ({result:'success',base_code:'USD',rates:{TRY:30,EUR:0.9,GBP:0.8},time_last_update_unix:Math.floor(Date.now()/1000)-72*3600});`);
  await assert.rejects(h.run('loadFx()'));
  assert.equal(h.node('fxTry').textContent, '');
  h.run(`gfetch = async () => ({result:'success',base_code:'USD',rates:{TRY:30,EUR:0.9,GBP:0.8},time_last_update_unix:Math.floor(Date.now()/1000)-24*3600});`);
  await h.run('loadFx()');
  assert.equal(h.node('fxTry').textContent, '30.00');
  assert.match(h.node('sourceDetails').innerHTML, /Günlük kur/);
});

test('comparison does not display outdated weather or AQI as current', async () => {
  const h = harness();
  h.run(`cityNow = () => '2027-01-01T14:00';
    gfetch = async url => url.includes('sunrise') ? {status:'INVALID_REQUEST'} : url.includes('air-quality')
      ? {hourly:{time:['2026-12-31T14:00'],us_aqi:[10]}}
      : {current_weather:{time:'2026-12-31T14:00',temperature:20,windspeed:5}};`);
  await h.run('loadCompareData({lat:41,lon:29,timezone:"Europe/Istanbul"}, compareVersion)');
  assert.equal(h.run('compareData.temp'), null);
  assert.equal(h.run('compareData.aqi'), null);
  assert.equal(h.run('compareData.dayLenSec'), null);
});

test('holiday request uses the city-local year and keeps all returned holidays', async () => {
  const h = harness();
  let requested;
  h.context.fetch = async url => {
    requested = url;
    return {ok:true, json:async () => Array.from({length:20},(_,i) => ({date:'2027-01-01',name:`Holiday ${i}`}))};
  };
  h.run("cityNow = () => '2027-01-01T00:30';");
  await h.run('loadHolidays({countryCode:"TR",timezone:"Europe/Istanbul"})');
  assert.match(requested, /\/2027\/TR$/);
  assert.equal(h.run('cH.list.length'), 20);
});

test('automatic refresh waits for the interval, skips hidden tabs and refreshes on return', () => {
  const h = harness();
  let calls = 0;
  h.context.onRefresh = () => { calls++; };
  h.run('lastCtx = {name:"Paris"}; renderAll = () => onRefresh(); lastRefreshAt = Date.now(); refreshIfDue();');
  assert.equal(calls, 0);
  h.context.document.visibilityState = 'hidden';
  h.run('lastRefreshAt = Date.now() - AUTO_REFRESH_MS; refreshIfDue();');
  assert.equal(calls, 0);
  h.context.document.visibilityState = 'visible';
  h.run('refreshIfDue();');
  assert.equal(calls, 1);
});

test('language packs cover the selector languages and interpolate translated progress text', () => {
  const h = harness();
  assert.equal(h.run('Object.keys(LANGUAGE_CONFIG).length'), 14);
  assert.equal(h.run('Object.keys(TX).length'), 14);
  h.run("setLang('ar')");
  assert.equal(h.run('lang'), 'ar');
  assert.equal(h.run("t('searchBtn')"), 'بحث');
  assert.equal(h.run("t('planProgress', 2, 5)"), 'اكتملت 2/5 من التحضيرات');
  assert.equal(h.run('loc()'), 'ar');
  h.run("setLang('de')");
  assert.equal(h.run("t('weatherTitle')"), 'Wetter');
});
