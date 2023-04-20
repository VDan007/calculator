const express = require("express");
const bodyParser = require ("body-parser");
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





const PORT =  8888;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

app.use(express.static("dist"));



app.get("/getfrommemory", (req, res) => {
   try{
    const savedNumber = fs.readFileSync('./db.txt','utf8');
    res.send(JSON.stringify(savedNumber)).status(200);

   } catch(err){
    console.log(err);
    res.status(400).end();
   } 

});



app.post("/addtomemory",(req,res)=>{
    const numberToSave = req.body.savedNumber;
    
    try{
        fs.writeFileSync('./db.txt',numberToSave);
        res.status(200);
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
    
})