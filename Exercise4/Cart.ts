import { IUser } from "./User";
import { IProduct } from "./Product";

export interface ICart {
  user: IUser;
  add: (product: IProduct) => void;
  remove: (product: IProduct) => void;
  getProducts: () => IProduct[];
  getTotal: () => number;
}

export class Cart implements ICart {
  user: IUser;
  private products: IProduct[];

  constructor(user: IUser, products: IProduct[]) {
    this.user = user;
    this.products = products;
  }

  add(product: IProduct): void {
    this.products = [...this.products, product]
  }

  remove(product: IProduct): void {
    const foundProductIndex = this.products.findIndex(findProduct => {
      return findProduct.name === product.name
    })

    if (foundProductIndex > -1) {
      this.products.splice(foundProductIndex, 1)
    }
  }

  getProducts(): IProduct[] {
    return this.products;
  }

  getTotal(): number {
    const total = this.products.reduce((partialSum, a) => {
      return partialSum + a.value;
    }, 0);

    return total;
  }
}