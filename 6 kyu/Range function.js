function range(start, step, stop) {
    let rangeArray = [];
    if (arguments.length == 1) {
        stop = start;
        start = 1;
        step = 1;
    } else if (arguments.length == 2) {
        stop = step;
        step = 1;
    }
    
    for (let i  = start; i < stop + 1; i += step) {
        rangeArray.push(i);
    }
  
    return rangeArray
}

console.log(range(5))