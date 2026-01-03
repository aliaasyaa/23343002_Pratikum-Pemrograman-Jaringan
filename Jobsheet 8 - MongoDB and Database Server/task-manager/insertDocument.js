const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    console.log('Berhasil terhubung ke MongoDB')

    const db = client.db(databaseName)

    return db.collection('users').insertOne({
      name: 'Aisya',
      age: 20
    })
  })
  .then(result => {
    console.log('Data berhasil ditambahkan')
    console.log(result)
  })
  .catch(error => {
    console.log('Gagal:', error)
  })
