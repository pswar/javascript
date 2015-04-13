/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 */

var cache = [0, 1]; //Optimize by caching
function fib(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	if (cache[n]) return cache[n];

	cache[n] = fib(n - 1) + fib(n - 2);

	return cache[n];
}

function fibSeries(n) {
	cache = [0, 1];

	fib(n);

	return cache;
}