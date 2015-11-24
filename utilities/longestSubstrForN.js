/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Method to find longest substring with n unique chars.
 */

//Example input: "aabbadefghaabbaagad", 2
function getLongestSubstrForN(str, n) {
	var len = str.length;

	var i = 0;
	var start = 0, end = 0;

	var output = [];

	var firstChange = -1;
	var track = "";
	while (i < len) {
		var char = str.charAt(i);

		if (-1 == track.indexOf(char)) {
			track += char;
			//debugger;
			if (track.length == n && firstChange == -1) {
				firstChange = i;
			}
		}
		if (n < track.length) { //Exhausted n char substr
			end = i;
			var sStr = str.substr(start, end-start); //Don't need +1 because i was incremented by extra 1 in above loop
			output[output.length] = sStr;
			console.log(sStr + ' - firstChange=' + firstChange);	
			if (firstChange > -1){
				i = firstChange;
				track = tmp = "";
				firstChange = -1;
				start = i;
				continue;
			} else {
				//debugger;
				break;
			}
		}
		i++;
	}

	return output;
}
