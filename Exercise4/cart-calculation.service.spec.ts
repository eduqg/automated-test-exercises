import { IUser, User } from './User'
import { Product } from './Product'
import { Cart } from './Cart'
import { Mail } from './Mail'
import { CartCalculationService } from './cart-calculation.service'

let user: IUser;

describe('Cart calculation service', () => {
  beforeAll(() => {
    user = new User('John', '58400020');
  });

  it('Should calculate cart total price ', () => {
    const product1 = new Product('Celular', 1500);
    const product2 = new Product('TV', 1700);
    const cart = new Cart(user, [product1, product2, product2]);
    const mail = new Mail();

    const cartCalculationService = new CartCalculationService(mail);

    const total = cartCalculationService.getCartTotal(cart);

    expect(user.getName()).toBe('John');
    expect(product1.name).toBe('Celular');
    expect(product2.value).toBe(1700);
    expect(cart.getProducts().length).toBe(3);
    expect(total).toBe(4900);
  });

  it('Should calculate cart shipping price if it is under 100', () => {
    const product1 = new Product('Fone', 45);
    const cart = new Cart(user, [product1]);
    const mail = new Mail();

    const cartCalculationService = new CartCalculationService(mail);

    const total = cartCalculationService.getCartTotal(cart);

    expect(total).toBe(103);
  });

  it('Should not calculate cart shipping price if it is 100', () => {
    const product1 = new Product('Fone Premium', 100);
    const cart = new Cart(user, [product1]);
    const mail = new Mail();

    const cartCalculationService = new CartCalculationService(mail);

    const total = cartCalculationService.getCartTotal(cart);

    expect(total).toBe(100);
  });
});
