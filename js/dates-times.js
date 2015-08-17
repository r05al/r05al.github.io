
(function() {

var expiryMsg, today, elEnds;

function offerExpires(today) {
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	weekFromToday = new Date(2015, 8, 7, 7, 0, 0);
	dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
	'September', 'October', 'November', 'December'];
	today = new Date();
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();
	expiryMsg = 'Phase 1 begins ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ') <br />' + 
	weekFromToday.toTimeString();
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());