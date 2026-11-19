# Portofolio Febiola Marlentina

Website portofolio interaktif untuk menampilkan profil, pengalaman kerja, keahlian, dan proyek desain interior Febiola Marlentina. Website dibuat menggunakan React, Vite, Three.js, React Three Fiber, dan Swiper.

## Fitur

- Halaman utama dengan robot 3D interaktif.
- Profil profesional, pendidikan, pengalaman kerja, keahlian, dan sertifikasi.
- Lanyard 3D interaktif.
- Galeri proyek dengan slider, navigasi, dan tampilan gambar besar.
- Pilihan bahasa Indonesia dan Inggris.
- Efek jejak cursor bercahaya pada perangkat dengan mouse.
- Tata letak responsif.

## Struktur Proyek

```text
robot/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── assets/
        ├── logolentina.png
        └── componen/
            ├── about.jsx
            ├── about.css
            ├── about-lanyar.jsx
            ├── about-lanyar.css
            ├── cursor.jsx
            ├── section-conten.jsx
            ├── section-conten.css
            ├── profil.jpeg
            └── gambar-project1/ sampai gambar-project10/
```

## Fungsi File Utama

| File/folder | Keterangan |
| --- | --- |
| `index.html` | Dokumen HTML utama dan metadata halaman, termasuk favicon. |
| `src/main.jsx` | Titik masuk React yang memasang komponen `App`. |
| `src/App.jsx` | Menyusun halaman utama, robot 3D, navigasi, pilihan bahasa, profil, portofolio, dan footer. |
| `src/App.css` | Gaya untuk tata letak dan elemen utama halaman. |
| `src/assets/componen/about.jsx` | Menampilkan ringkasan profil, pendidikan, pengalaman, keahlian, dan sertifikasi dalam bahasa Indonesia atau Inggris. |
| `src/assets/componen/about.css` | Gaya untuk bagian profil/CV. |
| `src/assets/componen/about-lanyar.jsx` | Implementasi elemen lanyard 3D interaktif. |
| `src/assets/componen/about-lanyar.css` | Gaya untuk bagian lanyard. |
| `src/assets/componen/cursor.jsx` | Efek jejak cursor bercahaya. |
| `src/assets/componen/section-conten.jsx` | Data proyek dan komponen slider galeri, termasuk lightbox untuk memperbesar gambar. |
| `src/assets/componen/section-conten.css` | Gaya slider portofolio, gambar, dan lightbox. |
| `src/assets/componen/gambar-project1/` – `gambar-project10/` | Gambar proyek: klinik, kamar anak, apartemen, toko sepatu, kantor Bio Inti Agrindo, spa, Serenia Hills, Duckil Textile, rumah Mrs. M, dan Pondok Kopi. |
| `src/assets/componen/profil.jpeg` | Foto profil yang digunakan pada bagian tentang. |
| `src/assets/logolentina.png` | Logo yang digunakan pada halaman. |
| `package.json` | Dependensi dan perintah untuk menjalankan, membangun, serta memeriksa aplikasi. |
| `vite.config.js` | Konfigurasi Vite dan plugin React serta Tailwind CSS. |

## Menjalankan Proyek

Aplikasi ini berada di folder `robot/` sebagai bagian dari workspace pnpm. Jalankan perintah berikut dari folder root repository (folder yang berisi `pnpm-workspace.yaml`):

```bash
pnpm install
pnpm run dev
```

## Build dan Pemeriksaan

Jalankan dari folder root repository:

```bash
pnpm run build
pnpm run lint
```

Hasil build tersedia di `robot/dist`. Untuk deployment dari root repository, gunakan `pnpm run build` sebagai build command dan `robot/dist` sebagai output directory.
