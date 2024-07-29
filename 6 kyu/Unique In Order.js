var uniqueInOrder = function (iterable) {
    let returnArray = iterable ? [iterable[0]] : [];
    let startIndex = 0;
    for (let i = 0; i < iterable.length; i++) {
        if (returnArray[startIndex] !== iterable[i]) {
            returnArray.push(iterable[i]);
            startIndex++;
        }
    }
    return returnArray
};

console.log(uniqueInOrder("AAABBBBCCDAABBB"))