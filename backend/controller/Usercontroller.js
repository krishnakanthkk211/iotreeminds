const UserModel=require('../model/Usermodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const axios =require('axios')
const {validPassword,isValidMobile,isValidname,validateEmail}=require('../validator/validater')


const registeruser=async (req,res)=>{
    try{
    const data=req.body
    data=JSON.parse(JSON.stringify(data))
    const arrofkeys=Object.keys(data)
    if(arrofkeys.length==0){
        return res.status(400).send({status:false,message:"please provide your details"})
    }
    
    // for(let i=0;i<arrofkeys.length;i++){
    //     data[arrofkeys[i]]=data[arrofkeys[i]].trim()   
    //  }
     const {Name,PhoneNumber,email,password}=data
     if(!Name){
        return res.status(400).send({status:false,message:"Name is required field"})
     }
     if(!isValidname(Name)){
        return res.status(400).send({status:false,message:"Name should be valid"})
     }
    //  if(!PhoneNumber){
        // return res.status(400).send({status:false,message:"PhoneNumber is required field"})
    //  }
    //  if(!isValidMobile(PhoneNumber)){
    //     return res.status(400).send({status:false,message:"PhoneNumber shoud be valid"})
    //  }
     if(!password){
        return res.status(400).send({status:false,message:"password is required field"})
     }
     if(!email) return res.status(400).send({status:false,message:'email is requied'})
     if(!validateEmail(email)) return res.status(400).send({status:false,message:'email should be valid'})
     if(!validPassword(password)){
        return res.status(400).send({status:false,message:"password should be valid"})
     }
     data.password=await bcrypt.hash(password,5)
    let user=await UserModel.create(data)
    return res.status(201).send({status:true,message:"user created",data:user})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

}


const login=async function(req,res){
    try{
        const data=req.body
        const arrofkeys=Object.keys(data)
        if(arrofkeys.length==0){
            return res.status(400).send({status:false,message:"please enter details to login"})
        }
        const {email,password}=data
        if(!email){
            return res.status(400).send({status:false,message:"email is required field"})
        }
        if(!validateEmail(email)){
           return res.status(400).send({status:false,message:"email should be valid"})
        }
        if(!password){
            return res.status(400).send({status:false,message:"password is required field"})
         }
         if(!validPassword(password)){
            return res.status(400).send({status:false,message:"password should be valid"})
         }
         
        let user=await UserModel.findOne({email:email})
        if(!user){
            return res.status(404).send({status:false,message:"user not exist"})
        }
        let checkpass=await bcrypt.compare(password,user.password)
        if(!checkpass){
            return res.status(400).send({status:false,message:"password is wrong"})
        }

        const token=jwt.sign({userid:user._id},"bcrypt")
        return res.status(200).send({status:true,token:token})
    }    
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

}



const updateuser=async function(req,res){
    try{
        userId=req.params
        const data=req.body
        const arrofkeys=Object.keys(data)
        if(arrofkeys.length==0){
        return res.status(400).send({status:false,message:"please provide your details"})
        }
        
        const {Name,PhoneNumber,email,password}=data
        if(!isValidname(Name)){
            return res.status(400).send({status:false,message:"Name should be valid"})
         }
         if(!isValidMobile(PhoneNumber)){
            return res.status(400).send({status:false,message:"PhoneNumber shoud be valid"})
         }
         if(!validateEmail(email)) return res.status(400).send({status:false,message:'email should be valid'})
         if(!validPassword(password)){
            return res.status(400).send({status:false,message:"password should be valid"})
         }
        const update=await UserModel.findOneAndUpdate({userId:_id},data,{new:true})
        return res.status(200).send({status:true,message:"Updated the user",data:update})

    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

const deleteuser=async (req,res)=>{
    try{const userId=req.params.userId

    Usermodel.findOneAndDelete({userId:_id},{new:true})
    if(!user){
        return res.status(400).send({status:false,message:'please enter valid userId'})
    }
}
   catch(err){
    return res.status(500).send({status:false,message:err.message})
   }
}
module.exports={registeruser,login,updateuser,deleteuser}