(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// text animation
		window.ityped.init(document.querySelector('.ityped'), {
			strings : ['We are Digital Agency','We always think big'],
			loop : true
		});	

		// custom cursor
		var kursorx = new kursor({
			type:4,
			color: 'rgba(255,255,255)',
		})

		// function mouseenter () {
		// 	kursorx.hidden()
		// }
		// function mouseleave () {
		// 	kursorx.hidden(false)
		// }
		
		// var kursor2 = new kursor({
		// 	el: '.caja',
		// 	color: 'rgba(0,0,255)',
		// 	type: 4,
		// })

		

		
		
		
		
		
		
		
		
	});
})(jQuery);

	// page loader
	$(window).on('load',function(){
		setTimeout(function(){ 
		$('.page-loader').fadeOut('slow');
		},1000);
	});

	// disbale code inspect
	// take body to change the content
	const body = document.getElementsByTagName('body');
	// stop keyboard shortcuts
	window.addEventListener("keydown", (event) => {
	if(event.ctrlKey && (event.key === "S" || event.key === "s")) {
		event.preventDefault();
	}
	if(event.ctrlKey && (event.key === "C")) {
		event.preventDefault();
	}
	if(event.ctrlKey && (event.key === "E" || event.key === "e")) {
		event.preventDefault();
	}
	if(event.ctrlKey && (event.key === "I" || event.key === "i")) {
		event.preventDefault();
	}
	if(event.ctrlKey && (event.key === "K" || event.key === "k")) {
		event.preventDefault();
	}
	if(event.ctrlKey && (event.key === "U" || event.key === "u")) {
		event.preventDefault();
	}
	});
	// stop right click
	document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	});