function findGlasses(arr){
    const regex = /O[-]+O/;
    return arr.findIndex(word => {
        if (regex.test(word)) {
            return word
        }
    })
}
console.log(findGlasses(['phone', 'O-O', 'coins', 'keys']))