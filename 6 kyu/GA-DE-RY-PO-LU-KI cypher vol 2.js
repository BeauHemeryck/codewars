function encode(str, key) {
    let keyCollection = {};

    for (let i = 0; i < key.length; i += 2) {
        if (!keyCollection[key[i]]) {
            keyCollection[key[i + 1].toLowerCase()] = key[i].toLowerCase();
            keyCollection[key[i + 1].toUpperCase()] = key[i].toUpperCase();
            keyCollection[key[i].toLowerCase()] = key[i + 1].toLowerCase();
            keyCollection[key[i].toUpperCase()] = key[i + 1].toUpperCase();
        }
    }
    
    return str
        .split("")
        .map((char) => {
            if (keyCollection[char]) {
                return keyCollection[char];
            } else {
                return char;
            }
        })
        .join("");
}

function decode(str, key) {
    let keyCollection = {};

    for (let i = 0; i < key.length; i += 2) {
        if (!keyCollection[key[i]]) {
            keyCollection[key[i + 1].toLowerCase()] = key[i].toLowerCase();
            keyCollection[key[i + 1].toUpperCase()] = key[i].toUpperCase();
            keyCollection[key[i].toLowerCase()] = key[i + 1].toLowerCase();
            keyCollection[key[i].toUpperCase()] = key[i + 1].toUpperCase();
        }
    }

    return str
        .split("")
        .map((char) => {
            if (keyCollection[char]) {
                return keyCollection[char];
            } else {
                return char;
            }
        })
        .join("");
}

console.log(encode("Ala has a cat", "gaderypoluki"));
