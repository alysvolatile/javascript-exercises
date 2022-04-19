const reverseString = function(string) {
//set this as a loop
//create variable for length of string

//create variable char for indiv char in string
//create var for newString to return
//set newString default to ''
let newString = '';
//starting from end of string (neg length) return that char into newString

for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
}
return newString;
};

// Do not edit below this line
module.exports = reverseString;
