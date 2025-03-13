const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const uri = "mongodb+srv://mayurmohan2486:LMSLMS@lms.0gvxn.mongodb.net/library?retryWrites=true&w=majority&appName=LMS";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Database connected.")
  } catch (err) {
    console.log(err)
  }
}

connect();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const Userop = mongoose.model('user', userSchema);

app.get("/:name/:password", async (req, res) => {
  
    const user = new Userop({
      name: req.params.name,
      password: req.params.password
    });

    await user.save();
    res.send(`Data stored successfully name: ${req.params.name} password: ${req.params.password}`);
  
});

app.get("/data", async (req, res) => {
    const users = await Userop.find({});
    console.log("Sending all user data");
    res.status(200).json(users);

});

app.get("/user/find/:name", async (req, res) => {
    const user = await Userop.find({ name: req.params.name });
    res.status(200).json(user);

  
});

app.listen(5000, () => {
  console.log("Server listening at port 5000 :)");
});