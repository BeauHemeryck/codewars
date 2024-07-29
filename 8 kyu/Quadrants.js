function quadrant(x, y) {
    if (x > 0) {
        if (y > 0) {
            return 1
        } else {
            return 4
        }
    } else {
        if (y < 0) {
            return 3
        } else {
            return 2
        }
    }
}
