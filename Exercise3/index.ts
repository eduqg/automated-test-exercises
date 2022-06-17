export interface IExercise3 {
  calculateIsPrime: (value: number) => boolean;
  isHappyNumber: (value: number, checkedNumbers?: number[]) => boolean;
  calculateIsMultipleOf3or5: (value: number) => boolean;
  calculateWordsInNumbers: (word: string) => string;
}

export class Exercise3 implements IExercise3 {
  calculateIsPrime = (value: number): boolean => {
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

  isHappyNumber = (value: number, checkedNumbers?: number[]): boolean => {
    if (value <= 0) return false;
    if (checkedNumbers?.includes(value)) return false;

    const newCheckedNumbers = checkedNumbers ? [...checkedNumbers, value] : [value];

    const numbers = String(value).split('');

    const raisedSum = numbers.reduce((partialSum, a) => partialSum + Math.pow(Number(a), 2), 0);

    if (raisedSum === 1) return true;

    return this.isHappyNumber(raisedSum, newCheckedNumbers)
  }

  calculateIsMultipleOf3or5 = (value: number): boolean => {
    if (value <= 0) return false;
    return value % 3 === 0 || value % 5 === 0;
  }

  calculateWordsInNumbers = (word: string): string => {
    const numbers = word.split('');

    const allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    const sum = numbers.reduce((partialSum, a) => {
      return partialSum + allLetters.indexOf(a) + 1;
    }, 0);


    return `${sum} - ${this.calculateIsPrime(sum) ? 'primo' : 'not prime'} ${this.isHappyNumber(sum) ? ' - happy - ' : ' - not happy - '} ${this.calculateIsMultipleOf3or5(sum) ? 'multiple of 3 or 5' : 'not multiple of 3 or 5'}`
  }
}
