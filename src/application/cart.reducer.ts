import { Cart, CartProduct } from '@domain/cart.dto';
import { calculatePrice } from './utils';

const initialStorage: Cart = {
  products: [],
  price: 0,
};

const initialState: Cart =
  typeof window !== 'undefined'
    ? (JSON.parse(
        localStorage.getItem('cart') || JSON.stringify(initialStorage),
      ) as Cart)
    : initialStorage;

enum ActionTypes {
  addProduct,
  deleteProducts,
}

interface AddProductAction {
  type: ActionTypes.addProduct;
  payload: CartProduct;
}

interface DeleteProductsAction {
  type: ActionTypes.deleteProducts;
  payload: null;
}

type Actions = AddProductAction | DeleteProductsAction;

const reducer = (state: Cart, action: Actions) => {
  const { type, payload } = action;

  const { products } = state;

  switch (type) {
    case ActionTypes.addProduct: {
      let updatedProducts: CartProduct[] = [];

      if (products.some((product) => product.id === payload.id)) {
        updatedProducts = products.map((product) => {
          if (product.id === payload.id) {
            const amount = product.amount + 1;

            return { ...product, amount };
          }
          return product;
        });
      } else updatedProducts = [...products, payload];

      const price = calculatePrice(updatedProducts);

      return { ...state, products: updatedProducts, price };
    }
    case ActionTypes.deleteProducts:
      return initialStorage;
    default:
      return state;
  }
};

export { ActionTypes, initialState, initialStorage, reducer };
export type { Actions, AddProductAction, DeleteProductsAction };
