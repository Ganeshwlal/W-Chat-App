//import mongoose 
const mongoose = require('mongoose');

//define the connection string
mongoose.connect('mongodb://localhost:27017/ChattingApp',()=>{
    console.log('Connected to mongodb');
})

//create a model for newusers
const Newuser=mongoose.model('Newuser',{
    name:String,
    number:Number,
    age:Number,
    gender:String,
    password:String
})

const Contact=mongoose.model('Contact',{
    name:String,
    number:Number,
    city:String,
    lastMsg:String,
    lastMsgRead:Boolean, 
    messages:[{id:Number,
         body:String,
          me:Boolean}]

})

module.exports={
    Newuser,
    Contact
}






