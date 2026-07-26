import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
app.use(express.json())


app.use(cors({
  origin:"http://localhost:5173"
}))



// const app = require("express") () // this is alternative way
import {connectDB} from "./config/index.js"
import { aboutPageController, BlogController, deleteProduct, deleteUser, editBlog, editProduct, editUser, fetchBlog, fetchProduct, fetchSingle, fetchSingleBlog, fetchSingleProduct, fetchUser, homePageController, ProductController, registerUser } from "./controllers/exampleControllers.js"
import Blog from "./model/Blog.js"


await connectDB();

app.get("/", homePageController);

app.get("/about",aboutPageController);

app.post("/register",registerUser)

app.post("/blog", BlogController)

app.post("/product", ProductController )

app.get("/fetch-users", fetchUser)


app.get("/fetch-product" , fetchProduct)

app.get("/fetch-blog", fetchBlog)

app.get("/fetch-single/:id", fetchSingle)

app.get("/fetch-single-product/:id", fetchSingleProduct)

app.get("/fetch-single-blog/:id", fetchSingleBlog)

app.delete("/delete-user/:id", deleteUser)

app.patch("/update-users/:id", editUser)

app.patch("/update-blog/:id", editBlog)

app.patch("/update-product/:id", editProduct)

app.delete("/delete-product/:id",deleteProduct)



 //port number
app.listen(3000, function () {
  console.log("Express server is working at port 3000");
});


 