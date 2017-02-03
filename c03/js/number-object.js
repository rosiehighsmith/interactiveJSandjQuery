var originalNum = 11.123455;

var msg = '<h2>original number</h2><p>' + originalNum + '</p>';
msg += '<h2>3 decimal places</h2><p>' + originalNum.toFixed(3) + '</p>';
msg += '<h2> 3 total digits</h2><p>' + originalNum.toPrecision(3) + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;
