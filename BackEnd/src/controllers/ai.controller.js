import { generateText } from '../services/ai.service.js';


export default async function getResponse (req, res) {
    const { prompt } = req.body;
    console.log("Received prompt:", prompt);
    if (!prompt) {
        return res.status(400).json({success:"failed", error: 'Prompt is required' });
    }
    
    const newPrompt = `Generated text based on prompt in simple and short words: ${prompt}`;
    const response = await generateText(newPrompt);
    res.status(200).json({
        success: "success",
        message: "Text generated successfully",
        generatedText: response
    });
}