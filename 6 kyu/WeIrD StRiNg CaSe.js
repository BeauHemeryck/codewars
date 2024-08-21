function toWeirdCase(string) {
    let words = string.split(" ");
    let newString = [];

    words.forEach(word => {
        let transformedWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 == 0) {
                transformedWord += word[i].toUpperCase();
            } else {
                transformedWord += word[i].toLowerCase();
            }
        }
        newString.push(transformedWord);
    });

    return newString.join(" ");
}