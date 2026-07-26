import { where } from "sequelize";
import { blog, product, user } from "../config/connection.js";
import Product from "../model/products.js";
import Users from "../model/userModel.js";
import bcrypt from "bcrypt";

function aboutPageController(req, res) {
  res.send("hello this is about page");
}

function homePageController(req, res) {
  res.send("hello this is home page");
}

async function registerUser(req, res) {
  // console.log(req.body)

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  await user.create({
    username,
    password: bcrypt.hashSync(password, 10),
    email,
  });
  res.send("register page");
}

async function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const [data] = await user.findAll({
    where: {
      email: email,
    },
  });
  if (data) {
    const isMatched = bcrypt.compareSync(password, data.password);
    if (isMatched) {
      res.status(200).json({
        message: "login is successful",
      });
    } else {
      res.status(400).json({
        message: "invallid password",
      });
    }
  } else {
    res.status(400).json({
      message: "email not registered",
    });
  }
}

async function BlogController(req, res) {
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;
  const category = req.body.category;

  await blog.create({
    title,
    subtitle,
    description,
    category,
  });
  res.send("this is blog");
}

async function ProductController(req, res) {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const Qty = req.body.Qty;

  await product.create({
    name,
    price,
    description,
    Qty,
  });
  res.send("this is product");
}

async function fetchUser(req, res) {
  const datas = await user.findAll();
  res.json({
    data: datas,
  });
}

async function fetchProduct(req, res) {
  const productdatas = await product.findAll();
  res.json({
    data: productdatas,
  });
}

async function fetchBlog(req, res) {
  const blogdatas = await product.findAll();
  res.send(blogdatas);
}

async function fetchSingle(req, res) {
  const id = req.params.id;
  const data = await user.findAll({
    where: {
      id: id,
    },
  });
  res.send(data);
}

async function fetchSingleProduct(req, res) {
  const id = req.params.id;
  const data = await user.findAll({
    where: {
      id: id,
    },
  });
  res.send(data);
}

async function fetchSingleBlog(req, res) {
  const id = req.params.id;
  const data = await blog.findAll({
    where: {
      id: id,
    },
  });

  res.send(data);
}

async function editUser(req, res) {
  const id = req.params.id;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  await user.update(
    {
      username,
      password,
      email,
    },
    {
      where: {
        id: id,
      },
    },
  );
  res.send("update sucessfully");
}

async function editBlog(req, res) {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const subtitle = req.body.subtitle;
  const category = req.body.category;
  await blog.update(
    {
      title,
      description,
      subtitle,
      category,
    },
    {
      where: {
        id: id,
      },
    },
  );
  res.send("updated sucessfully");
}

async function editProduct(req, res) {
  const id = req.params.id;
  const name = req.body.name;
  const price = req.body.price;
  const quantity = req.body.Qty;
  const description = req.body.description;
  await blog.update(
    {
      name,
      price,
      quantity,
      description,
    },
    {
      where: {
        id: id,
      },
    },
  );
  res.send("updated sucessfully");
}

async function deleteUser(req, res) {
  const id = req.params.id;
  await user.destroy({
    where: {
      id: id,
    },
  });
  res.send("deleted sucessfully");
}

async function deleteProduct(req, res) {
  const Productid = req.params.id;
  await product.destroy({
    where: {
      id: Productid,
    },
  });
  res.status(200).json({
    message: "deleted sucessfully",
  });
}

export {
  homePageController,
  deleteProduct,
  aboutPageController,
  registerUser,
  BlogController,
  ProductController,
  fetchUser,
  fetchProduct,
  fetchBlog,
  fetchSingle,
  fetchSingleProduct,
  fetchSingleBlog,
  deleteUser,
  editUser,
  editBlog,
  editProduct,
};
