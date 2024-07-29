function isItLetter(character) {
    return character.match(/[a-z]/gi) ? true : false;
}

console.log(isItLetter("["))
