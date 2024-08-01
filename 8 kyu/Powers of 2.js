function powersOfTwo(n) {
    let nPowerOfTwoArray = [];
    for (let i = 0; i < (n + 1); i++) {
        nPowerOfTwoArray.push(2 ** i)
    }
    return nPowerOfTwoArray;
}
