const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'//CONNECT TO LOCALHOST
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true ,useUnifiedTopology : true}, (error , client)=> {
    if(error){
        return console.log('Unable to connect to database !')
    }
    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Sarath Kumar',
    //     age: 27
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }

    //     console.log(result.ops)
    // })
    db.collection('users').insertMany([
        {
            name: 'Nehalika',
            age: 20
        },
        {
            name: 'Mannam',
            age:20
        }
    ],(error, result)=>{
        if(error){
            return console.log('Unable to insert users')
        }
        console.log(result.ops)
    })
})