import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import getRoutes from "./routes";
import globalErrorHandler from "./controllers/error-middleware";
import connectDB from "./config/database";
import AppError from "./utils/AppError";
import morgan from "morgan";
import cors from "cors";

// Initialize dotenv
dotenv.config();

const app: Application = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.use("/api", getRoutes(express.Router()));

app.all("*", (req, res, next) => {
  //AppError class for error handler object
  next(new AppError(`Cannot find route ${req.originalUrl} in the server`));
});

//error middle ware whenever first arg is err object it is error middleware
app.use(globalErrorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
