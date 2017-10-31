$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


$('.form button').mouseenter(function(){
	$('.arrow-btn').addClass('arrow-btn-active')
})
$('.form button').mouseleave(function(){
	$('.arrow-btn').removeClass('arrow-btn-active')
})

$('.an-box').mouseenter(function(){
	$(this).find('.top-title').addClass('thin');
	$(this).find('.bg').addClass('bg-white');
	$(this).find('.an-more').addClass('db');
})
$('.an-box').mouseleave(function(){
	$(this).find('.top-title').removeClass('thin');
	$(this).find('.bg').removeClass('bg-white');
	$(this).find('.an-more').removeClass('db');
})
$('.partner-box').mouseenter(function(){
	$(this).find('img').addClass('bw');
})
$('.partner-box').mouseleave(function(){
	$(this).find('img').removeClass('bw');
})
	      $(".slider").slick({
        infinite: true,
        dots: true
      });

	$('.form button').mouseenter(function(){
	$(this).find('img').attr('src','img/icons/rbtn_arrow_active.png')
})
$('.form button').mouseleave(function(){
	$(this).find('img').attr('src', 'img/icons/rbtn_arrow.png')
})	
$('.wrap .form button').mouseenter(function(){
	$(this).find('img').attr('src','img/icons/rbtn_arrow_active.png')
})
$('.wrap .form button').mouseleave(function(){
	$(this).find('img').attr('src', 'img/icons/rbtn_arrow_active.png')
})

$('.callback').click(function(){
$('.popup').show();
})
$('.close').click(function(){
$('.popup').hide();
})
