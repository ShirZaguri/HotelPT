import express from "express";
import BaseRouter from "./routes/index";
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyparser.json());

// Add APIs
app.use("/api", BaseRouter);

// Export express instance
export default app;
