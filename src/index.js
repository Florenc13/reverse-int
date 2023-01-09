module.exports = function reverse (s) {
    return +Math.abs(s).toString().split('').reverse().join("");
}