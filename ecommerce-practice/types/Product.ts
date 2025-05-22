// @/types/Product.ts
export interface MediaItem {
  url: string;
  type?: string;
  order?: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  popularity: number;
  created_at?: string;
  media: MediaItem[] | null;
  slug: string;
}