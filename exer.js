function deepE(obj, obj2){
    let equal = true;

    for(let key in obj){
        console.log(key+" "+obj2[key]);
        if(typeof key != "object" && obj2[key] == undefined){
            equal = false;
        }else if(typeof obj2[key] == "object"){
            equal = deepE(typeof obj2[key]);
        }else if(obj2[key] != obj[key]){
            equal = false;
        }
    }
    //check vise versa
    return equal;
}
Zakariye = {
    name: "zak",
    last: "yusuf",
}
ZakariyeCop = {
    name: "zak",
    last: "yusuf",
}

ZakariyeNC = {
    name: "zak1",
    last: "yusuf",
}
console.log(deepE(Zakariye, ZakariyeCop));
console.log(deepE(Zakariye, ZakariyeNC));