$(document).ready(function(){

	//onResize
	$(window).resize(function(){
		$('.nav > ul').removeClass('open');
	});
	//the Ons
	$(document)
	.on('click','.mobile_menu',function(){
		$('.nav ul:first').toggleClass('open');
	})
	
});