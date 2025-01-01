const express = require("express");
const mongoose = require("mongoose");
const User = require("./model.cjs"); // Fix: Use `User` instead of `user` to align with the export
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json()); // Fix: Add parentheses to invoke express.json()

const MONGO_URL = "mongodb://127.0.0.1:27017/LibraryDB";

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }) // Added connection options for stability
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Handle Signup
app.post("/signup", async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    Name: name,
    Email: email,
    Password: password,
  });

  try {
    await newUser.save(); // Save user to the database
  } catch (err) {
    console.error("Error saving user:", err);
    return res.status(500).json({ message: "Error! Something went wrong" });
  }

  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.Email },
      "secretkey", // Fix: Correct spelling from "seceretkey"
      { expiresIn: "5h" }
    );
  } catch (err) {
    console.error("Error generating token:", err);
    return res.status(500).json({ message: "Error! Something went wrong" });
  }

  res.status(201).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.Email,
      token: token,
    },
  });
});

app.post('/login',async(req,res,next)=>
{
    let{email, password} = req.body;
    let existinguser;
    try{
        existinguser = await User.findOne({Email : email});
    }catch{
        const error = new Error("Error Generated");
        return next(error);
    }
    if(!existinguser || existinguser.Password !== password){
        return res.status(401).json({ message: "Wrong Credentials" });
    }
    let token;
    try {
      token = jwt.sign(
        { userId: existinguser.id, email: existinguser.Email },
        "secretkey", // Fix: Correct spelling from "seceretkey"
        { expiresIn: "5h" }
      );
    } catch (err) {
      console.error("Error generating token:", err);
      return res.status(500).json({ message: "Error! Something went wrong" });
    }
  
    res.status(201).json({
      success: true,
      data: {
        userId: existinguser.id,
        email:existinguser.Email,
        token: token,
      },
    });

});

// Start the server
app.listen(3000, () => {
  console.log("Server started successfully on port 3000"); // Fix: Correct port in log message
});
