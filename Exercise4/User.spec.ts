import { User } from './User'

describe('User', () => {
  it('Should create user', () => {
    const user = new User('John', '58400020');
    expect(user.getName()).toBe('John');
    expect(user.getZipCode()).toBe('58400020');
  });
});
