app.anymethod(path,function)
get method
post method
    express.json() middleware:
        app.use()'${}'



Sending Files From Server

1. Static files using middleware (express)
    - entire directory 
        - app.use(path, express.static(root,[options]));

    
2. Sending files on a route
    - send single file
        - res.sendFile(fileURL)

CRUD Operations

1. Create
2. Read
3. Update
4. Delete

using middleware Express
http
using REST API ("GET","POST","PUT","PATCH","DELETE")

app.use(express.urlencoded({extended:true}))

31 Dec 2024
Streams in NodeJs

Stream : A continuous Data

Advantages of stream
    1. Memory Efficiency
    2. Time Efficiency

- Types of Streams
    1. Readable Stream
    2. Writable Stream
    3. Duplex Stream
    4. Transform Stream

Mongodb in NodeJs using Mongoose

Mongoose ----> MongoDB + NodeJs
Middleware express