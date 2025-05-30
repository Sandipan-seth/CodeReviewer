import { generateText } from '../services/ai.service.js';


export default async function getResponse (req, res) {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({success:"failed", error: 'Prompt is required' });
    }

    const newPrompt = `${code}`;
    const response = await generateText(newPrompt);
    res.status(200).json({
        success: "success",
        message: "Text generated successfully",
        generatedText: response
    });
}