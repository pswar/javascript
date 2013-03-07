/*
 * Main purpose is to build library of examples for most optimized coding styles with the help of community.
 * This file contains examples for For-loop
 */

//Simple for-loop
for (var i=0,len=list.length; i<len; i++) {
	//Do something
}

//for-each loop
//The hasOwnProperty check is very important to add. This loop would break if myList object is overloaded. 
// It's very common to overload Array with utils.
for(var item in myList) {
    if (myList.hasOwnProperty(item)) { 
    	//Do something
    } 
}
