
// 1. find the prime factors of any number
var factors = [];
var getPrimeFactors = function(num) {
    num = Math.floor(num);
    var root;
    var doLoop = 1 < num;
    while( doLoop ){
        root = Math.sqrt(num);
        var x = 2;
        if (num % x) {
            x = 3;
            while ((num % x) && ((x += 2) < root));
        }
        x = (x > root) ? num : x;
        factors.push(x);
        doLoop = ( x != num );
        num /= x;
    }
    console.log(factors);
    console.log(factors[factors.length - 1]);
}

getPrimeFactors(600851475143);


// 2. figure out which of those factors is the largest

//answer: 71,839,1471,6857


// function primeFactorization(num){
//   var root = Math.sqrt(num),
//   result = arguments[1] || [],  //get unnamed paremeter from recursive calls
//   x = 2;
//
//   if(num % x){//if not divisible by 2
//    x = 3;//assign first odd
//    while((num % x) && ((x = x + 2) < root)){}//iterate odds
//   }
//   //if no factor found then num is prime
//   x = (x <= root) ? x : num;
//   result.push(x);//push latest prime factor
//
//   //if num isn't prime factor make recursive call
//   return (x === num) ? result : primeFactorization(num/x, result) ;
// }
