const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let s=0;
  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
    
  }
  return s;
};

const multiply = function(arr) {
  let s=1;
for (let i = 0; i < arr.length; i++) {
  s *= array[i];
  
}
return s;
};

const power = function(a,b) {
  let s =1;
	for (let i = 0; i < b; i++) {
    s *=a;
    
  }
};

const factorial = function(n) {
  let s =1;
  if(n===0){
    return 1;
  }
  else{
	for (let i = 1; i <=n; i++) {
    s *= i;
    
  }
  return s;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
