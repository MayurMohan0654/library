const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

async function connect() {
    try{
        await mongoose.connect("mongodb+srv://mayurmohan2486:LMSLMS@lms.0gvxn.mongodb.net/?retryWrites=true&w=majority&appName=LMS")
        console.log("Database connected");
    }catch(err){
        console.log(err);
    }
}

connect();

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    password: {type: String, required: true},
    CreatedAt: {type: Date, default: Date.now}
});


const table = mongoose.model('user', userSchema);

app.get("/add/:uname/:upass", async (req, res) => {
    let n = req.params.uname;
    let p = req.params.upass;

    const entry = new table({ name: n, password: p });
    await entry.save();
    res.send("data stored sccessfully " + n + " " + p);

})

app.get("/fetch", async (req, res) => {
    const users = await table.find({});
    const data = JSON.stringify(users);
    res.send(data);
})

app.get("/fetch/:uname", async (req, res) => {
    const users = await table.find({name: req.params.uname});
    const response = JSON.stringify(users);
    res.send(response);
})

app.get("/delete/:uname", async (req, res) => {
    const result = await table.deleteOne({name: req.params.uname});
    console.log(result);
    res.send(result);
})



app.get("/", (req, res) => {
    res.send("got your request :)");
})



app.listen(5000, () => {
    console.log("server listening at port 5000");
})