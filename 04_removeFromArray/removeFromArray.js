const removeFromArray = function(arr,value) {
// can use filter for this
// 
  for (let array_i = arr.length -1; array_i >=0; array_i--){
    for (let arg_i = 1; arg_i < arguments.length; arg_i++) {
        if (arr[array_i] === arguments[arg_i]){
            arr.splice(array_i, 1);
            break;
      }
    }
  }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
