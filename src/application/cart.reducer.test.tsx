import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React, { useMemo, useReducer } from 'react';

import { initialStorage, reducer } from './cart.reducer';
import { addProductAction, deleteProductsAction } from './test.utils';

const CartReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialStorage);
  const memo = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <main>
      <section data-testid="cart">
        {memo.state.products.length > 0 ? (
          <ul>
            {memo.state.products.map((product) => (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>{product.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products on cart.</p>
        )}
        <p>
          Price:
          {memo.state.price}
        </p>
      </section>
      <section>
        <button type="button" onClick={() => memo.dispatch(addProductAction)}>
          Create
        </button>
        <button
          type="button"
          onClick={() => memo.dispatch(deleteProductsAction)}
        >
          Delete
        </button>
      </section>
    </main>
  );
};

describe('Cart Reducer', () => {
  const {
    payload: { name, amount, price },
  } = addProductAction;

  test('should show default text while not dispatching any action', () => {
    render(<CartReducer />);
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();
  });

  test('should render a newly added product', () => {
    render(<CartReducer />);
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Create'));
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(amount)).toBeInTheDocument();
    expect(screen.getByText(`Price: ${price}`)).toBeInTheDocument();
  });

  test('should update price and amount when adding same product a second time', () => {
    render(<CartReducer />);
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Create'));
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(amount)).toBeInTheDocument();
    expect(screen.getByText(`Price: ${price}`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Create'));
    expect(screen.queryByText(amount)).not.toBeInTheDocument();
    expect(screen.getByText(amount * 2)).toBeInTheDocument();
    expect(screen.queryByText(`Price: ${price}`)).not.toBeInTheDocument();
    expect(screen.getByText(`Price: ${price * 2}`)).toBeInTheDocument();
  });

  test('should not render products after clean the cart', () => {
    render(<CartReducer />);
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Create'));
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(amount)).toBeInTheDocument();
    expect(screen.getByText(`Price: ${price}`)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.getByText('No products on cart.')).toBeInTheDocument();
    expect(screen.queryByText(amount)).not.toBeInTheDocument();
    expect(screen.getByText('Price: 0')).toBeInTheDocument();
    expect(screen.queryByText(`Price: ${price}`)).not.toBeInTheDocument();
  });
});
