function fakeBin(x){
    x = x.replace(/["0-4"]/g, 0);
    return x.replace(/["5-9"]/g, 1);
}