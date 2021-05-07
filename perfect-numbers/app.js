let number = prompt("Enter a number");
let cluster = [];
function perfect() {
  for (let i = 0; i < number; i++) {
    if (parseInt(number) % i == 0) {
      cluster.push(i);
    }
  }
}
perfect();
console.log(cluster);
var i = 0;
cluster.forEach(sum);
function sum(item) {
  i += item;
  if (i == number) {
    console.log("This is perfect Number");
  }
}
if (i != number) {
  console.log("This is not a perfect Number");
}