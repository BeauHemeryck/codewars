function factorialDivision(n, d) {
    let result = BigInt(1);
    for (let i = d + 1; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}


console.log(factorialDivision(5, 3));
console.log(factorialDivision(8, 5));
console.log(factorialDivision(10000, 9999));
