
import { generateRecipe } from './geminiService';

jest.mock('@google/generative-ai', () => {
  const mockStartChat = jest.fn().mockReturnValue({
    sendMessage: jest.fn().mockResolvedValue({
      response: {
        text: () => 'Mocked recipe',
      },
    }),
  });

  const mockGetGenerativeModel = jest.fn((args: { model: string }) => {
    if (args.model !== 'gemini-1.0-pro') {
      throw new Error(`404 Not Found: Model '${args.model}' not found.`);
    }
    return {
      startChat: mockStartChat,
    };
  });

  return {
    GoogleGenerativeAI: jest.fn(() => ({
      getGenerativeModel: mockGetGenerativeModel,
    })),
    HarmCategory: {},
    HarmBlockThreshold: {},
  };
});

describe('geminiService', () => {
  it('should return a recipe when called with valid ingredients', async () => {
    const recipe = await generateRecipe('test ingredients');
    expect(recipe).toBe('Mocked recipe');
  });

  it('should call getGenerativeModel with the correct model name', async () => {
    await generateRecipe('test ingredients');
    const mockGoogleGenerativeAI = require('@google/generative-ai').GoogleGenerativeAI;
    const mockGenAIInstance = mockGoogleGenerativeAI.mock.results[0].value;
    expect(mockGenAIInstance.getGenerativeModel).toHaveBeenCalledWith({ model: 'gemini-1.0-pro' });
  });
});
