function balikString(str){
    var new_str = ''
    for(let i=0; i<str.length; i++){
        new_str = new_str + str[str.length-(1+i)]
    }
    return new_str
}

console.log(balikString("hello world!"))