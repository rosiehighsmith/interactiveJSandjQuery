var hotItems = document.querySelectorAll('li.hot');
if (hotItems.length > 0) {
  for(var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';
  }
}

var hotItems = document.querySelectorAll('li.hot') // create a nodelist of all hot items
if (hotItems.length > 0) { //only implement loop if nodelist isn't empty
  for(var i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool'; //reset class to cool for each formerly hot item
  }
}