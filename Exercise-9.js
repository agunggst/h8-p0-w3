function halfupRound(num) {
    if (num % 1 == 0) {
        return num
    }
    if (num - parseInt(num) >= 0.5) {
        num += 1 - (num - parseInt(num))
    } else {
        num -= num - parseInt(num)
    }
    return num
}

function cariMean(arr) {
    var sum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]
    }
    return halfupRound(sum / arr.length)
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7