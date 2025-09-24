
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

export type Tab = 'home' | 'tips' | 'videos' | 'favorites' | 'about';

export type ViewMode = 'mobile' | 'desktop';

export interface EducationalVideo {
    id: string;
    title: string;
    description: string;
}
