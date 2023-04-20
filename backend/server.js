const express = require("express");
const bodyParser = require ("body-parser");
const fs = require('fs');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const db = {
    savedNumber:''
};

console.log(db.savedNumber);

const PORT =  8888;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

app.use(express.static("dist"));



app.get("/getfrommemory", (req, res) => {
  res.send(db.savedNumber);
});



app.post("/addtomemory",(req,res)=>{
    const numberToSave = req.body.savedNumber;
    console.log(numberToSave);
    try{
        fs.writeFileSync('./db.txt',numberToSave);
    } catch(err){
        console.log(err);
    }
    
})