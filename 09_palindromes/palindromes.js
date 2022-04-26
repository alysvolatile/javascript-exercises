const palindromes = function (word) {
 //remove punctation + spaces
 let remove = /[^A-Za-z0-9]/g;
 let noPunct = word.toLowerCase().replace(remove, "");
 //create new var that is the word reversed
 let newWord = noPunct.split("").reverse().join("");
 //compare that to old word
 return newWord === noPunct;
 }

// Do not edit below this line
module.exports = palindromes;
