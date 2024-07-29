function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers);
}

console.log(betweenExtremes([23, 3, 19, 21, 16]))