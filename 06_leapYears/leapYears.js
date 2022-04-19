const leapYears = function(year) {
// first divisible by 400
  if (year % 400 === 0) {
      return true;
  // NOT divisible by 100
    } else if (year % 100 === 0) {
      return false;
 // then by 4
    } else if (year % 4 === 0) {
      return true;
  // else not
    } else {
      return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
