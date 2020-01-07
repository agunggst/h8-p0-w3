function split(kalimat, pemisah) {
    var result = []
    kalimat.trim()
    var kata = ''
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== pemisah) {
            kata = kata + kalimat[i]
        } else {
            result.push(kata)
            kata = ''
        }
    }
    result.push(kata)
    return result
}

function hitungJumlahKata(kalimat) {
    return split(kalimat, ' ').length
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5