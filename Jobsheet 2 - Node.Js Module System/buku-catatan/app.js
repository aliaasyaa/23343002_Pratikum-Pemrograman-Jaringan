// ======== Import module yang dibutuhkan ========
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const catatan = require('./catatan.js')

// ======== Inisialisasi Yargs ========
const y = yargs(hideBin(process.argv))

// ======== Atur versi aplikasi ========
y.version('10.1.0')

// ======== Command: Tambah Catatan ========
y.command({
    command: 'tambah',
    describe: 'Tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.tambahCatatan(argv.judul, argv.isi)
    }
})

// ======== Command: Hapus Catatan ========
y.command({
    command: 'hapus',
    describe: 'Hapus catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.hapusCatatan(argv.judul)
    }
})

// ======== Command: List Catatan ========
y.command({
    command: 'list',
    describe: 'Tampilkan semua catatan',
    handler() {
        catatan.listCatatan()
    }
})

// ======== Command: Baca Catatan ========
y.command({
    command: 'read',
    describe: 'Baca catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.bacaCatatan(argv.judul)
    }
})

// ======== Jalankan Yargs ========
y.parse()
