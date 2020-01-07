function palindrome(kata) {
    var state = true
    for (let i = 0; i < parseInt(kata.length / 2); i++) {
        if (kata[i] === kata[kata.length - (1 + i)]) {
            state = true
        } else {
            state = false
        }
    }
    return state
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false