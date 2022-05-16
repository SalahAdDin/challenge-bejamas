import { reducer, initialStorage } from './cart.reducer';
import { addProductAction, deleteProductsAction } from './test.utils';

describe('Cart Reducer', () => {
  test('should add a new product to the cart', () => {
    expect(reducer(initialStorage, addProductAction)).toEqual({
      products: [addProductAction.payload],
      price: addProductAction.payload.price,
    });
  });

  const updatedState = {
    products: [addProductAction.payload],
    price: addProductAction.payload.price,
  };

  test('should duplicate price and product amount at adding the a product a second time', () => {
    expect(reducer(updatedState, addProductAction)).toEqual({
      products: [{ ...addProductAction.payload, amount: 2 }],
      price: addProductAction.payload.price * 2,
    });
  });

  test('should remove all products at deleting products', () => {
    expect(reducer(updatedState, deleteProductsAction)).toEqual(initialStorage);
  });
});
