function boredom(staff) {
    const boredomScore = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };
    
    let totalScore = 0;
    
    for (const person in staff) {
        totalScore += boredomScore[staff[person]]
    }
    return totalScore <= 80 ? "kill me now" : totalScore >= 100 ? "party time!!" : "i can handle this"
}

console.log(boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }))
