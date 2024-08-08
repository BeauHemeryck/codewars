// function countRepeats(str) {
//     let charCount = {};
//     let duplicateCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!charCount[str[i]]) {
//             charCount[str[i]] = 1;
//         } else {
//             charCount[str[i]]++;
//             duplicateCount++;
//         }
//     }
//     return duplicateCount
// }

function countRepeats(str) {
    let duplicateCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            duplicateCount++;
        }
    } 

    return duplicateCount
}
console.log(countRepeats("D?4DB@>4BA<54ED2E;=6>;EE=<288A;5<24@99D4@?;>46?=;<A<>>=BD88<8E<4CCC2C>C54@9:4"));