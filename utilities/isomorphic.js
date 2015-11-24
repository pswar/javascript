
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Isomorphic:
 * Two words are called isomorphic if the letters in one word can be remapped to get the second word. 
 * Remapping a letter means replacing all occurrences of it with another letter 
 * while the ordering of the letters remains unchanged. 
 * No two letters may map to the same letter, but a letter may map to itself. 
 * Example: Given "foo", "app"; returns true
 *
 */

function isIsomorphic(a, b) { 
	if (a == null || b == null) throw "Invalid input";

	if(a.length != b.length) return false; 

	// map for character mapping 
	// array to keep track of whether a character has been mapped in the second word 
	// 0 - a, ... 25 - z 
	a = a.toLowerCase(); 
	b = b.toLowerCase(); 
	var map = [], i; //[charA=>charB]
	//var remaining = "abcdefghijklmnopqrstuvwxyz"; //Can be optimized 
	var used = ""; //Add b chars

	for(i = 0 ; i < a.length ; i++) { 
		var cha = a.charAt(i); 
		var chb = b.charAt(i); 
		// first time mapping and character in the second word has not been mapped 
		//var idxB = getIndex(chb);
		if(map[cha] == null && used.indexOf(chb) == -1){ 
			map[cha] = chb; 
			//remaining = remaining.replace(chb, "");
			used += chb;
			//arr[idxB] = 0; 
		} else if (map[cha] == chb){ 
			continue; 
		} else { 
			return false; 
		} 
	} 
	return true; 
} 

//isomorphic? app, foo: true 
//isomorphic? foo, bar: false 
//isomorphic? turtle, tletur: true 
//isomorphic? ab, ca: true 
//isomorphic? azz, zza: false

//Alertnative solution
function isIsomorphic2(a, b) { 
	if (a == null || b == null) throw "Invalid input";
	if (a.length != b.length) return false; 
	// One map to keep track of the characters in the 
	// first string to the second string, another to keep 
	// track of the characters in the second string to the first 
	var mapA = []; 
	var mapB = []; 
	for (var i = 0; i < a.length; i++) { 
		var cha = a.charAt(i); 
		var chb = b.charAt(i); 
		// If the character already exists in the map, 
		// check to make sure it's mapping to the same 
		// character 
		if (mapA[cha]) { 
			if (mapA[cha] != chb) return false;  
		} else { 
			mapA[cha] = chb; 
		} 
		if (mapB[chb]) { 
			if (mapB[chb] != cha) return false; 
		} else { 
			mapB[chb] = cha; 
		} 
	} 
	return true; 
}
