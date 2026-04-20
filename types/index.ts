export interface Car {
  id: string;
  title: string;
  make: string;
  year: string;
  price: number;
  mileage: string;
  transmission: string;
  fuel: string;
  category: string;
  image: string;
  badge: string;
  features: string[];
  description: string;
  seller: string;
  location: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: { heading?: string; body: string }[];
}
