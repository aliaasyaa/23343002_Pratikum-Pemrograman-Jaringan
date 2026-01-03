const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    const db = client.db(databaseName)

    return db.collection('users').insertMany([
      { name: 'Andi', age: 25 },
      { name: 'Budi', age: 22 },
      { name: 'Citra', age: 27 }
    ])
  })
  .then(result => {
    console.log('Berhasil menambahkan banyak data')
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
