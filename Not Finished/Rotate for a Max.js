// function maxRot(n) {
//     n = n.toString().split('');
//     const length = n.length;
//     for (let i = 1; i < length - 1; i++) {
//         let numberToLeaveAlone = n.splice(0, i);
//         let numberToReverse = n.splice(0, length);
//         console.log(numberToLeaveAlone)
//         n = numberToLeaveAlone.concat(numberToReverse.reverse());
//     }
//     console.log(n)
// }

// function maxRot(n) {
//     n = n.toString().split("");
//     let length = n.length;
//     for (let i = 0; i < length; i++) {
//         let shiftedNumbers = n.splice(i, length);
//         console.log(shiftedNumbers + "s")
//         const leftOver = n;
//         const firstNumber = shiftedNumbers.shift();
//         shiftedNumbers = shiftedNumbers.concat(firstNumber);
//         console.log(leftOver + "n")
//         n = leftOver.concat(shiftedNumbers);
//     }
// return n
// }

function maxRot(n) {
    
}
console.log(maxRot(38458215));
// console.log(maxRot(56789));