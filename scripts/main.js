/**
 * @author capacitr
 */
var height = window.innerHeight;
var width = window.innerWidth;
// var imgArray = [];
var artArray = [];
var articles = document.getElementsByTagName("article");
// var imgs = document.getElementsByTagName("img");
var section;

$(document).ready(function() {

	$('#secondary').switchClass("active", "hide", 1);
	$('#sidebarWrapper').switchClass('preJQ', 'off', 1);
	$('#sidebarWrapper').mouseenter(function() {
		$('#sidebarWrapper').switchClass('off', 'on', 1000);
		$('#secondary').switchClass("hide", "active", 1100);
	}).mouseleave(function() {
		$('#secondary').switchClass("active", "hide", 1000);
		$('#sidebarWrapper').switchClass('on', 'off', 1000);
	});
	$('#toggleBitch').click(function() {
		$('#sidebarWrapper').switchClass('off', 'on', 1000);
		$('#secondary').switchClass("hide", "active", 1100);
	});
	$('#closeBar').click(function() {
		$('#secondary').switchClass("active", "hide", 400);
		$('#sidebarWrapper').switchClass('on', 'off', 400);
	});


//set relative positioning on the content div so the layout doesnt break.
$('#content').css("position", "relative");
	//store articles in array.
	for(var i = 0; i < articles.length; i++) {
		artArray.push(articles[i]);

	}
	var topMaker = artArray.length;
	for(var j = 0; j < topMaker; j++) {
		//tm = 4
		var subtractor = artArray[j];
		var zVal = topMaker - j;

		$(subtractor).css({
			"z-index" : zVal,
			"background-color" : "white",
			"width": "800px",
			"position" : "absolute"
			//"top": "0px"
		});

	}
	$('article').click(function(){
		var topCurrent  = $(this).css("z-index");
		var sendBack = topMaker - topCurrent;
		
		
		$(this).animate({
			"left": "+=10000",
			"background-color" : "#c2c2c2",
			"opacity" : 0,
			"z-index" : sendBack
			}, 5000);
		
		
		
	});

});


/*
article click, 
this z index = this z index - articles.length, 

other articles + 1




* */



/*
$(window).resize(function() {
width = window.innerWidth;
for(var i = 0; i < imgArray.length; i++) {
var sec = imgArray[i].width = width / 4.2;
section = (sec * 4) + 20;
}
$('section').css("border", "10px solid #000").css("width", section);
});
*/

/*

-gather each article into an array.
-apply z-index starting with highest number and then working lower (newest = bigger)
-as you scroll down, the next article slowly begins to show
-the more you scroll down the more the next article shows....
as if you had article you're currently viewing in your hands
and when you look down, the next article which is on the wall or
whatever behind it. after the middle of the window passes the end of the
first article, the second article moves up and overlaps the first one from
the bottom. so it looks and feels as if the articles are actual paper
articles that you put one behind another.

*/
//});

