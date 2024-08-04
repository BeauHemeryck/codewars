function findNumber(start, stop, string) {
    let stringSplit = string.split("");
    let notFoundArray = [];
    for (let i = start; i < stop; i++) {
        
        if (i > 9) {
            const numbersToSearchFor = String(i).split("")
            const indexOfIFirstNumber = stringSplit.indexOf(String(numbersToSearchFor[0]));
            const indexOfISecondNumber = stringSplit.indexOf(String(numbersToSearchFor[1]));
            for (let j = 0; j < 2; j++) {
                if (indexOfIFirstNumber !== -1 && indexOfISecondNumber !== -1) {
                    stringSplit.splice(indexOfIFirstNumber, indexOfIFirstNumber);
                    stringSplit.splice(indexOfISecondNumber, indexOfISecondNumber);
                    
                } else {
                    notFoundArray.push(i);
                } 
            }
        } else {
            const IndexOfI = stringSplit.indexOf(String(i));
            if (IndexOfI !== -1) {
                stringSplit.splice(IndexOfI, IndexOfI);
            } else {
                notFoundArray.push(i);
            }
        }
    }
    return notFoundArray
}
console.log(findNumber(1, 10, '2345678910'))