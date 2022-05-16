/* eslint-disable object-curly-newline */

interface Dimensions {
  width: number;
  height: number;
}

interface Details {
  dimensions: Dimensions;
  size: number;
  description: string;
  recommendations: Image[];
}

interface Image {
  alt: string;
  src: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: Image;
  bestseller: boolean;
  featured: boolean;
  details?: Details;
}

interface ProductsState {
  totalCount: number;
  featured?: Product;
  products: Product[];
}

export type { Details, Dimensions, Image, Product, ProductsState };
