const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'//CONNECT TO LOCALHOST
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true ,useUnifiedTopology : true}, (error , client)=> {
    if(error){
        return console.log('Unable to connect to database !')
    }
    const db = client.db(databaseName)
    db.collection('users').insertOne({
        name: 'Sarath Kumar',
        age: 27
    })
})