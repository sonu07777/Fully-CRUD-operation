import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./Router/User.router.js";
import contactRouter from "./Router/ContactUs.router.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/contact", contactRouter);

app.use("*", (req, res) => {
  res.send("oops! 404 not found");
});

export default app;
