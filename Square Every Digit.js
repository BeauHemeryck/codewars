function squareDigits(num) {
    num = num.toString().split("");
    let squaredNumbers = [];
    for (let i = 0; i < num.length; i++) {
        squaredNumbers = squaredNumbers.concat(num[i] ** 2);
    }
    return Number(squaredNumbers.join(""));
}

console.log(squareDigits(3212))