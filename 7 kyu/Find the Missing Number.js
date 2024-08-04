function missingNo(nums) {
    for (let i = 0; i < 101; i++) {
        console.log(i)
        if (!nums.includes(i)) {
            return i
        }
    }
}