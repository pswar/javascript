/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used data structures in JavaScript. Not meant to be robust but for starters use.
 */

 //Work in progress
function TreeNode(val, parent) {
	this.data = val;
	this.parent = parent || null;
	this.children = [];

	this.addChild = function (child) {
		child.parent = this;
		this.children[this.children.length] = child;
	}

	this.toHTMLString = function () {
		var h = '<ul>';
		h += '<li>Data: ' + this.data + '</li>';
		for (var i=0; i<this.children.length; i++) {
			h += '<li>' + (i+1) + ". " + this.children[i].toHTMLString() + '</li>';
		}
		h += '</ul>';
		return h;
	}
}

/*
function Tree(rootData) {
	var root = new TreeNode(rootData, null);

	
} */
