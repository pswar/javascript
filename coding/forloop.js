/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Main purpose is to build library of examples for most optimized coding styles with the help of community.
 * This file contains a technique to inherit properties from a Type. It's not true inheritance but a technique that gives similar benefits
 */

//Simple for-loop
for (var i=0,len=list.length; i<len; i++) {
	//Do something
}

//for-each loop
//The hasOwnProperty check is very important to add. This loop would break without that check if myList object is overloaded. 
// It's very common to overload Array with utils and always safe to add the check.
for(var item in myList) {
    if (myList.hasOwnProperty(item)) { 
    	//Do something
    } 
}
