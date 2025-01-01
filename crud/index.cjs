const express = require("express");
const app = express();
const PORT = 3000;

// Some data
let data = [
  { name: "Arjun", course: "BE", roll_no: 14, Phone: "123" },
  { name: "Brjun", course: "CE", roll_no: 15, Phone: "124" },
  { name: "Crjun", course: "DE", roll_no: 16, Phone: "125" },
  { name: "Drjun", course: "EE", roll_no: 17, Phone: "126" },
  { name: "Erjun", course: "FE", roll_no: 18, Phone: "127" },
];

// Middleware to parse JSON
app.use(express.json());

// Get method (retrieve single info)
app.get("/:roll_no", function (req, res) {
  let found = data.find(function (item) {
    return item.roll_no === parseInt(req.params.roll_no);
  });
  if (found) {
    res.status(200).json(found); // Respond with the found object in JSON format
  } else {
    res.status(404).send("Student not found"); // Respond with a 404 status and error message
  }
});

//retrieve all data

app.get("/", function (req, res) {
  res.status(200).json(data);
});

//Inserting a data

app.post("/", function (req, res) {
  let items = data.map((item) => item.id);
  let newitem = {
    roll_no: req.body.roll_no,
    name: req.body.name,
    course: req.body.course,
    Phone: req.body.Phone,
  };

  data.push(newitem);
  res.status(200).json({ message: "Successfully Created" });
});

//UPDATE Data
//use put method to replace everythging

app.put("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.roll_no === parseInt(req.params.id);
  });

  if (found) {
    let update = {
      name: req.body.name,
      course: req.body.course,
      roll_no: found.roll_no,
      Phone: req.body.Phone,
    };
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex, 1, update);
    res.status(200).json({ message: "updates" });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

//Update specific data using patch

app.patch("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.roll_no === parseInt(req.params.id);
  });

  if (found) {
    if (req.body.name) {
      found.name = req.body.name;
    }
    if (req.body.course) {
      found.course = req.body.course;
    }
    if (req.body.Phone) {
      found.Phone = req.body.Phone;
    }
    res.status(200).json({ message: "updates" });
  } else {
    res.status(404).json({ message: "Data not found" });
  }
});

//Delete using rest
app.delete("/:id", function (req, res) {
  let found = data.find(function (item) {
    return item.roll_no === parseInt(req.params.id);
  });

  if(found){
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex,1);
    res.status(204).send();
  }

  else{
    res.status(404).json({"message": "Cannot delete"});
  }
});

// Start the server
app.listen(PORT, (error) => {
  if (!error) console.log("Server is running Successfully on port", PORT);
  else console.log("Error occurred", error);
});
