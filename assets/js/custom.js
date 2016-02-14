(function($){

	/* ---------------------------------------------- /*
	 * Preloader
	/* ---------------------------------------------- */

	$(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Lightbox
		/* ---------------------------------------------- */

		$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		    event.preventDefault();
		    $(this).ekkoLightbox();
		});

		/* ---------------------------------------------- /*
		 * Local Weather
		/* ---------------------------------------------- */

		getLocation();

		function getLocation() {
			$.get("http://ipinfo.io", function(location) {

				$('.location').html("How's the weather in good old " + location.city + "?");

				getWeather(location.city, location.region);
			}, "jsonp");
		}

		function getWeather(city, region) {
			var city = city;
			var state = getAbbreviation(region);

			function getAbbreviation(state) {
				var usStates = [
				    { name: 'ALABAMA', abbreviation: 'AL'},
				    { name: 'ALASKA', abbreviation: 'AK'},
				    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
				    { name: 'ARIZONA', abbreviation: 'AZ'},
				    { name: 'ARKANSAS', abbreviation: 'AR'},
				    { name: 'CALIFORNIA', abbreviation: 'CA'},
				    { name: 'COLORADO', abbreviation: 'CO'},
				    { name: 'CONNECTICUT', abbreviation: 'CT'},
				    { name: 'DELAWARE', abbreviation: 'DE'},
				    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
				    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
				    { name: 'FLORIDA', abbreviation: 'FL'},
				    { name: 'GEORGIA', abbreviation: 'GA'},
				    { name: 'GUAM', abbreviation: 'GU'},
				    { name: 'HAWAII', abbreviation: 'HI'},
				    { name: 'IDAHO', abbreviation: 'ID'},
				    { name: 'ILLINOIS', abbreviation: 'IL'},
				    { name: 'INDIANA', abbreviation: 'IN'},
				    { name: 'IOWA', abbreviation: 'IA'},
				    { name: 'KANSAS', abbreviation: 'KS'},
				    { name: 'KENTUCKY', abbreviation: 'KY'},
				    { name: 'LOUISIANA', abbreviation: 'LA'},
				    { name: 'MAINE', abbreviation: 'ME'},
				    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
				    { name: 'MARYLAND', abbreviation: 'MD'},
				    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
				    { name: 'MICHIGAN', abbreviation: 'MI'},
				    { name: 'MINNESOTA', abbreviation: 'MN'},
				    { name: 'MISSISSIPPI', abbreviation: 'MS'},
				    { name: 'MISSOURI', abbreviation: 'MO'},
				    { name: 'MONTANA', abbreviation: 'MT'},
				    { name: 'NEBRASKA', abbreviation: 'NE'},
				    { name: 'NEVADA', abbreviation: 'NV'},
				    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
				    { name: 'NEW JERSEY', abbreviation: 'NJ'},
				    { name: 'NEW MEXICO', abbreviation: 'NM'},
				    { name: 'NEW YORK', abbreviation: 'NY'},
				    { name: 'NORTH CAROLIN A', abbreviation: 'NC'},
				    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
				    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
				    { name: 'OHIO', abbreviation: 'OH'},
				    { name: 'OKLAHOMA', abbreviation: 'OK'},
				    { name: 'OREGON', abbreviation: 'OR'},
				    { name: 'PALAU', abbreviation: 'PW'},
				    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
				    { name: 'PUERTO RICO', abbreviation: 'PR'},
				    { name: 'RHODE ISLAND', abbreviation: 'RI'},
				    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
				    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
				    { name: 'TENNESSEE', abbreviation: 'TN'},
				    { name: 'TEXAS', abbreviation: 'TX'},
				    { name: 'UTAH', abbreviation: 'UT'},
				    { name: 'VERMONT', abbreviation: 'VT'},
				    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
				    { name: 'VIRGINIA', abbreviation: 'VA'},
				    { name: 'WASHINGTON', abbreviation: 'WA'},
				    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
				    { name: 'WISCONSIN', abbreviation: 'WI'},
				    { name: 'WYOMING', abbreviation: 'WY' }
				];
				usStates.find(function(obj) {
					return obj.name === state.toUpperCase();
				})
			}

			var weatherApiUrl = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + city + "%2C%20" + state + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

			$.get(weatherApiUrl, function(weather) {

				$(".location").append(" " + weather.query.results.channel.item.condition.text + "?");

			}, "jsonp");
		}


		/* ---------------------------------------------- /*
		 * Smooth scroll / Scroll To Top
		/* ---------------------------------------------- */

		$('a[href*=#]').bind("click", function(e){

			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		/* ---------------------------------------------- /*
		 * Navbar
		/* ---------------------------------------------- */

		$('.header').sticky({
			topSpacing: 0
		});

		$('body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		})


		/* ---------------------------------------------- /*
		 * Home BG
		/* ---------------------------------------------- */

		$(".screen-height").height($(window).height());

		$(window).resize(function(){
			$(".screen-height").height($(window).height());
		});

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$('#home').css({'background-attachment': 'scroll'});
		} else {
			$('#home').parallax('50%', 0.1);
		}


		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		/* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * E-mail validation
		/* ---------------------------------------------- */

		function isValidEmailAddress(emailAddress) {
			var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};

	});

})(jQuery);
