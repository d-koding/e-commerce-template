export interface Product {
    id: string; // UUID as string in TypeScript
    name: string;
    price: number; // Numeric in DB, number in TS (convert as needed)
    description?: string | null; // Nullable in DB
    image: string;
    hoverImage?: string | null; // Nullable in DB
    created_at: string; // Timestamp as ISO string in TS
    popularity?: number | null; // Nullable in DB
  }

  