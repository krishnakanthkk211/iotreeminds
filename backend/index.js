const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/route")
const multer =require('multer')
const excelTojson=require('convert-excel-to-json')
const fs=require('fs')
const XLSX=require('xlsx')
var cors=require('cors')
const app=express()
app.use(cors())
app.set('view engine','ejs')
app.use(express.json())




mongoose.connect("mongodb+srv://krishnakanthkk211:krishna211@cluster0.j8rhn47.mongodb.net/krishnakanthkk211-DB"
,{useNewUrlparser:true})

.then(()=>console.log('MongoDb is connected'))
.catch((err)=>console.log(err))



var workbook = XLSX.readFile("./controller/account.xlsx");
var sheet_name_list = workbook.SheetNames;
console.log(sheet_name_list); // getting as Sheet1

sheet_name_list.forEach(function (y) {
  var worksheet = workbook.Sheets[y];
  //getting the complete sheet
  // console.log(worksheet);

  var headers = {};
  var data = [];
  for (z in worksheet) {
    if (z[0] === "!") continue;
    //parse out the column, row, and value
    var col = z.substring(0, 1);
    // console.log(col);

    var row = parseInt(z.substring(1));
    // console.log(row);

    var value = worksheet[z].v;
    // console.log(value);

    //store header names
    if (row == 1) {
      headers[col] = value;
      // storing the header names
      continue;
    }

    if (!data[row]) data[row] = {};
    data[row][headers[col]] = value;
  }
  //drop those first two rows which are empty
  data.shift();
  data.shift();
  console.log(data);

});

app.post('/transactions',)


app.listen(4000,function(){
    console.log('server running on 4000')
})

