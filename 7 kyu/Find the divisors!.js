function divisors(integer) {
    let divisorArray = [];
    for (let i = 2; i < (integer / 2) + 1; i++) {
        if ((integer / i) % 1 === 0) {
            divisorArray.push(i);
        }
    }
    if (divisorArray.length) {
        return divisorArray
    } else {
        return integer + " is prime"
    }
}