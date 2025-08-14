
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  recipes: Recipe[];
}

export type Tab = 'home' | 'tips' | 'videos' | 'favorites' | 'generate';

export type ViewMode = 'mobile' | 'desktop';

export interface EducationalVideo {
    id: string;
    title: string;
    description: string;
}

// Type for the AI-generated recipe structure
export interface GeneratedRecipe {
    name: string;
    ingredients: string[];
    instructions: string;
}
