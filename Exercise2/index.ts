export const isHappyNumber = (value: number, checkedNumbers?: number[]): boolean => {
  if (value <= 0) return false;
  if (checkedNumbers?.includes(value)) return false;

  const newCheckedNumbers = checkedNumbers ? [...checkedNumbers, value] : [value];

  const numbers = String(value).split('');

  const raisedSum = numbers.reduce((partialSum, a) => partialSum + Math.pow(Number(a), 2), 0);

  if (raisedSum === 1) return true;

  return isHappyNumber(raisedSum, newCheckedNumbers)
}

console.log('1 - ', isHappyNumber(1) ? 'is a happy number' : 'is not a happy number')
console.log('7 - ', isHappyNumber(7) ? 'is a happy number' : 'is not a happy number')
console.log('9 - ', isHappyNumber(9) ? 'is a happy number' : 'is not a happy number')
console.log('19 - ', isHappyNumber(19) ? 'is a happy number' : 'is not a happy number')
console.log('20 - ', isHappyNumber(20) ? 'is a happy number' : 'is not a happy number')
console.log('32 - ', isHappyNumber(32) ? 'is a happy number' : 'is not a happy number')
