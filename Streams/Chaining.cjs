const fs = require("fs");
const zlib = require("zlib");

const compressStream = fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

compressStream.on("finish", function(){
  console.log("Compression Successful");

  const decompressStream = fs.createReadStream("input.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream("newop.txt"));

  decompressStream.on("finish", () => {
    console.log("Uncompression Successful");
  });
});