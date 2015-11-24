/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Given a collection of pair representing intervals write a function which inserts new interval into collection and merges overlapping 
 * intervals. 
 * Example: 
 * [-10, -1], [0,2], [4,10] 
 * insert [-5, 1] 
 * output: [-10, 2], [4, 10]but a letter may map to itself. 
 * Example: Given "foo", "app"; returns true
 *
 */

var lowest, highest;
var intervals = [];

function updateLowestHighest(lo, hi) {
	if (lowest == undefined || lowest > lo) lowest = lo;
	if (highest == undefined || highest < hi) highest = hi;
}

function removeItem(lo, hi) {
	for (var i=0,len=intervals.length; i<len; i++) {
		if (intervals[i][0] == lo && intervals[i][1] == hi) {
			intervals.splice(i, 1);
			return;
		}
	}
}

window.insertInterval = function (low, high) {
	if (low >= high) throw "Error";

	//Base case
	if (intervals.length == 0) {
		intervals[intervals.length] = [low, high];
		updateLowestHighest(low, high);
		return;
	}

	//Extreme case
	if (low < lowest && high > highest) {
		intervals = [];
		intervals[intervals.length] = [low, high];
		return;
	}

	var tmp1, tmp2;
	for (var i=0, len=intervals.length; i<len; i++) {
		var itmLow = intervals[i][0], itmHigh = intervals[i][1];
		if (itmLow < low && itmHigh > high) return;

		if (!tmp1 && itmLow <= low) {
			tmp1 = [itmLow, itmHigh];
		}
		if (!tmp2 && itmHigh >= high) {
			tmp2 = [itmLow, itmHigh];
		}
		if (tmp1 && tmp2) break;
	}

	if (tmp1 && tmp2) {
		intervals[intervals.length] = [tmp1[0], tmp2[1]];
		updateLowestHighest(tmp1[0], tmp2[1]);

		removeItem(tmp1[0], tmp1[1]);
		removeItem(tmp2[0], tmp2[1]);
	} else {
		intervals[intervals.length] = [low, high];
		//updateLowestHighest(low, high)
	}
}
