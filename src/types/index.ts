export type BlogCategory = 'All' | 'Hardware' | 'Graphic Design' | 'Web Development' | 'Teamwork';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: 'Hardware' | 'Graphic Design' | 'Web Development' | 'Teamwork';
  summary: string;
  fullContent: string[];
  keyLearnings: string[];
  toolsUsed: string[];
  coverImage: string;
  galleryImages?: string[];
  relatedGalleryIds?: string[];
}

export type GalleryCategory = 'All' | 'Hardware Repair' | 'Design & Layout' | 'Web & Coding' | 'Team & Workspace';

export interface GalleryItem {
  id: string;
  title: string;
  src: string;
  category: 'Hardware Repair' | 'Design & Layout' | 'Web & Coding' | 'Team & Workspace';
  date: string;
  alt: string;
  caption: string;
  details: string;
  relatedBlogId?: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Design' | 'Hardware' | 'Tools';
  proficiency: string;
  description: string;
}
