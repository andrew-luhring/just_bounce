jQuery(document).ready(function($) {
	var elems = $('article.post .entry-content a');
	jQuery.makeArray(elems);
	$('div').data('music', elems)
	
	if(jQuery.inArray(".mp3", elems)) {
		$('body').click(function() {
			alert($('music').);
		});
	}

});
