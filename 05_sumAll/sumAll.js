const sumAll = function(a,b) {
// returns error with non-number params
if (isNaN(a) || isNaN(b)) return 'ERROR';
if (typeof(a) === 'string' || typeof(b) === 'string') return 'ERROR';
// returns error with negative numbers
if ((a < 0) || (b < 0)) return 'ERROR';
// set min var
let min = Math.min(a, b);
// set max var
let max = Math.max(a, b);
// set sum
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum = sum + i;
  }  
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
