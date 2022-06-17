import { ICart } from "./Cart";
import { IMail } from "./Mail";

export interface ICartCalculationService {
  mail: IMail;
  getCartTotal: (cart: ICart) => number;
}

export class CartCalculationService implements ICartCalculationService {
  mail: IMail;

  constructor(mail: IMail) {
    this.mail = mail;
  }

  getCartTotal(cart: ICart): number {
    const cartProductsPrice = cart.getTotal();
    let shippingPrice = 0;

    if (cartProductsPrice < 100) {
      shippingPrice = this.mail.getShippingPrice(cart.user.zipCode);
    }

    return shippingPrice + cartProductsPrice;
  }
}