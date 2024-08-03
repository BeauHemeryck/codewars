function getLargerNumbers(a, b) {
    let biggerNumberArray = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            biggerNumberArray.push(a[i]);
        } else {
            biggerNumberArray.push(b[i]);
        }
    } 
    return biggerNumberArray 
}