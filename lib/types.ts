export interface MenuItem {
  name: string;
  details: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  description: string;
  items: MenuItem[];
}

export interface Chef {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Promotion {
  title: string;
  description: string;
  badge: string;
}

export interface EventOffering {
  title: string;
  description: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  author: string;
  featuredImage: string;
  keywords: string[];
  faq: BlogFaq[];
  sections: BlogSection[];
}
