var score1 = 8;   // Round 1 score
var score2 = 8;   // Round 2 score
var pass1 = 6;    // Round 1 pass mark
var pass2 = 6;    // Round 2 pass mark

var minPass = ((score1 >= pass1) || (score2 >= pass2));

var msg = 'Resit is required: ' + !minPass;

var el = document.getElementById('answer');
el.innerHTML = msg;