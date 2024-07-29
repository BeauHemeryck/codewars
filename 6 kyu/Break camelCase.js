function solution(string) {
    let wordIndex = 0;
    let sentence = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
           console.log(string.slice(wordIndex, i))
            sentence += string.slice(wordIndex, i) + " ";
            wordIndex = i;
        }
        if (i == string.length - 1) {
            sentence += string.slice(wordIndex, i + 1);
        }
    }
    return sentence;
}
