var course = {
	phase: 'Phase 0',
	unit: 2,
	week: 6,
	printProgress: function() {
		return this.phase + ' Unit ' + this.unit + ':week ' + this.week;
	}
};

//var hotel = {} // empty object using literal notation
//var hotel = new Object(); // constructor notation

//multiple object constructor
/*function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};

	var quayHotel = new Hotel('Quay', 40, 25);
	var parkHotel = new Hotel('Park', 120, 77);
	
}*/

var elCourse = document.getElementById('course');
elCourse.textContent = course.printProgress();