import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

export async function generateText(Prompt) {
  const response = await ai.models.generateContent({
    model: "gemma-3n-e4b-it",
    contents: Prompt,
  });
  const text = response.text;
  return text;
}

