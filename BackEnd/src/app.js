import express, { text } from "express";
import { configDotenv } from "dotenv";
import router from "./routes/ai.routes.js";

configDotenv();

export const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    res.status(200).json({
        success: "success",
        message: "Welcome to the AI API"
    });
});

app.use("/api/ai", router);