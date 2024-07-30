function cuckooClock(inputTime, chimes) {
    let amountOfChimes = 0;
    let inputTimeSplit = inputTime.split(":");
    let hours = Number(inputTimeSplit[0]);
    let minutes = Number(inputTimeSplit[1]);
  
    while (amountOfChimes < chimes) {
      if ((minutes === 0)) {
          amountOfChimes += hours;
        } else if (minutes % 15 === 0) {
            amountOfChimes++;
        }

      if (amountOfChimes < chimes) {
          minutes++
          if (minutes === 60) {
            minutes = 0;
            hours += 1;
            if (hours === 13) {
                hours = 1;
            }
          }

      }
    }
    hours =  String(hours); 
    hours = hours.length == 1 ? "0" + hours : hours;
    minutes = String(minutes);
    minutes = minutes.length == 1 ? "0" + minutes : minutes;
    return hours + ":" + minutes
}
console.log(cuckooClock("09:53", 50))

