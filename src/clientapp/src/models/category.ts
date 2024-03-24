export interface Category {
  name: string;
  normalizedName: string;
  parentCategory?: string;
  isTopLevel: boolean;
}
