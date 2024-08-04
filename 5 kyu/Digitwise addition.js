function digitwiseAddition(N, K) {
    let numberSplitArray = String(N).split("");
    for (let i = 0; i < K; i++) {
        tempArray = [];
        let length = numberSplitArray.length
        for (let j = 0; j < length; j++) {    
        let number = Number(numberSplitArray[j]) + 1;
            if (number > 9) {
                tempArray.push(1, 0)
            } else {
                tempArray.push(number);
            }
        }
        numberSplitArray = tempArray;
    }
    return numberSplitArray.length % 1_000_000_007;
}

console.log(digitwiseAddition(9812, 25));
