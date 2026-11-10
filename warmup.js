console.log(a);
var a = 5;
// Part B: first predict, then remove the // in front of the next line and run again.
// Read the error message carefully.
console.log(b);
let b = 10;
const original = [1, 2, 3];
const alias = original;
const copy = [...original];
alias[0] = 99;
console.log(original[0], copy[0]);
function makeCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
const next = makeCounter();
next();
next();
console.log(next());
console.log(0  '0', 0 = '0');