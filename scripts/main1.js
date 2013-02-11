/**
 * @author capacitr
 */

$(document).ready(function() {

	$('#secondary, #primary, #content').switchClass("active", "hide", 1);
	$('#sidebarWrapper').switchClass('preJQ', 'off', 1);
	


	$('#sidebarWrapper').mouseenter(function() {
		$('#sidebarWrapper').switchClass('off', 'on', 1000); 
		$('#secondary').switchClass("hide", "active", 1100);
	}).mouseleave(function() {
		$('#secondary').switchClass("active", "hide", 1000);
		$('#sidebarWrapper').switchClass('on', 'off', 1000);
	});
	
	
	$('#toggleBitch').click(
		function(){
		$('#sidebarWrapper').switchClass('off', 'on', 1000); 
		$('#secondary').switchClass("hide", "active", 1100);	
		});

	$('#closeBar').click(
		function(){
		$('#secondary').switchClass("active", "hide", 400);
		$('#sidebarWrapper').switchClass('on', 'off', 400);		
		});

});


