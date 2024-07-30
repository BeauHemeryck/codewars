function toCamelCase(str){
    const PossibleSeperators = /[-_]+/ ;
    str = str.split(PossibleSeperators);
    return str[0] + str.slice(1).map(string => string[0].toUpperCase() + string.slice(1, string.length)).join("")
}

console.log(toCamelCase("the-stealth_warriors"))
