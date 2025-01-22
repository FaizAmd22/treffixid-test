# TreffixID Test

TreffixID Test adalah aplikasi berbasis web yang menggunakan teknologi modern seperti React, Leaflet, TailwindCSS, dan TypeScript.

## 📋 Prasyarat
Pastikan Anda memiliki perangkat berikut terinstal di sistem Anda:

Node.js (disarankan versi 18 ke atas)

Git


## 📦 Cara Menjalankan Aplikasi
Ikuti langkah-langkah di bawah ini untuk menjalankan aplikasi secara lokal:

### 1. Clone Repository
Clone repository ke komputer lokal Anda menggunakan perintah berikut:

```bash
git clone https://github.com/FaizAmd22/treffixid-test.git
```


### 2. Pindah ke Direktori Proyek
Masuk ke direktori tempat Anda meng-clone proyek:

```bash
cd treffixid-test
```

### 3. Install Dependensi
Jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:

```bash
npm install
```

### 4. Menjalankan Aplikasi
Untuk menjalankan aplikasi dalam mode pengembangan, gunakan perintah berikut:

```bash
npm run dev
```
Setelah itu, buka browser Anda dan akses:

```arduino
http://localhost:5173
```

### 5. Build Aplikasi
Untuk membangun aplikasi untuk produksi, gunakan perintah berikut:

```bash
npm run build
```
### 6. Pratinjau Build
Setelah membangun aplikasi, Anda dapat menjalankan pratinjau hasil build menggunakan:

```bash
npm run preview
```

## 📂 Struktur Folder
Berikut adalah struktur folder utama dalam proyek ini:

```graphql
treffixid-test/
├── public/         # File publik statis
├── src/            # Kode sumber aplikasi
│   ├── assets/     # Semua asset gambar dan icon
│   ├── components/ # Komponen React
│   ├── data/       # Data JSON
│   ├── interface/  # Definisi TypeScript Interface
│   ├── layouts/    # Kerangka yang digunakan pada halaman
│   └── pages/      # Semua Halaman pada aplikasi
├── package.json    # Konfigurasi npm
└── vite.config.ts  # Konfigurasi Vite
```

## 🛠 Teknologi yang Digunakan

React: Library JavaScript untuk membangun antarmuka pengguna.

React Router: Untuk navigasi antar halaman.

Leaflet: Library untuk membuat peta interaktif.

TailwindCSS: Framework CSS untuk desain responsif.

TypeScript: Superset dari JavaScript yang mendukung tipe statis.

Vite: Build tool modern untuk pengembangan frontend.
