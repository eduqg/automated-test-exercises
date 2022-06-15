const Exercise3 = require('./index');

it('Should check word aa', () => {
    const { calculateWordsInNumbers } = Exercise3;

    const result = calculateWordsInNumbers('aa');

    expect(result).toBe('2 - primo  - not happy -  not multiple of 3 or 5');
});

it('Should check word abc', () => {
    const { calculateWordsInNumbers } = Exercise3;

    const result = calculateWordsInNumbers('abc');

    expect(result).toBe('6 - not prime  - not happy -  multiple of 3 or 5');
});

it('Should check word efkj', () => {
    const { calculateWordsInNumbers } = Exercise3;

    const result = calculateWordsInNumbers('efkj');

    expect(result).toBe('32 - not prime  - happy -  not multiple of 3 or 5');
});


it('Should check word AsdknR', () => {
    const { calculateWordsInNumbers } = Exercise3;

    const result = calculateWordsInNumbers('AsdknR');

    expect(result).toBe('119 - not prime  - not happy -  not multiple of 3 or 5');
});

it('Should check empty word', () => {
    const { calculateWordsInNumbers } = Exercise3;

    const result = calculateWordsInNumbers('');

    expect(result).toBe('0 - not prime  - not happy -  not multiple of 3 or 5');
});