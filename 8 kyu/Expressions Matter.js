function expressionMatter(a, b, c) {
    const expressionArray = [a * (b + c), (a + b) * c, a + b * c, a + b + c,  a * b * c]
    return Math.max(...expressionArray)
}

console.log(expressionMatter(2, 1 , 2));
