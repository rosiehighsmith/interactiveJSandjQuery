var msg;
var level = 9;

switch(level) {
case 1:
  msg = 'Good luck on your first test.';
  break;
case 2: 
  msg = 'Almost done, test 2 of 3!';
  break;
case 3:
  msg = 'The last test!';
  break;
default:
  msg = 'Test';
  break;
}

var el = document.getElementById('answer');
el.textContent = msg;