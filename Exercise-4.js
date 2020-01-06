function dataHandling2(input){
    var name = input[1].split(" ")
    name.pop()
    name.push("Elsharawy")
    input.splice(1, 1, name.join(" "))
    
    var prov = input[2].split(" ")
    prov.unshift("Provinsi")
    input.splice(2, 1, prov.join(" "))
    
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    
    console.log(input)
    
    var ttl = input[3].split("/")
    switch(ttl[1]){
    case '01': console.log("Januari"); break;
    case '02': console.log("Februari"); break;
    case '03': console.log("Maret"); break;
    case '04': console.log("April"); break;
    case '05': console.log("Mei"); break;
    case '06': console.log("Juni"); break;
    case '07': console.log("Juli"); break;
    case '08': console.log("Agustus"); break;
    case '09': console.log("September"); break;
    case '10': console.log("Oktober"); break;
    case '11': console.log("Novemer"); break;
    case '12': console.log("Desember"); break;
    default: console.log("Not Found"); break;
    }
    
    var tahun = ttl[2]
    ttl.pop()
    ttl.unshift(tahun)
    console.log(ttl)
    
    var ttl = input[3].split("/")
    console.log(ttl.join("-"))
    
    name.pop()
    console.log(name.join(" "))
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input)