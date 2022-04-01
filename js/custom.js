jQuery(document).ready(function ($) {

	/* маска для поля ввода */
	if($('input[data-inputmask], .inputmask').length > 0) {
		$('input[data-inputmask], .inputmask').mask("+7 (799) 999-99-99");
	}

	/* слайдер отзывы */
	$('.b-reviews-list').owlCarousel({
		items: 1, loop: true, nav: true, margin: 20, autoplay: true, autoplayHoverPause: true, smartSpeed: 1000, navText: ['<span class="mdi mdi-arrow-left"></span>', '<span class="mdi mdi-arrow-right"></span>'], lazyLoad: true
	});

	/* слайдер доктора */
	$('.b-doctors-list').owlCarousel({
		items: 1, loop: true, nav: true, margin: 50, dots: true, autoplayHoverPause: true, smartSpeed: 1000, navText: ['<span class="mdi mdi-arrow-left"></span>', '<span class="mdi mdi-arrow-right"></span>'], lazyLoad: true
	});
	/* видео слайдер */
	$('.b-video-slider').owlCarousel({
		items: 1, merge: true, loop: true, margin: 15, video: true, videoWidth: 320, videoHeight: 240, autoWidth: true, lazyLoad: true, center: true, nav: true, navText: ['<span class="mdi mdi-arrow-left"></span>', '<span class="mdi mdi-arrow-right"></span>'], responsive: {0: {dots: false}, 768: {dots: true}}
	});

	/* фиксирование меню при прокрутке */
	var objToStick = $(".b-header");
	var topOfObjToStick = $(objToStick).offset().top;
	$(window).scroll(function () {
		var windowScroll = $(window).scrollTop();
		if (windowScroll > topOfObjToStick) {
			$(objToStick).addClass("fixed");
		} else {
			$(objToStick).removeClass("fixed");
		}
	});
  $(".b-menu, .b-mobmenu").on("click", "a", function (event) {
  	event.preventDefault();
		var id = $(this).attr('href'), top = $(id).offset().top;
  	$('body,html').animate({ scrollTop: top - 80}, 500);
  });
  var lastId,
  	topMenu = $(".b-menu"),
  	topMenuHeight = topMenu.outerHeight() + 80,
  	menuItems = topMenu.find("a"),
  	scrollItems = menuItems.map(function () {
  		var item = $($(this).attr("href"));
  		if (item.length) { return item; }
  	});
  menuItems.click(function (e) {
  	var href = $(this).attr("href"),
  		offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  	$('html, body').stop().animate({ scrollTop: offsetTop }, 300);
  	e.preventDefault();
  });
  $(window).scroll(function () {
  	var fromTop = $(this).scrollTop() + topMenuHeight;
  	var cur = scrollItems.map(function () {
  		if ($(this).offset().top < fromTop)
  			return this;
  	});
  	cur = cur[cur.length - 1];
  	var id = cur && cur.length ? cur[0].id : "";

  	if (lastId !== id) {
  		lastId = id;
  		menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
  	}
	});
	
	/* открыте моб меню */
	$('.b-mobmenu-but').click(function () {
		$('.b-mobnav-wrap').toggleClass('active');
	});

	/* закрытие моб меню */
	$('.b-mobnav_close, .b-mobnav-wrap').click(function () {
		$('.b-mobnav-wrap').removeClass('active');
	});

	/* прерывание всплывания событий по иерархии */
	$('.b-mobnav').on('click', function (e) {
		e = e || window.event;
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	});

	/* прокрутка вверх */
	$(window).scroll(function () {
		if ($(this).scrollTop() < 700) {
			$('#a-top').fadeOut();
		}
		if ($(this).scrollTop() > 700) {
			$('#a-top').fadeIn();
		}
	});
	$("#a-top").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 'slow');
		return false;
	});

	/* вызов модального окна */
	// $('.fancybox').fancybox();

});