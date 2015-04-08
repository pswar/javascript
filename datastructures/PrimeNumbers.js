/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Method to generate prime numbers (Sieve of Eratosthenes)
 */

 function getPrimeNumbers(max) {
 	var tracker = [false, false];
 	for (var i=2; i<max+1; i++) {
 		tracker[i] = true;
 	}

 	var prime = 2;
 	while (prime <= Math.sqrt(max)) {
 		removeMultiples(tracker, prime);

 		prime = getNextPrime(tracker, prime);

 		if (prime >= tracker.length) break;
 	}

 	var primes = [];
 	for (var i=0; i<tracker.length; i++) {
 		if (tracker[i]) {
	 		primes[primes.length] = i;
 		}
 	}

 	return primes;
 }

 function removeMultiples(tracker, prime) {
 	for (var i = prime * prime; i<tracker.length; i+=prime) {
 		tracker[i] = false;
 	}
 }

 function getNextPrime(tracker, prime) {
 	var next = prime + 1;
 	while (next < tracker.length && !tracker[next]) {
 		next++;
 	}
 	return next;
 }