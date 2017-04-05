(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		var untilDate = new Date(2018, 5 - 1, 28);

		$(".countdown").countdown({
			until: untilDate,
			format: 'ydHMS',
			padZeroes: true
		});

	}); // End document ready

})(this.jQuery);
