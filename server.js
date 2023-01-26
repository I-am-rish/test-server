const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

//router
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/user", (req, res) => {
  res.send("hello user");
});
app.get("/ak", (req, res) => {
  res.send("hello ak");
});


mongoose.set("strictQuery", true);
const DB =
  "mongodb+srv://test:test321@cluster0.enybkzu.mongodb.net/testapp?retryWrites=true&w=majority";
mongoose.connect(DB)
.then(() => {
    console.log('mongodb connected');
})
.catch(() => {
    console.log('db not connected');
})

app.listen(PORT, () => {
  console.log("server running");
});
