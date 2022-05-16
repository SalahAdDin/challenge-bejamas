import { Product } from './products.dto';

type CartProduct = Pick<Product, 'name' | 'image' | 'id' | 'price'> & {
  amount: number;
};

interface Cart {
  products: CartProduct[];
  price: number;
}

export type { CartProduct, Cart };
