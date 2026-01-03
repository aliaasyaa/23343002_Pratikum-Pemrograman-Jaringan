// Lokasi file: src/utils/getBerita.js

const request = require('postman-request')

const getBerita = (callback) => {
    const API_KEY = '2910b16141244c1aee64a878389555cb'
    
    // Kita ambil berita umum (general) dari Indonesia (id
    // Sesuai dokumentasi, free plan menggunakan http, bukan https
    const url = 'http://api.mediastack.com/v1/news' +
                '?access_key=' + API_KEY 

    request({ url: url, json: true }, (error, { body } = {}) => {
        if (error) {
            // Error koneksi (misal: tidak ada internet)
            callback('Tidak dapat terkoneksi ke layanan berita.', undefined)
        } else if (body.error) {
            // Error dari API (misal: API key salah atau limit habis)
            callback('Error dari API Berita: ' + body.error.message, undefined)
        } else if (!body.data || body.data.length === 0) {
            // API sukses tapi tidak menemukan berita
            callback('Tidak ada berita yang ditemukan saat ini.', undefined)
        } else {
            // Sukses, kirim kembali data beritanya
            callback(undefined, body.data)
        }
    })
}

module.exports = getBerita