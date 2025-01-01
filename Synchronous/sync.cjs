// import * as fs from "fs";

// const fs = require("fs");
// console.log("start");

// const data = fs.readFileSync("./file.txt", "utf-8");
// console.log("data", data);

// console.log("end");

const fs = require('fs');
const readStream = fs.createReadStream('./file.txt');

console.log('Start');

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

console.log('End');
