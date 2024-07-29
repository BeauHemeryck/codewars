function broken(x){
   return x.replace(/./g, (char) => {
    return char == 1 ? 0 : 1;
   });
}
console.log(broken("10001"))