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

getPrimes(50000000);

// 2. find the prime factors of any number
function getFactors(number){
  
}
// 3. figure out which of those factors is the largest
