import { Exercise1, IExercise1 } from ".";

let exercise1: IExercise1;

describe('Exercise 1', () => {
  beforeAll(() => {
    exercise1 = new Exercise1();
  });

  it('Should check if value it is multiple', () => {
    const { isMultipleOf } = exercise1;

    expect(isMultipleOf(9, 3)).toBe(true);
    expect(isMultipleOf(9, 4)).toBe(false);
    expect(isMultipleOf(25, 5)).toBe(true);
    expect(isMultipleOf(25, 4)).toBe(false);
  });

  it('Should calculate sum of multiples of 3 or 5 of 10', () => {
    const { calculateIsMultipleOf3or5 } = exercise1;

    const result = calculateIsMultipleOf3or5(10);

    expect(result).toBe(23);
  });

  it('Should calculate sum of multiples of 3 or 5 of 1000', () => {
    const { calculateIsMultipleOf3or5 } = exercise1;

    const result = calculateIsMultipleOf3or5(1000);

    expect(result).toBe(233168);
  });

  it('Should calculate sum of multiples of 3 or 5 of 1000 Option 2', () => {
    const { calculateIsMultipleOf3or5Option2 } = exercise1;

    const result = calculateIsMultipleOf3or5Option2(1000);

    expect(result).toBe(233168);
  });

  it('Should calculate sum of multiples of 3 and 5 of 1000', () => {
    const { calculateIsMultipleOf3and5 } = exercise1;

    const result = calculateIsMultipleOf3and5(1000);

    expect(result).toBe(33165);
  });

  it('Should calculate sum of multiples of (3 or 5) and 7 of 1000', () => {
    const { calculateIsMultipleOf3or5and7 } = exercise1;

    const result = calculateIsMultipleOf3or5and7(1000);

    expect(result).toBe(33173);
  });
});
