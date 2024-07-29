function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArray = [];

    l.forEach((value) => {
        if (typeof value === "number") {
            newArray.push(value);
        }
    });
    return newArray;
}
