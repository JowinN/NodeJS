const events =  require("events");


// Instantiate an EventEmitter object
const eventEmitter = new events.EventEmitter();

// Handler associated with the event
const connectHandler = function connected() {
    console.log("Connection established.");
    eventEmitter.emit("data_received");
};

// Binds the event with handler
eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function () {
    console.log("Data Transfer Successful.");
});

eventEmitter.emit("connection");
console.log("Finish");
