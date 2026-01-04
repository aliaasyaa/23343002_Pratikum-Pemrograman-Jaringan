const moment = require('moment')

const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: moment().format('HH:mm')
  }
}

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: moment().format('HH:mm')
  }
}

module.exports = {
  generateMessage,
  generateLocationMessage
}
