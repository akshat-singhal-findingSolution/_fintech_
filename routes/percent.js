import express from "express";
import { percent } from "../middlerware/percent.js";

const route = express.Router();

route.get('/percentage_of_department_wise_sold_items', percent);

export default route;