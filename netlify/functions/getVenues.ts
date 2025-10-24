import { GoogleGenAI, Type } from "@google/genai";
import type { Handler } from '@netlify/functions';

export const handler: Handler = async () => {
  if (!process.env.API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API_KEY environment variable not set on the server." }),
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Generate a comprehensive and extensive list of music venues in Ontario, Canada. Aim for a very long list. Include venues from major cities like Toronto, Ottawa, Hamilton, London, Kitchener-Waterloo, Mississauga, and Windsor. Also include notable venues in smaller towns. For each venue, provide its name, full address (including street, city, province, and postal code), and its approximate capacity. The list should cover a wide range of sizes, from large stadiums and arenas to medium-sized concert halls, and small, independent clubs and bars known for live music. Be as thorough as possible.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "The name of the music venue." },
                address: { type: Type.STRING, description: "The full street address of the music venue." },
                capacity: { type: Type.NUMBER, description: "The approximate capacity of the venue." },
              },
              required: ["name", "address", "capacity"],
            },
          },
        },
    });

    if (!response || !response.text) {
        console.error("No text in response from Gemini API");
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to get a valid response from the AI model." }),
        };
    }

    const jsonString = response.text.trim();
    
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
    };

  } catch (error) {
    console.error("Error in Netlify function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred while fetching data." }),
    };
  }
};