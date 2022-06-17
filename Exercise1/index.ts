export interface IExercise1 {
  isMultipleOf: (value: number, selectedMultiple: number) => boolean;
  calculateIsMultipleOf3or5: (value: number) => number;
  calculateIsMultipleOf3or5Option2: (value: number) => number;
  calculateIsMultipleOf3and5: (value: number) => number;
  calculateIsMultipleOf3or5and7: (value: number) => number;
}

export class Exercise1 implements IExercise1 {
  isMultipleOf = (value: number, selectedMultiple: number): boolean => {
    return value % selectedMultiple === 0;
  }

  calculateIsMultipleOf3or5 = (value: number): number => {
    let total = 0;

    for (let i = 1; i < value; i++) {
      if (this.isMultipleOf(i, 3) || this.isMultipleOf(i, 5)) {
        total += i;
      }
    }

    return total;
  }

  calculateIsMultipleOf3or5Option2 = (value: number): number => {
    const numbers = Array.from(Array(value + 1).keys());

    const total = numbers.reduce((partialSum, a) => {
      if (this.isMultipleOf(a, 3) || this.isMultipleOf(a, 5) && a < value) {
        return partialSum + a
      }

      return partialSum;

    }, 0);

    return total;
  }

  calculateIsMultipleOf3and5 = (value: number): number => {
    let total = 0;

    for (let i = 1; i < value; i++) {
      if (this.isMultipleOf(i, 3) && this.isMultipleOf(i, 5)) {
        total += i;
      }
    }

    return total;
  }

  calculateIsMultipleOf3or5and7 = (value: number): number => {
    let total = 0;

    for (let i = 1; i < value; i++) {
      if (
        (this.isMultipleOf(i, 3) || this.isMultipleOf(i, 5))
        && this.isMultipleOf(i, 7)
      ) {
        total += i;
      }
    }

    return total;
  }
}
