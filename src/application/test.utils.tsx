import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import products from '../../server/mocks';
import AppContext, { AppProviderProps } from './app.context';
import {
  ActionTypes,
  AddProductAction,
  DeleteProductsAction,
} from './cart.reducer';

interface CustomRenderOptions {
  providerProps: AppProviderProps;
  renderOptions?: Omit<RenderOptions, 'wrapper'>;
}

const dummyProduct = products[1];
const featuredProduct = products[4];
const { id, price, name, image } = dummyProduct;

const addProductAction: AddProductAction = {
  type: ActionTypes.addProduct,
  payload: { id, price, name, image, amount: 1 },
};

const deleteProductsAction: DeleteProductsAction = {
  type: ActionTypes.deleteProducts,
  payload: null,
};

const customRender = (
  ui: ReactElement,
  { providerProps, renderOptions }: CustomRenderOptions,
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AppContext.Provider value={providerProps}>
        {children}
      </AppContext.Provider>
    ),
    ...renderOptions,
  });

export {
  addProductAction,
  deleteProductsAction,
  dummyProduct,
  featuredProduct,
  customRender,
};
