
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Given two valid dictionary words of same length, write a function which returns the minimum number of steps to go from 
 * the first to the second word. 
 * You can change only one character at a time. Also, the word formed at every step should be a valid dictionary word. 
 * Eg: Provide minimum steps to go from 'cat' to 'dog' 
 *
 * cat -> bat -> bet -> bot -> bog -> dog 
 * 
 * Ans: 5
 *
 */

function isDWord(word) {
	var dWords = ["cat","bat","bet","bot","bog","dog","cot","dot","dog"];
	for (var i=0, len=dWords.length; i<len; i++) {
		if (dWords[i] == word) return true;
	}
	return false;
}
function wordDistance(start, end) {
	function WordLevel(word, counter) {
		this.word = word;
		this.counter = counter;
	}

	var letters = "abcdefghijklmnopqrstuvwxyz";

	var g = [new WordLevel(start, 1)], gi = 0;
	while (g.length > 0 && g[gi]) {
		var itm = g[gi];
		var src = itm.word;
		for (var i=0; i<src.length; i++) {
			for (var j=0; j<letters.length; j++) {
				var res = src.substr(0,i) + letters.charAt(j) + src.substr(i+1);
				if (res == end) {
					return itm.counter+1;
				}
				if (isDWord(res)) {
					g[g.length] = new WordLevel(res, itm.counter+1);
				}
			}
		}
		gi++;
	}
	return -1;
}