/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * DepthSum:
 * Given a nested list of integers, returns the sum of all integers in the list weighted by their depth
 * Examples:
 * [[1,1], 2, [1, 1]] = 10
 * [1, [4, [6]]] = 27
 *
 */

function depthSum(input, level) {
	level = level || 1;
	var sum = 0;
	for (var i=0; i<input.length; i++) {
		var itm = input[i];
		if (Number.isInteger(itm)) {
			sum += (level * itm);
		} else {
			if (Array.isArray(itm)) {
				sum += depthSum(itm, level+1);
			} else {
				//Error case, ignore it
			}
		}
	}

	return sum;
}

function depthSum2(input, level) {
	level = level || 1;
	var sum = 0;
	for (var i=0; i<input.length; i++) {
		var itm = input[i];
		if (Number.isInteger(itm)) {
			sum += (level * itm);
		} else {
			if (Array.isArray(itm)) {
				sum += depthSum(itm, level+1);
			} else {
				//Error case, ignore it
			}
		}
	}

	return sum;
}