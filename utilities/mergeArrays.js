
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Merge two sorted arrays, result also sorted
*/ 

function mergeSorted(a, b) {
	// a = [1, 23, 26, 40, 45]
	// b = [-1, 2, 6, 26, 40, 50, 75]

	if (a.length == 0) return b;
	if (b.length == 0) return a;

	var i = 0, j = 0;
	var merged = [];
	while (i < a.length && j < b.length) {
		if (a[i] == b[j]) {
			merged[merged.length] = a[i];
			i++;
			j++;
			continue;
		}

		if (a[i] > b[j]) {
			merged[merged.length] = b[j];
			j++;
		} else {
			merged[merged.length] = a[i];
			i++;
		}
	}

	if (i == a.length) {
		//Check if b has remaining
		while (j < b.length) {
			merged[merged.length] = b[j++];
		}
	}

	if (j == b.length) {
		//Check if b has remaining
		while (i < a.length) {
			merged[merged.length] = a[i++];
		}
	}

	return merged;
}
