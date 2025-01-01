const fs = require("fs");
let data ='';

//Readable Stream
const readStream = fs.createReadStream("input.txt");
readStream.setEncoding("utf8");

//Handle Stream data
readStream.on("data",function(chunk){
    data += chunk;
});

readStream.on("end",function(){
    console.log(data);
});

readStream.on("error",function(err){
    console.log(err.stack);
});