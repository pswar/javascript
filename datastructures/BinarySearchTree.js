/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used data structures in JavaScript. Not meant to be robust but for starters use.
 */

//Work in progress
function BinarySearchTree() {
	var root = null;

	this.insert = function (val) {
		root = insert(val, root);
	}

	this.remove = function (val) {
		root = remove(val, root);
	}

	this.min = function () {
		if (root == null) return null;

		var n = arguments[0] || root;
		while (n.left != null) {
			n = n.left;
		}
		return n.value;
	}

	this.max = function () {
		if (root == null) return null;
		
		var n = arguments[0] || root;
		while (n.right != null) {
			n = n.right;
		}
		return n.value;
	}

	this.removeMin = function () {
		root = removeMin(root);
	}

	this.find = function (val) {
		var node = root;
		while (node != null) {
			if (val < node.value) {
				node = node.left;
			} else if (val > node.value) {
				node = node.right;
			} else {
				return node.value;
			}
		}

		return null;
	}

	this.isEmpty = function () {
		return (root == null);
	}

	this.toHTMLString = function () {
		return root.toHTMLString();
	}

	// Private functions

	var insert = function (val, node) {
		if (node == null) {
			node = new BinaryNode(val);
		} else if (val < node.value) {
			node.left = insert(val, node.left)
		} else if (val > node.value) {
			node.right = insert(val, node.right)
		}

		return node;
	}

	var remove = function (val, node) {
		if (node == null) throw "Error"

		if (val < node.value) {
			node.left = remove(val, node.left);
		} else if (val > node.value) {
			node.right = remove(val, node.right);
		} else if(node.left != null && node.right != null) { // Two children
            node.value = this.min(node.right).value;
            node.right = removeMin(node.right);
        } else {
			node = (node.left != null)?node.left:node.right;
		}

		return node;
	}

	var removeMin = function (node) {
		if (node == null) throw "Error";

		if (node.left != null) {
			node = removeMin(node.left);
			return node;
		} else {
			return node.right;
		}
	}

}

function BinaryNode(val) {
	this.value = val;
	this.left = null;
	this.right = null;

	this.toHTMLString = function () {
		var h = '';
		h += this.value + ''
		if (this.left) {
			h += '(left=' + this.left.toHTMLString() + ', ';
		} else {
			h += '(left=null, ';
		}
		if (this.right) {
			h += 'right=' + this.right.toHTMLString() + ')\r';
		} else {
			h += 'right=null)\r';
		}
		h += '';

		return h;
	}
}