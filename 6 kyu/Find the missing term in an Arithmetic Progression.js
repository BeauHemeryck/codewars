var findMissing = function (list) {
    let currentVal = list[0];
    const offSet = (list[list.length - 1] - list[0]) / list.length;
    for (let i = 1; i < list.length; i++) {
        const nextVal = currentVal + offSet;
        if (nextVal === list[i]) {
            currentVal = list[i];
        } else {
            return nextVal;
        }
    }
};
