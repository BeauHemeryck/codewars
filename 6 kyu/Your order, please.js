function order(words){
    words = words.split(" ");
    let orderArray = [];
    words.forEach(word => {
       for (let i = 0; i < word.length; i++) {
            if (typeof Number(word[i]) === "number") {
                orderArray[Number(word[i])] = word;
            }
       }
    });
    return orderArray.join(" ").trim();
}
