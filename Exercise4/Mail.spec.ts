import { Mail } from './Mail';

describe('Mail', () => {
  it('Should calculate shipping price', () => {
    const mail = new Mail();

    expect(mail.getShippingPrice('12323')).toBe(12);
  });
});
