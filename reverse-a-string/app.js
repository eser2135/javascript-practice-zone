const strent = prompt("enter a string : ");
/* 
// 8. satirda islem var olan fonksiyonlarla yapildi
console.log(strent.split(""));
console.log(strent.split("").reverse());
console.log(strent.split("").reverse().join(""));
//quote icine bosluk birakildiginda olan sonuclar gozlendi
console.log(strent.split(" "));
console.log(strent.split(" ").reverse());
console.log(strent.split(" ").reverse().join(" "));
//ayni isin map ile yapilmasi
let arr = [];
let newStr = strent.split("").map((x) => arr.push(x));
console.log(arr.reverse());
let result = "";
ayni islemin for ile 2 sekilde yapilmasi
for (let i = 0; i < strent.length; i++) {
  result += strent[strent.length - 1 - i];
  console.log(strent);
  console.log(result);
} */
let result = [];
for (let i = strent.length - 1; i >= 0; i--) {
  result.push(strent[i]);
}
console.log(result.join(""));