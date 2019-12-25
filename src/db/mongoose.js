const mongoose = require('mongoose')
const validator  = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Email is invalid')                
        }
        }  
        },
    age:{
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password ')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

// const me = new User({
//     name : 'Sarath',
//     email : 'sk.mannam@gmail.com',
//     age : 20,
//     password : 'seminarhall'  
// })

// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })
const Task = mongoose.model('Task',{
    description : {
        type : String,
        trim : true,
        required : true,
    },
    completed : {
        type :   Boolean,
        default : false,
        requried : false
    }
})

const task1 = new Task({
    description: 'Complete NP Record',
    completed: false
})

task1.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})