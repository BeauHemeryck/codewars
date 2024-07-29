function disemvowel(str) {
    const vowelArray = ["a", "e", "o", "i", "u", "A", "E", "O", "I", "U"];
    let removedVowelArray = [];
    for (let i = 0; i < str.length; i++) {
        if (!vowelArray.includes(str[i])) {
            removedVowelArray.push(str[i]);
        }
    }
    return removedVowelArray.join("");
}

console.log(disemvowel("This website is for losers LOL"));
