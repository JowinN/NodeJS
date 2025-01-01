
const express = require("express");
const app = express();
const PORT =3000;

const path =require("path");
app.get('/file', (req,res) =>
{
    res.sendFile(path.join(__dirname,'2.jpg'));
});
app.listen(PORT, (error) => {
    if(!error) console.log("Server is running Successfully");
    else console.log("error Occures", error);
});