const socket = io()

// Ambil username & room dari URL
const { username, room } = Object.fromEntries(
  new URLSearchParams(window.location.search)
)

// Elemen DOM
const messageForm = document.getElementById('message-form')
const messageInput = document.getElementById('message-input')
const messagesDiv = document.getElementById('messages')
const sendLocationBtn = document.getElementById('send-location')

// Join room
socket.emit('join', { username, room })

/* =========================
   TERIMA PESAN TEKS
========================= */
socket.on('message', (message) => {
  const div = document.createElement('div')
  div.classList.add('message')

  div.innerHTML = `
    <b>${message.username}</b><br/>
    ${message.text}<br/>
    <small>${message.createdAt}</small>
  `

  messagesDiv.appendChild(div)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
})

/* =========================
   TERIMA PESAN LOKASI
========================= */
socket.on('locationMessage', (message) => {
  const div = document.createElement('div')
  div.classList.add('message')

  div.innerHTML = `
    <b>${message.username}</b><br/>
    <a href="${message.url}" target="_blank">📍 Lihat Lokasi</a><br/>
    <small>${message.createdAt}</small>
  `

  messagesDiv.appendChild(div)
  messagesDiv.scrollTop = messagesDiv.scrollHeight
})

/* =========================
   KIRIM PESAN
========================= */
messageForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const message = messageInput.value
  if (!message) return

  socket.emit('sendMessage', message, () => {
    messageInput.value = ''
    messageInput.focus()
  })
})

/* =========================
   KIRIM LOKASI
========================= */
sendLocationBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Browser tidak mendukung lokasi')
  }

  sendLocationBtn.setAttribute('disabled', 'disabled')

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      },
      () => {
        sendLocationBtn.removeAttribute('disabled')
      }
    )
  })
})
