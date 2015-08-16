// 1. find terms of fibonacci sequence upto 4 million
var array = [0, 1];
var fibonacci = function(a, b, f, max){
  for (var i = 0; i < max; i++) {
    f = a + b;
    a = b;
    b = f;
    array.push(f);
  }
  console.log(array);
}
fibonacci(0,1,0,32);

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
