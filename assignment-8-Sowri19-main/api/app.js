//importing all the files and connection
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
// import model from "./models/index";

//assigning the vairable
const app = express();
//connection with DB
mongoose.connect("mongodb://localhost:27017/tododb");

//using the app
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//assigning the routes
routes(app);

export default app;
