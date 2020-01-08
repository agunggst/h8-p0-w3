function groupAnimals(animals) {
    for(let i=0; i<animals.length; i++){
        for(let j=0; j<animals.length-1;j++){
            if(animals[j][0]>animals[j+1][0]){
                var temp = animals[j]
                animals[j] =animals[j+1]
                animals[j+1] = temp
            }
        }
    }
    var result = []
    var group = []
    var change = false
    animals.push('###')
    for(let i=0; i<animals.length-1; i++){
        if(change==false){
            group.push(animals[i])
        }
        else{
            group = [animals[i]]
            change = false
        }
        if(animals[i][0]!==animals[i+1][0]){
            result.push(group)
            change = true
        }
    }
    return result
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]