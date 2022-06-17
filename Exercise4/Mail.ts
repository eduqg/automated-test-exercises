export interface IMail {
  getShippingPrice: (zipCode: string) => number;
}

export class Mail {
  getShippingPrice(zipCode: string): number {
    return Number(zipCode.slice(0, 2));
  }
}