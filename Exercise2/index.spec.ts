import { Exercise2, IExercise2 } from ".";

let exercise2: IExercise2;

describe('Exercise 2', () => {
  beforeAll(() => {
    exercise2 = new Exercise2();
  });

  it('Should check if 1 is a happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(1);

    expect(result).toBe(true);
  });

  it('Should check if 7 is a happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(7);

    expect(result).toBe(true);
  });

  it('Should check if 32 is a happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(32);

    expect(result).toBe(true);
  });

  it('Should check if 0 is not a happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(0);

    expect(result).toBe(false);
  });

  it('Should check if 9 is not a happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(9);

    expect(result).toBe(false);
  });

  it('Should consider negative number as not happy number', () => {
    const { isHappyNumber } = exercise2;

    const result = isHappyNumber(-9);

    expect(result).toBe(false);
  });
});
