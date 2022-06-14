const removeFromArray = function(arr,n) {
 const a = arr.indexOf(n);
 arr.splice(a,1);
 return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
