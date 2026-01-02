const geocode = require('./geocode')
const cekCuaca = require('./cekCuaca')

const alamat = process.argv[2]

if (!alamat) {
  console.log('Silakan masukkan nama lokasi')
} else {
  geocode(alamat, (error, data) => {
    if (error) {
      return console.log(error)
    }

    cekCuaca(data.latitude, data.longitude, (error, cuaca) => {
      if (error) {
        return console.log(error)
      }

      console.log(data.lokasi)
      console.log(cuaca)
    })
  })
}
