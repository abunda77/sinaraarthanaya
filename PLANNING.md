# PLANNING.md

## Project: Website Company Profile KOPERASI SINARA ARTHA NAYA

## 1. Ringkasan Project

Buat website company profile profesional untuk **KOPERASI SINARA ARTHA NAYA** menggunakan teknologi dasar:

* HTML
* CSS
* JavaScript Vanilla

Website harus responsif dan nyaman dibuka di:

* Desktop
* Tablet
* Mobile

Website memiliki gaya visual modern, bersih, terpercaya, dan cocok untuk lembaga keuangan/koperasi. Referensi visual dan struktur utama mengacu pada:

https://kospinsinaraartha.co.id

Namun desain tidak boleh sekadar menyalin mentah. Buat versi yang lebih rapi, ringan, modern, dan mudah dikembangkan.

---

## 2. Identitas Perusahaan

### Nama Lengkap Perusahaan

KOPERASI SINARA ARTHA NAYA

### Nama Brand / Nama Koperasi

SINARA ARTHA NAYA

### Jenis Website

Company Profile Koperasi Simpanan

### Alamat

Jl. Komplek ruko Sesetan Agung No.16 S, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223

### Kontak

WhatsApp / HP: 0813-3308-688
Email: [cs@sinaraarthanaya.com](mailto:cs@sinaraarthanaya.com)

---

## 3. Tujuan Website

Website ini dibuat untuk:

1. Menampilkan profil resmi KOPERASI SINARA ARTHA NAYA.
2. Membangun kepercayaan calon anggota/nasabah.
3. Menjelaskan produk simpanan secara jelas dan mudah dipahami.
4. Memudahkan pengunjung menghubungi koperasi melalui WhatsApp, email, dan form kontak.
5. Memberikan informasi dasar tentang syarat layanan dan kebijakan privasi.
6. Menjadi landing page yang ringan, cepat, responsif, dan profesional.

---

## 4. Target Pengguna

Website ditujukan untuk:

* Calon anggota koperasi
* Nasabah aktif
* Masyarakat umum yang ingin mengetahui produk simpanan
* Pelaku UMKM
* Karyawan atau keluarga yang membutuhkan produk simpanan aman
* Pengunjung mobile dari WhatsApp, Google, dan media sosial

---

## 5. Struktur Halaman Website

Website terdiri dari 6 halaman utama:

1. Home
2. About
3. Product
4. Contact Us
5. Terms
6. Privacy

Gunakan struktur file sederhana:

```txt
/project-root
│
├── index.html
├── about.html
├── product.html
├── contact.html
├── terms.html
├── privacy.html
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logo/
│
├── css/
│   └── style.css
│
└── js/
    └── main.js
```

---

## 6. Konsep Visual

### Karakter Desain

Gunakan gaya desain:

* Profesional
* Bersih
* Modern
* Terpercaya
* Humanis
* Mudah dibaca
* Tidak terlalu ramai
* Tidak terlihat seperti template murahan yang baru keluar dari oven AI

### Pattern Warna Utama

Gunakan kombinasi warna:

* Hijau
* Kuning
* Hitam
* Putih

### Rekomendasi Warna

```css
:root {
  --color-primary: #0E7A3B;
  --color-primary-dark: #075C2B;
  --color-secondary: #F4C430;
  --color-secondary-soft: #FFF3C4;
  --color-dark: #111111;
  --color-gray: #666666;
  --color-light-gray: #F5F7F6;
  --color-white: #FFFFFF;
}
```

### Kesan Warna

* Hijau: stabil, aman, tumbuh, keuangan sehat
* Kuning: optimis, aktif, memberi energi
* Hitam: tegas, profesional
* Putih: bersih, transparan, mudah dipercaya

---

## 7. Tipografi

Gunakan font modern dari Google Fonts atau fallback system font.

Rekomendasi:

```css
font-family: 'Inter', 'Poppins', Arial, sans-serif;
```

Hierarki tipografi:

* H1: besar, kuat, maksimal 2 baris di desktop
* H2: jelas untuk setiap section
* H3: untuk card produk dan benefit
* Body text: minimal 16px agar nyaman dibaca
* Line-height: 1.6 untuk paragraf

---

## 8. Komponen Global

Semua halaman wajib menggunakan komponen berikut:

### Header / Navbar

Isi menu:

* Home
* About
* Product
* Contact Us
* Terms
* Privacy

Fitur:

* Logo di kiri
* Menu di kanan untuk desktop
* Hamburger menu untuk mobile
* Sticky header saat scroll
* CTA kecil “Hubungi Kami” menuju WhatsApp
* Active menu state sesuai halaman aktif

### Footer

Isi footer:

* Nama koperasi
* Deskripsi singkat
* Alamat
* WhatsApp
* Email
* Navigasi cepat
* Copyright

Contoh copyright:

```txt
© 2026 KOPERASI SINARA ARTHA NAYA. All rights reserved.
```

### Floating WhatsApp Button

Buat tombol WhatsApp mengambang di kanan bawah.

Link:

```txt
https://wa.me/628133308688
```

Teks default pesan:

```txt
Halo KOPERASI SINARA ARTHA NAYA, saya ingin bertanya tentang produk simpanan.
```

Gunakan encoded URL:

```txt
https://wa.me/628133308688?text=Halo%20KOPERASI%20SINARA%20ARTHA%20NAYA%2C%20saya%20ingin%20bertanya%20tentang%20produk%20simpanan.
```

---

# 9. Detail Halaman

---

## 9.1 Home Page

File:

```txt
index.html
```

### Tujuan Halaman

Memberi kesan pertama yang kuat, terpercaya, dan langsung menjelaskan manfaat koperasi.

### Section Home

#### A. Hero Section

Isi:

* Headline
* Subheadline
* CTA utama
* CTA sekunder
* Visual/image area

Headline:

```txt
Solusi Simpanan Aman dan Menguntungkan Bersama SINARA ARTHA NAYA
```

Subheadline:

```txt
KOPERASI SINARA ARTHA NAYA hadir untuk membantu Anda mengelola simpanan dengan aman, terencana, dan terpercaya melalui produk simpanan reguler, berjangka, dan deposito.
```

CTA utama:

```txt
Hubungi via WhatsApp
```

CTA sekunder:

```txt
Lihat Produk Simpanan
```

Arah desain:

* Background putih atau hijau sangat soft
* Gunakan aksen kuning pada tombol utama
* Tambahkan pattern geometris tipis atau gradient ringan
* Gunakan ilustrasi keluarga, koperasi, layanan finansial, atau kantor profesional

#### B. Benefit Section

Judul:

```txt
Mengapa Memilih SINARA ARTHA NAYA?
```

Buat 4 card benefit:

1. Simpanan Aman
2. Pelayanan Ramah
3. Produk Fleksibel
4. Koperasi Terpercaya

Deskripsi pendek tiap card maksimal 2 baris.

#### C. Product Highlight

Judul:

```txt
Produk Simpanan Kami
```

Tampilkan 3 produk utama:

1. Simpanan Hallo Sinaran
   Kategori: Regular
   Deskripsi: Simpanan reguler untuk kebutuhan transaksi dan perencanaan keuangan harian.

2. Simpanan Super Sinaran
   Kategori: Berjangka
   Deskripsi: Simpanan berjangka dengan perencanaan waktu tertentu dan potensi hasil lebih optimal.

3. Simpanan VIP Sinaran
   Kategori: Deposito
   Deskripsi: Produk deposito untuk Anda yang ingin menyimpan dana dengan lebih eksklusif dan terencana.

Setiap card memiliki tombol:

```txt
Tanya Produk
```

Tombol mengarah ke WhatsApp.

#### D. About Preview

Judul:

```txt
Tentang KOPERASI SINARA ARTHA NAYA
```

Deskripsi:

```txt
SINARA ARTHA NAYA adalah koperasi yang berkomitmen memberikan layanan simpanan yang aman, mudah dipahami, dan berorientasi pada kesejahteraan anggota.
```

CTA:

```txt
Pelajari Lebih Lanjut
```

#### E. CTA Section

Judul:

```txt
Siap Mulai Menabung Bersama Kami?
```

Deskripsi:

```txt
Hubungi tim kami untuk mendapatkan informasi produk simpanan yang sesuai dengan kebutuhan Anda.
```

Tombol:

```txt
Hubungi Kami Sekarang
```

---

## 9.2 About Page

File:

```txt
about.html
```

### Tujuan Halaman

Menjelaskan profil, nilai, visi, dan misi koperasi.

### Section About

#### A. Page Header

Judul:

```txt
Tentang KOPERASI SINARA ARTHA NAYA
```

Subjudul:

```txt
Membangun kepercayaan dan kesejahteraan anggota melalui layanan simpanan yang aman, transparan, dan profesional.
```

#### B. Company Overview

Isi narasi:

```txt
KOPERASI SINARA ARTHA NAYA adalah koperasi yang bergerak dalam layanan simpanan untuk membantu anggota mengelola keuangan secara lebih aman, terarah, dan menguntungkan. Dengan pelayanan yang ramah dan pendekatan yang profesional, kami berkomitmen menjadi mitra keuangan terpercaya bagi masyarakat.
```

#### C. Visi

```txt
Menjadi koperasi simpanan yang terpercaya, modern, dan berorientasi pada kesejahteraan anggota.
```

#### D. Misi

Gunakan bullet list:

1. Memberikan layanan simpanan yang aman dan mudah diakses.
2. Menyediakan produk simpanan yang sesuai dengan kebutuhan anggota.
3. Membangun tata kelola koperasi yang transparan dan profesional.
4. Meningkatkan literasi keuangan anggota dan masyarakat.
5. Menjadi mitra keuangan yang mendukung pertumbuhan ekonomi anggota.

#### E. Nilai-Nilai Koperasi

Buat 4 card:

* Amanah
* Transparan
* Profesional
* Bertumbuh Bersama

---

## 9.3 Product Page

File:

```txt
product.html
```

### Tujuan Halaman

Menjelaskan produk simpanan secara detail.

### Section Product

#### A. Page Header

Judul:

```txt
Produk Simpanan SINARA ARTHA NAYA
```

Subjudul:

```txt
Pilih produk simpanan yang sesuai dengan kebutuhan dan rencana keuangan Anda.
```

#### B. Product Cards

Buat 3 card produk utama.

---

### Produk 1: Simpanan Hallo Sinaran

Kategori:

```txt
Simpanan Regular
```

Deskripsi:

```txt
Simpanan Hallo Sinaran adalah produk simpanan regular yang cocok untuk kebutuhan menabung harian, pengelolaan dana pribadi, dan rencana keuangan sederhana.
```

Highlight:

* Cocok untuk simpanan harian
* Fleksibel
* Mudah dipahami
* Cocok untuk anggota baru

CTA:

```txt
Tanya Simpanan Hallo Sinaran
```

---

### Produk 2: Simpanan Super Sinaran

Kategori:

```txt
Simpanan Berjangka
```

Deskripsi:

```txt
Simpanan Super Sinaran adalah produk simpanan berjangka untuk anggota yang ingin menyimpan dana dalam periode tertentu dengan perencanaan yang lebih matang.
```

Highlight:

* Jangka waktu lebih terencana
* Cocok untuk target keuangan
* Potensi hasil lebih optimal
* Pilihan tepat untuk perencanaan masa depan

CTA:

```txt
Tanya Simpanan Super Sinaran
```

---

### Produk 3: Simpanan VIP Sinaran

Kategori:

```txt
Deposito
```

Deskripsi:

```txt
Simpanan VIP Sinaran adalah produk deposito untuk anggota yang ingin menempatkan dana secara lebih eksklusif, aman, dan terencana.
```

Highlight:

* Cocok untuk dana prioritas
* Lebih eksklusif
* Terencana
* Sesuai untuk simpanan jangka tertentu

CTA:

```txt
Tanya Simpanan VIP Sinaran
```

---

#### C. Product Comparison Table

Buat tabel perbandingan sederhana:

| Produk                 | Jenis     | Cocok Untuk      | Karakter  |
| ---------------------- | --------- | ---------------- | --------- |
| Simpanan Hallo Sinaran | Regular   | Tabungan harian  | Fleksibel |
| Simpanan Super Sinaran | Berjangka | Rencana keuangan | Terjadwal |
| Simpanan VIP Sinaran   | Deposito  | Dana prioritas   | Eksklusif |

#### D. CTA Product

Judul:

```txt
Belum Tahu Produk Mana yang Cocok?
```

Deskripsi:

```txt
Tim kami siap membantu Anda memilih produk simpanan yang sesuai dengan kebutuhan.
```

Tombol:

```txt
Konsultasi via WhatsApp
```

---

## 9.4 Contact Us Page

File:

```txt
contact.html
```

### Tujuan Halaman

Memudahkan pengunjung menghubungi koperasi.

### Section Contact

#### A. Page Header

Judul:

```txt
Hubungi Kami
```

Subjudul:

```txt
Kami siap membantu menjawab pertanyaan Anda seputar produk dan layanan KOPERASI SINARA ARTHA NAYA.
```

#### B. Contact Info Cards

Tampilkan:

Alamat:

```txt
Jl. Komplek ruko Sesetan Agung No.16 S, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223
```

WhatsApp:

```txt
0813-3308-688
```

Email:

```txt
cs@sinaraarthanaya.com
```

#### C. Contact Form

Field form:

* Nama Lengkap
* Nomor WhatsApp
* Email
* Pilihan Produk
* Pesan

Pilihan Produk:

* Simpanan Hallo Sinaran
* Simpanan Super Sinaran
* Simpanan VIP Sinaran
* Lainnya

Saat submit, gunakan JavaScript untuk membuka WhatsApp dengan pesan otomatis berisi data form.

#### D. Google Maps Embed

Tambahkan area map embed untuk alamat kantor.

Gunakan placeholder iframe Google Maps. Pastikan bisa diganti dengan embed asli nanti.

---

## 9.5 Terms Page

File:

```txt
terms.html
```

### Tujuan Halaman

Menampilkan syarat dan ketentuan umum penggunaan website.

### Konten Terms

Judul:

```txt
Syarat dan Ketentuan
```

Isi utama:

* Informasi di website bersifat umum.
* Detail produk dapat berubah sesuai kebijakan koperasi.
* Pengunjung disarankan menghubungi pihak koperasi untuk informasi terbaru.
* Penggunaan website harus dilakukan secara wajar.
* Website tidak boleh digunakan untuk aktivitas ilegal, spam, atau penyalahgunaan data.
* KOPERASI SINARA ARTHA NAYA berhak memperbarui konten website sewaktu-waktu.

Gunakan bahasa formal namun tetap mudah dipahami.

---

## 9.6 Privacy Page

File:

```txt
privacy.html
```

### Tujuan Halaman

Menjelaskan kebijakan privasi data pengunjung.

### Konten Privacy

Judul:

```txt
Kebijakan Privasi
```

Isi utama:

* Website dapat mengumpulkan data dari form kontak.
* Data yang dikumpulkan meliputi nama, nomor WhatsApp, email, dan pesan.
* Data digunakan untuk keperluan komunikasi layanan.
* Data tidak dijual kepada pihak ketiga.
* Pengunjung dapat menghubungi koperasi untuk permintaan koreksi atau penghapusan data.
* Keamanan data menjadi perhatian utama koperasi.

Gunakan bahasa sederhana dan transparan.

---

# 10. Responsive Design

Website harus menggunakan pendekatan mobile-first.

Breakpoint:

```css
/* Mobile */
max-width: 575px

/* Tablet */
min-width: 576px and max-width: 991px

/* Desktop */
min-width: 992px
```

Aturan responsive:

1. Navbar desktop berubah menjadi hamburger menu di mobile.
2. Hero section menjadi satu kolom di mobile.
3. Product card menjadi satu kolom di mobile, dua kolom di tablet, tiga kolom di desktop.
4. Font H1 diperkecil di mobile.
5. Padding section dikurangi di mobile.
6. Footer menjadi stacked layout di mobile.
7. Tombol harus mudah disentuh, minimal tinggi 44px.
8. Hindari elemen melebar keluar layar.

---

# 11. CSS Guidelines

Gunakan CSS terstruktur:

```css
/* 1. Root Variables */
/* 2. Reset */
/* 3. Base */
/* 4. Layout */
/* 5. Header */
/* 6. Hero */
/* 7. Sections */
/* 8. Cards */
/* 9. Forms */
/* 10. Footer */
/* 11. Utilities */
/* 12. Responsive */
```

Gunakan class yang rapi dan mudah dipahami:

```css
.container
.section
.section-header
.btn
.btn-primary
.btn-outline
.card
.product-card
.navbar
.footer
```

Hindari inline style kecuali benar-benar diperlukan.

---

# 12. JavaScript Guidelines

Gunakan JavaScript untuk:

1. Toggle mobile menu.
2. Active navbar state.
3. Smooth scroll jika diperlukan.
4. Contact form ke WhatsApp.
5. Header shadow saat scroll.
6. Validasi sederhana form kontak.

Contoh behavior form:

Saat user mengisi form lalu klik submit, buka WhatsApp dengan format pesan:

```txt
Halo KOPERASI SINARA ARTHA NAYA,

Saya ingin bertanya tentang produk simpanan.

Nama:
Nomor WhatsApp:
Email:
Produk:
Pesan:
```

Gunakan:

```js
encodeURIComponent()
```

untuk membuat pesan WhatsApp aman.

---

# 13. SEO Basic

Setiap halaman wajib memiliki:

* Title unik
* Meta description
* Struktur heading yang benar
* Alt text pada gambar
* URL file yang jelas
* Konten tidak terlalu tipis

Contoh title:

```html
<title>KOPERASI SINARA ARTHA NAYA - Solusi Simpanan Aman dan Terpercaya</title>
```

Contoh meta description:

```html
<meta name="description" content="Website resmi KOPERASI SINARA ARTHA NAYA. Temukan produk Simpanan Hallo Sinaran, Simpanan Super Sinaran, dan Simpanan VIP Sinaran.">
```

---

# 14. Accessibility

Website harus memperhatikan aksesibilitas:

1. Gunakan kontras warna yang cukup.
2. Tombol memiliki teks jelas.
3. Gambar memiliki alt text.
4. Form memiliki label.
5. Menu mobile dapat ditutup.
6. Link fokus terlihat saat navigasi keyboard.
7. Jangan hanya mengandalkan warna untuk membedakan informasi.

---

# 15. Performance

Target website:

* Ringan
* Cepat dibuka
* Tidak bergantung pada framework besar
* Gambar dikompresi
* CSS dan JS tidak berlebihan
* Gunakan lazy loading untuk gambar non-hero

Gunakan:

```html
<img src="..." alt="..." loading="lazy">
```

Untuk gambar hero utama, jangan gunakan lazy loading agar tampil cepat.

---

# 16. Style Konten

Gaya bahasa:

* Profesional
* Hangat
* Meyakinkan
* Tidak berlebihan
* Tidak membuat klaim finansial yang terlalu agresif
* Tidak menyebut angka bunga, bonus, atau jaminan tertentu kecuali data resmi tersedia

Hindari kalimat seperti:

```txt
Pasti untung besar.
Dijamin paling tinggi.
Tanpa risiko.
Keuntungan luar biasa.
```

Gunakan kalimat yang lebih aman:

```txt
Membantu perencanaan keuangan.
Memberikan pilihan simpanan yang fleksibel.
Dikelola secara profesional.
Informasi detail dapat dikonsultasikan dengan tim kami.
```

---

# 17. CTA Utama

Gunakan CTA konsisten:

* Hubungi via WhatsApp
* Lihat Produk Simpanan
* Konsultasi Produk
* Tanya Produk Ini
* Hubungi Kami Sekarang

Semua CTA WhatsApp mengarah ke:

```txt
https://wa.me/628133308688
```

---

# 18. Asset Direction

Gunakan gambar yang menggambarkan:

* Layanan koperasi
* Keuangan keluarga
* UMKM
* Customer service
* Kantor profesional
* Orang berdiskusi dengan ramah
* Simpanan dan perencanaan keuangan

Hindari gambar:

* Terlalu bank korporat dingin
* Terlalu mewah
* Terlalu ramai
* Terlalu generik seperti stok foto palsu berlebihan

---

# 19. Deliverables

Hasil akhir project harus berisi:

1. `index.html`
2. `about.html`
3. `product.html`
4. `contact.html`
5. `terms.html`
6. `privacy.html`
7. `css/style.css`
8. `js/main.js`
9. Folder `assets/`

Website harus bisa dibuka langsung di browser tanpa build tool.

---

# 20. Checklist Final

Sebelum dianggap selesai, pastikan:

* Semua halaman bisa dibuka.
* Navbar berjalan di desktop dan mobile.
* Tombol WhatsApp benar.
* Form kontak membuka WhatsApp dengan isi pesan otomatis.
* Layout rapi di mobile.
* Layout rapi di desktop.
* Tidak ada teks typo seperti “compyani” atau “Enail”.
* Email benar: [cs@sinaraarthanaya.com](mailto:cs@sinaraarthanaya.com)
* Nomor WhatsApp benar: 0813-3308-688
* Warna utama sesuai: hijau, kuning, hitam, putih.
* Produk simpanan tampil jelas.
* Footer konsisten di semua halaman.
* Terms dan Privacy tersedia.
* Tidak ada klaim finansial berlebihan.
* Website terasa profesional, ringan, dan terpercaya.




# Revisi Penting PLANNING.md

## Catatan Implementasi Wajib Sebelum Coding

Bagian ini berisi revisi teknis dan UX yang wajib diperhatikan sebelum implementasi website company profile **KOPERASI SINARA ARTHA NAYA**.

---

## 1. Blocker Wajib Diperbaiki

### 1.1 Penanganan WhatsApp Form dengan `window.open()`

Saat user submit form kontak, tombol harus membuka WhatsApp menggunakan `window.open()` atau `location.href`.

Namun, pemanggilan `window.open()` wajib dilakukan langsung dari event listener klik atau submit.

Jangan memanggil `window.open()` dari dalam:

* `setTimeout`
* callback async
* Promise delay
* fetch callback
* proses validasi async

Alasannya: browser mobile, terutama Safari iOS dan Chrome Android, sering memblokir `window.open()` jika dianggap bukan hasil langsung dari aksi user.

Contoh pendekatan yang benar:

```js
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const email = document.querySelector('#email').value.trim();
  const product = document.querySelector('#product').value;
  const message = document.querySelector('#message').value.trim();

  if (!name || !phone || !message) {
    alert('Mohon lengkapi nama, nomor WhatsApp, dan pesan.');
    return;
  }

  const whatsappMessage = `
Halo KOPERASI SINARA ARTHA NAYA,

Saya ingin bertanya tentang produk simpanan.

Nama: ${name}
Nomor WhatsApp: ${phone}
Email: ${email}
Produk: ${product}
Pesan: ${message}
  `;

  const whatsappUrl = `https://wa.me/628133308688?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappUrl, '_blank');
});
```

Catatan:

* Validasi harus dilakukan cepat dan sinkron.
* Jangan membuat delay sebelum membuka WhatsApp.
* Untuk fallback, boleh gunakan `window.location.href = whatsappUrl`.

---

### 1.2 Google Maps Placeholder

Jangan menggunakan iframe Google Maps kosong sebagai placeholder.

Iframe kosong terlihat tidak profesional, dapat gagal dimuat, dan sering menimbulkan area blank yang membingungkan user.

Sementara embed asli belum tersedia, gunakan tombol:

```txt
Buka di Google Maps
```

Alamat kantor:

```txt
Jl. Komplek ruko Sesetan Agung No.16 S, Sesetan, Denpasar Selatan, Kota Denpasar, Bali 80223
```

Gunakan URL Google Maps berbasis query alamat:

```txt
https://www.google.com/maps/search/?api=1&query=Jl.%20Komplek%20ruko%20Sesetan%20Agung%20No.16%20S%2C%20Sesetan%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080223
```

Implementasi HTML:

```html
<a
  href="https://www.google.com/maps/search/?api=1&query=Jl.%20Komplek%20ruko%20Sesetan%20Agung%20No.16%20S%2C%20Sesetan%2C%20Denpasar%20Selatan%2C%20Kota%20Denpasar%2C%20Bali%2080223"
  target="_blank"
  rel="noopener noreferrer"
  class="btn btn-primary"
>
  Buka di Google Maps
</a>
```

Jika nanti embed Google Maps resmi sudah tersedia, baru tambahkan iframe map.

---

### 1.3 Hamburger Menu Accessibility

Hamburger menu mobile wajib memiliki fitur:

1. Bisa dibuka dan ditutup.
2. Bisa ditutup dengan tombol close.
3. Bisa ditutup saat user klik area luar menu.
4. Bisa ditutup dengan tombol `ESC`.
5. Body tidak scroll saat menu terbuka.
6. Atribut aksesibilitas diperbarui, seperti `aria-expanded`.

Contoh behavior JavaScript:

```js
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');

function openMenu() {
  mobileMenu.classList.add('is-open');
  menuOverlay.classList.add('is-active');
  document.body.classList.add('no-scroll');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  menuOverlay.classList.remove('is-active');
  document.body.classList.remove('no-scroll');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', function () {
  const isOpen = mobileMenu.classList.contains('is-open');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuOverlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
```

Tambahkan CSS:

```css
.no-scroll {
  overflow: hidden;
}
```

---

## 2. Penyempurnaan Paling Berdampak

### 2.1 Open Graph Tags

Tambahkan Open Graph tags di setiap halaman, terutama `index.html`.

Ini penting karena target traffic kemungkinan besar berasal dari:

* WhatsApp
* Facebook
* Instagram
* Telegram
* LinkedIn
* Share link antar user

Tanpa Open Graph, preview link bisa terlihat kosong, kurang profesional, atau hanya menampilkan URL mentah.

Contoh tag untuk homepage:

```html
<meta property="og:title" content="KOPERASI SINARA ARTHA NAYA - Solusi Simpanan Aman dan Terpercaya">
<meta property="og:description" content="Temukan produk Simpanan Hallo Sinaran, Simpanan Super Sinaran, dan Simpanan VIP Sinaran dari KOPERASI SINARA ARTHA NAYA.">
<meta property="og:image" content="https://sinaraarthanaya.com/assets/images/og-image.jpg">
<meta property="og:url" content="https://sinaraarthanaya.com/">
<meta property="og:type" content="website">
```

Tambahkan juga Twitter Card:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="KOPERASI SINARA ARTHA NAYA - Solusi Simpanan Aman dan Terpercaya">
<meta name="twitter:description" content="Produk simpanan regular, berjangka, dan deposito untuk kebutuhan keuangan Anda.">
<meta name="twitter:image" content="https://sinaraarthanaya.com/assets/images/og-image.jpg">
```

Catatan:

* Siapkan file `og-image.jpg` di folder `assets/images/`.
* Ukuran rekomendasi Open Graph image: `1200 x 630 px`.
* Jangan pakai gambar terlalu kecil atau blur.

---

### 2.2 Favicon

Tambahkan favicon agar website terlihat lebih profesional di browser tab, bookmark, dan hasil pencarian.

Struktur folder:

```txt
assets/
└── favicon/
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    └── site.webmanifest
```

Tambahkan di semua halaman HTML:

```html
<link rel="icon" href="assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png">
<link rel="apple-touch-icon" href="assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="assets/favicon/site.webmanifest">
```

Tambahkan favicon ke checklist final.

---

### 2.3 Penyederhanaan Navbar Mobile

Navbar desktop boleh menampilkan menu utama.

Namun untuk mobile, jangan tampilkan terlalu banyak item karena 6 menu akan terasa padat.

Gunakan 4 menu utama di navbar mobile:

* Home
* About
* Product
* Contact

Menu berikut cukup ditaruh di footer:

* Terms
* Privacy

Aturan:

Desktop navbar:

```txt
Home | About | Product | Contact
```

Footer navigation:

```txt
Home | About | Product | Contact | Terms | Privacy
```

Catatan:

* Terms dan Privacy tetap harus ada dan mudah ditemukan.
* Jangan memaksa Terms dan Privacy masuk hamburger jika membuat menu terasa penuh.
* Fokus mobile adalah konversi: user cepat paham produk dan cepat menghubungi koperasi.

---

### 2.4 Jam Operasional

Tambahkan jam operasional di halaman Contact dan Footer agar ekspektasi pengunjung jelas.

Gunakan placeholder yang bisa diedit:

```txt
Senin - Jumat: 09.00 - 17.00 WITA
Sabtu: 09.00 - 13.00 WITA
Minggu & Hari Libur Nasional: Tutup
```

Jika jam operasional resmi belum dikonfirmasi, beri komentar di HTML:

```html
<!-- TODO: Konfirmasi ulang jam operasional resmi koperasi -->
```

Tampilkan di Contact Info Card:

```txt
Jam Operasional
Senin - Jumat: 09.00 - 17.00 WITA
Sabtu: 09.00 - 13.00 WITA
Minggu & Hari Libur Nasional: Tutup
```

---

### 2.5 Robots.txt dan Sitemap.xml

Tambahkan file SEO dasar:

```txt
robots.txt
sitemap.xml
```

Update struktur project:

```txt
/project-root
│
├── index.html
├── about.html
├── product.html
├── contact.html
├── terms.html
├── privacy.html
├── robots.txt
├── sitemap.xml
│
├── assets/
│   ├── images/
│   │   └── og-image.jpg
│   ├── icons/
│   ├── logo/
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       └── site.webmanifest
│
├── css/
│   └── style.css
│
└── js/
    └── main.js
```

Contoh `robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://sinaraarthanaya.com/sitemap.xml
```

Contoh `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sinaraarthanaya.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sinaraarthanaya.com/about.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sinaraarthanaya.com/product.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sinaraarthanaya.com/contact.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sinaraarthanaya.com/terms.html</loc>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://sinaraarthanaya.com/privacy.html</loc>
    <priority>0.4</priority>
  </url>
</urlset>
```

Catatan:

* Ganti domain `https://sinaraarthanaya.com/` jika domain final berbeda.
* Jangan lupa update sitemap setelah deploy.

---

## 3. Update Checklist Final

Tambahkan checklist berikut ke bagian akhir PLANNING.md:

* `window.open()` WhatsApp dipanggil langsung dari event listener user.
* Tidak ada `window.open()` di dalam `setTimeout`, callback async, atau delay.
* Google Maps tidak menggunakan iframe placeholder kosong.
* Tombol “Buka di Google Maps” tersedia dan mengarah ke alamat kantor.
* Hamburger menu bisa ditutup dengan tombol close.
* Hamburger menu bisa ditutup dengan tombol `ESC`.
* Hamburger menu bisa ditutup saat klik area luar.
* Body tidak scroll saat mobile menu terbuka.
* Navbar mobile hanya menampilkan menu utama: Home, About, Product, Contact.
* Terms dan Privacy tersedia di footer.
* Open Graph tags tersedia di semua halaman utama.
* `og-image.jpg` tersedia di folder `assets/images/`.
* Favicon tersedia di folder `assets/favicon/`.
* Jam operasional tampil di footer dan halaman Contact.
* `robots.txt` tersedia.
* `sitemap.xml` tersedia.
* Semua URL di sitemap sesuai domain final.
