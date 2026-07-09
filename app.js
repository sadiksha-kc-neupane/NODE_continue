import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()

// const app = require("express") () // this is alternative way
import {connectDB} from "./config/index.js"

await connectDB();

app.get("/", function (req, res) {
  res.send("hello this is home page");
});

app.get("/about", function (req, res) {
  res.send("hello this is about page");
});
 //port number
app.listen(3000, function () {
  console.log("Express server is working at port 3000");
});

 