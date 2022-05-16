import '@testing-library/jest-dom';

import { Cart } from '@domain/cart.dto';
import { ProductsState } from '@domain/products.dto';
import { render, screen } from '@testing-library/react';

import AppContext, {
  AppProviderProps,
  initialProductsState,
} from './app.context';
import { initialStorage } from './cart.reducer';
import { customRender, dummyProduct, featuredProduct } from './test.utils';

const AppConsumer: React.FC = () => (
  <AppContext.Consumer>
    {({ productsState: { products, featured }, state }) => (
      <main>
        <section data-testid="products">
          {featured && <strong data-testid="featured">{featured.name}</strong>}
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          ) : (
            <p>No products fetched.</p>
          )}
        </section>
        <section data-testid="cart">
          {state.products.length > 0 ? (
            <ul>
              {state.products.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          ) : (
            <p>No products on cart.</p>
          )}
          <p>
            Price:
            {state.price}
          </p>
        </section>
      </main>
    )}
  </AppContext.Consumer>
);

describe('App Context', () => {
  const setup = (state: Cart, productsState: ProductsState) => {
    const providerProps: AppProviderProps = {
      productsState,
      setProductsState: () => undefined,
      state,
      dispatch: () => undefined,
    };
    customRender(<AppConsumer />, { providerProps });
  };

  test('should show default values', () => {
    render(<AppConsumer />);
    expect(screen.getByText('No products fetched.')).toBeInTheDocument();
    expect(screen.queryByTestId('featured')).not.toBeInTheDocument();
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();
  });

  test('should show default values from provider', () => {
    setup(initialStorage, initialProductsState);
    expect(screen.getByText('No products fetched.')).toBeInTheDocument();
    expect(screen.queryByTestId('featured')).not.toBeInTheDocument();
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();
  });

  test('should show a product and cart from provider', () => {
    const { id, price, name, image } = dummyProduct;
    setup(
      { products: [{ id, price, name, image, amount: 1 }], price },
      { totalCount: 1, featured: featuredProduct, products: [dummyProduct] },
    );
    expect(screen.getAllByText(name)).toHaveLength(2);
    expect(screen.getByText(featuredProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Price: ${price}`)).toBeInTheDocument();
  });
});
