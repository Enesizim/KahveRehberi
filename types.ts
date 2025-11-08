export interface Equipment {
  name: string;
  link: string;
}

export interface BrewingMethod {
  id: string;
  name: string;
  description: string;
  ratio: string;
  grindSize: string;
  brewTime: string;
  instructions: string[];
  equipment: Equipment[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface CoffeeVariety {
  id:string;
  name: string;
  origin: string;
  flavorProfile: string;
  description: string;
}

export interface CoffeeTip {
  id: string;
  title: string;
  description: string;
  icon: 'Spice' | 'Syrup' | 'Cream' | 'Chocolate' | 'Salt' | 'Citrus';
  idealFor: string;
  examples: string[];
}

export interface RoastLevel {
  id: string;
  name: string;
  description: string;
  color: string;
  flavorNotes: string[];
}

export interface WaterQualityTopic {
  id: string;
  title: string;
  content: string;
  icon: 'WaterDrop' | 'Mineral' | 'Filter';
}