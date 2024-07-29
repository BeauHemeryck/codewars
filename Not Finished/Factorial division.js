function factorialDivision(n, d) {
    if (calculateFactorial(n) == Number.POSITIVE_INFINITY || calculateFactorial(d) == Number.POSITIVE_INFINITY) {
        if (n > d) {
            return n
        } else {
            return d
        }
    }
    return calculateFactorial(n) / calculateFactorial(d);
}

function calculateFactorial(n) {
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}


console.log(factorialDivision(5, 3));
console.log(factorialDivision(8, 5));
console.log(factorialDivision(10000, 9999));
