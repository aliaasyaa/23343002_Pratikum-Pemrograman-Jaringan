const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    const db = client.db(databaseName)

    return db.collection('users').find({ age: 22 }).toArray()
  })
  .then(users => {
    console.log('Data ditemukan:')
    console.log(users)
  })
  .catch(error => {
    console.log(error)
  })
