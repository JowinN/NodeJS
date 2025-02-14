const express = require("express");
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input type="text" name="userInput" />
      <script>alert('XSS');</script>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
    const userInput = req.body.userInput;
  res.send(`You entered: ${userInput}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
