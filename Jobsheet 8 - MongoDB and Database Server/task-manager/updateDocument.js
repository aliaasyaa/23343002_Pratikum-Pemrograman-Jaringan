const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL)
  .then(client => {
    const db = client.db(databaseName)

    return db.collection('users').updateOne(
      { _id: new ObjectId('ISI_OBJECT_ID') },
      {
        $set: {
          name: 'Aisya Update'
        }
      }
    )
  })
  .then(result => {
    console.log('Data berhasil diupdate')
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
