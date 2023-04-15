const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/route")
var cors=require('cors')
const app=express()
app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://krishnakanthkk211:krishna211@cluster0.j8rhn47.mongodb.net/krishnakanthkk211-DB"
,{useNewUrlparser:true})

.then(()=>console.log('MongoDb is connected'))
.catch((err)=>console.log(err))

app.use('/',router)

app.listen(3000,function(){
    console.log('server running on 3000')
})