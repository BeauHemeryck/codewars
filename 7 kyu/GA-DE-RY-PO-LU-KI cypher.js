function encode(str) {
    const keyCollection = {
        a: "g",
        A: "G",
        g: "a",
        G: "A",
        e: "d",
        E: "D",
        d: "e",
        D: "E",
        y: "r",
        Y: "R",
        r: "y",
        R: "Y",
        o: "p",
        O: "P",
        p: "o",
        P: "O",
        u: "l",
        U: "L",
        l: "u",
        L: "U",
        i: "k",
        I: "K",
        k: "i",
        K: "I",
    };
    return str.split("").map((char) => {
        if (keyCollection[char]) {
            return keyCollection[char]
        } else {
            return char
        }
    }).join("");
}

function decode(str) {
    const keyCollection = {
        a: "g",
        A: "G",
        g: "a",
        G: "A",
        e: "d",
        E: "D",
        d: "e",
        D: "E",
        y: "r",
        Y: "R",
        r: "y",
        R: "Y",
        o: "p",
        O: "P",
        p: "o",
        P: "O",
        u: "l",
        U: "L",
        l: "u",
        L: "U",
        i: "k",
        I: "K",
        k: "i",
        K: "I",
    };
    return str.split("").map((char) => {
        if (keyCollection[char]) {
            return keyCollection[char]
        } else {
            return char
        }
    }).join(""); 
}

