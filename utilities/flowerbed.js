/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Suppose you have a long flowerbed in which some of the plots are planted and some are not. 
 * However, flowers cannot be planted in adjacent plots - they would compete for water and both would die. 
 * Given a flowerbed (represented as an array containing booleans), 
 * return if a given number of new flowers can be planted in it without violating 
 * the no-adjacent-flowers rule
 *
 */

// Input: 1,0,0,0,0,0,1,0,0
// 3 > true
// 4 > false
//Input: 1,0,0,1,0,0,1,0,0
// 1 > true
// 2 > false

function canPlaceFlowers(bed, count) {
    
    var len = bed.length;
    if (len < count) return false;
    if (count == 0) return true;

    var i = 0, possible = 0;
    while (i < len) {
    	if (bed[i] == 0) {
    		if (i+1 < bed.length) {
    			if (bed[i+1] == 0) {
    				possible++;
    				if (possible >= count) return true;
    			} else {
    				i++;
    			}
    		} else {
    			possible++;
    			if (possible >= count) return true;
    		}
    	} 
    	i = i+2;
    }
    return (possible >= count);

}

