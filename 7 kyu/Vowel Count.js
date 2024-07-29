function getCount(str) {
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
            case "e":
            case "u":
            case "i":
            case "o":
                vowelCount++;
                break;
        }
    }
    return vowelCount;
}

console.log(getCount("abracadabra"));