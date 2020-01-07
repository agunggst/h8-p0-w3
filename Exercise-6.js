function angkaPalindrome(num) {
    num++
    if(String(num).length==1){
        return num
    }
    var state = false
    while(state==false){
        for(let i=0; i<parseInt(String(num).length/2); i++){
            if(String(num)[i]==String(num)[String(num).length-(1+i)]){
                state = true
            }
            else{
                num++
                state = false
                break;
            }
        }
    }
    return num
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001