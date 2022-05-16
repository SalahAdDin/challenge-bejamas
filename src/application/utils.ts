import { CartProduct } from '@domain/cart.dto';
import { Product } from '@domain/products.dto';

const calculatePrice = (list: CartProduct[]) =>
  list.reduce((aux, item) => aux + item.price * item.amount, 0);

type DynamicSortArrayInputType = {
  array: Product[];
  direction: 'asc' | 'desc';
  mode: 'name' | 'price';
};

const dynamicSortArray = ({
  array,
  direction,
  mode,
}: DynamicSortArrayInputType): Product[] => {
  const functions = {
    name: {
      asc: (a: Product, b: Product) => a.name.localeCompare(b.name),
      desc: (a: Product, b: Product) => b.name.localeCompare(a.name),
    },
    price: {
      asc: (a: Product, b: Product) => a.price - b.price,
      desc: (a: Product, b: Product) => b.price - a.price,
    },
  };

  return array.sort(functions[mode][direction]);
};

export type { DynamicSortArrayInputType };

export { calculatePrice, dynamicSortArray };
