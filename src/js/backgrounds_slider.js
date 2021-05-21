$(function() {
    $(".slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1, 
        slidesToScroll: 1, 
        fade: true,
        dots: true, 
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
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
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 172"><image id="next_copy" data-name="next copy" width="93" height="172" xlink:href="data:img/png;base64,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"/></svg>',
        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 93 172"><image id="next_copy" data-name="prev copy" width="93" height="172" xlink:href="data:img/png;base64,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"/></svg>',
        responsive: [
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ],
    });

    $('.gallery__slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.gallery__slider_capture',
        prevArrow: '<svg class="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105" height="196" viewBox="0 0 105 196"><image data-name="next copy" width="105" height="196" xlink:href="data:img/png;base64,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"/></svg>',
        nextArrow: '<svg class="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="105" height="196" viewBox="0 0 105 196"><image data-name="prev copy" width="105" height="196" xlink:href="data:img/png;base64,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"/></svg>',
    });

    $('.gallery__slider_capture').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.gallery__slider',
        arrows: false
    });

    $('input[name="year"]').on('click', () => {
        if (!$('.gallery__wrapper').hasClass(".gallery__wrapper_hide")) {
            $('.gallery__wrapper').addClass("gallery__wrapper_show")
        }
    })

    $(".projects__scroll").mCustomScrollbar({
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
