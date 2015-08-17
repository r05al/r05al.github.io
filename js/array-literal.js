var colors = new Array('white',
						'black',
						'custom'); //array constructor

//colors = ['white', 'black', 'custom']; //array literal

colors[2] = 'hunter green'

var el = document.getElementById('colors');
el.textContent = colors[0];