import express, { text } from "express";
import { configDotenv } from "dotenv";
import { generateText } from "./services/ai.service.js";

configDotenv();

export const app = express();

app.get("/", async (req, res) => {
  try {
    const text = await generateText("Hello, who is the president of the United States?");
    res.status(200).json({
      message: "Hello World!",
      googleGeminiKey: process.env.GOOGLE_GEMINI_KEY || "Not Set",
        generatedText: text
    });
  } catch (err) {
    console.error("Error generating text:", err);
    res.status(500).json({ error: "Failed to generate text" });
  }
});
