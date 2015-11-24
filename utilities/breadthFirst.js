/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Tree: 
 *  1 
 * / \ 
 * 3  5 
 * /\  \ 
 * 2 4 7 
 * /\  \ 
 * 9 6 8 
 *
 * ========== 
 * Expected Output: 
 * 1 
 * 35 
 * 247 
 * 968 
 *
 */

function BinaryTree(val, left, right) {
	this.value = val;
	this.left = left || null;
	this.right = right || null;
}

var buffer = [];
function printAt(node, pos) {
	var pos = pos || 0;
	if (!buffer[pos]) {
		buffer[pos] = "";
	}
	buffer[pos] += node.value;
	if (node.left)
		printAt(node.left, pos+1);
	if (node.right)
		printAt(node.right, pos+1);

	return buffer.toString("<br>");
}
