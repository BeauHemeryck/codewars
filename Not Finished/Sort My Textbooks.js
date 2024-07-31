function sorter(textbooks) {
    return textbooks.map(textbook => textbook.toLowerCase()).sort()
  };

console.log(sorter(['caCcdebA','Bbde','bbAebceede','aADbeadED','Ebb','bEbC','eeeebceaaa','BCdcba']))