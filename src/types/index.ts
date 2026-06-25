export interface ProductSpecs {
  material: string;
  weight: string;
  purity: string;
  certification: string;
}

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  specs: ProductSpecs;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PaymentForm {
  cardNumber: string;
  expiry: string;
  cvc: string;
  name: string;
  email: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
}

// Single source of truth for category labels — used by both the data file
// and the category filter pills. Add a category here once, then any product
// in src/data/products.ts using it is automatically filterable.
export const PRODUCT_CATEGORIES = [
  'Gold Jewelry',
  'Silver Jewelry',
  'Bridal Sets',
  'Wedding Collection',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
