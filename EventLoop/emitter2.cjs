const EventEmitter = require("events");
const { listeners } = require("process");

let eventemitter = new EventEmitter();

//registering
eventemitter.on("event_abc",msg=>{
    console.log(msg);
});


//emitting
eventemitter.emit("event_abc","any arbitary message");

//Removing listners (Removingb Registery of the event)
// eventemitter.removeListener();
eventemitter.removeAllListeners(["event_abc"]);