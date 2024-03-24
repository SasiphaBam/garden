import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRoute from "./route/SignUp.js"
import chatRoute from "./route/chatRoute.js"
import messageRoute from "./route/messageRoute.js"
import mongoose from "mongoose";

import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("MongoDB conection"))
  .catch((error) => console.log("MongoDB conection failed: ", error.message));

//route
app.use("/", signupRoute);
app.use("/chat", chatRoute);
app.use("/messages", messageRoute);

app.listen(port, () => {
  console.log("API working!");
});
