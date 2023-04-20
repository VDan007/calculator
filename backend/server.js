const express = require("express");

const app = express();

const db = {
    savedNumber:''
};

const PORT =  8888;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));

app.use(express.static("dist"));



app.get("/getfrommemory", (req, res) => {
  res.send(db.savedNumber);
});



app.post("/addtomemory",(req,res)=>{
    const numberToSave = req.query.number;
    db.savedNumber = numberToSave;
    
})