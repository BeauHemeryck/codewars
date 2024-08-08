function bingo(ticket, win) {
    let miniWins = 0;
    for (const lottoTicket of ticket) {
        for (let i = 0; i < lottoTicket[0].length; i++) {
            if (lottoTicket[0].charCodeAt(i) === lottoTicket[1]) {
                miniWins++;
                console.log("Win!: " + lottoTicket[0][i] + " " + lottoTicket[0].charCodeAt(i) + " from ticket: " + lottoTicket)
                break;
            }
        }
    }
    return miniWins >= win ? "Winner!" : "Loser!";
}

console.log(
    bingo(
        [
            ["RHOD", 79],
            ["EP", 74],
            ["PNQ", 74],
            ["WQEEOG", 81],
            ["EGXNBH", 82],
            ["OQTQ", 88],
            ["EKWVRMOD", 81],
        ],
        1
    )
);
