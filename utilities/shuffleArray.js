/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Problem: Shuffle a given array such that each position is equally likely.
 *
 */

function shuffle(arr) {
	if (!arr || arr.length == 0) return;

	var len = arr.length, tmp;

	while (len) {
		var newI = parseInt(Math.random() * len--);
		tmp = arr[len];
		arr[len] = arr[newI];
		arr[newI] = tmp;
	}
}