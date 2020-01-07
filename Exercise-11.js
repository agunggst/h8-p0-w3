function tentukanDeretAritmatika(arr) {
    var diff = []
    for(let i=0; i<arr.length-1; i++){
        diff.push(arr[i+1]-arr[i])
    }
    var state = true
    for(let i=0; i<diff.length-1; i++){
        if(diff[i]!==diff[i+1]){
            state = false
        }
    }
    return state
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false