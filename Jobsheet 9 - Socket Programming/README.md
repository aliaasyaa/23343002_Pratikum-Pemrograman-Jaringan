# 💬 Jobsheet 9 – Socket Programming

## 🎯 Tujuan
Jobsheet ini bertujuan untuk memahami konsep Socket Programming dan komunikasi real-time menggunakan Socket.IO pada Node.js.

## 📘 Konsep
Socket Programming memungkinkan komunikasi dua arah antara client dan server secara real-time tanpa mekanisme request–response seperti HTTP.

## ⚙️ Implementasi
Aplikasi ini merupakan aplikasi chat real-time dengan fitur:
- Multi-user
- Multi-room
- Kirim pesan teks
- Kirim lokasi (Google Maps)
- Notifikasi join & leave

## 🔄 Alur Kerja
1. User masuk dengan username dan room
2. Server menyimpan user
3. Pesan dikirim menggunakan event socket
4. Lokasi dikirim dan ditampilkan sebagai link
5. Semua event berjalan real-time

## ▶️ Menjalankan Aplikasi
```bash
npm install
npm run dev
