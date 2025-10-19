
export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  category: string;
  image: string;
  source?: string;
  extra?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  recipes: Recipe[];
}

export type Tab = 'home' | 'about' | 'videos' | 'favorites' | 'contribute' | 'generate';

export type ViewMode = 'mobile' | 'desktop';

export interface EducationalVideo {
    id: string;
    title: string;
    description: string;
}
