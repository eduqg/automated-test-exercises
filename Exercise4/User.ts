export interface IUser {
  name: string;
  zipCode: string;
  getName: () => string;
  getZipCode: () => string;
}

export class User implements IUser {
  name: string;
  zipCode: string;

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