const mongoose=require('mongoose')


const userSchema= new  mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
        type:String,
        required:true
    }
   

},{timestamps:true})

module.exports=mongoose.model('user',userSchema)