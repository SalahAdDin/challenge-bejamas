import { Cart } from '@domain/cart.dto';
import { ProductsState } from '@domain/products.dto';
import { createContext } from 'react';
import { GetProductsQueryVariables } from '../../server/handlers';

import { Actions, initialStorage } from './cart.reducer';

const initialProductsState: ProductsState = {
  totalCount: 0,
  products: [],
};

const defaultQueryVariables: GetProductsQueryVariables = {
  limit: 6,
  start: 0,
  category: undefined,
  priceRange: undefined,
};

type AppProviderProps = {
  productsState: ProductsState;
  setProductsState: (products: ProductsState) => void;
  state: Cart;
  dispatch: React.Dispatch<Actions>;
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
  queryVariables: GetProductsQueryVariables;
  setQueryVariables: (variables: GetProductsQueryVariables) => void;
};

const AppContext = createContext<AppProviderProps>({
  productsState: initialProductsState,
  setProductsState: () => undefined,
  state: initialStorage,
  dispatch: () => undefined,
  openCart: false,
  setOpenCart: () => undefined,
  queryVariables: defaultQueryVariables,
  setQueryVariables: () => undefined,
});

export type { AppProviderProps };
export { initialProductsState, defaultQueryVariables };
export default AppContext;
