function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var quayHotel = new Hotel('Quay', 100, 69);
var parkHotel = new Hotel('Park', 20, 12);

var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.innerHTML = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.innerHTML = details2;