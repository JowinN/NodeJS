const fs = require("fs");
let data = "This is a Sample Data";

const writeStream = fs.createWriteStream("output.txt");
writeStream.write(data,"utf8");
writeStream.end();

writeStream.on("error",(err)=>{
    console.log(err.stack);
})