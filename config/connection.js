import dotenv from "dotenv";
dotenv.config();
import {Sequelize} from "sequelize";
import { DataTypes } from "sequelize";
import Blog from '../model/Blog.js'
import Users from '../model/userModel.js'
import Product from '../model/products.js'



  const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const blog =Blog(sequelize,DataTypes)
const user = Users(sequelize, DataTypes)
const product = Product(sequelize, DataTypes)

export default sequelize



