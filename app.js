// ═══════════════════════════════════════════════
// i18n
// ═══════════════════════════════════════════════
const LANG_KEY = 'wandex_lang_v1';
const THEME_KEY = 'wandex_theme_v1';
let lang = localStorage.getItem(LANG_KEY) || 'tr';
let theme = document.documentElement.getAttribute('data-theme') || 'dark';

const TX = {
  tr: {
    searchPlaceholder: 'İstanbul, Paris, Tokyo…',
    searchBtn: 'Ara',
    locateTitle: 'Konumumu kullan',
    favPlaceholder: 'Favoriler',
    temp: 'Sıcaklık', wind: 'Rüzgar', localTime: 'Yerel Saat',
    copyCoords: '📋 Koordinatı Kopyala',
    favSaveTitle: 'Aktif şehri favoriye ekle',
    sunTitle: 'Güneş', sunrise: 'Doğuş', sunset: 'Batış', dayLength: 'Gün uzunluğu',
    fxTitle: 'Döviz / USD',
    weatherTitle: 'Hava Durumu',
    hourlyLabel: 'Saatlik — sonraki 12 saat',
    dailyLabel: '7 Günlük',
    airTitle: 'Hava Kalitesi',
    airSource: 'Kaynak: Open-Meteo Air Quality API',
    countryTitle: 'Ülke',
    holidaysTitle: 'Resmi Tatiller',
    cryptoTitle: 'Kripto / USD',
    wDay:'Gün', wMin:'Min', wMax:'Max', wRain:'Yağış',
    aqiUpdate:'Güncelleme',
    aqiGood:'İyi', aqiMod:'Orta', aqiUSG:'Hassaslar için sağlıksız',
    aqiUnhealthy:'Sağlıksız', aqiVU:'Çok sağlıksız', aqiHaz:'Tehlikeli',
    hDate:'Tarih', hEn:'İngilizce', hLocal:'Yerel Ad', hType:'Tür',
    hNotFound:'Tatil verisi bulunamadı',
    toastOk: 'Güncellendi ✓',
    toastPartial: (ok,total)=>`${ok}/${total} kaynak yüklendi`,
    toastCopied: 'Koordinat kopyalandı',
    shareCity: '🔗 Şehri Paylaş',
    shareCityTitle: 'Şehir linkini kopyala',
    toastLinkCopied: 'Şehir linki kopyalandı',
    toastCopyFail: 'Link kopyalanamadı',
    toastNeedCity: 'Önce şehir seçin',
    toastWriteCity: 'Şehir adı girin',
    toastAlready: 'Zaten favorilerde',
    toastSaved: 'Favoriye eklendi',
    toastFavInvalid: 'Geçerli şehir olmadan favori kaydedilemez',
    toastFavLoadFail: 'Favori yüklenemedi',
    toastNoGeo: 'Tarayıcı konum desteklemiyor',
    toastLocated: 'Konum alındı',
    toastLocFail: 'Konum alınamadı',
    toastLocDenied: 'Konum izni reddedildi',
    toastSearchErr: 'Arama hatası',
    toastNotFound: 'Şehir bulunamadı',
    recentSearches: 'Son Aramalar',
    compareTitle: 'Şehir Karşılaştır',
    compareMetric: 'Metrik',
    comparePlaceholder: 'Karşılaştırılacak şehir…',
    compareAdd: 'Karşılaştır',
    compareRemove: 'Kaldır',
    compareTemp: 'Sıcaklık',
    compareWind: 'Rüzgar',
    compareAqi: 'AQI',
    compareLocalTime: 'Yerel Saat',
    compareDayLength: 'Gün Uzunluğu',
    travelScoreTitle: 'Seyahat Skoru',
    travelExcellent: 'Mükemmel',
    travelGood: 'İyi',
    travelMixed: 'Karışık',
    travelPoor: 'Zayıf',
    travelHintGreat: 'Harika hava ve iyi hava kalitesi.',
    travelHintGood: 'Koşullar genel olarak seyahat için uygun.',
    travelHintGoodAirMod: 'Hava iyi, ancak hava kalitesi orta seviyede.',
    travelHintMixed: 'Koşullar karışık, planı hava durumuna göre yapın.',
    travelHintMixedRain: 'Yağış olasılığı planları etkileyebilir.',
    travelHintMixedAir: 'Hava kalitesi orta, uzun dış aktivitelerde dikkat edin.',
    travelHintPoor: 'Koşullar şu an seyahat için zayıf.',
    travelHintPoorRain: 'Yüksek yağış olasılığı dış planları zorlaştırıyor.',
    travelHintPoorAir: 'Hava kalitesi düşük, açık hava planlarında dikkatli olun.',
    travelHintFallback: 'Skor için veri bekleniyor.',
    heroDefault: 'Bir şehir arayın',
    myLocation: 'Konumum',
    themeSwitchToLight: 'Açık temaya geç',
    themeSwitchToDark: 'Koyu temaya geç',
    footer: 'Veri kaynakları: Open-Meteo · Sunrise-Sunset · REST Countries · Nager.Date · open.er-api.com · CoinGecko · OpenStreetMap',
  },
  en: {
    searchPlaceholder: 'Istanbul, Paris, Tokyo…',
    searchBtn: 'Search',
    locateTitle: 'Use my location',
    favPlaceholder: 'Favourites',
    temp: 'Temperature', wind: 'Wind', localTime: 'Local Time',
    copyCoords: '📋 Copy Coordinates',
    favSaveTitle: 'Save current city to favourites',
    sunTitle: 'Sunlight', sunrise: 'Sunrise', sunset: 'Sunset', dayLength: 'Day length',
    fxTitle: 'Exchange / USD',
    weatherTitle: 'Weather',
    hourlyLabel: 'Hourly — next 12 hours',
    dailyLabel: '7-Day Forecast',
    airTitle: 'Air Quality',
    airSource: 'Source: Open-Meteo Air Quality API',
    countryTitle: 'Country',
    holidaysTitle: 'Public Holidays',
    cryptoTitle: 'Crypto / USD',
    wDay:'Day', wMin:'Low', wMax:'High', wRain:'Rain',
    aqiUpdate:'Updated',
    aqiGood:'Good', aqiMod:'Moderate', aqiUSG:'Unhealthy for Sensitive Groups',
    aqiUnhealthy:'Unhealthy', aqiVU:'Very Unhealthy', aqiHaz:'Hazardous',
    hDate:'Date', hEn:'Name', hLocal:'Local Name', hType:'Type',
    hNotFound:'No holiday data found',
    toastOk: 'Updated ✓',
    toastPartial: (ok,total)=>`${ok}/${total} sources loaded`,
    toastCopied: 'Coordinates copied',
    shareCity: '🔗 Share City',
    shareCityTitle: 'Copy city link',
    toastLinkCopied: 'City link copied',
    toastCopyFail: 'Could not copy link',
    toastNeedCity: 'Search a city first',
    toastWriteCity: 'Enter a city name',
    toastAlready: 'Already in favourites',
    toastSaved: 'Added to favourites',
    toastFavInvalid: 'Cannot save favourite without a valid city',
    toastFavLoadFail: 'Could not load favourite',
    toastNoGeo: 'Geolocation not supported',
    toastLocated: 'Location acquired',
    toastLocFail: 'Could not get location',
    toastLocDenied: 'Location permission denied',
    toastSearchErr: 'Search error',
    toastNotFound: 'City not found',
    recentSearches: 'Recent Searches',
    compareTitle: 'Compare Cities',
    compareMetric: 'Metric',
    comparePlaceholder: 'City to compare…',
    compareAdd: 'Compare',
    compareRemove: 'Remove',
    compareTemp: 'Temperature',
    compareWind: 'Wind',
    compareAqi: 'AQI',
    compareLocalTime: 'Local Time',
    compareDayLength: 'Day Length',
    travelScoreTitle: 'Travel Score',
    travelExcellent: 'Excellent',
    travelGood: 'Good',
    travelMixed: 'Mixed',
    travelPoor: 'Poor',
    travelHintGreat: 'Great weather and good air quality.',
    travelHintGood: 'Overall conditions are travel-friendly.',
    travelHintGoodAirMod: 'Weather is good, but air quality is moderate.',
    travelHintMixed: 'Conditions are mixed; plan around the weather.',
    travelHintMixedRain: 'Rain probability may affect outdoor plans.',
    travelHintMixedAir: 'Air quality is moderate for long outdoor activities.',
    travelHintPoor: 'Current conditions are not ideal for travel.',
    travelHintPoorRain: 'High rain probability can disrupt outdoor plans.',
    travelHintPoorAir: 'Air quality is poor; be careful with outdoor plans.',
    travelHintFallback: 'Waiting for enough data to score.',
    heroDefault: 'Search a city',
    myLocation: 'My Location',
    themeSwitchToLight: 'Switch to light theme',
    themeSwitchToDark: 'Switch to dark theme',
    footer: 'Data: Open-Meteo · Sunrise-Sunset · REST Countries · Nager.Date · open.er-api.com · CoinGecko · OpenStreetMap',
  }
};

const t = (key, ...a) => {
  const v = TX[lang][key];
  return v === undefined ? key : typeof v === 'function' ? v(...a) : v;
};

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  el('q').placeholder = t('searchPlaceholder');
  el('btnSearch').textContent = t('searchBtn');
  el('btnLocate').title = t('locateTitle');
  el('btnShare').title = t('shareCityTitle');
  el('btnShare').setAttribute('aria-label', t('shareCityTitle'));
  el('btnSave').title = t('favSaveTitle');
  el('btnSave').setAttribute('aria-label', t('favSaveTitle'));
  el('compareQ').placeholder = t('comparePlaceholder');
  el('btnCompareAdd').textContent = t('compareAdd');
  el('btnCompareClear').textContent = t('compareRemove');
  el('btnCompareAdd').title = t('compareAdd');
  el('btnCompareClear').title = t('compareRemove');
  const sel = el('favSelect');
  if (sel.options[0]) sel.options[0].text = t('favPlaceholder');
  el('btnTR').classList.toggle('on', lang === 'tr');
  el('btnEN').classList.toggle('on', lang === 'en');
  syncThemeButton();
  if (lastCtx) {
    updateHeader(lastCtx);
    renderWeather(); renderAir(); renderHolidays(); renderCountry(); renderCrypto(); renderLocalTime(lastCtx.timezone);
    renderTravelScore();
    renderComparePanel();
  } else {
    el('placeTitle').textContent = t('heroDefault');
  }
}

function setLang(l) { lang = l; localStorage.setItem(LANG_KEY, l); applyLang(); }

function setTheme(next, persist = true) {
  theme = next === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  if (persist) localStorage.setItem(THEME_KEY, theme);
  syncThemeButton();
  if (cW) renderTempChart();
  if (map) setTimeout(() => map.invalidateSize(), 120);
}

function toggleTheme() {
  setTheme(theme === 'dark' ? 'light' : 'dark', true);
}

function syncThemeButton() {
  const btn = el('btnTheme');
  if (!btn) return;
  const darkMode = theme === 'dark';
  btn.textContent = darkMode ? '☀️' : '🌙';
  const hint = darkMode ? t('themeSwitchToLight') : t('themeSwitchToDark');
  btn.setAttribute('aria-label', hint);
  btn.title = hint;
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (saved === 'light' || saved === 'dark') setTheme(saved, false);
  else setTheme(mql?.matches ? 'dark' : 'light', false);
  mql?.addEventListener?.('change', ev => {
    const pinned = localStorage.getItem(THEME_KEY);
    if (pinned === 'light' || pinned === 'dark') return;
    setTheme(ev.matches ? 'dark' : 'light', false);
  });
}

// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
const el = id => document.getElementById(id);
const loc = () => lang === 'tr' ? 'tr-TR' : 'en-GB';

function fmt(n, d = 1) {
  if (n == null || isNaN(+n)) return '—';
  return Number(n).toFixed(d);
}

function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString(loc(), { weekday:'short', day:'2-digit', month:'short' }); }
  catch { return iso; }
}

function fmtTime(iso) {
  try { return new Date(iso).toLocaleTimeString(loc(), { hour:'2-digit', minute:'2-digit' }); }
  catch { return iso; }
}

function fmtDayLen(s) {
  if (!s) return '—';
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60);
  return lang === 'tr' ? `${h}s ${m}dk` : `${h}h ${m}m`;
}

function clamp(s, max) {
  if (!s) return '—';
  return s.length > max ? s.slice(0, max-1)+'…' : s;
}

async function gfetch(url, opts={}, ms=12000) {
  const c = new AbortController();
  const id = setTimeout(()=>c.abort(), ms);
  try {
    const r = await fetch(url, {...opts, signal:c.signal});
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally { clearTimeout(id); }
}

// ═══════════════════════════════════════════════
// TOAST / PROGRESS
// ═══════════════════════════════════════════════
let _tt;
function toast(msg, type='info') {
  const n = el('toast');
  clearTimeout(_tt);
  n.textContent = msg;
  n.style.borderColor =
    type==='ok'  ? 'rgba(45,212,191,.4)' :
    type==='bad' ? 'rgba(248,113,113,.4)' :
    type==='warn'? 'rgba(245,158,11,.4)'  : 'rgba(255,255,255,.08)';
  n.classList.add('show');
  _tt = setTimeout(()=>n.classList.remove('show'), 2600);
}

function setLoad(v) { el('progress').classList.toggle('on', v); }

// ═══════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════
let map, pin;

function initMap() {
  map = L.map('map', { zoomControl:true }).setView([41.01, 28.97], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19, attribution:'© OSM'
  }).addTo(map);
  pin = L.marker([41.01, 28.97]).addTo(map);
}

function moveMap(lat, lon, label) {
  map.setView([lat, lon], 11, {animate:true});
  pin.setLatLng([lat, lon]);
  pin.bindPopup(label).openPopup();
}

// ═══════════════════════════════════════════════
// FAVOURITES
// ═══════════════════════════════════════════════
const FK = 'wandex_favs_v1';
const LK = 'wandex_last_v1';
const RK = 'wandex_recent_v1';

const getFavs = () => { try{return JSON.parse(localStorage.getItem(FK)||'[]')}catch{return[]} };
const saveFavs = list => localStorage.setItem(FK, JSON.stringify(list));
const getRecent = () => { try{return JSON.parse(localStorage.getItem(RK)||'[]')}catch{return[]} };
const saveRecent = list => localStorage.setItem(RK, JSON.stringify(list));

function normalizeCtx(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const lat = Number(raw.lat);
  const lon = Number(raw.lon);
  const name = String(raw.name || '').trim();
  if (!name || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;
  return {
    name,
    country: String(raw.country || '—'),
    countryCode: String(raw.countryCode || '—').toUpperCase(),
    lat,
    lon,
    timezone: raw.timezone ? String(raw.timezone) : null
  };
}

function rebuildFavs() {
  const s = el('favSelect');
  const favs = getFavs().map(normalizeCtx).filter(Boolean);
  saveFavs(favs);
  s.innerHTML = `<option value="" disabled selected hidden>${t('favPlaceholder')}</option>` +
    favs.map((f,i)=>`<option value="${i}">${f.name} (${f.countryCode})</option>`).join('');
  s.value = '';
  s.disabled = favs.length === 0;
}

function citySig(c) {
  return `${(c?.name||'').trim().toLocaleLowerCase('en-US')}|${(c?.countryCode||'').trim().toUpperCase()}`;
}

function cityLabel(c) {
  return c?.countryCode ? `${c.name} (${c.countryCode})` : c?.name || '—';
}

function renderRecent() {
  const wrap = el('recentWrap');
  const listEl = el('recentList');
  if (!wrap || !listEl) return;
  const list = getRecent();
  if (!list.length) {
    wrap.hidden = true;
    listEl.innerHTML = '';
    return;
  }
  wrap.hidden = false;
  listEl.innerHTML = '';
  list.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'btn recent-chip';
    b.type = 'button';
    b.dataset.recentIndex = String(i);
    const label = cityLabel(c);
    b.setAttribute('aria-label', label);
    b.textContent = label;
    listEl.appendChild(b);
  });
}

function pushRecent(ctx) {
  if (!ctx?.name) return;
  const item = { name: ctx.name, countryCode: ctx.countryCode || '', country: ctx.country || '' };
  const sig = citySig(item);
  const next = [item, ...getRecent().filter(c => citySig(c) !== sig)].slice(0, 5);
  saveRecent(next);
  renderRecent();
}

function syncCityUrl(ctx) {
  if (!ctx?.name || ctx?.lat == null || ctx?.lon == null) return;
  const url = new URL(window.location.href);
  url.searchParams.set('city', ctx.name);
  if (ctx.countryCode) url.searchParams.set('cc', String(ctx.countryCode).toUpperCase());
  else url.searchParams.delete('cc');
  if (ctx.country) url.searchParams.set('country', ctx.country);
  else url.searchParams.delete('country');
  if (ctx.timezone) url.searchParams.set('tz', ctx.timezone);
  else url.searchParams.delete('tz');
  url.searchParams.set('lat', Number(ctx.lat).toFixed(4));
  url.searchParams.set('lon', Number(ctx.lon).toFixed(4));
  history.replaceState(null, '', `${url.pathname}?${url.searchParams.toString()}${url.hash}`);
}

function readUrlRestore() {
  const p = new URLSearchParams(window.location.search);
  const city = p.get('city');
  const lat = Number(p.get('lat'));
  const lon = Number(p.get('lon'));
  const cc = (p.get('cc') || '').toUpperCase();
  const country = p.get('country');
  const tz = p.get('tz');
  if (city && Number.isFinite(lat) && Number.isFinite(lon)) {
    return {
      type: 'ctx',
      ctx: {
        name: city,
        country: country || cc || '—',
        countryCode: cc || '—',
        lat,
        lon,
        timezone: tz || null
      }
    };
  }
  if (city) return { type: 'city', city };
  return null;
}

// ═══════════════════════════════════════════════
// STATE + CACHES
// ═══════════════════════════════════════════════
let lastCtx=null, cW=null, cA=null, cH=null, cC=null, cCrypto=null, timeTicker=null, tempChart=null;
let compareCtx=null, compareData=null;

function updateHeader(ctx) {
  el('placeTitle').textContent = `${ctx.name}, ${ctx.country}`;
  el('placeMeta').textContent  = `${ctx.countryCode}  ·  ${ctx.lat?.toFixed(3)}°, ${ctx.lon?.toFixed(3)}°  ·  ${new Date().toLocaleString(loc())}`;
  el('coords').textContent     = `${fmt(ctx.lat,4)}, ${fmt(ctx.lon,4)}`;
  el('tz').textContent         = ctx.timezone || '—';
  moveMap(ctx.lat, ctx.lon, `${ctx.name}, ${ctx.country}`);
}

// ═══════════════════════════════════════════════
// GEOCODING
// ═══════════════════════════════════════════════
async function searchCity(q) {
  const d = await gfetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q.trim())}&count=5&language=${lang}&format=json`);
  if (!d?.results?.length) throw new Error(t('toastNotFound'));
  const r = d.results[0];
  return { name:r.name, country:r.country, countryCode:r.country_code, lat:r.latitude, lon:r.longitude, timezone:r.timezone };
}

// ═══════════════════════════════════════════════
// WEATHER
// ═══════════════════════════════════════════════
const WMO = {0:'☀️',1:'🌤',2:'⛅',3:'☁️',45:'🌫',48:'🌫',51:'🌦',53:'🌦',55:'🌧',61:'🌧',63:'🌧',65:'🌧',71:'❄️',73:'❄️',75:'❄️',77:'🌨',80:'🌦',81:'🌦',82:'⛈',85:'🌨',86:'🌨',95:'⛈',96:'⛈',99:'⛈'};
const wico = c => WMO[c]||'🌡';

function clampScore(v) {
  return Math.max(0, Math.min(100, v));
}

function currentRainProb() {
  if (!cW) return null;
  const {cw,times,pop} = cW;
  if (!times?.length || !pop?.length) return null;
  let i = 0;
  if (cw?.time) {
    const idx = times.indexOf(cw.time);
    i = idx >= 0 ? idx : 0;
  }
  const p = Number(pop[i]);
  return Number.isFinite(p) ? p : null;
}

function computeTravelScore() {
  const temp = Number(cW?.cw?.temperature);
  const wind = Number(cW?.cw?.windspeed);
  const aqi  = Number(cA?.aqiVal);
  const rain = Number(currentRainProb());

  const parts = [];
  if (Number.isFinite(temp)) {
    const s = clampScore(100 - Math.abs(temp - 22) * 6);
    parts.push({w:35, s});
  }
  if (Number.isFinite(wind)) {
    const s = clampScore(100 - wind * 1.7);
    parts.push({w:20, s});
  }
  if (Number.isFinite(aqi)) {
    const s = clampScore(110 - aqi * 0.55);
    parts.push({w:30, s});
  }
  if (Number.isFinite(rain)) {
    const s = clampScore(100 - rain);
    parts.push({w:15, s});
  }

  if (!parts.length) return null;
  const wSum = parts.reduce((x,p)=>x+p.w,0);
  const score = Math.round(parts.reduce((x,p)=>x+(p.s*p.w),0)/wSum);
  return { score, temp, wind, aqi, rain };
}

function travelHint(data) {
  if (!data) return t('travelHintFallback');
  const { score, aqi, rain } = data;
  if (score >= 85) return t('travelHintGreat');
  if (score >= 70) return Number.isFinite(aqi) && aqi > 100 ? t('travelHintGoodAirMod') : t('travelHintGood');
  if (score >= 50) {
    if (Number.isFinite(rain) && rain >= 60) return t('travelHintMixedRain');
    if (Number.isFinite(aqi) && aqi > 100) return t('travelHintMixedAir');
    return t('travelHintMixed');
  }
  if (Number.isFinite(aqi) && aqi >= 150) return t('travelHintPoorAir');
  if (Number.isFinite(rain) && rain >= 70) return t('travelHintPoorRain');
  return t('travelHintPoor');
}

function travelStatus(score) {
  if (score >= 85) return t('travelExcellent');
  if (score >= 70) return t('travelGood');
  if (score >= 50) return t('travelMixed');
  return t('travelPoor');
}

function renderTravelScore() {
  const scoreEl = el('travelScoreValue');
  const statusEl = el('travelScoreStatus');
  const hintEl = el('travelScoreHint');
  if (!scoreEl || !statusEl || !hintEl) return;

  const data = computeTravelScore();
  if (!data) {
    scoreEl.textContent = '—';
    statusEl.textContent = '—';
    hintEl.textContent = t('travelHintFallback');
    return;
  }

  scoreEl.textContent = String(data.score);
  statusEl.textContent = travelStatus(data.score);
  hintEl.textContent = travelHint(data);
}

function destroyTempChart() {
  if (tempChart) {
    tempChart.destroy();
    tempChart = null;
  }
}

function renderTempChart() {
  const canvas = el('tempChart');
  if (!canvas || !cW || !window.Chart) return;

  const times = (cW.times || []).slice(0, 24);
  const temps = (cW.t2m || []).slice(0, 24);
  if (!times.length || !temps.length) {
    destroyTempChart();
    return;
  }

  destroyTempChart();

  const css = getComputedStyle(document.documentElement);
  const lineColor = css.getPropertyValue('--amber').trim() || '#f59e0b';
  const gridColor = css.getPropertyValue('--border').trim() || 'rgba(255,255,255,.08)';
  const tickColor = css.getPropertyValue('--text-3').trim() || '#64748b';
  const tipColor = css.getPropertyValue('--text-2').trim() || '#8892b0';

  const labels = times.map(iso => {
    try {
      return new Date(iso).toLocaleTimeString(loc(), { hour: '2-digit', minute: '2-digit' });
    } catch (_) {
      return iso;
    }
  });

  tempChart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: temps,
        borderColor: lineColor,
        backgroundColor: 'transparent',
        borderWidth: 2.2,
        pointRadius: 2,
        pointHoverRadius: 3.5,
        pointBackgroundColor: lineColor,
        pointBorderColor: lineColor,
        pointBorderWidth: 1,
        tension: 0.38,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 280 },
      interaction: { mode: 'index', intersect: false },
      elements: { line: { borderCapStyle: 'round', borderJoinStyle: 'round' } },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: css.getPropertyValue('--card').trim() || '#0d1117',
          borderColor: gridColor,
          borderWidth: 1,
          titleColor: tipColor,
          bodyColor: tipColor,
          displayColors: false,
          callbacks: {
            label: ctx => `${fmt(ctx.parsed.y, 1)}°C`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: tickColor, maxTicksLimit: 8, autoSkip: true },
          grid: { color: gridColor, drawBorder: false }
        },
        y: {
          ticks: {
            color: tickColor,
            callback: val => `${val}°`
          },
          grid: { color: gridColor, drawBorder: false }
        }
      }
    }
  });
}

function renderWeather() {
  if (!cW) return;
  const {cw,times,t2m,pop,wnd,wcode,dtime,tmax,tmin,dpop,dwc} = cW;
  if (cw) {
    el('kpiTemp').textContent = `${fmt(cw.temperature,0)}°C`;
    el('kpiWind').textContent = `${fmt(cw.windspeed,0)} km/h`;
    el('weatherNow').textContent = `${wico(cw.weathercode)}  ${fmt(cw.temperature,0)}°C  ·  💨 ${fmt(cw.windspeed,0)} km/h  ·  🕒 ${cw.time?fmtTime(cw.time):'—'}`;
  }
  let si = 0;
  if (cw?.time) { const idx=times.indexOf(cw.time); si=idx>=0?idx:0; }
  renderTempChart();
  renderTravelScore();
  const hourly = el('hourly');
  hourly.innerHTML='';
  for (let i=si; i<Math.min(si+12,times.length); i++) {
    const d=document.createElement('div'); d.className='h-chip';
    d.innerHTML=`<div class="hc-t">${fmtTime(times[i])}</div><div class="hc-v">${wico(wcode[i])} ${fmt(t2m[i],0)}°C</div><div class="hc-d">💧${fmt(pop[i],0)}% · 💨${fmt(wnd[i],0)}</div>`;
    hourly.appendChild(d);
  }
  el('daily').innerHTML=`
    <div class="tr th tr-4"><div>${t('wDay')}</div><div>${t('wMin')}</div><div>${t('wMax')}</div><div>${t('wRain')}</div></div>
    ${dtime.map((d,i)=>`<div class="tr tr-4"><div>${wico(dwc[i])} ${fmtDate(d)}</div><div style="color:#93c5fd">${fmt(tmin[i],0)}°C</div><div style="color:var(--amber)">${fmt(tmax[i],0)}°C</div><div>${fmt(dpop[i],0)}%</div></div>`).join('')}`;
}

async function loadWeather(ctx) {
  const d = await gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${ctx.lat}&longitude=${ctx.lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=auto`);
  cW={cw:d.current_weather,times:d.hourly?.time||[],t2m:d.hourly?.temperature_2m||[],pop:d.hourly?.precipitation_probability||[],wnd:d.hourly?.windspeed_10m||[],wcode:d.hourly?.weathercode||[],dtime:d.daily?.time||[],tmax:d.daily?.temperature_2m_max||[],tmin:d.daily?.temperature_2m_min||[],dpop:d.daily?.precipitation_probability_max||[],dwc:d.daily?.weathercode||[]};
  renderWeather();
}

// ═══════════════════════════════════════════════
// AIR QUALITY
// ═══════════════════════════════════════════════
const aqiClr = v => v<=50?'#2dd4bf':v<=100?'#f59e0b':v<=150?'#f97316':v<=200?'#f87171':v<=300?'#a78bfa':'#7f1d1d';
const aqiTxt = v => v<=50?t('aqiGood'):v<=100?t('aqiMod'):v<=150?t('aqiUSG'):v<=200?t('aqiUnhealthy'):v<=300?t('aqiVU'):t('aqiHaz');

function renderAqiBar(aqiVal) {
  const wrap = el('aqiBarWrap');
  const fill = el('aqiBarFill');
  const text = el('aqiBarText');
  if (!wrap || !fill || !text) return;

  if (aqiVal == null || isNaN(+aqiVal)) {
    fill.style.width = '0%';
    fill.style.backgroundColor = 'var(--border-hi)';
    text.textContent = 'AQI —';
    wrap.setAttribute('aria-valuenow', '0');
    wrap.setAttribute('aria-valuetext', 'AQI —');
    return;
  }

  const val = Math.max(0, Math.min(500, Number(aqiVal)));
  const pct = (val / 500) * 100;
  const clr = aqiClr(val);
  const lvl = aqiTxt(val);
  fill.style.width = `${pct}%`;
  fill.style.backgroundColor = clr;
  text.textContent = `AQI ${fmt(val,0)} · ${lvl}`;
  wrap.setAttribute('aria-valuenow', String(Math.round(val)));
  wrap.setAttribute('aria-valuetext', `AQI ${fmt(val,0)} ${lvl}`);
}

function renderAir() {
  if (!cA) return;
  const {aqiVal,pm25,pm10,o3,no2,so2,co,timeStr} = cA;
  el('kpiAqi').textContent  = aqiVal!=null?fmt(aqiVal,0):'—';
  el('kpiAqi').style.color  = aqiVal!=null?aqiClr(aqiVal):'';
  el('aqiLabel').textContent= aqiVal!=null?aqiTxt(aqiVal):'';
  renderAqiBar(aqiVal);
  renderTravelScore();
  const rows=[
    {l:'AQI',     v:fmt(aqiVal,0), clr:aqiVal!=null?aqiClr(aqiVal):''},
    {l:'PM 2.5',  v:`${fmt(pm25,1)} µg`},
    {l:'PM 10',   v:`${fmt(pm10,1)} µg`},
    {l:'O₃',      v:`${fmt(o3,1)} µg`},
    {l:'NO₂',     v:`${fmt(no2,1)} µg`},
    {l:'SO₂',     v:`${fmt(so2,1)} µg`},
    {l:'CO',      v:`${fmt(co,1)} µg`},
    {l:t('aqiUpdate'), v:timeStr},
  ];
  el('air').innerHTML=rows.map(r=>`<div class="air-cell"><div class="air-lbl">${r.l}</div><div class="air-val" style="color:${r.clr||'var(--text)'}">${r.v}</div></div>`).join('');
}

async function loadAir(ctx) {
  const d = await gfetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${ctx.lat}&longitude=${ctx.lon}&hourly=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=auto`);
  const times=d.hourly?.time||[]; const now=new Date(); let i=0;
  for(let k=0;k<times.length;k++){if(new Date(times[k])<=now)i=k;else break;}
  cA={aqiVal:d.hourly?.us_aqi?.[i],pm25:d.hourly?.pm2_5?.[i],pm10:d.hourly?.pm10?.[i],o3:d.hourly?.ozone?.[i],no2:d.hourly?.nitrogen_dioxide?.[i],so2:d.hourly?.sulphur_dioxide?.[i],co:d.hourly?.carbon_monoxide?.[i],timeStr:times[i]?fmtTime(times[i]):'—'};
  renderAir();
}

// ═══════════════════════════════════════════════
// SUNRISE
// ═══════════════════════════════════════════════
async function loadSun(ctx) {
  const d = await gfetch(`https://api.sunrise-sunset.org/json?lat=${ctx.lat}&lng=${ctx.lon}&formatted=0`);
  const r = d?.results; if(!r) return;
  el('sunrise').textContent = fmtTime(r.sunrise);
  el('sunset').textContent  = fmtTime(r.sunset);
  el('daylen').textContent  = fmtDayLen(r.day_length);
}

// ═══════════════════════════════════════════════
// TIME
// ═══════════════════════════════════════════════
function stopTimeTicker() {
  if (timeTicker) {
    clearInterval(timeTicker);
    timeTicker = null;
  }
}

function renderLocalTime(timezone) {
  const timeVal = getTimeByTimezone(timezone);
  el('kpiTime').textContent = timeVal;
}

function getTimeByTimezone(timezone) {
  if (!timezone) {
    return '—';
  }
  try {
    return new Intl.DateTimeFormat(loc(), {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: timezone
    }).format(new Date());
  } catch (_) {
    return '—';
  }
}

function loadTime(ctx) {
  stopTimeTicker();
  const tz = ctx?.timezone || null;
  renderLocalTime(tz);
  if (!tz) return;
  timeTicker = setInterval(() => renderLocalTime(tz), 30000);
}

async function loadCompareData(ctx) {
  const [wRes, airRes, sunRes] = await Promise.allSettled([
    gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${ctx.lat}&longitude=${ctx.lon}&current_weather=true&timezone=auto`),
    gfetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${ctx.lat}&longitude=${ctx.lon}&hourly=us_aqi&timezone=auto`),
    gfetch(`https://api.sunrise-sunset.org/json?lat=${ctx.lat}&lng=${ctx.lon}&formatted=0`)
  ]);

  const w = wRes.status === 'fulfilled' ? wRes.value : null;
  const a = airRes.status === 'fulfilled' ? airRes.value : null;
  const s = sunRes.status === 'fulfilled' ? sunRes.value : null;

  let aqiVal = null;
  if (a?.hourly?.time?.length && a?.hourly?.us_aqi?.length) {
    const times = a.hourly.time;
    const vals = a.hourly.us_aqi;
    const now = new Date();
    let i = 0;
    for (let k=0; k<times.length; k++) { if (new Date(times[k]) <= now) i = k; else break; }
    aqiVal = vals[i] ?? null;
  }

  compareData = {
    temp: w?.current_weather?.temperature ?? null,
    wind: w?.current_weather?.windspeed ?? null,
    aqi: aqiVal,
    dayLenSec: s?.results?.day_length ?? null
  };
}

function renderComparePanel() {
  const panel = el('comparePanel');
  const rows = el('compareRows');
  const clearBtn = el('btnCompareClear');
  if (!panel || !rows || !clearBtn) return;
  if (!compareCtx || !compareData) {
    panel.hidden = true;
    clearBtn.hidden = true;
    return;
  }

  panel.hidden = false;
  clearBtn.hidden = false;
  el('cmpMainName').textContent = lastCtx?.name || '—';
  el('cmpOtherName').textContent = compareCtx?.name || '—';

  const mainTemp = cW?.cw?.temperature;
  const mainWind = cW?.cw?.windspeed;
  const mainAqi = cA?.aqiVal;
  const mainTime = getTimeByTimezone(lastCtx?.timezone);
  const mainDay = el('daylen')?.textContent || '—';
  const otherAqiClr = compareData?.aqi != null ? aqiClr(compareData.aqi) : 'var(--text)';
  const mainAqiClr = mainAqi != null ? aqiClr(mainAqi) : 'var(--text)';

  const items = [
    {k:t('compareTemp'), m: mainTemp!=null?`${fmt(mainTemp,0)}°C`:'—', c: compareData.temp!=null?`${fmt(compareData.temp,0)}°C`:'—'},
    {k:t('compareWind'), m: mainWind!=null?`${fmt(mainWind,0)} km/h`:'—', c: compareData.wind!=null?`${fmt(compareData.wind,0)} km/h`:'—'},
    {k:t('compareAqi'), m: mainAqi!=null?`<span style="color:${mainAqiClr}">${fmt(mainAqi,0)} · ${aqiTxt(mainAqi)}</span>`:'—', c: compareData.aqi!=null?`<span style="color:${otherAqiClr}">${fmt(compareData.aqi,0)} · ${aqiTxt(compareData.aqi)}</span>`:'—'},
    {k:t('compareLocalTime'), m: mainTime, c: getTimeByTimezone(compareCtx?.timezone)},
    {k:t('compareDayLength'), m: mainDay, c: compareData.dayLenSec ? fmtDayLen(compareData.dayLenSec) : '—'}
  ];

  rows.innerHTML = items.map(it => `<div class="compare-row"><div class="compare-k">${it.k}</div><div class="compare-v">${it.m}</div><div class="compare-v">${it.c}</div></div>`).join('');
}

async function doCompareSearch() {
  const q = el('compareQ').value.trim();
  if (!q) { toast(t('toastWriteCity'),'warn'); return; }
  setLoad(true);
  try {
    const ctx = await searchCity(q);
    compareCtx = ctx;
    await loadCompareData(ctx);
    renderComparePanel();
  } catch (e) {
    console.error(e);
    toast(e.message||t('toastSearchErr'),'bad');
  } finally {
    setLoad(false);
  }
}

function clearCompare() {
  compareCtx = null;
  compareData = null;
  el('compareQ').value = '';
  renderComparePanel();
}

async function loadFavouriteByIndex(index) {
  const favs = getFavs().map(normalizeCtx).filter(Boolean);
  const ctx = favs[index];
  if (!ctx) {
    toast(t('toastFavLoadFail'),'warn');
    rebuildFavs();
    return;
  }
  try {
    await renderAll(ctx);
    saveFavs(favs);
  } catch (e) {
    console.error(e);
    toast(t('toastFavLoadFail'),'bad');
  }
}

// ═══════════════════════════════════════════════
// FX
// ═══════════════════════════════════════════════
async function loadFx() {
  const d = await gfetch('https://open.er-api.com/v6/latest/USD');
  const r = d?.rates||{};
  el('fxTry').textContent=r.TRY?fmt(r.TRY,2):'—';
  el('fxEur').textContent=r.EUR?fmt(r.EUR,4):'—';
  el('fxGbp').textContent=r.GBP?fmt(r.GBP,4):'—';
}

// ═══════════════════════════════════════════════
// CRYPTO
// ═══════════════════════════════════════════════
function renderCrypto() {
  if (!cCrypto) return;
  const coins=[
    {key:'bitcoin', name:'Bitcoin',  sym:'BTC', clr:'#f59e0b'},
    {key:'ethereum',name:'Ethereum', sym:'ETH', clr:'#a78bfa'},
    {key:'solana',  name:'Solana',   sym:'SOL', clr:'#2dd4bf'},
  ];
  el('crypto').innerHTML=coins.map(c=>{
    const p=cCrypto?.[c.key]?.usd;
    const ch=cCrypto?.[c.key]?.usd_24h_change;
    const chHtml=ch!=null?`<div class="crypto-chg" style="color:${ch>=0?'var(--green)':'var(--red)'}">${ch>=0?'▲':'▼'} ${Math.abs(ch).toFixed(2)}%</div>`:'';
    return `<div class="crypto-cell"><div class="crypto-name">${c.sym} · ${c.name}</div><div class="crypto-price" style="color:${c.clr}">$${p?fmt(p,0):'—'}</div>${chHtml}</div>`;
  }).join('');
}

async function loadCrypto() {
  cCrypto = await gfetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true');
  renderCrypto();
}

// ═══════════════════════════════════════════════
// COUNTRY
// ═══════════════════════════════════════════════
function renderCountry() {
  if (!cC) return;
  const {flag,name,capital,region,popRaw,areaRaw,langStr,currency}=cC;
  el('country').innerHTML=`
    <div class="country-wrap">
      ${flag?`<img class="flag-img" src="${flag}" alt="${name}">`:''}
      <div>
        <div class="country-name-big">${name}</div>
        <div class="badges">
          <span class="badge">🏛 ${capital}</span>
          <span class="badge">🌍 ${region}</span>
          <span class="badge">👥 ${popRaw?popRaw.toLocaleString(loc()):'—'}</span>
          <span class="badge">🗣 ${clamp(langStr,50)}</span>
          <span class="badge">💰 ${clamp(currency,40)}</span>
          <span class="badge">📐 ${areaRaw?areaRaw.toLocaleString(loc())+' km²':'—'}</span>
        </div>
      </div>
    </div>`;
}

async function loadCountry(ctx) {
  const d = await gfetch(`https://restcountries.com/v3.1/alpha/${encodeURIComponent(ctx.countryCode)}`);
  const c = Array.isArray(d)?d[0]:d; if(!c) return;
  const cur = c.currencies?Object.keys(c.currencies)[0]:null;
  cC={flag:c.flags?.png||c.flags?.svg||'',name:c.name?.common||ctx.country,capital:c.capital?.[0]||'—',region:c.region||'—',popRaw:c.population||null,areaRaw:c.area||null,langStr:c.languages?Object.values(c.languages).slice(0,3).join(', '):'—',currency:cur?`${c.currencies[cur]?.name} (${cur})`:'—'};
  renderCountry();
}

// ═══════════════════════════════════════════════
// HOLIDAYS
// ═══════════════════════════════════════════════
function renderHolidays() {
  if (!cH) return;
  const {list,year}=cH;
  el('holidayYear').textContent=year;
  if(!list.length){el('holidays').innerHTML=`<div class="tr tr-2"><div>—</div><div>${t('hNotFound')}</div></div>`;return;}
  const today=new Date(); today.setHours(0,0,0,0);
  el('holidays').innerHTML=`
    <div class="tr th tr-4"><div>${t('hDate')}</div><div>${t('hEn')}</div><div>${t('hLocal')}</div><div>${t('hType')}</div></div>
    ${list.map(h=>{
      const hd=new Date(h.date), past=hd<today, soon=!past&&(hd-today)<30*864e5;
      return `<div class="tr tr-4" style="${past?'opacity:.38':''}${soon?';background:var(--row-soon)':''}">
        <div style="font-size:12px;color:var(--text-2)">${h.date?fmtDate(h.date):'—'}${soon?' 🔜':''}</div>
        <div>${clamp(h.name,44)}</div><div style="color:var(--text-2)">${clamp(h.localName,44)}</div>
        <div style="font-size:11px;color:var(--text-3)">${h.types?clamp(h.types.join(', '),26):'—'}</div>
      </div>`;
    }).join('')}`;
}

async function loadHolidays(ctx) {
  const year=new Date().getFullYear();
  const d=await gfetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${encodeURIComponent(ctx.countryCode)}`);
  cH={list:Array.isArray(d)?d.slice(0,16):[],year};
  renderHolidays();
}

// ═══════════════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════════════
async function renderAll(ctx) {
  lastCtx=ctx;
  localStorage.setItem(LK, JSON.stringify(ctx));
  updateHeader(ctx);
  syncCityUrl(ctx);
  setLoad(true);
  const res = await Promise.allSettled([
    loadWeather(ctx), loadAir(ctx), loadSun(ctx), loadTime(ctx),
    loadFx(), loadCrypto(), loadCountry(ctx), loadHolidays(ctx),
  ]);
  const errs = res.filter(r=>r.status==='rejected');
  setLoad(false);
  renderComparePanel();
  if (!errs.length) toast(t('toastOk'),'ok');
  else { errs.forEach(e=>console.warn(e.reason)); toast(t('toastPartial',res.length-errs.length,res.length),'warn'); }
}

// ═══════════════════════════════════════════════
// SEARCH / LOCATE
// ═══════════════════════════════════════════════
async function doSearch() {
  const q=el('q').value.trim();
  if(!q){toast(t('toastWriteCity'),'warn');return;}
  setLoad(true);
  try {
    const ctx = await searchCity(q);
    await renderAll(ctx);
    pushRecent(ctx);
  }
  catch(e){ console.error(e); toast(e.message||t('toastSearchErr'),'bad'); }
  finally { setLoad(false); }
}

async function doLocate() {
  if(!navigator.geolocation){toast(t('toastNoGeo'),'warn');return;}
  setLoad(true);
  navigator.geolocation.getCurrentPosition(async pos=>{
    try {
      const {latitude:lat,longitude:lon}=pos.coords;
      const d=await gfetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,{headers:{Accept:'application/json'}});
      const addr=d?.address||{};
      const city=addr.city||addr.town||addr.village||addr.county||t('myLocation');
      const ctx={name:city,country:addr.country||'—',countryCode:(addr.country_code||'—').toUpperCase(),lat,lon,timezone:null};
      try{const tz=await gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto&forecast_days=1`);ctx.timezone=tz?.timezone||null;}catch(_){}
      await renderAll(ctx);
      toast(t('toastLocated'),'ok');
    } catch(e){ console.error(e); toast(t('toastLocFail'),'bad'); }
    finally{ setLoad(false); }
  }, err=>{ console.error(err); toast(t('toastLocDenied'),'warn'); setLoad(false); },
  {enableHighAccuracy:false,timeout:10000,maximumAge:60000});
}

async function copyShareLink() {
  if (!lastCtx) { toast(t('toastNeedCity'),'warn'); return; }
  const link = window.location.href;
  try {
    await navigator.clipboard.writeText(link);
    toast(t('toastLinkCopied'),'ok');
  } catch (_) {
    toast(t('toastCopyFail'),'bad');
  }
}

// ═══════════════════════════════════════════════
// BIND
// ═══════════════════════════════════════════════
function bind() {
  el('btnTheme').addEventListener('click', toggleTheme);
  el('btnSearch').addEventListener('click', doSearch);
  el('btnShare').addEventListener('click', copyShareLink);
  el('btnCompareAdd').addEventListener('click', doCompareSearch);
  el('btnCompareClear').addEventListener('click', clearCompare);
  el('compareQ').addEventListener('keydown', e => { if (e.key === 'Enter') doCompareSearch(); });
  document.querySelectorAll('.quick-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      el('q').value = btn.dataset.city || '';
      doSearch();
    });
  });
  el('recentList').addEventListener('click', e => {
    const btn = e.target.closest('[data-recent-index]');
    if (!btn) return;
    const i = Number(btn.dataset.recentIndex);
    const city = getRecent()[i];
    if (!city?.name) return;
    el('q').value = city.name;
    doSearch();
  });
  el('q').addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });
  el('btnLocate').addEventListener('click', doLocate);
  el('btnRefresh').addEventListener('click', ()=>{ if(lastCtx) renderAll(lastCtx); else toast(t('toastNeedCity'),'warn'); });
  el('btnSave').addEventListener('click', ()=>{
    const clean = normalizeCtx(lastCtx);
    if(!clean){toast(t('toastFavInvalid'),'warn');return;}
    const favs=getFavs();
    if(favs.some(f=>f?.name===clean.name&&String(f?.countryCode||'').toUpperCase()===clean.countryCode)){toast(t('toastAlready'),'warn');return;}
    favs.unshift(clean); saveFavs(favs.slice(0,20)); rebuildFavs();
    toast(t('toastSaved'),'ok');
  });
  el('favSelect').addEventListener('change', async ()=>{
    const i=el('favSelect').value; if(i==='') return;
    await loadFavouriteByIndex(+i);
    el('favSelect').value='';
  });
  el('btnCopy').addEventListener('click', ()=>{
    if(!lastCtx) return;
    navigator.clipboard?.writeText(`${fmt(lastCtx.lat,6)}, ${fmt(lastCtx.lon,6)}`).then(()=>toast(t('toastCopied'),'ok'));
  });
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
(function(){
  initTheme(); initMap(); bind(); applyLang(); rebuildFavs(); renderRecent();
  const fromUrl = readUrlRestore();
  if (fromUrl?.type === 'ctx') {
    el('q').value = fromUrl.ctx.name || '';
    renderAll(fromUrl.ctx);
    return;
  }
  if (fromUrl?.type === 'city') {
    el('q').value = fromUrl.city;
    doSearch();
    return;
  }
  try {
    const last=JSON.parse(localStorage.getItem(LK));
    if(last?.lat&&last?.lon){ el('q').value=last.name||''; renderAll(last); return; }
  } catch(_){}
  el('q').value = lang==='en'?'London':'İstanbul';
  doSearch();
})();


