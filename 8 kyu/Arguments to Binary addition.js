function arr2bin(arr) {
    let sum = arr.reduce((acc, currentVal) => {
        if (typeof currentVal === "number") {
            return acc + currentVal;
        } else {
            return acc + 0;
        }
    }, 0);
    const isNegativeNumber = sum < 0;
    let binaryArray = [];
    if (sum === 0) {
        return "0";
    } else if (!isFinite(sum) || isNaN(sum)) {
        return "NaN";
    }

    for (let i = 31; i >= 0; i--) {
        if (2 ** i > Math.abs(sum)) {
            binaryArray.push(0);
        } else {
            sum = Math.abs(sum) - 2 ** i;
            binaryArray.push(1);
        }
    }
    return isNegativeNumber
        ? "-" +
              binaryArray
                  .splice(binaryArray.indexOf(1), binaryArray.length - 1)
                  .join("")
        : binaryArray
              .splice(binaryArray.indexOf(1), binaryArray.length - 1)
              .join("");
}

console.log(arr2bin([5, -7]));
