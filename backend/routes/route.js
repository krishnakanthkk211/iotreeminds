const express=require('express')
const router=express.Router()
const usercontroller=require('../controller/Usercontroller')



router.post('/register',usercontroller.registeruser)
router.post('/login',usercontroller.login)


module.exports=router