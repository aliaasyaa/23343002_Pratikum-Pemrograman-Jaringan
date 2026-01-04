const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const { addUser, removeUser, getUser } = require('./utils/users')
const { generateMessage, generateLocationMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = 3000
const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

io.on('connection', (socket) => {
  console.log('User connected')

  socket.on('join', ({ username, room }) => {
    const user = addUser({
      id: socket.id,
      username,
      room
    })

    socket.join(user.room)

    socket.emit('message', generateMessage('Admin', 'Selamat datang 👋'))
    socket.broadcast
      .to(user.room)
      .emit('message', generateMessage('Admin', `${user.username} bergabung`))
  })

  socket.on('sendMessage', (message) => {
    const user = getUser(socket.id)

    if (!user) return

    io.to(user.room).emit(
      'message',
      generateMessage(user.username, message)
    )
  })

  socket.on('sendLocation', ({ latitude, longitude }) => {
    const user = getUser(socket.id)

    if (!user) return

    io.to(user.room).emit(
      'locationMessage',
      generateLocationMessage(
        user.username,
        `https://google.com/maps?q=${latitude},${longitude}`
      )
    )
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id)

    if (user) {
      io.to(user.room).emit(
        'message',
        generateMessage('Admin', `${user.username} keluar`)
      )
    }
  })
})

server.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
})
