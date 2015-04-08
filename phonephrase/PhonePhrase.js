/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple utility for generating phone phrases from a number.
 * Example: 
 * var output = getPermutations('555-1234'); //Returns an array of phrases.
 */

(function (self) {
	var MAP = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
	var output = [];

	var getPermutations = function (phone, index, result) {
		if (!phone) return output;

		if (arguments.length == 1) {
			//New call, init vars
			output = [];
			index = 0;
			result = '';
		}

		if (index >= phone.length) {
			output[output.length] = result.toUpperCase();
			return;
		}
		var c = phone.charAt(index++);

		var vars = MAP[parseInt(c)];
		var count = 0;

		if (vars != null && vars.length > 0) {
			for (var i = 0; i < vars.length; i++) {
				getPermutations(phone, index, result+vars.charAt(i));
			}
		} else {
			getPermutations(phone, index, result+c);
		}
		return output;
	}

	self.getPermutations = getPermutations;
})(this);
