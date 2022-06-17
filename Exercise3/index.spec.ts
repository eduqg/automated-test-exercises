import { Exercise3, IExercise3 } from ".";

let exercise3: IExercise3;

describe('Prime Numbers', () => {
  beforeAll(() => {
    exercise3 = new Exercise3();
  });

  it('Should check if 5 is prime', () => {
    const { calculateIsPrime } = exercise3;

    const result = calculateIsPrime(5);

    expect(result).toBe(true);
  });

  it('Should check if 26 is not prime', () => {
    const { calculateIsPrime } = exercise3;

    const result = calculateIsPrime(26);

    expect(result).toBe(false);
  });
});

describe('Happy Numbers', () => {
  beforeAll(() => {
    exercise3 = new Exercise3();
  });

  it('Should check if 310 is a happy number', () => {
    const { isHappyNumber } = exercise3;

    const result = isHappyNumber(310);

    expect(result).toBe(true);
  });

  it('Should check if 1001 is not a happy number', () => {
    const { isHappyNumber } = exercise3;

    const result = isHappyNumber(1001);

    expect(result).toBe(false);
  });
});

describe('Multiple of 3 or 5', () => {
  beforeAll(() => {
    exercise3 = new Exercise3();
  });

  it('Should check if 100 is multiple of 3 or 5', () => {
    const { calculateIsMultipleOf3or5 } = exercise3;

    const result = calculateIsMultipleOf3or5(100);

    expect(result).toBe(true);
  });

  it('Should check if 1001 is not a happy number', () => {
    const { calculateIsMultipleOf3or5 } = exercise3;

    const result = calculateIsMultipleOf3or5(1001);

    expect(result).toBe(false);
  });
});

describe('Exercise 3', () => {
  beforeAll(() => {
    exercise3 = new Exercise3();
  });

  it('Should check word aa', () => {
    const { calculateWordsInNumbers } = exercise3;

    const result = calculateWordsInNumbers('aa');

    expect(result).toBe('2 - primo  - not happy -  not multiple of 3 or 5');
  });

  it('Should check word abc', () => {
    const { calculateWordsInNumbers } = exercise3;

    const result = calculateWordsInNumbers('abc');

    expect(result).toBe('6 - not prime  - not happy -  multiple of 3 or 5');
  });

  it('Should check word efkj', () => {
    const { calculateWordsInNumbers } = exercise3;

    const result = calculateWordsInNumbers('efkj');

    expect(result).toBe('32 - not prime  - happy -  not multiple of 3 or 5');
  });


  it('Should check word AsdknR', () => {
    const { calculateWordsInNumbers } = exercise3;

    const result = calculateWordsInNumbers('AsdknR');

    expect(result).toBe('119 - not prime  - not happy -  not multiple of 3 or 5');
  });

  it('Should check empty word', () => {
    const { calculateWordsInNumbers } = exercise3;

    const result = calculateWordsInNumbers('');

    expect(result).toBe('0 - not prime  - not happy -  not multiple of 3 or 5');
  });
});
