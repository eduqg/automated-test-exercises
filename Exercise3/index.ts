interface ILettersAndNumbers {
  [key: string]: number
}

export const calculateIsPrime = (value: number): boolean => {
  if (value < 2) return false;

  let isPrime = true;

  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

export const isHappyNumber = (value: number, checkedNumbers?: number[]): boolean => {
  if (value <= 0) return false;
  if (checkedNumbers?.includes(value)) return false;

  const newCheckedNumbers = checkedNumbers ? [...checkedNumbers, value] : [value];

  const numbers = String(value).split('');

  const raisedSum = numbers.reduce((partialSum, a) => partialSum + Math.pow(Number(a), 2), 0);

  if (raisedSum === 1) return true;

  return isHappyNumber(raisedSum, newCheckedNumbers)
}

export const calculateIsMultipleOf3or5 = (value: number): boolean => {
  if (value <= 0) return false;
  return value % 3 === 0 || value % 5 === 0;
}

export const calculateWordsInNumbers = (word: string): string => {
  const numbers = word.split('');

  const allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const sum = numbers.reduce((partialSum, a) => {
    return partialSum + allLetters.indexOf(a) + 1;
  }, 0);


  return `${sum} - ${calculateIsPrime(sum) ? 'primo' : 'not prime'} ${isHappyNumber(sum) ? ' - happy - ' : ' - not happy - '} ${calculateIsMultipleOf3or5(sum) ? 'multiple of 3 or 5' : 'not multiple of 3 or 5'}`

}

console.log(calculateWordsInNumbers(''))
console.log(calculateWordsInNumbers('a'))
console.log(calculateWordsInNumbers('abc'))
console.log(calculateWordsInNumbers('efkj'))
console.log(calculateWordsInNumbers('AsdknR'))


