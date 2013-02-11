var winWidth = window.innerWidth;
var winHeight = window.innerHeight;
var x;
var xx = 0;
var yy = 0;
jQuery(document).ready(function($) {

	var sec = $("section");
	var sections = $.makeArray(sec);

	for(var i = 0; i < sections.length; i++) {
		var calColor = 30 * i;
		x = sections[i];
		var s = i + 2 * 30;

		$(x).animate({
			"width" : winWidth,
			"height" : winHeight,
			"font-size" : s
		}, 2000);

		$(x).animate({
			"top" : (((winHeight) * yy) + winHeight  ),
			"left" : (((winWidth) * xx ) + winWidth )

		}, 2000, function() {
			var $aOT = $('#a').offset().top;
			var $aOL = $('#a').offset().left;
			console.log($aOT);
			console.log($aOL);
			$('html, body').scrollTop($aOT, "slow").scrollLeft($aOL, "slow");
			console.log("ho");
		});
		if(xx === 0 && yy === 0) {
			xx = xx + 1;

		} else if(xx === 1) {
			xx = xx - 2;

		} else if(xx <= -1 && yy === 0) {
			xx = xx + 1;
			yy = yy + 1;
			//console.log(xx + " and " + yy);

		} else if(yy === 1) {
			yy = yy - 2;
			//console.log(xx + " and " + yy);
		}
		console.log("section" + x.innerHTML + "\n xx " + xx + " and " + yy);
	}

});

/*
 *
 *  x = "left" : (winWidth / 3),
 *  y = "top" : (winHeight / 3)
 *
 *
 */


 