/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Uses localStorage to store Rummy game scores. 
 * Rummy is a card game played in india and possibly other places.
 * Just copy the files from this folder into your hosting folder and you got yourself a web page with scores that persist across sessions! :)
 */


function isLSSupported() {
	if (window.localStorage) {
		return true;
	}
	return false;
}

var CURRENT_KEY = 'key_rummy_current';
function startNewGame() {
	if (!isLSSupported()) {
		alert('Not supported! Either you have an unsupported browser or you didn\'t allow this site to write data');
		return;
	}
	var h = '';
	var count = parseInt($('#players').val());
	var key = CURRENT_KEY;

	if (amplify.store(key)) {
		if (window.confirm('This is going to wipe out current game and create new. You can\'t undo this. \nAre you sure?')) {
			amplify.store(key, null);
		} else {
			paintScore(key);
			return;
		}
	}

	var score = [];
	for (var i=0; i<count; i++) { 
		score[i] = {
				'name' : 'Player' + i,
				'rounds' : []
			}
	}
	amplify.store( key, {'key': key, 'count': count, 'score': score, 'startedAt':new Date().getTime()} );

	paintScore(key);
}

function paintScore(key) {
	var currentGame = amplify.store(key);
	if (!currentGame) return;

	var h = '';
	var count = currentGame.count;
	h += '<h4>Started : ' + new Date(currentGame.startedAt) + '<h4>';
	h += '<table border=1 cellspacing=0 style="font-face:Arial; font-size:18">';

	if (currentGame.score[0]) {
		h += '<tr>';
		h += '<th>Round</th>'
		for (var i=0; i < count; i++) {
			var name = "p" + i;
			var val = (currentGame.score[i])?currentGame.score[i].name:'Player'+i;
			h += '<th><input type="text" name="' + name + '" id="' + name + '" value="' + val + '" onblur="updatePlayer(' + i + ')" /></th>';
		}
		h += '<td>';
		h += '</td>';
		h += '</tr>';

		for (var i=0, len=currentGame.score[0].rounds.length; i<len; i++) {
			if (currentGame.score[0].rounds[i] == null) continue;

			h += '<tr>';
			h += '<td></td>';
			for (var j=0, jLen=currentGame.score.length; j < jLen; j++) {
				h += '<td>';
				if (currentGame.score[j].rounds[i] == 0) {
					h += '&reg;';
				} else {
					h += currentGame.score[j].rounds[i];
				}
				h += '</td>';
			}
			h += '<td><a href="#RemoveThisRow" onclick="removeRow(' + i + ');return false;">Remove</a></td>';
			h += '</tr>';
		}

		//Totals
		h += '<tr style="background-color:#81F781">';
		h += '<td>';
		h += 'Total: ';
		h += '</td>';
		for (var i=0; i < count; i++) {
			var name = "s" + i;
			h += '<td><b>';
			var total = 0;
			$.each(currentGame.score[i].rounds,function(a, b) {
				if (b == null) return;
			    total += b;
			});
			var mx = parseInt($('#tot').val());
			if (!isNaN(mx) && total > mx) {
				h += '<strike style="color:red">' + total + '</strike>';
			} else {
				var pack = parseInt($('#pack').val());
				if (!isNaN(pack) && !isNaN(mx) && mx-total < pack) {
					h += total + '*';
				} else {
					h += total;
				}
			}
			h += '</b></td>';
		}
		h += '<td></td>';
		h += '</tr>';
	}

	//New round score
	h += '<tr>';
	h += '<td>';
	h += 'Enter: ';
	h += '</td>';
	for (var i=0; i < count; i++) {
		var name = "s" + i;
		h += '<td><input type="text" name="' + name + '" id="' + name + '" value="" /></td>';
	}
	h += '<td>';
	h += '<input type="button" name=add value="Add score" onclick="addScore()">';
	h += '</td>';
	h += '</tr>';
	h += '</table>';

	$('#score').html(h);
}

function addScore() {
	var key = CURRENT_KEY;
	var currentGame = amplify.store(key);
	if (!currentGame) {
		alert('Something went really bad! Unable to retrieve the data. :(');
		return;
	}
	var count = currentGame.count;

	for (var i=0; i<count; i++) {

		if (!currentGame.score[i]) {
			currentGame.score[i] = {
				'name' : $('#p' + i).val(),
				'rounds' : []
			}
		}

		var val = parseInt($('#s' + i).val());
		//alert(val);
		if (isNaN(val)) {
			val = 0;
		}
		currentGame.score[i].rounds[currentGame.score[i].rounds.length] = val;
	}

	amplify.store( key, 
		{	
			'key': currentGame.key, 
			'count': currentGame.count, 
			'score': currentGame.score, 
			'startedAt':currentGame.startedAt
		} 
	);

	paintScore(key);
}

function updatePlayer(index) {
	var key = CURRENT_KEY;
	var currentGame = amplify.store(key);
	if (!currentGame || !currentGame.score[index]) {
		alert('Something went really bad! Unable to retrieve the data. :(');
		return;
	}
	currentGame.score[index].name = $('#p' + index).val();
	amplify.store( key, 
		{	
			'key': currentGame.key, 
			'count': currentGame.count, 
			'score': currentGame.score, 
			'startedAt':currentGame.startedAt
		} 
	);
}

function removeRow(index) {
	var key = CURRENT_KEY;
	var currentGame = amplify.store(key);
	if (!currentGame) {
		alert('Something went really bad! Unable to retrieve the data. :(');
		return;
	}
	for (var i = 0, len=currentGame.score.length; i < len; i++) {
		currentGame.score[i].rounds[index] = null;
	}
	amplify.store( key, 
		{	
			'key': currentGame.key, 
			'count': currentGame.count, 
			'score': currentGame.score, 
			'startedAt':currentGame.startedAt
		} 
	);

	paintScore(key);
}
