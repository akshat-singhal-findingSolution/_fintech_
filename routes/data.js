import express from "express";
import { upload } from "../middlerware/upload.js";

const route = express.Router();

route.get('/data', upload);

export default route;