// 1. find terms of fibonacci sequence upto 4 million
var array = [0, 1];
var a = 0;
var b = 1;
var f = 0;
var fibonacci = function(number){
  for (var i = 0; i < number; i++) {
    f = a + b;
    a = b;
    b = f
    array.push(f);
  }
  console.log(array)
}

fibonacci(32);

// 2. find the even valued terms
var even = function(value){
  if(value % 2 === 0 ){
    return value
  }
}
var evenArray = array.filter(even);

console.log(evenArray);
// 3. add the terms
var total = 0;
for (var i = 0; i < evenArray.length; i++) {
  total += evenArray[i]
}
console.log(total);
