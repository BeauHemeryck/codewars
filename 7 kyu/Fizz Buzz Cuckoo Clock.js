function fizzBuzzCuckooClock(time) {
    time = time.split(":");
    if (time[1] == "00") {
        let hour = Number(time[0] % 12);
        let cuckooAmount = "";
        if (hour == 0) {
            for (let i = 0; i <= 12; i++) {
                if (i != 11) {
                    cuckooAmount += "Cuckoo ";
                }
            }
        } else {
            for (let i = 0; i <= hour; i++) {
                if (i != hour - 1) {
                    cuckooAmount += "Cuckoo ";
                }
            }

        }
        return cuckooAmount.slice(0, -1);
    } else if (time[1] == "30") {
        return "Cuckoo"
    } else if (Number(time[1] % 3 == 0)) {
        if (Number(time[1] % 5 == 0)) {
            return "Fizz Buzz"
        } else {
            return "Fizz"
        }
    } else if (Number(time[1] % 5 == 0)) {
        return "Buzz"
    } else {
        return "tick"
    }
}

