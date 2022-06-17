import { Product } from './Product';

describe('Product', () => {
  it('Should create product', () => {
    const product = new Product('Mouse', 50);

    expect(product.getName()).toBe('Mouse');
    expect(product.getValue()).toBe(50);
  });
});
