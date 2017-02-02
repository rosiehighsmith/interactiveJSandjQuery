var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';
var welcome = greeting + name + message;

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.innerHTML = '$' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.innerHTML = '$' + grandTotal;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML instead of textContent, but note the security issues on p228-231

In the first print run, line 33-34 repeated elSubTotal (rather than elShipping).
This was fixed in later print runs and in this code sample.
*/