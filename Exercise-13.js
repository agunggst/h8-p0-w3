function targetTerdekat(arr) {
    var o_loc =[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]=='o'){
            o_loc.push(i)
        }
    }
    var x_loc = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]=='x'){
            x_loc.push(i)
        }
    }
    if(x_loc == false){
        return 0
    }
    var result = Math.abs(o_loc[0] - x_loc[0])
    for(let i=0; i<o_loc.length; i++){
        for(let j=0; j<x_loc.length; j++){
            if(result>Math.abs(o_loc[i] - x_loc[j])){
                result = Math.abs(o_loc[i] - x_loc[j])
            }
        }
    }
    return result
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2