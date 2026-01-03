# 📦 Jobsheet 6 – JSON HTTP Endpoints

## 🎯 Tujuan Pembelajaran
Pada Jobsheet ini, mahasiswa diharapkan mampu memahami dan mengimplementasikan **JSON HTTP Endpoints** menggunakan **Node.js** dan **Express.js**. Mahasiswa juga dapat membuat endpoint yang mampu menerima parameter dari URL (query string) serta menampilkan data dalam format JSON secara statis maupun dinamis.

---

## 📚 Konsep Dasar
JSON HTTP Endpoints adalah **titik akhir (endpoint)** pada aplikasi web yang digunakan untuk mengirim atau menerima data dalam format **JSON** melalui protokol **HTTP**. Endpoint ini umumnya digunakan sebagai bagian dari **API (Application Programming Interface)**.

Pada Jobsheet ini, konsep yang dipelajari meliputi:
- Penggunaan Express.js untuk membuat server
- Pembuatan endpoint berbasis HTTP
- Pemanfaatan `req.query` untuk membaca parameter dari URL
- Pengiriman response dalam format JSON
- Integrasi API eksternal untuk data cuaca

---

## 🛠️ Implementasi Program
Implementasi dilakukan dengan membuat endpoint `/infocuaca` yang dapat diakses melalui browser atau aplikasi lain.

Fitur utama yang diimplementasikan:
- Endpoint JSON statis (`/infocuaca`)
- Endpoint JSON dinamis menggunakan query parameter `address`
- Validasi input query
- Pemanggilan API eksternal untuk mendapatkan data cuaca
- Pengembalian data cuaca dalam format JSON

Contoh akses endpoint:
