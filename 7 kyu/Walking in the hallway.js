function contact(hallway) {
    hallway = hallway.split("");
    let moves = 0;
    let moved = true;  
    let temp = 10;
    while (moved) {
        moved = false;  
        moves++;
        
        for (let i = 0; i < hallway.length; i++) {
            if (hallway[i] === ">") {
                if (hallway[i + 1] === "<") {
                    return moves;
                } else if (hallway[i + 1] === "-") {
                    hallway[i] = "-";
                    hallway[i + 1] = ">";
                    i++;  
                    moved = true;
                }
            } else if (hallway[i] === "<") {
                if (hallway[i - 1] === ">") {
                    return moves;
                } else if (hallway[i - 1] === "-") {
                    hallway[i] = "-";
                    hallway[i - 1] = "<";
                    moved = true;
                }
            }
        }
    }
    return -1;
}

// Example usage:
console.log(contact("->--------<-"));  // Output: 2
