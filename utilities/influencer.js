
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Consider an X x Y array of 1's and 0s. The X axis represents "influences" meaning that X influences Y. 
 * So, for example, if $array[3,7] is 1 that means that 3 influences 7. 
 * An "influencer" is someone who influences every other person, 
 * but is not influenced by any other member. 
 * Given such an array, write a function to determine whether or not an "influencer" exists in the array.
*/


function influencer(jobs, x, y) { 
	var degree_in = new Array(jobs.length); 
	var degree_out = new Array(jobs.length); 
	for (int i = 0; i < x; ++i) { 
		for (int j = 0; j < y; ++j) { 
			if(jobs[i][j] == 1) { 
				// i influences j 
				if (!degree_out[i]) degree_out[i] = 0;
				degree_out[i]++; 

				if (!degree_in[j]) degree_in[j] = 0;
				degree_in[j]++; 
			} 
		} 

		if (degree_out[i] == x - 1 && degree_in[i] == 0) { 
			return i; 
		} 
	} 
	for (int i = 0; i < x; ++i) { 
		if (degree_out[i] == x - 1 && degree_in[i] == 0) { 
			return i; 
		} 
	} 
	return -1; 
}