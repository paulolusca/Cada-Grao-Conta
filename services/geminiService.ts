import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { GeneratedRecipe } from "../types";

const API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string)?.trim();

// Moved instantiation inside the function to avoid app crash on start
// if the API key is a placeholder.
// const genAI = new GoogleGenAI(API_KEY);

const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export async function generateRecipeWithAI(ingredients: string): Promise<GeneratedRecipe> {
    const genAI = new GoogleGenAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro", generationConfig, safetySettings });

    const prompt = `
    Você é um assistente de culinária criativo e especialista em reaproveitamento de alimentos.
    Sua tarefa é criar uma receita deliciosa e fácil de seguir usando os ingredientes fornecidos pelo usuário.
    A receita deve ser retornada em um formato JSON estruturado.

    **Instruções:**
    1.  Analise a lista de ingredientes: ${ingredients}.
    2.  Crie um nome criativo e apetitoso para a receita.
    3.  Liste todos os ingredientes necessários, incluindo os que foram fornecidos e quaisquer outros que sejam essenciais (como sal, pimenta, azeite, etc.).
    4.  Forneça instruções de preparo claras e concisas, em um único bloco de texto.
    5.  O JSON de saída deve ter EXATAMENTE a seguinte estrutura: { "name": "string", "ingredients": ["string"], "instructions": "string" }.
    6.  NÃO inclua nenhuma formatação markdown (como \`\`\`json) no início ou no fim da sua resposta. A resposta deve ser apenas o JSON.

    Exemplo de saída para "bananas maduras, aveia":
    {
      "name": "Panquecas de Banana e Aveia",
      "ingredients": [
        "2 bananas maduras amassadas",
        "1 xícara de aveia em flocos",
        "2 ovos",
        "1/2 colher de chá de canela em pó",
        "1 colher de chá de fermento em pó",
        "Uma pitada de sal"
      ],
      "instructions": "Misture todos os ingredientes em uma tigela até obter uma massa homogênea. Aqueça uma frigideira antiaderente em fogo médio. Despeje pequenas porções da massa e cozinhe por 2-3 minutos de cada lado, ou até dourar. Sirva quente com mel ou frutas."
    }
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // Basic cleanup of potential markdown formatting
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        // Attempt to parse the cleaned text
        const recipe: GeneratedRecipe = JSON.parse(cleanedText);
        return recipe;

    } catch (error) {
        console.error("Error generating recipe with AI:", error);

        let errorMessage = "Não foi possível gerar a receita. Tente novamente mais tarde.";
        if (error instanceof Error) {
            if (error.message.includes('API key not valid')) {
                errorMessage = "A chave da API do Gemini não é válida. Verifique a configuração no arquivo .env.local.";
            } else if (error.message.includes('fetch failed')) {
                errorMessage = "Erro de conexão ao tentar se comunicar com a IA. Verifique sua internet ou a configuração do firewall.";
            }
        }

        throw new Error(errorMessage);
    }
}
