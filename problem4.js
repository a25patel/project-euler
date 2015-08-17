// Find the largest palindrome number made from the product of two 3 digit numbers
//** palindrome number reads same both ways : 9009 reversed is 9009

// 1. Test if a number is palindromic
var array = [];
function palindrome(min, max){
  if(min === max){
    console.log(array);
  }else{
    n = min + '';
    var m = n.split('').reverse().join().replace(/,/g, '');
  }

  if(min === m ){
    array.push(min)
  }
  min++;
  palindrome(min,max);
}

palindrome(0, 101);
//
// 2. Find range of numbers that would be the product of two 3 digit numbers
//
// 3. Go through that range of numbers to find all palindromic numbers - put those into an array
//
// 4. spit out the last number in the array - aka the largest
