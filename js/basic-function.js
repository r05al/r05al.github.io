var msg = 'Welcome! Check out the Contact page if you have any valuable feedback!';
function updateMessage() {
	var el = document.getElementById('message');
	el.textContent = msg;
}
updateMessage();
var updatemsg = '<p><b>page title: </b>' + document.title + '</br />';
updatemsg += '<b>page address: </b>' + document.URL + '<br />';
updatemsg += '<b>last modified: </b>' + document.lastModified + '</p>';

var elupdate = document.getElementById('footer');
elupdate.innerHTML = updatemsg;

