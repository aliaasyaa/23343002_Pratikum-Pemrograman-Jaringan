const fs = require('fs')
const chalk = require('chalk')

// Fungsi menambah catatan baru
const tambahCatatan = (judul, isi) => {
    const catatan = muatCatatan()
    const catatanGanda = catatan.find((note) => note.judul === judul)

    if (!catatanGanda) {
        catatan.push({ judul, isi })
        simpanCatatan(catatan)
        console.log(chalk.green.inverse('Catatan baru ditambahkan!'))
    } else {
        console.log(chalk.red.inverse('Judul catatan telah dipakai!'))
    }
}

// Fungsi menyimpan catatan ke file JSON
const simpanCatatan = (catatan) => {
    const dataJSON = JSON.stringify(catatan)
    fs.writeFileSync('catatan.json', dataJSON)
}

// Fungsi memuat catatan dari file JSON
const muatCatatan = () => {
    try {
        const dataBuffer = fs.readFileSync('catatan.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

// Fungsi menghapus catatan
const hapusCatatan = (judul) => {
    const catatan = muatCatatan()
    const catatanUntukDisimpan = catatan.filter((note) => note.judul !== judul)

    if (catatan.length > catatanUntukDisimpan.length) {
        console.log(chalk.green.inverse('Catatan dihapus!'))
        simpanCatatan(catatanUntukDisimpan)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

// Fungsi menampilkan semua catatan
const listCatatan = () => {
    const catatan = muatCatatan()
    console.log(chalk.blue.inverse('Daftar Catatan:'))
    catatan.forEach((note, index) => {
        console.log(`${index + 1}. ${note.judul}`)
    })
}

// Fungsi membaca catatan berdasarkan judul
const bacaCatatan = (judul) => {
    const catatan = muatCatatan()
    const note = catatan.find((note) => note.judul === judul)

    if (note) {
        console.log(chalk.green.inverse(note.judul))
        console.log(note.isi)
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'))
    }
}

// Ekspor fungsi agar bisa digunakan di app.js
module.exports = {
    tambahCatatan,
    hapusCatatan,
    listCatatan,
    bacaCatatan
}
