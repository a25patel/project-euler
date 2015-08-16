// 1. multiples of 3 and 5 under 10 are 3,5,6,9. Sum of those are 23
// * Find all multiples of 3 and 5 below 1000. Find the sum of numbers.

var multiplesArray = [];
var multiples = function(number){
  for (var i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0){
      multiplesArray.push(i)
    }
  }
  sum(multiplesArray); 
}


var sum = function(array){
  var total = 0;
  array.forEach(function(index){
    total += index
  });
  console.log(total);
}

multiples(1000);
