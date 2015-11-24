/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * 100Game:
 * In "the 100 game," two players take turns adding, to a running 
 * total, any integer from 1..10. The player who first causes the running 
 * total to reach or exceed 100 wins. 
 * What if we change the game so that players cannot re-use integers? 
 * For example, if two players might take turns drawing from a common pool of numbers 
 * of 1..15 without replacement until they reach a total >= 100. This problem is 
 * to write a program that determines which player would win with ideal play. 
 * 
 * Write a procedure, "Boolean canIWin(int maxChoosableInteger, int desiredTotal)", 
 * which returns true if the first player to move can force a win with optimal play. 
 * 
 * Your priority should be programmer efficiency; don't focus on minimizing 
 * either space or time complexity. 
*/ 

//Example, poolMax=15, raceTo=100
var game100Data = {
	"raceTo" : 0,
	"pool" : []
}
function canIWin(poolMax, raceTo) { 
	if (raceTo > poolMax * (poolMax+1)/2) {
		throw "Can't be done with integers until " + poolMax;
	}

	var pool = [];
	for(var i=0;i<poolMax;i++)
		pool[pool.length] = i+1;

	game100Data.pool = pool;
	game100Data.raceTo = raceTo;
	var turns = 0;
	//debugger;
	while(game100Data.raceTo>0){
		turns++;
		window.console.log("Player"+( (turns%2==0)?"2":"1" )+" ==> "+pickANumber()+"   == Remaining ["+game100Data.raceTo+"]");
	}
	return (turns%2==1);

}


function pickANumber() {
	var leastMax = -1;
	var pool = game100Data.pool;
	var len = pool.length;
	for (var i=len-1;i>=0;i--){
		var tmp = pool[i];
		if (tmp>=game100Data.raceTo){
			remove(pool, i);
			game100Data.raceTo -= tmp;
			return tmp;	
		} else {
			if (leastMax > 0){
				if(tmp < leastMax){
					remove(pool, i);
					game100Data.raceTo -= tmp;
					return tmp;
				}else{
					continue;
				}
			}	
				
			if (i-1 >= 0) {
				if(tmp+pool[i-1] < raceTo){
					remove(pool, i);
					game100Data.raceTo -= tmp;
					return tmp;
				} else {
					leastMax = raceTo - tmp;
					i--;
					continue;
				}
			} else {
				remove(pool, i);
				game100Data.raceTo -= tmp;
				return tmp;
			}
		}
	}
	
	var tmp = pool[pool.length-1];
	remove(pool, pool.length-1);
	game100Data.raceTo -= tmp;
	return tmp;
}

function remove(arr, index) {
	arr.splice(index, 1);
	return arr;
}
