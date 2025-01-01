const express = require("express");
const xss = require("xss"); // Sanitize user input
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input type="text" name="userInput" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  try {
    const userInput = xss(req.body.userInput); // Sanitize input
    res.send(`You entered: ${userInput}`); // Safely render input
  } catch (err) {
    res.status(500).send("Error processing input.");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
