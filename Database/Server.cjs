const express = require("express");
const mongoose = require("mongoose");
const Book = require("./model.cjs");
const app = express();

app.use(express.json());

// Directly providing MongoDB URL instead of using process.env.MONGO_URL
const MONGO_URL = "mongodb://127.0.0.1:27017/LibraryDB"; // Replace 'mydatabase' with your actual database name

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

//Route to fetch all the books
app.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (err) {
    console.error("Error in fetching the Books");
    res.status(500).json({ message: "Error" });
  }
});

// Route to fetch a single book by its ID
app.get("/books/:BookID", async (req, res) => {
  try {
    const bookId = parseInt(req.params.BookID);
    const book = await Book.findOne({ BookID: bookId });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    console.error("Error in fetching the Book:", err);
    res.status(500).json({ message: "Error fetching the book" });
  }
});

//Route to insert a single book
app.post("/insert", (req, res) => {
  const newBook = new Book({
    BookID: req.body.BookID,
    Title: req.body.Title,
    Author: req.body.Author,
    Year: req.body.Year,
  });

  newBook
    .save()
    .then(() => {
      res.send("Book Inserted Successfully");
    })
    .catch((err) => {
      console.log("error in inserting Book");
    });
});

//Route to update

app.post("/update", (req, res) => {
  Book.findOneAndUpdate({ BookID: req.body.id }, { Title: req.body.Title })
    .then(() => {
      res.send("Updated Successfully");
    })
    .catch((err) => {
      console.log("Error in updating");
    });
});

//Route to Delete
app.post("/delete/:id", (req,res)=>{
    const ID = req.params.id;
    Book.findOneAndDelete({BookID : ID}).then(()=>{
        res.send("Book Deleted Successfully");
    }).catch((err)=>{
        console.log("Error in Deleting");
    });
});

app.listen(8000, () => {
  console.log("Server Started successfully on port 8000");
});
