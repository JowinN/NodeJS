const EventEmitter = require("events");

let eventemitter = new EventEmitter();

let abc = (msg) =>{
    console.log("Message from abc : " + msg);
};

let xyz = (msg) =>{
    console.log("Message from xyz : " + msg);
};

//registering
eventemitter.on("myEvent",abc);
eventemitter.on("myEvent",abc);
eventemitter.on("myEvent",xyz);

eventemitter.removeListener("myEvent",abc);

//Triggering My event .
eventemitter.emit("myEvent","Event Occured");

//Removing All Listner
eventemitter.removeAllListeners("myEvent");

//Triggering My event .
eventemitter.emit("myEvent","Event Occured");