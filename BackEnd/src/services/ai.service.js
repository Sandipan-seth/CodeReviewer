import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
config();

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

export async function generateText(Prompt) {
  const response = await ai.models.generateContent({
    model: "gemma-3n-e4b-it",
    contents: Prompt,
    systemInstruction: "You are a code review assistant. Provide concise and clear responses. Use simple and short words. you look for errors in the code and suggest improvements. and suggest solutions to the problems you find.",
  });
  const text = response.text;
  return text;
}

