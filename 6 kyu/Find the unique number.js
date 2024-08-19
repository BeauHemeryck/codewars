function findUniq(arr) {
    let numberMap = {};
    for (const number of arr) {
        if (numberMap[number]) {
            numberMap[number] += 1
        } else {
            numberMap[number] = 1
        }
    }
    for (const [key, value] of Object.entries(numberMap)) {
        if (value === 1) {
            return Number(key)
        }
    }
}
 
findUniq([ 1, 0, 0 ])