const {MongoClient, ObjectID } = require('mongodb')
//const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'//CONNECT TO LOCALHOST
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true ,useUnifiedTopology : true}, (error , client)=> {
    if(error){
        return console.log('Unable to connect to database !')
    }
    const db = client.db(databaseName)

    //const lastObject = new ObjectID('5e00dd6fc6e9e637cb762c57')
    // db.collection('users').insertOne({
    //     name: 'Sarath Kumar',
    //     age: 27
    // },(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert User')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Nehalika',
    //         age: 20
    //     },
    //     {
    //         name: 'Mannam',
    //         age:20
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Complete Nodejs',
    //         completed: false
    //     },
    //     {
    //         description: 'Cover GRE Syllabus',
    //         completed: false
    //     },
    //     {
    //         description: 'Reschedule Passport Appointment',
    //         completed: true
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })
    //console.log(lastObject)
    //Querying Documents
    db.collection('tasks').findOne({ _id: new ObjectID("5e00dd6fc6e9e637cb762c57")},(error,task)=>{
        if(error){
            return console.log('An Error occured while Searching')
        }
        console.log(task)
    })

    db.collection('tasks').find({completed: false}).toArray((error,tasks)=>{
        if(error){
            return console.log('An Error occured while Searching')
        }
        console.log(tasks)
    })
})