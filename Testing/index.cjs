const express = require("express");
const fares = require("../Testing/fares.cjs");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.use('/',express.static(path.join()
// ));

app.get('/rates',(req,res)=>{
    res.status(200).send(fares.rate);
});

app.post('/calc',(req,res)=>{
    const {km, min} = req.body;
    let total=fares.calcFare(km,min);
    console.log("Total fare is : ", total);
    res.status(200).json({total});
})


app.listen(3000,()=>{
    console.log("Server Running Successfully");
})