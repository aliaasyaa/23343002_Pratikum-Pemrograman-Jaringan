// Lokasi file: public/js/app.js

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const pesanSatu = document.querySelector('#pesan-1')
const pesanDua = document.querySelector('#pesan-2')

// Ambil container hasil cuaca
const hasilContainer = document.querySelector('.hasil-cuaca-container')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    // Tampilkan container dan pesan loading
    hasilContainer.classList.add('show') // <-- BARU
    pesanSatu.textContent = 'Sedang mencari lokasi...'
    pesanDua.textContent = ''

    // Ambil data dari endpoint /infocuaca
    fetch('/infocuaca?address=' + encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // Tampilkan pesan error
                pesanSatu.style.color = '#d9534f' // Warna merah
                pesanSatu.textContent = data.error
                pesanDua.textContent = ''
            } else {
                // Tampilkan hasil cuaca
                pesanSatu.style.color = 'var(--dark-teal)' // Kembalikan warna
                pesanSatu.textContent = data.lokasi
                pesanDua.textContent = data.prediksiCuaca
            }
        })
    })
})