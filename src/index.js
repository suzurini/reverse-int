module.exports = function reverse (n) {
    let digitCount = n.toString().length;
    let strNewNumber = '';
    for (i = 0; i < digitCount; i++) {
        strNewNumber += n.toString().slice(-1);
        n = n.toString.slice(0, -1)
    }
    return parseInt(strNewNumber);
}
