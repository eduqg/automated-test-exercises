const Exercise1 = require('./index');

it('Should check if value it is multiple', () => {
    const { isMultipleOf } = Exercise1;

    expect(isMultipleOf(9, 3)).toBe(true);
    expect(isMultipleOf(9, 4)).toBe(false);
    expect(isMultipleOf(25, 5)).toBe(true);
    expect(isMultipleOf(25, 4)).toBe(false);
});

it('Should calculate sum of multiples of 3 or 5', () => {
    const { calculateIsMultipleOf3or5 } = Exercise1;

    const result = calculateIsMultipleOf3or5(1000);

    expect(result).toBe(233168);
});

it('Should calculate sum of multiples of 3 or 5 Option 2', () => {
    const { calculateIsMultipleOf3or5Option2 } = Exercise1;

    const result = calculateIsMultipleOf3or5Option2(1000);

    expect(result).toBe(233168);
});

it('Should calculate sum of multiples of 3 and 5', () => {
    const { calculateIsMultipleOf3and5 } = Exercise1;

    const result = calculateIsMultipleOf3and5(1000);

    expect(result).toBe(33165);
});

it('Should calculate sum of multiples of (3 or 5) and 7', () => {
    const { calculateIsMultipleOf3or5and7 } = Exercise1;

    const result = calculateIsMultipleOf3or5and7(1000);

    expect(result).toBe(33173);
});


it('Should check value 0 if not multiple', () => {
    const {
        calculateIsMultipleOf3or5,
        calculateIsMultipleOf3or5Option2,
        calculateIsMultipleOf3and5,
        calculateIsMultipleOf3or5and7
    } = Exercise1;

    expect(calculateIsMultipleOf3or5(0)).toBe(false);
    expect(calculateIsMultipleOf3or5Option2(0)).toBe(false);
    expect(calculateIsMultipleOf3and5(0)).toBe(false);
    expect(calculateIsMultipleOf3or5and7(0)).toBe(false);
});