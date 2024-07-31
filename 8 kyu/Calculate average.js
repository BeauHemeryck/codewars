function findAverage(array) {
    if (!array.length) {
        return 0
    }

    let sum = 0;
    let inputCount = 0;

    array.forEach(number => {
        sum += number;
        inputCount++
    });

    return sum/inputCount;
  }