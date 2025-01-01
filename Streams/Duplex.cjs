const fs = require("fs");

const reader = fs.createReadStream("input.txt");
const Writer = fs.createWriteStream("output.txt");

reader.pipe(Writer);