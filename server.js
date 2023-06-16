import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import data from "./routes/data.js";
import percent from "./routes/percent.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDB();

app.use('/api', data);
app.use('/api', percent);

app.listen(process.env.PORT, console.log(`Port is running on http://localhost:${process.env.PORT}`));
