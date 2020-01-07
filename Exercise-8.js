function slice_string(string, start, stop){
    var result = ''
    for(let i=start; i<stop; i++){
        result = result + string[i]
    }
    return result
}

function pasanganTerbesar(num) {
    ph = slice_string(String(num), 0, 2)
    for(let i=1; i<String(num).length; i++){
        
        if(parseInt(ph)<parseInt(slice_string(String(num), i, 2+i))){
            ph = String(num).slice(i,2+i)
        }
    }
    return ph
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99