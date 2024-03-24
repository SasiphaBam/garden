import express from "express";
import { createChat, findChat, findUserChat } from "../controller/chatController.js";

const route = express.Router();

route.post("/", createChat);
route.get("/:userId", findUserChat);
route.get("/find/:firstId/:secondId", findChat);

export default route;

