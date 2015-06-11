$(document).ready(function(){
	$('.more-details').hide();

//show more details on click
	$('.more-info').on('click',function(){
		$('div.details').hide();
		$('div.more-details').show();
		$('div.more-details img.mark').on('click',function(){
			$('div.more-details').hide();
			$('div.details').show();
		});
	});

//set map background on address hover
	var timer;
	$('a.nats-house').on('mouseenter',function(){
		timer = setTimeout(function(){
			$('div.background').css('background-image','url("/pub/images/map106william.png")');
		},300);
		$('a.nats-house').on('mouseleave',function(){
			clearTimeout(timer);
			$('div.background').css('background-image','url("/pub/images/tossing-hats.jpg")');
		});
	});
});
