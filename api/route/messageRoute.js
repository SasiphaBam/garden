import express from "express";
import { createMessage, getMessage } from "../controller/MessageController.js";

const route = express.Router();

route.post("/", createMessage);
route.get("/:chatId", getMessage);

export default route;
