function perkalianUnik(arr) {
    var result = []
    var array_holder = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j){
                array_holder.push(arr[j])
            }
        }
        var multiply = array_holder[0]
        for(let k=1; k<array_holder.length; k++){
            multiply = multiply*array_holder[k]
        }
        result.push(multiply)
        array_holder =[]
    }
    return result
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]