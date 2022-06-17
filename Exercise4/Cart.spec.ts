import { IUser, User } from './User'
import { Product } from './Product'
import { Cart } from './Cart'
import { Mail } from './Mail';
import { CartCalculationService } from './cart-calculation.service';

let user: IUser;

describe('Cart', () => {
  beforeAll(() => {
    user = new User('John', '58400020');
  });

  it('Should create cart', () => {
    const cart = new Cart(user, []);

    expect(cart.user).toBe(user);
    expect(cart.getProducts().length).toBe(0);
  });

  it('Should add product on cart', () => {
    const product1 = new Product('Celular', 1500);
    const product2 = new Product('TV', 1700);

    const cart = new Cart(user, []);

    cart.add(product1);
    cart.add(product2);

    expect(cart.getProducts().length).toBe(2);
  });

  it('Should remove product on cart', () => {
    const product1 = new Product('Celular', 1500);
    const product2 = new Product('TV', 1700);

    const cart = new Cart(user, []);

    cart.add(product1);
    cart.add(product1);
    cart.add(product2);
    cart.add(product2);

    expect(cart.getProducts().length).toBe(4);

    cart.remove(product1);

    expect(cart.getProducts().length).toBe(3);
  });

  it('Should get total of cart', () => {
    const product1 = new Product('Celular', 1500);
    const product2 = new Product('TV', 2000);
    const cart = new Cart(user, [product1, product2, product2]);

    expect(cart.getTotal()).toBe(5500);
  });

  it('Should not calculate cart shipping price if it is 100', () => {
    const user = new User('Doe', '32443344');
    const product1 = new Product('Fone Premium', 100);
    const cart = new Cart(user, [product1]);
    const mail = new Mail();

    const calculationService = new CartCalculationService(mail);

    const total = calculationService.getCartTotal(cart);

    expect(total).toBe(100);
  });
});
