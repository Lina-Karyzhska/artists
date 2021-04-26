$(function() {
    $(".slider").slick({
        slidesToShow: 1, 
        slidesToScroll: 1, 
        fade: true,
        dots: true, 
        infinite: true, 
        speed: 1000, 
        arrows: false
    });

    $(".about__text").mCustomScrollbar({
		scrollButtons: {
            enable:true,
            scrollType:"stepped"
        },
		keyboard: {scrollType:"stepped"},
		mouseWheel: {scrollAmount:10},
		theme: "rounded-dark",
        scrollInertia:400
	});
})
