/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used data structures in JavaScript. Not meant to be robust but for starters use.
 */

 //Work in progress
function TreeNode(val, parent) {
	var data = val;

	this.parent = parent || null;
	this.children = [];
}


function Tree(rootData) {
	var root = new TreeNode(rootData, null);

	this.addChild = function (val) {
		root.children[root.children+1] = new TreeNode(val, this);
	}
}
