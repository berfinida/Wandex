// ═══════════════════════════════════════════════
// i18n
// ═══════════════════════════════════════════════
const LANG_KEY = 'wandex_lang_v1';
const THEME_KEY = 'wandex_theme_v1';
const storage = {
  getItem(key) { try { return localStorage.getItem(key); } catch { return null; } },
  setItem(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
};
const savedLang = storage.getItem(LANG_KEY);
let lang = 'tr';
const UNIT_KEY = 'wandex_unit_v1';
let tempUnit = storage.getItem(UNIT_KEY) === 'f' ? 'f' : 'c';
let theme = document.documentElement.getAttribute('data-theme') || 'dark';

const TX = {
  tr: {
    searchPlaceholder: 'İstanbul, Paris, Tokyo…',
    searchBtn: 'Ara',
    planTitle: 'Seyahat Planım', planDate: 'Seyahat tarihi', planNotes: 'Gezi notları',
    planPlaceholder: 'Görmek istediğin yerler, rezervasyonlar, hatırlatmalar…',
    planExport: 'Planı indir (.txt)', planSaved: 'Bu tarayıcıya kaydedildi',
    planReady: 'Değişiklikler bu tarayıcıya otomatik kaydedilir.',
    planMemory: 'Kayıt alanı kullanılamıyor; plan yalnızca bu oturumda tutuluyor.',
    planHint: 'Her şehir için ayrı tutulur. Notlar paylaşım bağlantısına eklenmez.',
    planNeedCity: 'Plan oluşturmak için bir şehir seçin.', planProgress: (done,total) => `${done}/${total} hazırlık tamamlandı`,
    taskDocuments: 'Kimlik / pasaport', taskBooking: 'Ulaşım ve konaklama', taskInsurance: 'Seyahat sigortası',
    taskCharger: 'Şarj cihazı / adaptör', taskClothes: 'Hava durumuna uygun kıyafet',
    bestDay: 'Tahminde öne çıkan gün', bestDayHint: 'Uygulama tarafından hesaplanır; resmi öneri değildir. Daha düşük yağış olasılığı ve 22°C’ye yakın ortalama sıcaklığa göre seçilir.',
    bestDayEmpty: 'Gün önerisi için yeterli tahmin verisi yok.', rainProbability: 'Yağış olasılığı',
    chooseCity: 'Bir şehir seçin', searchResults: 'Arama sonuçları', closeResults: 'Sonuçları kapat',
    unitLabel: 'Sıcaklık birimi', favRemove: 'Favorilerden kaldır', toastRemoved: 'Favorilerden kaldırıldı',
    refresh: 'Verileri yenile', loading: 'Veriler yükleniyor…',
    sourcesOk: 'Kaynak yanıtları alındı. Veri zamanları ve güncelleme sıklıkları aşağıda.',
    dataSources: 'Veri kaynakları ve zamanları',
    dataUnavailable: 'Veri alınamadı veya güncelliği doğrulanamadı',
    retrievedAt: 'Alındı', sourceTime: 'Veri zamanı', sourceTimeUnknown: 'Kaynak güncelleme tarihi bildirmiyor',
    weatherModel: 'Model verisi / tahmin; ölçüm değildir', fxDaily: 'Günlük kur; anlık piyasa fiyatı değildir',
    countryReference: 'Referans veri; nüfusun ait olduğu yıl bildirilmez',
    dateCalculated: 'Seçili şehrin bugünkü tarihi için hesaplama', holidayPeriod: 'Tatil takvimi yılı',
    autoRefresh: 'Sayfa açıkken 15 dakikada bir ve geri dönüldüğünde yenilenir.',
    calculatedScore: (count) => `Uygulamanın ${count}/4 mevcut göstergeyle hesapladığı skordur; resmi seyahat veya güvenlik değerlendirmesi değildir.`,
    sourcesFailed: 'Yüklenemeyen kaynaklar', mapUnavailable: 'Harita yüklenemedi. Koordinatlar aşağıda gösteriliyor.',
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
    airSource: 'Kaynak: Open-Meteo / CAMS model tahmini; istasyon ölçümü değildir.',
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
    compareDataTime: 'Veri zamanı',
    compareTemp: 'Sıcaklık',
    compareWind: 'Rüzgar',
    compareAqi: 'AQI',
    compareLocalTime: 'Yerel Saat',
    compareDayLength: 'Gün Uzunluğu',
    travelScoreTitle: 'Hesaplanan Koşul Skoru',
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
    copyright: '© 2026 Berfin Nida — Kod & Tasarım',
    languageLabel: 'Dil', skipContent: 'İçeriğe geç', quickCities: 'Hızlı şehirler',
    chartLabel: '24 saatlik sıcaklık eğilimi grafiği', aqiLevel: 'AQI seviyesi', builtBy: 'Geliştiren',
    durationHours: 'sa', durationMinutes: 'dk',
  },
  en: {
    searchPlaceholder: 'Istanbul, Paris, Tokyo…',
    searchBtn: 'Search',
    planTitle: 'My Trip Plan', planDate: 'Travel date', planNotes: 'Trip notes',
    planPlaceholder: 'Places to visit, reservations, reminders…',
    planExport: 'Download plan (.txt)', planSaved: 'Saved in this browser',
    planReady: 'Changes are saved automatically in this browser.',
    planMemory: 'Storage unavailable; your plan is kept only for this session.',
    planHint: 'Saved separately for each city. Notes are not included in shared city links.',
    planNeedCity: 'Choose a city to create a plan.', planProgress: (done,total) => `${done}/${total} preparations complete`,
    taskDocuments: 'ID / passport', taskBooking: 'Transport and accommodation', taskInsurance: 'Travel insurance',
    taskCharger: 'Charger / adapter', taskClothes: 'Weather-appropriate clothes',
    bestDay: 'Forecast day to consider', bestDayHint: 'Calculated by this app; not an official recommendation. Selected for lower rain probability and average temperatures closer to 22°C.',
    bestDayEmpty: 'Not enough forecast data to suggest a day.', rainProbability: 'Rain probability',
    chooseCity: 'Choose a city', searchResults: 'Search results', closeResults: 'Close results',
    unitLabel: 'Temperature unit', favRemove: 'Remove from favourites', toastRemoved: 'Removed from favourites',
    refresh: 'Refresh data', loading: 'Loading data…',
    sourcesOk: 'Source responses received. Data times and update frequencies are listed below.',
    dataSources: 'Data sources and times',
    dataUnavailable: 'Data unavailable or freshness could not be verified',
    retrievedAt: 'Retrieved', sourceTime: 'Data time', sourceTimeUnknown: 'Source does not provide an update date',
    weatherModel: 'Model data / forecast; not a measurement', fxDaily: 'Daily exchange rate; not a live market price',
    countryReference: 'Reference data; population reference year is not supplied',
    dateCalculated: 'Calculated for today in the selected city', holidayPeriod: 'Holiday calendar year',
    autoRefresh: 'Refreshes every 15 minutes while open and when returning to the page.',
    calculatedScore: (count) => `Calculated by this app using ${count}/4 available indicators; not an official travel or safety assessment.`,
    sourcesFailed: 'Unavailable sources', mapUnavailable: 'Map unavailable. Coordinates are shown below.',
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
    airSource: 'Source: Open-Meteo / CAMS model forecast; not a station measurement.',
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
    compareDataTime: 'Data time',
    compareTemp: 'Temperature',
    compareWind: 'Wind',
    compareAqi: 'AQI',
    compareLocalTime: 'Local Time',
    compareDayLength: 'Day Length',
    travelScoreTitle: 'Calculated Conditions Score',
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
    copyright: '© 2026 Berfin Nida — Code & Create',
    languageLabel: 'Language', skipContent: 'Skip to content', quickCities: 'Quick cities',
    chartLabel: '24-hour temperature trend chart', aqiLevel: 'AQI level', builtBy: 'Built by',
    durationHours: 'h', durationMinutes: 'm',
  }
};

const LANGUAGE_CONFIG = {
  tr: {name:'Türkçe', locale:'tr-TR', dir:'ltr'},
  en: {name:'English', locale:'en-GB', dir:'ltr'},
  de: {name:'Deutsch', locale:'de-DE', dir:'ltr'},
  fr: {name:'Français', locale:'fr-FR', dir:'ltr'},
  es: {name:'Español', locale:'es-ES', dir:'ltr'},
  it: {name:'Italiano', locale:'it-IT', dir:'ltr'},
  pt: {name:'Português', locale:'pt-PT', dir:'ltr'},
  nl: {name:'Nederlands', locale:'nl-NL', dir:'ltr'},
  pl: {name:'Polski', locale:'pl-PL', dir:'ltr'},
  ru: {name:'Русский', locale:'ru-RU', dir:'ltr'},
  uk: {name:'Українська', locale:'uk-UA', dir:'ltr'},
  ar: {name:'العربية', locale:'ar', dir:'rtl'},
  fa: {name:'فارسی', locale:'fa-IR', dir:'rtl'},
  he: {name:'עברית', locale:'he-IL', dir:'rtl'}
};

Object.entries(window.WANDEX_LOCALES || {}).forEach(([code, pack]) => {
  TX[code] = {...TX.en, ...pack};
});
lang = Object.hasOwn(TX, savedLang) ? savedLang : 'tr';

const t = (key, ...a) => {
  const v = TX[lang]?.[key] ?? TX.en[key];
  if (v === undefined) return key;
  if (typeof v === 'function') return v(...a);
  return String(v).replace(/\{(\d+)\}/g, (_, index) => a[index] ?? '');
};

function buildLanguagePicker() {
  const picker = el('langSelect');
  if (!picker || picker.options.length) return;
  Object.entries(LANGUAGE_CONFIG).forEach(([code, item]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = item.name;
    picker.appendChild(option);
  });
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGUAGE_CONFIG[lang]?.dir || 'ltr';
  document.body?.classList?.toggle('rtl', document.documentElement.dir === 'rtl');
  buildLanguagePicker();
  el('langSelect').value = lang;
  el('langSelect').setAttribute('aria-label', t('languageLabel'));
  el('langLabel').textContent = t('languageLabel');
  document.querySelector('.skip-link').textContent = t('skipContent');
  el('quickCities').setAttribute('aria-label', t('quickCities'));
  el('recentList').setAttribute('aria-label', t('recentSearches'));
  el('tempChart').setAttribute('aria-label', t('chartLabel'));
  el('aqiBarWrap').setAttribute('aria-label', t('aqiLevel'));
  el('builtBy').textContent = t('builtBy');
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  el('q').placeholder = t('searchPlaceholder');
  el('q').setAttribute('aria-label', t('searchPlaceholder'));
  el('compareQ').setAttribute('aria-label', t('comparePlaceholder'));
  el('favSelect').setAttribute('aria-label', t('favPlaceholder'));
  el('btnRefresh').title = t('refresh');
  el('btnRefresh').setAttribute('aria-label', t('refresh'));
  el('btnLocate').setAttribute('aria-label', t('locateTitle'));
  renderSourceStatus();
  renderSourceDetails();
  renderTripPlan();
  renderBestDay();
  if (!map) el('map').textContent = t('mapUnavailable');
  el('btnSearch').textContent = t('searchBtn');
  el('btnLocate').title = t('locateTitle');
  el('btnShare').title = t('shareCityTitle');
  el('btnShare').setAttribute('aria-label', t('shareCityTitle'));
  syncFavouriteButton();
  syncUnitButtons();
  el('btnCloseResults').setAttribute('aria-label', t('closeResults'));
  closeSearchResults();
  el('compareQ').placeholder = t('comparePlaceholder');
  el('btnCompareAdd').textContent = t('compareAdd');
  el('btnCompareClear').textContent = t('compareRemove');
  el('btnCompareAdd').title = t('compareAdd');
  el('btnCompareClear').title = t('compareRemove');
  const sel = el('favSelect');
  if (sel.options[0]) sel.options[0].text = t('favPlaceholder');
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

function setLang(l) { if (!TX[l]) return; lang = l; storage.setItem(LANG_KEY, l); applyLang(); }

function setTheme(next, persist = true) {
  theme = next === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  if (persist) storage.setItem(THEME_KEY, theme);
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
  const saved = storage.getItem(THEME_KEY);
  const mql = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  if (saved === 'light' || saved === 'dark') setTheme(saved, false);
  else setTheme(mql?.matches ? 'dark' : 'light', false);
  mql?.addEventListener?.('change', ev => {
    const pinned = storage.getItem(THEME_KEY);
    if (pinned === 'light' || pinned === 'dark') return;
    setTheme(ev.matches ? 'dark' : 'light', false);
  });
}

// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
const el = id => document.getElementById(id);
const loc = () => LANGUAGE_CONFIG[lang]?.locale || 'en-GB';

function fmt(n, d = 1) {
  if (n == null || isNaN(+n)) return '—';
  return Number(n).toFixed(d);
}

function fmtDate(iso) {
  const value = /^\d{4}-\d{2}-\d{2}$/.test(iso || '') ? `${iso}T12:00:00` : iso;
  try { return new Date(value).toLocaleDateString(loc(), { weekday:'short', day:'2-digit', month:'short' }); }
  catch { return iso; }
}

function fmtTime(iso) {
  // Open-Meteo timestamps are already city-local wall times, without an offset.
  if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(iso || '')) return iso.slice(11, 16);
  try { return new Date(iso).toLocaleTimeString(loc(), { hour:'2-digit', minute:'2-digit', timeZone: lastCtx?.timezone || 'UTC' }); }
  catch { return iso; }
}

function fmtDayLen(s) {
  if (s == null || !Number.isFinite(Number(s))) return '—';
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60);
  return `${h}${t('durationHours')} ${m}${t('durationMinutes')}`;
}

function clamp(s, max) {
  if (!s) return '—';
  return s.length > max ? s.slice(0, max-1)+'…' : s;
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[ch]));
}

function hourlyIndex(times, reference) {
  if (!times?.length || !reference) return 0;
  const index = times.findIndex(time => time.slice(0, 13) >= reference.slice(0, 13));
  return index < 0 ? times.length - 1 : index;
}

function cityNow(timezone) {
  try {
    const parts = new Intl.DateTimeFormat('sv-SE', {timeZone: timezone || 'UTC', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hourCycle:'h23'}).formatToParts(new Date());
    const part = key => parts.find(p => p.type === key)?.value;
    return `${part('year')}-${part('month')}-${part('day')}T${part('hour')}:${part('minute')}`;
  } catch { return new Date().toISOString().slice(0, 16); }
}

async function gfetch(url, opts={}, ms=12000) {
  const c = new AbortController();
  const id = setTimeout(()=>c.abort(), ms);
  try {
    const r = await fetch(url, {cache:'no-store', ...opts, signal:c.signal});
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();
    if (data?.error || data?.result === 'error') throw new Error('API error response');
    return data;
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

let pendingLoads = 0;
function setLoad(v) {
  pendingLoads = Math.max(0, pendingLoads + (v ? 1 : -1));
  el('progress').classList.toggle('on', pendingLoads > 0);
  document.querySelector('main').setAttribute('aria-busy', String(pendingLoads > 0));
}

let sourceFailures = [], sourceLoading = false, sourceChecked = false;
function renderSourceStatus() {
  const node = el('sourceStatus');
  if (!node) return;
  node.hidden = !sourceLoading && !sourceChecked;
  node.classList.toggle('has-errors', sourceFailures.length > 0 && !sourceLoading);
  node.textContent = sourceLoading ? t('loading') : sourceFailures.length
    ? `${t('sourcesFailed')}: ${sourceFailures.join(', ')}. ${t('refresh')}.`
    : t('sourcesOk');
}

const SOURCE_INFO = {
  'Open-Meteo Weather': ['https://open-meteo.com/en/docs', 'weatherModel'],
  'Open-Meteo Air': ['https://open-meteo.com/en/docs/air-quality-api', 'weatherModel'],
  'Sunrise-Sunset': ['https://sunrise-sunset.org/api', 'dateCalculated'],
  'Exchange rates': ['https://www.exchangerate-api.com/docs/free', 'fxDaily'],
  'CoinGecko': ['https://docs.coingecko.com/reference/simple-price', ''],
  'REST Countries': ['https://restcountries.com/', 'countryReference'],
  'Nager.Date': ['https://date.nager.at/', 'holidayPeriod']
};
let sourceRecords = {}, lastRefreshAt = 0;
const AUTO_REFRESH_MS = 15 * 60 * 1000;
const isNumber = value => typeof value === 'number' && Number.isFinite(value);

function requireData(condition) {
  if (!condition) throw new Error(t('dataUnavailable'));
}

function freshUnix(seconds, maxAgeMs) {
  return isNumber(seconds) && seconds > 0 && Date.now() - seconds * 1000 <= maxAgeMs && seconds * 1000 - Date.now() <= 5 * 60 * 1000;
}

function freshLocalTime(time, timezone, maxAgeMs = 2 * 60 * 60 * 1000) {
  if (!timezone || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(time || '')) return false;
  try { new Intl.DateTimeFormat('en', {timeZone:timezone}).format(); } catch { return false; }
  const age = Date.parse(cityNow(timezone) + 'Z') - Date.parse(time + 'Z');
  return Number.isFinite(age) && age >= -15 * 60 * 1000 && age <= maxAgeMs;
}

function recordSource(name, dataTime = '', timezone = '') {
  sourceRecords[name] = {retrieved: new Date().toISOString(), dataTime, timezone};
  renderSourceDetails();
}

function renderSourceDetails() {
  const node = el('sourceDetails');
  if (!node) return;
  node.innerHTML = Object.entries(SOURCE_INFO).map(([name, [url, note]]) => {
    const record = sourceRecords[name];
    const state = record
      ? `${t('retrievedAt')}: ${new Date(record.retrieved).toLocaleString(loc())} · ${record.dataTime ? `${t('sourceTime')}: ${record.dataTime}${record.timezone ? ` (${record.timezone})` : ''}` : t('sourceTimeUnknown')}`
      : sourceLoading ? t('loading') : t('dataUnavailable');
    return `<div class="source-detail"><a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a><span>${escapeHtml(state)}${note ? ` · ${escapeHtml(t(note))}` : ''}</span></div>`;
  }).join('');
}

function refreshIfDue() {
  if (document.visibilityState === 'hidden' || !lastCtx || pendingLoads || Date.now() - lastRefreshAt < AUTO_REFRESH_MS) return;
  renderAll(lastCtx);
  if (compareCtx) activateSearchResult(compareCtx, 'compare', ++compareVersion);
}

// ═══════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════
let map, pin;

function initMap() {
  if (!window.L) return;
  map = L.map('map', { zoomControl:true }).setView([41.01, 28.97], 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19, attribution:'© OSM'
  }).addTo(map);
  pin = L.marker([41.01, 28.97]).addTo(map);
}

function moveMap(lat, lon, label) {
  if (!map) return;
  map.setView([lat, lon], 11, {animate:true});
  pin.setLatLng([lat, lon]);
  const popup = document.createElement('span');
  popup.textContent = label;
  pin.bindPopup(popup).openPopup();
}

// ═══════════════════════════════════════════════
// FAVOURITES
// ═══════════════════════════════════════════════
const FK = 'wandex_favs_v1';
const LK = 'wandex_last_v1';
const RK = 'wandex_recent_v1';

const readList = key => { try { const value = JSON.parse(storage.getItem(key) || '[]'); return Array.isArray(value) ? value.filter(item => item && typeof item.name === 'string') : []; } catch { return []; } };
const getFavs = () => readList(FK);
const saveFavs = list => storage.setItem(FK, JSON.stringify(list));
const getRecent = () => readList(RK);
const saveRecent = list => storage.setItem(RK, JSON.stringify(list));

function normalizeCtx(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const lat = Number(raw.lat);
  const lon = Number(raw.lon);
  const name = String(raw.name || '').trim();
  if (!name || raw.lat == null || raw.lon == null || !Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
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
    favs.map((f,i)=>`<option value="${i}">${escapeHtml(f.name)} (${escapeHtml(f.countryCode)})</option>`).join('');
  s.value = '';
  s.disabled = favs.length === 0;
  syncFavouriteButton();
}

function isFavourite(ctx) {
  return !!ctx && getFavs().some(f => citySig(f) === citySig(ctx));
}

function syncFavouriteButton() {
  const saved = isFavourite(lastCtx);
  const button = el('btnSave');
  button.textContent = saved ? '★' : '☆';
  button.title = t(saved ? 'favRemove' : 'favSaveTitle');
  button.setAttribute('aria-label', button.title);
  button.setAttribute('aria-pressed', String(saved));
}

function toggleFavourite() {
  const ctx = normalizeCtx(lastCtx);
  if (!ctx) { toast(t('toastFavInvalid'), 'warn'); return; }
  const saved = isFavourite(ctx);
  const remaining = getFavs().filter(f => citySig(f) !== citySig(ctx));
  saveFavs(saved ? remaining : [ctx, ...remaining].slice(0, 20));
  rebuildFavs();
  toast(t(saved ? 'toastRemoved' : 'toastSaved'), 'ok');
}

function temperatureValue(value) {
  if (value == null || !Number.isFinite(Number(value))) return null;
  return tempUnit === 'f' ? Number(value) * 9 / 5 + 32 : Number(value);
}

function formatTemperature(value, digits = 0) {
  const converted = temperatureValue(value);
  return converted == null ? '—' : `${fmt(converted, digits)}°${tempUnit.toUpperCase()}`;
}

function syncUnitButtons() {
  ['c', 'f'].forEach(unit => {
    const button = el(unit === 'c' ? 'btnCelsius' : 'btnFahrenheit');
    button.classList.toggle('on', unit === tempUnit);
    button.setAttribute('aria-pressed', String(unit === tempUnit));
  });
  el('tempUnits').setAttribute('aria-label', t('unitLabel'));
}

function setTemperatureUnit(unit) {
  if (!['c', 'f'].includes(unit)) return;
  tempUnit = unit;
  storage.setItem(UNIT_KEY, unit);
  syncUnitButtons();
  renderWeather();
  renderComparePanel();
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
  const item = normalizeCtx(ctx) || { name: ctx.name, countryCode: ctx.countryCode || '', country: ctx.country || '' };
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
  if (city && p.has('lat') && p.has('lon') && p.get('lat').trim() && p.get('lon').trim() && Number.isFinite(lat) && Number.isFinite(lon) && Math.abs(lat) <= 90 && Math.abs(lon) <= 180) {
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
let renderVersion = 0, searchVersion = 0, compareVersion = 0;

function updateHeader(ctx) {
  el('placeTitle').textContent = `${ctx.name}, ${ctx.country}`;
  el('placeMeta').textContent = `${ctx.countryCode} · ${ctx.lat?.toFixed(3)}°, ${ctx.lon?.toFixed(3)}°`;
  el('coords').textContent     = `${fmt(ctx.lat,4)}, ${fmt(ctx.lon,4)}`;
  el('tz').textContent         = ctx.timezone || '—';
  moveMap(ctx.lat, ctx.lon, `${ctx.name}, ${ctx.country}`);
  syncFavouriteButton();
  renderTripPlan();
  updatePageMetadata(ctx);
}

function updatePageMetadata(ctx) {
  const title = `${ctx.name}, ${ctx.country} — Wandex`;
  const description = `${ctx.name} için hava durumu, hava kalitesi, yerel saat, tatiller ve seyahat planı. Kaynak zamanları Wandex'te.`;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
}

// City-local travel plans; independent of network data and shared links.
const PLAN_KEY = 'wandex_plans_v1';
const PLAN_TASKS = ['taskDocuments', 'taskBooking', 'taskInsurance', 'taskCharger', 'taskClothes'];
let planCityKey = null, planDraft = null, planStored = true;
const planMemory = new Map();

function tripCityKey(ctx) {
  return ctx ? `${Number(ctx.lat).toFixed(4)},${Number(ctx.lon).toFixed(4)}` : null;
}

function normalizePlan(raw) {
  return {
    date: typeof raw?.date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(raw.date) ? raw.date : '',
    notes: typeof raw?.notes === 'string' ? raw.notes.slice(0, 4000) : '',
    checked: PLAN_TASKS.filter(key => Array.isArray(raw?.checked) && raw.checked.includes(key))
  };
}

function readPlans() {
  try {
    const data = JSON.parse(storage.getItem(PLAN_KEY) || '{}');
    return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
  } catch { return {}; }
}

function renderPlanStatus() {
  el('planProgress').textContent = planDraft ? t('planProgress', planDraft.checked.length, PLAN_TASKS.length) : '';
  el('planSaveStatus').textContent = !lastCtx ? t('planNeedCity') : planStored === null ? t('planReady') : planStored ? t('planSaved') : t('planMemory');
}

function renderTripPlan() {
  const key = tripCityKey(lastCtx);
  if (key !== planCityKey || !planDraft) {
    planCityKey = key;
    const cached = planMemory.get(key);
    const saved = readPlans()[key];
    planDraft = normalizePlan(cached || saved);
    planStored = cached ? cached.stored : saved ? true : null;
  }
  el('planCity').textContent = lastCtx ? cityLabel(lastCtx) : '—';
  el('planDate').value = planDraft.date;
  el('planNotes').value = planDraft.notes;
  el('planNotes').placeholder = t('planPlaceholder');
  el('planDate').disabled = el('planNotes').disabled = el('btnExportPlan').disabled = !lastCtx;
  const list = el('planChecklist');
  list.textContent = '';
  PLAN_TASKS.forEach(key => {
    const label = document.createElement('label');
    label.className = 'plan-task';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = planDraft.checked.includes(key);
    checkbox.disabled = !lastCtx;
    checkbox.addEventListener('change', () => {
      planDraft.checked = checkbox.checked ? [...new Set([...planDraft.checked, key])] : planDraft.checked.filter(item => item !== key);
      persistTripPlan();
    });
    const text = document.createElement('span');
    text.textContent = t(key);
    label.appendChild(checkbox);
    label.appendChild(text);
    list.appendChild(label);
  });
  renderPlanStatus();
}

function persistTripPlan() {
  if (!lastCtx || !planCityKey || !planDraft) return;
  const plans = readPlans();
  planDraft = normalizePlan(planDraft);
  plans[planCityKey] = planDraft;
  planStored = storage.setItem(PLAN_KEY, JSON.stringify(plans));
  planMemory.set(planCityKey, {...planDraft, stored: planStored});
  renderPlanStatus();
}

function tripPlanText() {
  if (!lastCtx || !planDraft) return '';
  return [
    `Wandex · ${t('planTitle')}`, `${lastCtx.name}, ${lastCtx.country}`,
    `${fmt(lastCtx.lat,4)}, ${fmt(lastCtx.lon,4)}`,
    `${t('planDate')}: ${planDraft.date || '—'}`, '',
    ...PLAN_TASKS.map(key => `[${planDraft.checked.includes(key) ? 'x' : ' '}] ${t(key)}`),
    '', t('planNotes'), planDraft.notes || '—'
  ].join('\n');
}

function exportTripPlan() {
  const text = tripPlanText();
  if (!text) return;
  const url = URL.createObjectURL(new Blob(['\uFEFF', text], {type: 'text/plain;charset=utf-8'}));
  const link = document.createElement('a');
  link.href = url;
  link.download = `Wandex-${lastCtx.name.replace(/[^\p{L}\p{N}_-]/gu, '_')}-plan.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function bestForecastDay(weather) {
  if (!weather) return null;
  const today = cityNow(lastCtx?.timezone).slice(0, 10);
  const choices = (weather.dtime || []).flatMap((date, i) => {
    const min = weather.tmin?.[i], max = weather.tmax?.[i], rain = weather.dpop?.[i];
    if (date < today || [min, max, rain].some(value => value == null || !Number.isFinite(Number(value)))) return [];
    const mean = (Number(min) + Number(max)) / 2;
    return [{date, min, max, rain, code: weather.dwc?.[i], penalty: Number(rain) * 0.7 + Math.abs(mean - 22) * 2}];
  });
  return choices.sort((a, b) => a.penalty - b.penalty || a.date.localeCompare(b.date))[0] || null;
}

function renderBestDay() {
  const day = bestForecastDay(cW);
  el('bestDaySummary').textContent = day
    ? `${wico(day.code)} ${fmtDate(day.date)} · ${formatTemperature(day.min)} / ${formatTemperature(day.max)} · ${t('rainProbability')}: ${fmt(day.rain,0)}%`
    : t('bestDayEmpty');
}

// ═══════════════════════════════════════════════
// GEOCODING
// ═══════════════════════════════════════════════
async function searchCities(q) {
  const d = await gfetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q.trim())}&count=5&language=${lang}&format=json`);
  const results = (d?.results || []).map(r => {
    const ctx = normalizeCtx({name:r.name, country:r.country, countryCode:r.country_code, lat:r.latitude, lon:r.longitude, timezone:r.timezone});
    return ctx ? {...ctx, region: r.admin1 || ''} : null;
  }).filter(Boolean);
  if (!results.length) throw new Error(t('toastNotFound'));
  return results;
}

async function searchCity(q) { return (await searchCities(q))[0]; }

function closeSearchResults() {
  el('cityResults').hidden = true;
  el('cityResultsList').textContent = '';
}

async function activateSearchResult(ctx, target, version) {
  if (version !== (target === 'compare' ? compareVersion : searchVersion)) return;
  closeSearchResults();
  if (target === 'compare') {
    setLoad(true);
    try {
      compareCtx = ctx;
      compareData = null;
      renderComparePanel();
      el('compareQ').value = ctx.name;
      await loadCompareData(ctx, version);
      if (version === compareVersion) renderComparePanel();
    } finally { setLoad(false); }
  } else {
    el('q').value = ctx.name;
    await renderAll(ctx);
    if (version === searchVersion) pushRecent(ctx);
  }
}

function showSearchResults(cities, target, version) {
  closeSearchResults();
  const list = el('cityResultsList');
  cities.forEach(ctx => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'city-result';
    const title = document.createElement('strong');
    title.textContent = `${ctx.name}, ${ctx.country}`;
    const detail = document.createElement('span');
    detail.textContent = [ctx.region, ctx.countryCode, `${fmt(ctx.lat, 2)}°, ${fmt(ctx.lon, 2)}°`].filter(Boolean).join(' · ');
    button.appendChild(title);
    button.appendChild(detail);
    button.addEventListener('click', () => activateSearchResult(ctx, target, version));
    list.appendChild(button);
  });
  el('cityResults').hidden = false;
  el('cityResultsTitle').textContent = `${t('chooseCity')} · ${target === 'compare' ? t('compareTitle') : t('searchResults')}`;
  list.querySelector('button')?.focus();
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
  const i = hourlyIndex(times, cw?.time);
  const p = pop[i] == null ? NaN : Number(pop[i]);
  return Number.isFinite(p) ? p : null;
}

function computeTravelScore() {
  const temp = cW?.cw?.temperature == null ? NaN : Number(cW?.cw?.temperature);
  const wind = cW?.cw?.windspeed == null ? NaN : Number(cW?.cw?.windspeed);
  const aqi = cA?.aqiVal == null ? NaN : Number(cA?.aqiVal);
  const rain = currentRainProb() == null ? NaN : Number(currentRainProb());

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
  return { score, temp, wind, aqi, rain, count: parts.length };
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
  hintEl.textContent = t('calculatedScore', data.count);
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

  const start = hourlyIndex(cW.times, cW.cw?.time);
  const times = (cW.times || []).slice(start, start + 24);
  const temps = (cW.t2m || []).slice(start, start + 24);
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

  const labels = times.map(fmtTime);

  tempChart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data: temps.map(temperatureValue),
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
      animation: { duration: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 0 : 280 },
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
            label: ctx => `${fmt(ctx.parsed.y, 1)}°${tempUnit.toUpperCase()}`
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
  renderBestDay();
  const {cw,times,t2m,pop,wnd,wcode,dtime,tmax,tmin,dpop,dwc} = cW;
  if (cw) {
    el('kpiTemp').textContent = `${formatTemperature(cw.temperature)}`;
    el('kpiWind').textContent = `${fmt(cw.windspeed,0)} km/h`;
    el('weatherNow').textContent = `${wico(cw.weathercode)}  ${formatTemperature(cw.temperature)}  ·  💨 ${fmt(cw.windspeed,0)} km/h  ·  🕒 ${cw.time?fmtTime(cw.time):'—'}`;
  }
  const si = hourlyIndex(times, cw?.time);
  renderTempChart();
  renderTravelScore();
  const hourly = el('hourly');
  hourly.innerHTML='';
  for (let i=si; i<Math.min(si+12,times.length); i++) {
    const d=document.createElement('div'); d.className='h-chip';
    d.innerHTML=`<div class="hc-t">${fmtTime(times[i])}</div><div class="hc-v">${wico(wcode[i])} ${formatTemperature(t2m[i])}</div><div class="hc-d">💧${fmt(pop[i],0)}% · 💨${fmt(wnd[i],0)}</div>`;
    hourly.appendChild(d);
  }
  el('daily').innerHTML=`
    <div class="tr th tr-4"><div>${t('wDay')}</div><div>${t('wMin')}</div><div>${t('wMax')}</div><div>${t('wRain')}</div></div>
    ${dtime.map((d,i)=>`<div class="tr tr-4"><div>${wico(dwc[i])} ${fmtDate(d)}</div><div style="color:#93c5fd">${formatTemperature(tmin[i])}</div><div style="color:var(--amber)">${formatTemperature(tmax[i])}</div><div>${fmt(dpop[i],0)}%</div></div>`).join('')}`;
}

async function loadWeather(ctx, version = renderVersion) {
  const d = await gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${ctx.lat}&longitude=${ctx.lon}&current_weather=true&hourly=temperature_2m,precipitation_probability,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=auto`);
  if (version !== renderVersion) return;
  requireData(isNumber(d.current_weather?.temperature) && isNumber(d.current_weather?.windspeed) && freshLocalTime(d.current_weather?.time, d.timezone || ctx.timezone) && Array.isArray(d.hourly?.time) && Array.isArray(d.daily?.time) && d.daily.time[0] === cityNow(d.timezone || ctx.timezone).slice(0,10));
  recordSource('Open-Meteo Weather', d.current_weather.time, d.timezone || ctx.timezone);
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
    {l:'PM 2.5',  v:`${fmt(pm25,1)} µg/m³`},
    {l:'PM 10',   v:`${fmt(pm10,1)} µg/m³`},
    {l:'O₃',      v:`${fmt(o3,1)} µg/m³`},
    {l:'NO₂',     v:`${fmt(no2,1)} µg/m³`},
    {l:'SO₂',     v:`${fmt(so2,1)} µg/m³`},
    {l:'CO',      v:`${fmt(co,1)} µg/m³`},
    {l:t('aqiUpdate'), v:timeStr},
  ];
  el('air').innerHTML=rows.map(r=>`<div class="air-cell"><div class="air-lbl">${r.l}</div><div class="air-val" style="color:${r.clr||'var(--text)'}">${r.v}</div></div>`).join('');
}

async function loadAir(ctx, version = renderVersion) {
  const d = await gfetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${ctx.lat}&longitude=${ctx.lon}&hourly=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone&timezone=auto`);
  if (version !== renderVersion) return;
  const times=d.hourly?.time||[];
  const zone = d.timezone || ctx.timezone;
  const i = hourlyIndex(times, cityNow(zone));
  requireData(isNumber(d.hourly?.us_aqi?.[i]) && freshLocalTime(times[i], zone));
  recordSource('Open-Meteo Air', times[i], zone);
  cA={aqiVal:d.hourly?.us_aqi?.[i],pm25:d.hourly?.pm2_5?.[i],pm10:d.hourly?.pm10?.[i],o3:d.hourly?.ozone?.[i],no2:d.hourly?.nitrogen_dioxide?.[i],so2:d.hourly?.sulphur_dioxide?.[i],co:d.hourly?.carbon_monoxide?.[i],timeStr:times[i]?fmtTime(times[i]):'—'};
  renderAir();
}

// ═══════════════════════════════════════════════
// SUNRISE
// ═══════════════════════════════════════════════
async function loadSun(ctx, version = renderVersion) {
  const date = cityNow(ctx.timezone).slice(0,10);
  const d = await gfetch(`https://api.sunrise-sunset.org/json?lat=${ctx.lat}&lng=${ctx.lon}&date=${date}&formatted=0`);
  if (version !== renderVersion) return;
  const r = d?.results;
  requireData(d.status === 'OK' && r && Number.isFinite(Date.parse(r.sunrise)) && Number.isFinite(Date.parse(r.sunset)) && isNumber(r.day_length));
  recordSource('Sunrise-Sunset', date, ctx.timezone);
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

async function loadCompareData(ctx, version) {
  const [wRes, airRes, sunRes] = await Promise.allSettled([
    gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${ctx.lat}&longitude=${ctx.lon}&current_weather=true&timezone=auto`),
    gfetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${ctx.lat}&longitude=${ctx.lon}&hourly=us_aqi&timezone=auto`),
    gfetch(`https://api.sunrise-sunset.org/json?lat=${ctx.lat}&lng=${ctx.lon}&date=${cityNow(ctx.timezone).slice(0,10)}&formatted=0`)
  ]);

  if (version !== compareVersion) return;
  const w = wRes.status === 'fulfilled' ? wRes.value : null;
  const a = airRes.status === 'fulfilled' ? airRes.value : null;
  const s = sunRes.status === 'fulfilled' ? sunRes.value : null;

  let aqiVal = null;
  if (a?.hourly?.time?.length && a?.hourly?.us_aqi?.length) {
    const times = a.hourly.time;
    const vals = a.hourly.us_aqi;
    const i = hourlyIndex(times, cityNow(ctx.timezone));
    aqiVal = isNumber(vals[i]) && freshLocalTime(times[i], a.timezone || ctx.timezone) ? vals[i] : null;
  }

  const weatherFresh = freshLocalTime(w?.current_weather?.time, w?.timezone || ctx.timezone);
  compareData = {
    temp: weatherFresh && isNumber(w?.current_weather?.temperature) ? w.current_weather.temperature : null,
    wind: weatherFresh && isNumber(w?.current_weather?.windspeed) ? w.current_weather.windspeed : null,
    time: weatherFresh ? `${w.current_weather.time} (${w.timezone || ctx.timezone})` : null,
    aqi: aqiVal,
    dayLenSec: s?.status === 'OK' && isNumber(s?.results?.day_length) ? s.results.day_length : null
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
    {k:t('compareTemp'), m: mainTemp!=null?`${formatTemperature(mainTemp)}`:'—', c: compareData.temp!=null?`${formatTemperature(compareData.temp)}`:'—'},
    {k:t('compareWind'), m: mainWind!=null?`${fmt(mainWind,0)} km/h`:'—', c: compareData.wind!=null?`${fmt(compareData.wind,0)} km/h`:'—'},
    {k:t('compareAqi'), m: mainAqi!=null?`<span style="color:${mainAqiClr}">${fmt(mainAqi,0)} · ${aqiTxt(mainAqi)}</span>`:'—', c: compareData.aqi!=null?`<span style="color:${otherAqiClr}">${fmt(compareData.aqi,0)} · ${aqiTxt(compareData.aqi)}</span>`:'—'},
    {k:t('compareLocalTime'), m: mainTime, c: getTimeByTimezone(compareCtx?.timezone)},
    {k:t('compareDayLength'), m: escapeHtml(mainDay), c: compareData.dayLenSec != null ? fmtDayLen(compareData.dayLenSec) : '—'},
    {k:t('compareDataTime'), m: escapeHtml(sourceRecords['Open-Meteo Weather']?.dataTime || '—'), c: escapeHtml(compareData.time || '—')}
  ];

  rows.innerHTML = items.map(it => `<div class="compare-row"><div class="compare-k">${it.k}</div><div class="compare-v">${it.m}</div><div class="compare-v">${it.c}</div></div>`).join('');
}

async function doCompareSearch() {
  const q = el('compareQ').value.trim();
  if (!q) { toast(t('toastWriteCity'),'warn'); return; }
  const version = ++compareVersion;
  closeSearchResults();
  setLoad(true);
  try {
    const cities = await searchCities(q);
    if (version !== compareVersion) return;
    if (cities.length > 1) showSearchResults(cities, 'compare', version);
    else await activateSearchResult(cities[0], 'compare', version);
  } catch (e) {
    if (version === compareVersion) toast(e.message || t('toastSearchErr'), 'bad');
  } finally { setLoad(false); }
}

function clearCompare() {
  compareVersion++;
  closeSearchResults();
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
    searchVersion++;
    await renderAll(ctx);
  } catch (e) {
    console.error(e);
    toast(t('toastFavLoadFail'),'bad');
  }
}

// ═══════════════════════════════════════════════
// FX
// ═══════════════════════════════════════════════
async function loadFx(ctx, version = renderVersion) {
  const d = await gfetch('https://open.er-api.com/v6/latest/USD');
  if (version !== renderVersion) return;
  const r = d?.rates || {};
  requireData(d.result === 'success' && d.base_code === 'USD' && ['TRY','EUR','GBP'].every(code => isNumber(r[code]) && r[code] > 0) && freshUnix(d.time_last_update_unix, 48 * 60 * 60 * 1000));
  recordSource('Exchange rates', new Date(d.time_last_update_unix * 1000).toISOString());
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
    const chHtml=isNumber(ch)?`<div class="crypto-chg" style="color:${ch>=0?'var(--green)':'var(--red)'}">${ch>=0?'▲':'▼'} ${Math.abs(ch).toFixed(2)}%</div>`:'';
    return `<div class="crypto-cell"><div class="crypto-name">${c.sym} · ${c.name}</div><div class="crypto-price" style="color:${c.clr}">$${p?fmt(p,0):'—'}</div>${chHtml}</div>`;
  }).join('');
}

async function loadCrypto(ctx, version = renderVersion) {
  const data = await gfetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true');
  if (version !== renderVersion) return;
  const coins = ['bitcoin','ethereum','solana'];
  requireData(coins.every(coin => isNumber(data[coin]?.usd) && data[coin].usd > 0 && freshUnix(data[coin].last_updated_at, 15 * 60 * 1000)));
  recordSource('CoinGecko', new Date(Math.min(...coins.map(coin => data[coin].last_updated_at)) * 1000).toISOString());
  cCrypto = data;
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
      ${flag?`<img class="flag-img" src="${escapeHtml(flag)}" alt="${escapeHtml(name)}">`:''}
      <div>
        <div class="country-name-big">${escapeHtml(name)}</div>
        <div class="badges">
          <span class="badge">🏛 ${escapeHtml(capital)}</span>
          <span class="badge">🌍 ${escapeHtml(region)}</span>
          <span class="badge">👥 ${popRaw?popRaw.toLocaleString(loc()):'—'}</span>
          <span class="badge">🗣 ${escapeHtml(clamp(langStr,50))}</span>
          <span class="badge">💰 ${escapeHtml(clamp(currency,40))}</span>
          <span class="badge">📐 ${areaRaw?areaRaw.toLocaleString(loc())+' km²':'—'}</span>
        </div>
      </div>
    </div>`;
}

async function loadCountry(ctx, version = renderVersion) {
  const d = await gfetch(`https://restcountries.com/v3.1/alpha/${encodeURIComponent(ctx.countryCode)}`);
  if (version !== renderVersion) return;
  const c = Array.isArray(d)?d[0]:d;
  requireData(c?.name?.common && c.cca2 === ctx.countryCode);
  recordSource('REST Countries');
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
  const today = new Date(cityNow(lastCtx?.timezone).slice(0,10) + 'T00:00:00Z');
  el('holidays').innerHTML=`
    <div class="tr th tr-4"><div>${t('hDate')}</div><div>${t('hEn')}</div><div>${t('hLocal')}</div><div>${t('hType')}</div></div>
    ${list.map(h=>{
      const hd=new Date(h.date + 'T00:00:00Z'), past=hd<today, soon=!past&&(hd-today)<30*864e5;
      return `<div class="tr tr-4" style="${past?'opacity:.38':''}${soon?';background:var(--row-soon)':''}">
        <div style="font-size:12px;color:var(--text-2)">${h.date?fmtDate(h.date):'—'}${soon?' 🔜':''}</div>
        <div>${escapeHtml(clamp(h.name,44))}</div><div style="color:var(--text-2)">${escapeHtml(clamp(h.localName,44))}</div>
        <div style="font-size:11px;color:var(--text-3)">${escapeHtml(h.types?clamp(h.types.join(', '),26):'—')}</div>
      </div>`;
    }).join('')}`;
}

async function loadHolidays(ctx, version = renderVersion) {
  const year=Number(cityNow(ctx.timezone).slice(0,4));
  const d=await gfetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${encodeURIComponent(ctx.countryCode)}`);
  if (version !== renderVersion) return;
  requireData(Array.isArray(d) && d.every(holiday => holiday && typeof holiday.date === 'string' && holiday.date.startsWith(String(year) + '-') && typeof holiday.name === 'string'));
  recordSource('Nager.Date', String(year));
  cH={list:d,year};
  renderHolidays();
}

// ═══════════════════════════════════════════════
// RENDER ALL
// ═══════════════════════════════════════════════
function resetCityData() {
  cW = cA = cH = cC = cCrypto = null;
  renderBestDay();
  destroyTempChart();
  ['kpiTemp','kpiWind','kpiAqi','sunrise','sunset','daylen','weatherNow','country','holidays','fxTry','fxEur','fxGbp'].forEach(id => el(id).textContent = '—');
  ['hourly','daily','air','crypto','aqiLabel','holidayYear'].forEach(id => el(id).textContent = '');
  renderAqiBar(null);
  renderTravelScore();
}

async function renderAll(ctx) {
  ctx = normalizeCtx(ctx);
  if (!ctx) return;
  const version = ++renderVersion;
  lastCtx=ctx;
  storage.setItem(LK, JSON.stringify(ctx));
  resetCityData();
  sourceRecords = {};
  lastRefreshAt = Date.now();
  updateHeader(ctx);
  syncCityUrl(ctx);
  loadTime(ctx);
  renderComparePanel();
  sourceLoading = true;
  renderSourceStatus();
  renderSourceDetails();
  setLoad(true);
  const sources = [
    ['Open-Meteo Weather', loadWeather], ['Open-Meteo Air', loadAir],
    ['Sunrise-Sunset', loadSun], ['Exchange rates', loadFx],
    ['CoinGecko', loadCrypto], ['REST Countries', loadCountry], ['Nager.Date', loadHolidays]
  ];
  try {
    const res = await Promise.allSettled(sources.map(([, load]) => load(ctx, version)));
    if (version !== renderVersion) return;
    sourceFailures = sources.filter((_, i) => res[i].status === 'rejected').map(([name]) => name);
    sourceLoading = false;
    sourceChecked = true;
    sources.forEach(([name], i) => { if (res[i].status === 'rejected') delete sourceRecords[name]; });
    const failureTargets = {'Open-Meteo Weather':['weatherNow'], 'Open-Meteo Air':['air'], 'Sunrise-Sunset':['sunrise','sunset','daylen'], 'Exchange rates':['fxTry','fxEur','fxGbp'], 'CoinGecko':['crypto'], 'REST Countries':['country'], 'Nager.Date':['holidays']};
    sourceFailures.forEach(name => failureTargets[name].forEach(id => el(id).textContent = t('dataUnavailable')));
    renderSourceStatus();
    renderSourceDetails();
    renderComparePanel();
    toast(sourceFailures.length ? t('toastPartial', res.length-sourceFailures.length, res.length) : t('toastOk'), sourceFailures.length ? 'warn' : 'ok');
  } finally { setLoad(false); }
}

// ═══════════════════════════════════════════════
// SEARCH / LOCATE
// ═══════════════════════════════════════════════
async function doSearch(chooseFirst = false) {
  const q = el('q').value.trim();
  if (!q) { toast(t('toastWriteCity'), 'warn'); return; }
  const version = ++searchVersion;
  closeSearchResults();
  setLoad(true);
  try {
    const cities = await searchCities(q);
    if (version !== searchVersion) return;
    if (cities.length > 1 && chooseFirst !== true) showSearchResults(cities, 'main', version);
    else await activateSearchResult(cities[0], 'main', version);
  } catch (e) {
    if (version === searchVersion) toast(e.message || t('toastSearchErr'), 'bad');
  } finally { setLoad(false); }
}

async function doLocate() {
  if(!navigator.geolocation){toast(t('toastNoGeo'),'warn');return;}
  const version = ++searchVersion;
  setLoad(true);
  navigator.geolocation.getCurrentPosition(async pos=>{
    try {
      const {latitude:lat,longitude:lon}=pos.coords;
      const d=await gfetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,{headers:{Accept:'application/json'}});
      const addr=d?.address||{};
      const city=addr.city||addr.town||addr.village||addr.county||t('myLocation');
      const ctx={name:city,country:addr.country||'—',countryCode:(addr.country_code||'—').toUpperCase(),lat,lon,timezone:null};
      try{const tz=await gfetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&timezone=auto&forecast_days=1`);ctx.timezone=tz?.timezone||null;}catch(_){}
      if (version !== searchVersion) return;
      await renderAll(ctx);
      if (version !== searchVersion) return;
      toast(t('toastLocated'),'ok');
    } catch(e){ if (version === searchVersion) { console.error(e); toast(t('toastLocFail'),'bad'); } }
    finally{ setLoad(false); }
  }, err=>{ if (version === searchVersion) { console.error(err); toast(t(err.code === 1 ? 'toastLocDenied' : 'toastLocFail'),'warn'); } setLoad(false); },
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
  setInterval(refreshIfDue, 60 * 1000);
  document.addEventListener('visibilitychange', refreshIfDue);
  window.addEventListener('online', () => { lastRefreshAt = 0; refreshIfDue(); });
  el('planDate').addEventListener('change', () => {
    if (!planDraft) return;
    planDraft.date = el('planDate').value;
    persistTripPlan();
  });
  el('planNotes').addEventListener('input', () => {
    if (!planDraft) return;
    planDraft.notes = el('planNotes').value;
    persistTripPlan();
  });
  el('btnExportPlan').addEventListener('click', exportTripPlan);
  el('btnCelsius').addEventListener('click', () => setTemperatureUnit('c'));
  el('btnFahrenheit').addEventListener('click', () => setTemperatureUnit('f'));
  el('langSelect').addEventListener('change', event => setLang(event.target.value));
  el('btnCloseResults').addEventListener('click', closeSearchResults);
  el('cityResults').addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearchResults(); el('q').focus(); }
  });
  ['q', 'compareQ'].forEach(id => el(id).addEventListener('input', () => {
    if (id === 'q') searchVersion++; else compareVersion++;
    closeSearchResults();
  }));
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
    const ctx = normalizeCtx(city);
    if (ctx) activateSearchResult(ctx, 'main', ++searchVersion);
    else doSearch();
  });
  el('q').addEventListener('keydown', e=>{ if(e.key==='Enter') doSearch(); });
  el('btnLocate').addEventListener('click', doLocate);
  el('btnRefresh').addEventListener('click', ()=>{ if(lastCtx) { searchVersion++; renderAll(lastCtx); } else toast(t('toastNeedCity'),'warn'); });
  el('btnSave').addEventListener('click', toggleFavourite);
  el('favSelect').addEventListener('change', async ()=>{
    const i=el('favSelect').value; if(i==='') return;
    await loadFavouriteByIndex(+i);
    el('favSelect').value='';
  });
  el('btnCopy').addEventListener('click', async ()=>{
    if(!lastCtx) return;
    try {
      await navigator.clipboard.writeText(`${fmt(lastCtx.lat,6)}, ${fmt(lastCtx.lon,6)}`);
      toast(t('toastCopied'),'ok');
    } catch { toast(t('toastCopyFail'),'bad'); }
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
    doSearch(true);
    return;
  }
  try {
    const last=JSON.parse(storage.getItem(LK));
    if(normalizeCtx(last)){ el('q').value=last.name||''; renderAll(last); return; }
  } catch(_){}
  el('q').value = lang === 'en' ? 'London' : 'İstanbul';
  doSearch(true);
})();
