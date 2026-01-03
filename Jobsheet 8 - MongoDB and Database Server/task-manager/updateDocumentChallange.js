const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    const db = client.db(databaseName)

    return db.collection('users').updateMany(
      { age: { $gte: 25 } },
      {
        $set: {
          status: 'dewasa'
        }
      }
    )
  })
  .then(result => {
    console.log('Berhasil update banyak data')
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
