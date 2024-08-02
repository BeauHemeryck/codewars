function ipsBetween(start, end) {
    function changeIpToNumbers(ip) {
        return ip.split(".").reduce((acc, add) => acc * 256 + parseInt(add, 0), 0);
    }
    return Math.abs(changeIpToNumbers(start) - changeIpToNumbers(end))
}
