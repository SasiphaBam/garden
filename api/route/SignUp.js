import express from "express";
import {
  registerUser,
  Login,
  findUser,
  getUser,
  getAdminUser
} from "../controller/RegisterController.js";

const route = express.Router();

route.post("/signup", registerUser);
route.post("/login", Login);
route.get("/find-user/:userId", findUser);
route.get("/", getUser);
route.get("/get-admin", getAdminUser);

export default route;
