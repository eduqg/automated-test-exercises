export interface IProduct {
  name: string;
  value: number;
  getName: () => string;
  getValue: () => number;
}

export class Product implements IProduct {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }

  getName(): string {
    return this.name;
  }

  getValue(): number {
    return this.value;
  }
}