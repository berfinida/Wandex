# Wandex

Wandex, tek sayfa yapıda çalışan zengin bir seyahat dashboard projesidir.  
Hava durumu, hava kalitesi, ülke bilgileri, tatiller, döviz, kripto, harita ve şehir karşılaştırma gibi verileri aynı ekranda toplar.

## Özellikler

- Koyu/Açık tema (localStorage + sistem tercihi)
- TR/EN i18n
- Şehir arama + konumdan bulma
- Leaflet harita görünümü
- Yerel saat (timezone tabanlı, harici saat API'siz)
- Saatlik/Günlük hava durumu + sıcaklık grafiği (Chart.js)
- Hava kalitesi (AQI) ve görsel AQI barı
- Country/holiday/döviz/kripto panelleri
- Favoriler (kaydetme + dropdown’dan yükleme)
- Recent searches
- Compare cities paneli
- Shareable city link (URL parametreleri + link kopyalama)
- Travel Score (mevcut verilerden türetilmiş skor)
- Footer developer credit

## Proje Yapısı

- `index.html`: Sadece HTML yapı ve dış kaynak bağlantıları
- `style.css`: Tüm stil kuralları
- `app.js`: Tüm uygulama mantığı

## Kullanılan Kaynaklar

- Open-Meteo (weather + air quality + timezone)
- Sunrise-Sunset
- WorldTimeAPI **kullanılmıyor** (yerel saat `Intl.DateTimeFormat` ile)
- REST Countries
- Nager.Date
- open.er-api.com
- CoinGecko
- OpenStreetMap / Nominatim
- Leaflet
- Chart.js

## Çalıştırma

Statik bir projedir.

1. Dosyaları aynı klasörde tutun:
   - `index.html`
   - `style.css`
   - `app.js`
2. `index.html` dosyasını tarayıcıda açın.

Not: Bazı tarayıcı güvenlik kısıtları nedeniyle en stabil kullanım için basit bir local server ile açmanız önerilir.

## Geliştirme Notları

- Tema flaşını önlemek için `index.html` içinde küçük bir erken tema preload script’i vardır.
- Uygulama tek kaynak mimaride tutulur: inline CSS/JS kullanılmaz (preload script hariç).
- Özellik genişletirken mevcut `id`/`class` uyumluluğunu koruyun.

