

let mypromise = new Promise((resolve,reject) =>
{
    let success = false;
    if(success){
        resolve("success");;
    }
    else{
        reject("Failed");
    }
});

//Consuming Promise

mypromise
.then((message) => {
console.log(message);
})
.catch((error)=>{
    console.log(error);
})