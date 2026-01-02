const request = require('postman-request')

const cekCuaca = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=YOUR_WEATHERSTACK_API_KEY&query=' +
    latitude + ',' + longitude

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Tidak dapat terhubung ke layanan cuaca', undefined)
    } else if (response.body.error) {
      callback('Lokasi tidak valid', undefined)
    } else {
      const data = response.body.current
      callback(
        undefined,
        `Suhu saat ini ${data.temperature} derajat. Cuaca ${data.weather_descriptions[0]}.`
      )
    }
  })
}

module.exports = cekCuaca
