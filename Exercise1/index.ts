export const isMultipleOf = (value: number, selectedMultiple: number) => {
  return value % selectedMultiple === 0;
}

export const calculateIsMultipleOf3or5 = (value: number) => {
  let total = 0;

  for (let i = 1; i < value; i++) {
    if (isMultipleOf(i, 3) || isMultipleOf(i, 5)) {
      total += i;
    }
  }

  return total;
}

export const calculateIsMultipleOf3and5 = (value: number) => {
  let total = 0;

  for (let i = 1; i < value; i++) {
    if (isMultipleOf(i, 3) && isMultipleOf(i, 5)) {
      total += i;
    }
  }

  return total;
}

export const calculateIsMultipleOf3or5and7 = (value: number) => {
  let total = 0;

  for (let i = 1; i < value; i++) {
    if (
      (isMultipleOf(i, 3) || isMultipleOf(i, 5))
      && isMultipleOf(i, 7)
    ) {
      total += i;
    }
  }

  return total;
}

// console.log('A - 10) ', calculateIsMultipleOf3or5(10))
// console.log('B - 10) ', calculateIsMultipleOf3and5(10))
// console.log('C - 10) ', calculateIsMultipleOf3or5and7(10))

// console.log('A - 1000) ', calculateIsMultipleOf3or5(1000))
// console.log('B - 1000) ', calculateIsMultipleOf3and5(1000))
// console.log('C - 1000) ', calculateIsMultipleOf3or5and7(1000))

