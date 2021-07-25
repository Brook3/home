$(function(){
	$('#dwm_terminal .terminal_content .content_tools .search').click(function(){
		var search_box = $('#search-box');
		search_box.toggle();
	});
	$('#dwm_terminal .terminal_content .content_tools .site').click(function(){
		var sites = $('#site-box');
		sites.toggle();
	});
});
