<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. Before editing code, verify conventions with the local Next.js docs under `node_modules/next/dist/docs/` when available, and follow deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio 2026 - AI Gelistirme Kurallari

Bu depo, Batuhan Keskinsoy icin sade, modern, performansli ve SEO odakli bir kisisel portfolio/ozgecmis sitesidir.

## Temel Oncelikler

1. Performans (Core Web Vitals, dusuk JS, hizli ilk acilis)
2. SEO (metadata, semantic HTML, temiz baslik hiyerarsisi)
3. Server-first mimari (varsayilan Server Components)
4. Sadelik + creative gorunus (abartisiz ama premium his)
5. Uzun vadeli bakim kolayligi

## Mimari Kurallar

- Varsayilan olarak Server Components kullan.
- Sadece zorunlu etkileşimler icin kucuk Client Components yaz (ornegin tema degistirme).
- API/admin panel yok; tum icerik statik veya build-time uretilebilir olmali.
- Gereksiz bagimlilik ekleme.
- Yeni dosya acmadan once mevcut yapida ayni sorumlulugu tasiyan dosya var mi kontrol et.

## Tema ve UI Kurallari

- Varsayilan tema dark mode.
- Header icinde light/dark toggle bulunmali.
- Ilk yuklemede kullanici tercihi varsa onu kullan, yoksa `prefers-color-scheme` degerine gore ac.
- Tasarim sade, modern ve senior frontend kalitesini yansitan detaylarda olmali (tipografi, bosluk, hizalama, hover durumlari).
- Animasyonlar kisa, amacli ve performans dostu olmali.

## SEO ve Icerik Kurallari

- `metadata` alanlarini eksiksiz doldur (title, description, keywords, open graph, twitter).
- Semantik etiketleri kullan (`header`, `main`, `section`, `footer`, `nav`).
- Tek bir `h1` kullan; alt basliklari mantikli sirala.
- Icerik dili Turkce olabilir ama teknik terimler dogal sekilde korunabilir.
- Erisilebilirlik: kontrast, focus gorunurlugu, anlamli buton/link metinleri.

## Klasor Yapisi Kurali

- `app/` -> route ve layout
- `components/` -> UI bolumleri ve kucuk client bilesenler
- `lib/` -> statik icerik, helper ve sabitler
- `public/` -> statik varliklar

Klasorleme sade olmali; gereksiz katman veya asiri soyutlama yapilmaz.

## Kod Kalitesi

- TypeScript strict uyumlu kod yaz.
- `any` kullanmaktan kacin.
- Componentler tek sorumluluklu olsun.
- Gereksiz `useEffect` ve derived state kullanma.
- Buyuk refactor gerekmiyorsa minimal ve odakli diff tercih et.

## Teslimat Beklentisi

- Kod uretime yakin temizlikte olmali.
- Proje acildiginda dogrudan anlamli bir portfolio deneyimi sunmali.
- Yeni degisiklikler mevcut kurallarla tutarli olmali.
