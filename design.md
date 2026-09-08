# Design — Sinara Artha Naya

A locked design system for the KOPERASI SINARA ARTHA NAYA static site. Every page
reads this file before emitting code. Do not regenerate per page — extend or amend
this file when the system needs to grow.

## Genre

editorial · nada Luxury (premium eksklusif) · kustom (terkunci pada pola warna brand)

## Macrostructure family

Pola warna hijau-emas-di-atas-gelap dipertahankan; struktur visual dirombak.
Halaman berbagi family; variasi hanya pada archetype komponen.

- Home page: **Marquee Hero** — fold adalah pernyataan tunggal; di bawahnya
  berubah menjadi *produk index* editorial bernomor, lalu value-grid, band tentang
  dengan foto, dan penutup statement.
- Catalogue page (product): **Catalogue** — head statement + baris produk + spec-sheet.
- Content / manifest pages (about): **Manifesto** ringan.
- Utility pages (contact): statement head + kontak index + form panel.
- Legal / document pages (terms · privacy): **Long Document**.

## Theme (custom — brand-locked)

- `--color-paper`        oklch(17% 0.012 152)   — base (≈ #0a0f0c)
- `--color-paper-2`      oklch(21.5% 0.018 150) — surface (≈ #111a14)
- `--color-paper-3`      oklch(26% 0.020 148)   — raised (≈ #182118)
- `--color-paper-deep`   oklch(13.5% 0.012 152) — footer / inset (≈ #050d07)
- `--color-ink`          oklch(96% 0.012 160)   — primary text (≈ #f0faf4)
- `--color-ink-2`        oklch(80% 0.050 156)   — secondary text (≈ #a3c9b0)
- `--color-muted`        oklch(64% 0.040 155)   — muted (≈ #6b8f77)
- `--color-rule`         oklch(31% 0.024 150)   — hairline
- `--color-rule-2`       oklch(40% 0.028 150)   — stronger border
- `--color-brand`        oklch(72% 0.19 150)    — hijau (≈ #22c55e)
- `--color-brand-deep`   oklch(63% 0.17 149)    — hijau gelap (≈ #16a34a)
- `--color-gold`         oklch(86% 0.17 92)     — kuning emas (≈ #facc15)
- `--color-gold-deep`    oklch(84% 0.16 88)     — emas hover (≈ #fbbf24)
- `--color-focus`        oklch(84% 0.21 92)     — ring fokus

Peran aksen: **emas = sinyal eksklusif** (CTA utama, kicker small-caps, nomor kecil);
**hijau = institusional** (link, active-nav, border field, focus ring). Footprint
gabungan ≤ 5% viewport.

## Typography

- Display: **Fraunces** (Google Fonts, variable, roman — tidak ada italic di heading)
- Body:    **Geist** (Google Fonts)
- Outlier: — (tanpa mono; angka & label memakai Geist small-caps)
- Display tracking: -0.015em; label/kicker: letter-spacing 0.14em uppercase 0.75rem
- Type scale anchor: major third 1.25; `--text-display` = clamp(2.6rem, 4vw + 1rem, 4.6rem)

## Spacing

4-pt scale bernama (lihat `tokens.css`). Halaman memakai token `var(--space-*)`,
tidak pernah nilai mentah. Section rhythm sengaja tidak rata (96px / 64px / 128px
bergantian) — bukan grid padding seragam.

## Motion

- Easings: `--ease-out` cubic-bezier(0.16,1,0.3,1) — masuk · `--ease-in` keluar.
- Reveal pattern: **none** — situs motion-cut; transisi hanya hover/focus/menu.
- Reduced-motion: collapse ke crossfade ≤150ms.

## Microinteractions stance

- Silent success; form → WhatsApp tetap sinkron di submit handler (main.js).
- Hover delay 0 — tanpa tooltip.
- `:focus-visible` ring gold, tampil instan, tanpa animasi ring.

## CTA voice

- Primary: fill **emas**, text ink gelap, radius pill, uppercase 0.8rem + tracking,
  hover naik 1px ke `--color-gold-deep`. Teks tetap singkat satu baris.
- Secondary: ghost — border `--color-rule-2`, text ink-2; hover border + text gold.

## Per-page allowances

- Marketing/content MAY use foto asli kantor (`assets/images/ruang_kantor_kerja.webp`)
  dalam frame hairline (bukan chrome browser rekaan).
- Legal pages: typography only.
- Semua halaman: tanpa fake chrome, tanpa ilustrasi rekaan, tanpa stock foto.

## What pages MUST share

- Logo & wordmark (assets/logo/logo.png) + brand copy.
- Emas + hijau + penempatannya (≤5% viewport).
- Fraunces (display) + Geist (body).
- CTA voice (pill emas + ghost), hairline language, kicker small-caps.
- Header (N1b elegan) + footer (Ft5 statement) — disalin statis ke setiap halaman.

## What pages MAY differ on

- Section komposisi dalam family masing-masing (home = index editorial, product =
  catalogue, about = manifesto, contact = index kontak, legal = long document).
- Urutan/struktur hanya diizinkan berbeda sesuai family; bukan tema.

## Exports

Drop-in format sistem desain. Lihat `tokens.css` di root (semua token hidup di sana;
`css/style.css` meng-import-nya).

### tokens.css
File lengkap di `tokens.css`. Tidak diduplikasi di sini.
