function findTheKey(messages, secrets) {
    const keyCollection = {};

    for (const [index, message] of messages.entries()) {
        for (let i = 0; i < message.length; i++) {
            if (message[i] !== secrets[index][i]) {

                keyCollection[message[i]] = secrets[index][i];
            }
        }

    }
 
    return Array.from(keyCollection);
}

console.log(findTheKey(
    ["dance on the table", "hide my beers", "scouts rocks"],
    ["egncd pn thd tgbud", "hked mr bddys", "scplts ypcis"]
));
