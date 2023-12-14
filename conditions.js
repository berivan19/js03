// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

const sayi1 = 45
if(sayi1 < 0) {
    console.log("sayı negatiftir");
}else if (sayi1 > 0) {
    console.log("sayi pozitiftir");
}else {
    console.log("sayı 0 a eşittir");
}


const grade = 98
let sonuc = ""


if(grade < 0 || grade > 100){
    console.log("gecersiz not girişi");
}else if(grade < 40){
     sonuc = "FF"
}else if(grade < 55){
    sonuc = "dd"
}else if (grade < 70){
    sonuc = "cc"
}else if(grade < 85){
    sonuc = "bb"
}else{
    sonuc = "AA"
}
//!kısa hali
if (sonuc){
    console.log("sonuc:" , sonuc);
}
//uzun hali
if(sonuc === true){
    console.log("sonuc:" , sonuc);
}
