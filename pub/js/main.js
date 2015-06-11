$(document).ready(function(){
	$('.more-details').hide();
	$('.more-info').on('click',function(){
		$('div.details').hide();
		$('div.more-details').show();
		console.log('clicked more info');
		$(document).on('click',function(){
			$('div.more-details').hide();
			$('div.details').show();
			console.log('clicked hide more info');
		});
	});
	$('a.nats-house').on('mouseenter',function(){
		$('div.background').css('background-image','url("/pub/images/map106william.png")');
/*
		$('div.container').removeClass('background');
		$('div.container').addClass('background-map-nat');
*/
	});
	$('a.nats-house').on('mouseleave',function(){
		$('div.background').css('background-image','url("/pub/images/tossing-hats.jpg")');
/*
		$('div.container').removeClass('background-map-nat');
		$('div.container').addClass('background');
*/
	});
});
