export interface IUser {
  getName: () => string;
  getZipCode: () => string;
}

export class User implements IUser {
  private name: string;
  private zipCode: string;

  constructor(name: string, zipCode: string) {
    this.name = name;
    this.zipCode = zipCode;
  }

  getName(): string {
    return this.name;
  }

  getZipCode(): string {
    return this.zipCode;
  }
}