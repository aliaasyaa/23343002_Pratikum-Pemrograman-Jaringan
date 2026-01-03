const express = require("express")
const app = express()
const hbs = require('hbs')
const path = require('path')

const geocode = require('./utils/geocode')
const forecast = require('./utils/prediksiCuaca')
const getBerita = require('./utils/getBerita')

const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)
app.use(express.static(direktoriPublic))

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Aisya Alia'
    }) 
})

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Aisya Alia',
        teksBantuan: 'Ini adalah teks bantuan yang dinamis'
    })
})

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Kamu harus memasukan lokasi yang ingin dicari'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, dataPrediksi) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                prediksiCuaca: dataPrediksi,
                lokasi: location,
                address: req.query.address
            })
        })
    })
})

// halaman tentang  
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Aisya Alia'
    })
})

app.get('/bantuan/*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Aisya Alia',
    pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
  })
})

app.get('/berita', (req, res) => {
    // Panggil fungsi getBerita
    getBerita((error, articles) => {
        if (error) {
            // Jika ada error, kirim pesan error ke halaman
            return res.render('berita', {
                judul: 'Berita Terkini',
                nama: 'Aisya Alia', // Ganti dengan nama Anda
                error: error 
            })
        }

        // Jika sukses, kirim data 'articles' ke halaman
        res.render('berita', {
            judul: 'Berita Terkini',
            nama: 'Aisya Alia', // Ganti dengan nama Anda
            articles: articles // articles adalah array berisi data berita
        })
    })
})

app.get('*', (req, res) => {
  res.render('404', {
    judul: '404',
    nama: 'Aisya Alia',
    pesanKesalahan: 'Halaman tidak ditemukan.'
  })
})


app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})