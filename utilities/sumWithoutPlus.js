/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 */

function sumWithoutPlus(a, b) {
	if (b == 0) return a;

	return sumWithoutPlus(a^b, (a&b)<<1)
}