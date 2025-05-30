import express, { text } from "express";
import { configDotenv } from "dotenv";
import router from "./routes/ai.routes.js";
import cors from "cors";

configDotenv();

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://code-reviewer-lac.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.get("/", async (req, res) => {
    res.status(200).json({
        success: "success",
        message: "Welcome to the AI API"
    });
});

app.use("/api/ai", router);