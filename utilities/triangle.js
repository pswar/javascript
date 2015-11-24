/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * 
 * Three segments of lengths A, B, C form a triangle iff
 *
 *      A + B > C
 *      B + C > A
 *      A + C > B
 *
 * e.g.
 *  6, 4, 5 can form a triangle
 * 10, 2, 7 can't
 * [10, 21, 22, 100, 101, 200, 300] got following 6:  
 * 		{10, 21, 22}, {21, 100, 101}, {22, 100, 101}, {10, 100, 101}, {100, 101, 200} and {101, 200, 300}
 * Given a list of segments lengths algorithm should find at least one triplet of segments that form a triangle (if any).
 *
 * Method should return an array of either:
 * - 3 elements: segments that form a triangle (i.e. satisfy the condition above)
 * - empty array if there are no such segments
 *
 */

function getTriangle(seg) {
	if (seg && seg.length < 3) return [];
	var i = 0, j = 0, k = 0;
	var n = seg.length;

	seg.sort(function (a, b) {
		return (a-b);
	});

	var result = [];

	for (i=0;i<n-2;i++) {
		for (j=i+1; j<n; j++) {
			k = j+1;
			while (k < n) {
				if (isTriangle(seg[i], seg[j], seg[k])) {
					result[result.length] = [seg[i], seg[j], seg[k]];
				}
				k++;
			}
		}
	}

	return result;
	/*
	while (k < seg.length) {
		if (isTriangle(seg[i], seg[j], seg[k])) {
			return [seg[i], seg[j], seg[k]];
		}
		i++;
		j++;
		k++;
	}*/
}

function isTriangle(a, b, c) {
	return (a+b>c && a+c>b && b+c>a);
}