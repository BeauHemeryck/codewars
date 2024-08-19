function remove(string) {
    return string.split("").filter(letter => letter !== "!").join("") + "!";
}
