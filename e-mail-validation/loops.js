// reverse string

// let word = "Clarusway";

// for (i = word.length - 1; i>=0; i--) {

//     console.log(word[i]);
// }


// const numbers = [0,1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// for(i=0; i < numbers.length; i++) {   
//   /*   if(i % 2 === 0)  */
//     sum += numbers[i];
// }

// console.log(sum);

// faktoriyel soru cozumu

// const factNumber = 5;
// let calcFactorial = 1;

// for(let i = factNumber; i>0; i--) calcFactorial *= i;
// console.log(`${factNumber}! = ${calcFactorial}`);


// fizbuzz cozumu                   fizbuzz cozumu

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//     } else if (i % 3 === 0) {
//         console.log(`${i} Fizz`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} Buzz`);
//     } else {
//         console.log(`${i}`);
//     }
// }

// Alternatif FizzBuzz cozumu

// for (let i = 1; i <= 100; i++){
//     console.log( `${i} ${(i %3 ===0 && 'Fizz') || ""}${(i %5 ===0 && "Buzz") || ""}`);
// }


// checking index


// const text = 'clarusway';
// const char = 'a' ;
// for (let i = 0; i<text.length; i++ ){
//     if (char === text[i])
//     console.log(`${char} is at index${i}`);
//     // break;
// }

// Random number generator

// let randomNumber = Math.trunc(Math.random() * 20)+1;

// console.log(randomNumber);