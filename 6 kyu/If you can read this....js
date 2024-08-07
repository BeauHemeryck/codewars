function toNato(words) {
    const natoAlphabet = {
        A: "Alfa",
        B: "Bravo",
        C: "Charlie",
        D: "Delta",
        E: "Echo",
        F: "Foxtrot",
        G: "Golf",
        H: "Hotel",
        I: "India",
        J: "Juliett",
        K: "Kilo",
        L: "Lima",
        M: "Mike",
        N: "November",
        O: "Oscar",
        P: "Papa",
        Q: "Quebec",
        R: "Romeo",
        S: "Sierra",
        T: "Tango",
        U: "Uniform",
        V: "Victor",
        W: "Whiskey",
        X: "Xray",
        Y: "Yankee",
        Z: "Zulu"
    };
    
    return words.split("").filter(word => word !== " ").reduce((returnSentence, word, index) => {
         switch (word) {
             case ",":
                 return returnSentence + " ,";
            case ".":
               return returnSentence + " .";
            case "!":
                return returnSentence + " !";
            case "?":
                return returnSentence + " ?";
            default: 
            if (index === 0) {
                return returnSentence + natoAlphabet[word[0].toUpperCase()]
            } else {
                return returnSentence + " " + natoAlphabet[word[0].toUpperCase()]
            }
         }
    }, "")
}

console.log(toNato('If you can read'))