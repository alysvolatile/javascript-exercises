const findTheOldest = function(people) {
// define current year   
const currentYear = new Date().getFullYear();

if (people.hasOwnProperty("yearOfDeath")) {
  return;
} else {
    people.yearofDeath = `${currentYear}`;
};

const oldest = people.sort(function(a,b) {
  const last = (a.yearOfDeath || currentYear) - a.yearOfBirth;
  const next = (b.yearOfDeath || currentYear) - b.yearOfBirth;
  return last > next ? 1 : -1;
});

// and if no yearOfDeath, use currentYear
// define oldest person and return that at end - should be obj
return oldest.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
