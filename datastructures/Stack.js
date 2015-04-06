/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used data structures in JavaScript. Not meant to be robust but for starters use.
 */

 function Stack(val) {
	var top = null, count = 0;

	this.push = function (val) {
		if (top == null) {
			top = new Node(val);
		} else {
			var newTop = new Node(val);
			newTop.next = top;
			top = newTop;
		}
		count++;
	}

	this.pop = function () { //returns val
		var val = top.value;
		top = top.next;
		count--;
		return val;
	}

	this.peek = function () {
		if (top == null) throw "Error"
		return top.value;
	}

	this.isEmpty = function () {
		return (top == null);
	}

	this.size = function () {
		return count;
	}
}