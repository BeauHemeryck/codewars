function highAndLow(numbers) {
    numbers = numbers.split(" ");
    let lowestNumber = Number(numbers[0]);
    let highestNumber = Number(numbers[0]);

    numbers.forEach((number) => {
      number = Number(number);
        if (number < lowestNumber) {
            lowestNumber = number;
        } else if (number > highestNumber) {
            highestNumber = number;
        }
    });

    return highestNumber + " " + lowestNumber;
}
