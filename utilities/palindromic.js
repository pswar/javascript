/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Polindrome?
 * Write a function to compute the maximum length palindromic sub-sequence of an array.
 * palindrome is a sequence which is equal to its reverse.
 * A sub-sequence of an array is a sequence which can be constructed by removing elements of the array.
 * Ex: Given [4,1,2,3,4,5,6,5,4,3,4,4,4,4,4,4,4] should return 10 (all 4's) 
 *
 */

function maxLengthPalindrome(input, i, j) {
	if (arguments.length == 1) {
		i = 0;
		j = input.length-1;
	}

	if (j<=i) return j-i+1;

	if (input[i] == input[j]) {
		return 2 + maxLengthPalindrome(input, i+1, j-1)
	} else {
		var opt1 = maxLengthPalindrome(input, i+1, j);
		var opt2 = maxLengthPalindrome(input, i, j-1);
		return ( (opt1 > opt2)?opt1:opt2 ); 
	}
}