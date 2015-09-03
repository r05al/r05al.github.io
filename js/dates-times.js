
(function() {

var expiryMsg, today, elEnds, difference;

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
	difference = weekFromToday.getTime() - today.getTime();
	difference = difference/(1000*60*60*24);
	expiryMsg = 'Phase 1 begins ';
	expiryMsg += day + ' <br />' + month + ' ' + date + ', ' + year + '<br />' + 
	weekFromToday.toTimeString() + '<br />' + 'COUNTDOWN' +
	'<br />' + Math.floor(difference) + ' days ' + 
	Math.floor(difference%1 *24) + ' hours ' + Math.floor(((difference%1 *24)%24 * 60)%60) + ' minutes ' +
	Math.floor(((((difference%1 *24)%24 * 60)%60) * 60)%60) + ' seconds.';
	
	return expiryMsg;
}

today = new Date();
elEnds = document.getElementById('offerEnds');
elEnds.innerHTML = offerExpires(today);

}());