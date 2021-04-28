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

    $('.exhibitions__works_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 172"><image id="next_copy" data-name="next copy" width="93" height="172" xlink:href="data:img/png;base64,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"/></svg>',
        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 172"><image id="next_copy" data-name="next copy" width="93" height="172" xlink:href="data:img/png;base64,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"/></svg>'
    });
})
