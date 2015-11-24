
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * SQRT:
 * Write a method for finding sqrt of input
 */

function sqrt(input) {
	var epsilon = 0.000000000001;
	var x = input/2, i = 0;

	do {
		x = (x + input/x)/2.0;
		i++;
		tmp = x*x - input;
	} while (tmp > 0 && tmp > epsilon && i < 50)
//alert(i);
	return x;
}