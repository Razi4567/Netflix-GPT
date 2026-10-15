import { GoogleGenAI } from "@google/genai";

const genai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GENAI_KEY });

export default genai