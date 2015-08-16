// 1. find prime factors upto a certain number
function getPrimes(max) {
    var sieve = [];
    var primes = [];
    for (var i = 2; i <= max; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (var j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes);
}

// getPrimes(50000000);
getPrimes(50);

// 2. find the prime factors of any number
var factors = [];
function getFactors(number){
  for (var i = 0; i < primes.length; i++) {
    if(number % primes[i] === 0)
    var remainder = number / primes[i]
    factors.push(primes[i])
    for (var j = 0; j < primes.length; j++) {
      if(remainder % primes[i] === 0){

      }
    }
  }
}
// 3. figure out which of those factors is the largest
