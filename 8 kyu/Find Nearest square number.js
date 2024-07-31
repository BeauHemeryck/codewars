function nearestSq(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    for (let i = 1; i < n; i++) {
        let previousNumberSquared = (i - 1) ** 2;
        let numberSquared = i ** 2;
        if (Math.abs(n - previousNumberSquared) < Math.abs(n - numberSquared)) {
            return previousNumberSquared;
        }
    }
}

console.log(nearestSq(2));
