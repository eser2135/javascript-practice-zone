const number = 28;
document.write("Kullanıcı tarafından girilen değer : ", number);
document.write("<br>");
let sum = 0;
// for (let i = 1; i < number; i++) {
//   if (number % i == 0) sum += i;
// }
let numberList = [];
// for (let i = 1; i < number; i++) numberList.push(i);
// Aşağıdaki kod yukarıdakini sağlar.
numberList = [...Array(Math.floor(number / 2) + 1).keys()];
numberList.shift();
// document.write(numberList, "<br>");
// Tek satırda günün özeti
// document.write(
//   numberList.filter((i) => !(number % i)).reduce((acc, i) => (acc += i), 0) ==
//     number
//     ? "It is a perfect number"
//     : "It is not a perfect number"
// );
// let sumList2 = numberList.map((eleman) => eleman * 2);
// document.write("<br>");
// document.write(sumList2);
let sumList = numberList.filter((eleman) => number % eleman == 0);
sum = sumList.reduce((acc, eleman) => (acc += eleman), 0);
document.write(number, " sayısına tam bölünen pozitif bölenler : ", sumList);
document.write("<br>");
document.write("Tam bölenlerimizin toplamı : ", sum);
document.write("<br>");
document.write(
  sum == number ? "It is a perfect number" : "It is not a perfect number"
);