export interface IExercise2 {
  isHappyNumber: (value: number, checkedNumbers?: number[]) => boolean;
}

export class Exercise2 implements IExercise2 {
  isHappyNumber = (value: number, checkedNumbers?: number[]): boolean => {
    if (value <= 0) return false;
    if (checkedNumbers?.includes(value)) return false;

    const newCheckedNumbers = checkedNumbers ? [...checkedNumbers, value] : [value];

    const numbers = String(value).split('');

    const raisedSum = numbers.reduce((partialSum, a) => partialSum + Math.pow(Number(a), 2), 0);

    if (raisedSum === 1) return true;

    return this.isHappyNumber(raisedSum, newCheckedNumbers)
  }
}
