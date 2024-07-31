function mergeArrays(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let noDuplicatesArray = [...new Set(mergedArray)]

    return noDuplicatesArray.sort((a, b) => a - b);
}