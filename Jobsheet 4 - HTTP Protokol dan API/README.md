# 🌐 JobSheet 3 – HTTP Request and API

## 👤 Identitas
- **Nama** : Aisya Alia  
- **NIM**  : 23343002  
- **Mata Kuliah** : Praktikum Pemrograman Jaringan  

---

## 🎯 Tujuan Pembelajaran
JobSheet 4 ini bertujuan untuk:
- Memahami konsep HTTP Request dan cara kerjanya  
- Memahami konsep API (Application Programming Interface)  
- Mampu melakukan request data ke API eksternal menggunakan Node.js  
- Mengolah dan menampilkan data hasil response API  

---

## 📘 Konsep Dasar HTTP Request
HTTP (Hypertext Transfer Protocol) Request merupakan mekanisme utama yang digunakan oleh client untuk meminta data atau layanan kepada server. Proses HTTP Request melibatkan metode tertentu seperti GET, POST, PUT, dan DELETE yang digunakan sesuai dengan kebutuhan aplikasi.

Dalam prosesnya, client mengirimkan request ke server melalui URL tertentu, kemudian server memproses permintaan tersebut dan mengirimkan response berupa data atau informasi yang diminta. Response biasanya disertai dengan status code untuk menunjukkan keberhasilan atau kegagalan permintaan.

---

## 🔌 Konsep API (Application Programming Interface)
API adalah sekumpulan aturan dan protokol yang memungkinkan aplikasi saling berkomunikasi. API bekerja dengan model **request–response**, di mana client mengirimkan request ke endpoint tertentu dan API mengembalikan response dalam format terstruktur seperti JSON.

Pada JobSheet ini digunakan:
- **Weatherstack API** untuk mendapatkan data cuaca  
- **Mapbox API** untuk mendapatkan data lokasi (latitude dan longitude)  

API mempermudah integrasi layanan eksternal tanpa perlu membangun sistem dari awal.

---

## 🛠️ Implementasi Praktikum
Implementasi dilakukan menggunakan **Node.js** dengan bantuan module `postman-request`. Tahapan implementasi meliputi:
- Membuat project Node.js  
- Menginstall dependency menggunakan NPM  
- Mengakses API Weatherstack menggunakan HTTP request  
- Mengambil dan mengolah data JSON dari response  
- Menampilkan informasi cuaca melalui terminal  

Kode program disimpan pada folder `src/`, sedangkan hasil pengujian dan output disimpan pada folder `screenshot`.

---

## 🔄 Alur Pembelajaran
Alur pembelajaran JobSheet 4 adalah sebagai berikut:
1. Mempelajari konsep HTTP Request dan API  
2. Membuat akun dan mendapatkan API key dari Weatherstack  
3. Mengakses endpoint API melalui browser  
4. Mempelajari struktur data JSON dari response API  
5. Mengimplementasikan HTTP request menggunakan Node.js  
6. Mengolah data response dan menampilkan output  
7. Mengintegrasikan API cuaca dan API lokasi  

---

## ✅ Kesimpulan
Melalui JobSheet 4 ini, mahasiswa memahami bagaimana HTTP Request dan API bekerja dalam aplikasi berbasis jaringan. Penggunaan API Weatherstack dan Mapbox memberikan pengalaman langsung dalam mengakses layanan eksternal, mengolah data JSON, serta menampilkan informasi secara dinamis menggunakan Node.js. JobSheet ini menjadi dasar penting dalam pengembangan aplikasi jaringan modern.
