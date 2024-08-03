function openOrSenior(data){
    let dataArray = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            dataArray.push("Senior")
        } else {
            dataArray.push("Open")
        }
    }
    return dataArray
}