function solution(str){
    str = str.split("");
    let returnArray = [];
    
    while (str.length !== 0) {
        if (str.length === 1) {
            returnArray.push((str.splice(0, 1) + "_"));
            str = [];
        } else {
            returnArray.push(str.splice(0, 2).join(""));
        }
    } 

    return returnArray;

}

console.log(solution("testsssss"))