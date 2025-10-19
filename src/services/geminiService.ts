
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;

if (!API_KEY) {
    throw new Error("VITE_GEMINI_API_KEY is not defined in your environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.0-pro",
});

const generationConfig = {
    temperature: 0.6,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// These settings are to reduce the chances of getting harmful content.
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

export async function generateRecipe(ingredients: string): Promise<string> {
    const prompt = `
        **Instrução:** Você é um assistente de culinária focado em sustentabilidade. Sua tarefa é criar uma receita segura, deliciosa e criativa usando os ingredientes fornecidos pelo usuário.

        **Contexto:** O usuário fornecerá uma lista de ingredientes, que podem ser sobras, itens maduros, cascas ou talos. Seu objetivo é criar uma receita que aproveite ao máximo esses ingredientes, adicionando outros itens comuns, se necessário.

        **Regras Críticas de Segurança (NÃO IGNORE):**
        1.  **Apenas Ingredientes Comestíveis:** Use APENAS ingredientes que são universalmente reconhecidos como seguros para consumo humano. NÃO inclua itens que sejam venenosos, tóxicos, não comestíveis (como plástico, pedras, terra) ou que possam causar danos à saúde.
        2.  **Nenhuma Instrução Perigosa:** As instruções de preparo devem ser seguras e seguir práticas de cozinha padrão. NÃO inclua etapas que envolvam fogo de forma perigosa, produtos químicos não alimentícios ou qualquer ação que possa colocar o usuário em risco.
        3.  **Foco em Sustentabilidade:** A receita deve, sempre que possível, promover o aproveitamento integral dos alimentos.

        **Formato da Resposta (use este template exato):**
        ### [Nome da Receita]

        **Ingredientes:**
        *   [Ingrediente 1]
        *   [Ingrediente 2]
        *   ...

        **Modo de Preparo:**
        1.  [Passo 1]
        2.  [Passo 2]
        3.  ...

        **Ingredientes Fornecidos pelo Usuário:**
        ${ingredients}

        **Sua Resposta (comece agora):**
    `;

    try {
        const chatSession = model.startChat({
            generationConfig,
            safetySettings,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error generating recipe from Gemini:", error);

        // Check for specific safety-related errors if the API provides them
        if (error.toString().includes('SAFETY')) {
             throw new Error("A receita não pôde ser gerada devido a preocupações com segurança nos ingredientes fornecidos. Por favor, use apenas ingredientes comestíveis.");
        }

        throw new Error("Não foi possível gerar a receita no momento. Tente novamente mais tarde.");
    }
}
