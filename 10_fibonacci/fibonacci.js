const fibonacci = function(num) {
// num is the loop number
let n = parseInt(num);
if (n <= 0)
  return "OOPS";
let fib = [0,1]
// make fibonacci loop
for (let i = 2; i <= n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
  fib.push(fib[i]);
} 
return fib = fib.pop();
}

// use reduce function
// return variable result
// Do not edit below this line
module.exports = fibonacci;
