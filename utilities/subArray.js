
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Max sub array product with positive and negative numbers
 * Input: arr[] = {6, -3, -10, 0, 2}
 * Output:   180  // The subarray is {6, -3, -10}
 * 
 * Input: arr[] = {-1, -3, -10, 0, 60}
 * Output:   60  // The subarray is {60}
 * 
 * Input: arr[] = {-2, -3, 0, -2, -40}
 * Output:   80  // The subarray is {-2, -40}
*/ 


function maxSubArray(arr) {
	if (arr.length == 0) return 0;

	var max_ = 1;
	var min_ = 1;
	var result = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			max_ = 1;
			min_ = 1;
		} else if (arr[i] < 0) { //negative
			var tmp = max_;
			max_ = min_;
			min_ = tmp;
		}

		max_ = max(max_, max_*arr[i]);
		min_ = min(min_, min_*arr[i]);

		result = max(result, max_);
	}

	return result;
}

function min(a, b) {
	return (a<b)?a:b;
}

function max(a,b) {
	return (a>b)?a:b;
}