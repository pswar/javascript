
/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used data structures in JavaScript. Not meant to be robust but for starters use.
 */

 function Queue(val) {
	var first = null, last = null, count = 0;

	this.enqueue = function (val) {
		var newNode = new Node(val)
		if (first == null) {
			first = newNode;
			last = first;
		} else {
			last.next = newNode;
			last = newNode;
		}
		
		count++;
	}

	this.dequeue = function () { //returns val
		var val = first.value;
		first = first.next;
		count--;
		return val;
	}

	this.peek = function () {
		if (first == null) throw "Error"
		return first.value;
	}

	this.isEmpty = function () {
		return (top == null);
	}

	this.size = function () {
		return count;
	}
}

