
function getsum(a,b){
    const customPromise = new Promise((resolve, reject) =>
    {
        const sum = a+b;
        if (sum<5) {
            resolve("Lets Goo!");
        }else{
            reject(new Error("Oops"));
        }
    });
    return customPromise;
}

getsum(2, 5)
    .then((message) => {
        console.log(message); // Output: "Lers Goo!"
    })
    .catch((error) => {
        console.error(error.message); // If rejected, Output: "Oops"
    });
