/* function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    for(i=0; i<=num; i++) {
        a = [];
        num -=num;
        return a.append(num);

        return factorial(num)
    }
} */

/* var num = prompt("please enter a number: ", num);   -------------- bu sekilde calismadi! */

/* function factorial(num) {
    if (num < 0) {
        return console.log("please enter a positive number!");
    }
    else if(num = 1 || num = 0) {
        return 1;
    }

    return (num * factorial(num-1));
} */

/* 
enterNum = Number(prompt("please enter a number: ", num));

for (var i = 0; i <= enterNum; i++) {
    if (i % 3 == 0) 
    {
        a = [];
        return a[i];             
    }
}
 */

/* result ile yapilmis ornek 3'e bolunebilme icin

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.reduce((a, c, i) => {
    (c % 3 == 0) ? a += c : 0;
    return a;
}, 0);
console .log(`Using reduce method: ${result}`); */


/* let text1 = prompt('Enter a word :').toLowerCase();
let text2 = prompt('Enter another word :').toLowerCase();
let isAnagram = true;
if (text1.length !== text2.length) {
  isAnagram = false;
} else {
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        break;
      }
      if (j == text2.length - 1) {
        isAnagram = false;
      }
    }
  }
}
isAnagram ? console.log('Anagramdır.') : console.log('Anagram değildir.'); */
