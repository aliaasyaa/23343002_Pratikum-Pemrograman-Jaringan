const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    const db = client.db(databaseName)

    return db.collection('users').deleteOne({ name: 'Andi' })
  })
  .then(result => {
    console.log('Data berhasil dihapus')
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
