const findTheOldest = function(arr) {
 let l = 0;
 let index;;
 for (let i = 0; i < arr.length; i++) {
    if(arr[i].yearOfDeath==null){
      arr[i].yearOfDeath = 2022
    };
  if((arr[i].yearOfDeath - arr[i].yearOfBirth ) > l){
    l = arr[i].yearOfDeath - arr[i].yearOfBirth ;
    index = i;
  };
    
 };
 return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
