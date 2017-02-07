var pass = 50;
var score = 75;
var msg = '';

if(score >= pass) {
  msg += 'Congratulations! ';
} else {
  msg += 'Try again. ';
}

var el = document.getElementById('answer');
el.innerHTML = msg;