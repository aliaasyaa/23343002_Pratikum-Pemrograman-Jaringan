# 🌐 JobSheet 5 – Web Server dan Express.js

## 📌 Deskripsi
JobSheet ini membahas penerapan **Web Server menggunakan Node.js dan Express.js**. Pada praktikum ini dibuat sebuah aplikasi web sederhana yang mampu menangani routing, menampilkan halaman HTML, mengelola aset statis (CSS, JavaScript, gambar), serta menggunakan sistem templating untuk menghasilkan tampilan web yang dinamis.

---

## 🎯 Tujuan Pembelajaran
Setelah menyelesaikan JobSheet ini, mahasiswa diharapkan mampu:
1. Memahami konsep dasar web server dan cara kerjanya.
2. Mengimplementasikan web server menggunakan Express.js.
3. Membuat routing HTTP untuk beberapa halaman web.
4. Mengelola file statis seperti HTML, CSS, JavaScript, dan gambar.
5. Menggunakan template engine untuk menghasilkan halaman web dinamis.
6. Menangani halaman tidak ditemukan (error 404) menggunakan wildcard routing.

---

## 🧠 Konsep Dasar
Beberapa konsep penting yang digunakan pada JobSheet ini antara lain:
- **Web Server**: Sistem yang menerima request dari client (browser) dan mengirimkan response melalui protokol HTTP.
- **Node.js**: Runtime JavaScript yang berjalan di sisi server.
- **Express.js**: Framework Node.js yang mempermudah pembuatan web server dan pengelolaan routing.
- **Routing**: Mekanisme untuk menentukan respon berdasarkan URL yang diakses.
- **Static Assets**: File statis seperti HTML, CSS, JavaScript, dan gambar.
- **Template Engine (Handlebars)**: Digunakan untuk membuat tampilan web dinamis dan reusable.
- **Wildcard Route**: Digunakan untuk menangani halaman yang tidak ditemukan (404).

---

## ⚙️ Implementasi Program
Implementasi pada JobSheet ini meliputi:
- Pembuatan server menggunakan Express.js.
- Konfigurasi routing untuk halaman utama, bantuan, tentang, dan informasi cuaca.
- Penggunaan HTML dan JSON sebagai response.
- Penyajian file statis menggunakan middleware `express.static`.
- Penerapan template engine Handlebars (`.hbs`) untuk memisahkan logika dan tampilan.
- Pembuatan layout reusable menggunakan partials (header dan footer).
- Penanganan error halaman menggunakan wildcard route dan halaman 404.

---

## 🔄 Alur Pembelajaran
Alur pengerjaan JobSheet ini dilakukan secara bertahap sebagai berikut:
1. Inisialisasi project menggunakan NPM.
2. Instalasi Express.js dan dependency pendukung.
3. Pembuatan struktur folder aplikasi web server.
4. Implementasi routing dasar menggunakan Express.js.
5. Integrasi HTML dan JSON sebagai response server.
6. Pengelolaan aset statis (CSS, JavaScript, gambar).
7. Penerapan template engine Handlebars.
8. Penggunaan partials untuk efisiensi kode tampilan.
9. Implementasi wildcard route untuk halaman error 404.
10. Pengujian aplikasi melalui browser.

---
