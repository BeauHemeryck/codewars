function createArrayOfTiers(num) {
    let returnArray = [];
    num = String(num);
    for (let i = 1; i <= num.length; i++) {
        returnArray.push(num.slice(0, i));
    }
    return returnArray
}