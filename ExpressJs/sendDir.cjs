
const express = require("express");
const app = express();
const PORT =3000;

const path = require("path");
app.use('/ExpressJs',express.static(path.join(__dirname,'ex')));

app.listen(PORT, (error) => {
    if(!error) console.log("Server is running Successfully");
    else console.log("error Occures", error);
});