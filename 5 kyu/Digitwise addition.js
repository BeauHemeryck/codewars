// function digitwiseAddition(N, K) {
//     let numberSplitArray = String(N).split("");
//     for (let i = 0; i < K; i++) {
//         tempArray = [];
//         let length = numberSplitArray.length
//         for (let j = 0; j < length; j++) {    
//         let number = Number(numberSplitArray[j]) + 1;
//             if (number > 9) {
//                 tempArray.push(1, 0)
//             } else {
//                 tempArray.push(number);
//             }
//         }
//         numberSplitArray = tempArray;
//     }
//     return numberSplitArray.length % 1_000_000_007;
// }

function digitwiseAddition(N, K) {
    let NumberArray = Array(10).fill(0);

    for (const number of N.toString()) {
        NumberArray[parseInt(number, 10)] += 1;
    }

    for (let i = 0; i < K; i++) {
        
    }
}

console.log(digitwiseAddition(123567, 2))

































// const MOD = 10**9 + 7;

// function digitwiseAddition(n, k) {
//     // Initialize the digits array with zeros
//     let digits = Array(10).fill(0);

//     // Count occurrences of each digit in the number
//     for (const digit of n.toString()) {
//         digits[parseInt(digit, 10)] += 1;
//     }

//     // Perform the digit-wise addition as described
//     for (let i = 0; i < k; i++) {
//         let idx = (-i % 10 + 10) % 10; // Ensure index is non-negative
//         digits[idx] = (digits[idx] + digits[(idx - 1 + 10) % 10]) % MOD;
//     }

//     // Return the sum of digits modulo MOD
//     return digits.reduce((sum, value) => (sum + value) % MOD, 0);
// }
