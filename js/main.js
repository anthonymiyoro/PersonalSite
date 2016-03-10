// ---------------------------------------
// Custom JS
// ---------------------------------------

// Preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});

// Init Fastclick
$(function() {
    FastClick.attach(document.body);
});

// -----------------------------
// Navbar fade
// -----------------------------
$(function() {
    var navbar = $('.navbar');
    if (navbar.hasClass("is-transparent")) {
        $(window).scroll(function() {
            if (navbar.offset().top > 250) {
                navbar.removeClass("is-transparent");
            } else {
                navbar.addClass("is-transparent");
            }
        });
    } else {
        return;
    }
});

// -----------------------------
//  Smooth scroll
// ----------------------------
$(document).ready(function() {
    $('.navbar-nav li a, .banner a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// -----------------------------
//  CSS3 Transition
// -----------------------------
$('*').each(function(){
	if($(this).attr('data-animation')) {
		var $animationName = $(this).attr('data-animation'),
			$animationDelay = "delay-"+$(this).attr('data-animation-delay');
		$(this).appear(function() {
			$(this).addClass('animated').addClass($animationName);
			$(this).addClass('animated').addClass($animationDelay);
		});
	}
});

// -----------------------------
// Twitter
// -----------------------------
$(".twitter-feed").tweet({
    join_text: "auto",
    username: ["CreativeMarket"],
    modpath: "php/twitter/",
    count: 6,
    loading_text: "loading ...",
    template: "{text}{time}{user}",
    auto_join_text_default: " ", //We said,
    auto_join_text_ed: " ", //We
    auto_join_text_ing: " ", //We were
    auto_join_text_reply: " ", //We replied
    auto_join_text_url: " " //We were checking out
 });

//Carousel for tweets
$('.tweet_list').slick({
    fade: true,
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

// -----------------------------
// Slick
// -----------------------------

$('.slider').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000
});

//Quotes
$('.quote-list').slick({
    slide: 'ul>li',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false
});

//Brands
$('.brands').slick({
  slide: 'ul>li',
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// -----------------------------
// Isotope filtering
// -----------------------------
$(function(){
    var $container = $('.isotope');
    // init
    $container.imagesLoaded( function() {
        $container.isotope({
            itemSelector: ".item",
            masonry: {
                columnWidth: ".grid-sizer",
                gutter: ".gutter-sizer"
            }
        });
    });
    // filter items when filter link is clicked
    $('#filter a').click(function(){
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
});

// -----------------------------
// Masonry /Blog List/
// ----------------------------
$(function(){
    var $masonry = $('#list-masonry');
    // init
    $masonry.imagesLoaded( function() {
        $masonry.isotope({
            itemSelector: "#list-masonry>div",
            masonry: {
                columnWidth: "#list-masonry>div"
                }
        });
    });
});

// -----------------------------
// Count To
// -----------------------------
$('.number').appear(function() {
    $('.number').countTo();
});

// -----------------------------
// Magnific Popup
// -----------------------------
$('.ajax-popup-link').magnificPopup({
    type: 'ajax',
    midClick: true,
    closeBtnInside: true,
    showCloseBtn: false,
    preloader: true,
    fixedContentPos: false,
    gallery: {
        enabled: true,
        arrowMarkup: '',
        preload: [1,2]
    },
    callbacks: {
        ajaxContentAdded: function() {
            // Slider in popup
            $('.popup-slider').slick({
                slide: 'ul>li',
                dots: true,
                arrows: false,
                customPaging: function(slick,index) {
                    return '<a>' + ++index + '</a>';
               },
               onInit: function() {
                   // same height for popup-slider and project-wrap
                    var $equalizer = $('.equalizer');
                    var maxHeight = 0;
                    $equalizer.each(function() {
                        maxHeight = Math.max(maxHeight, $(this).outerHeight());
                    });
                    $equalizer.css({ height: maxHeight + 'px' });
               }
            });
            this.content.find('.fa-close').on('click',function(e){
                e.preventDefault();
                $.magnificPopup.close();
            });
        },
        buildControls: function () {
            var magnificPopup = $.magnificPopup.instance;
            $('body').on('click', '.fa-angle-double-left', function() {
                magnificPopup.prev();
            });
            $('body').on('click', '.fa-angle-double-right', function() {
                magnificPopup.next();
            });
        },
        close: function() {
            console.log('Close');
        }
    }
});

// -----------------------------
// Easy Pie Chart
// -----------------------------
$('.chart').appear(function() {
    $('.chart').easyPieChart({
        barColor: "#fff",//default, set optionaly in html data-bar-color option
        trackColor: "transparent",
        //scaleColor: "#CCC",
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 5,
        animate: 2000,
        onStart: function() {
            $('.percent').countTo({
                speed: 2000
            });
        }
    });
});

// -----------------------------
// call-to section
// Chrome Fix Repair
// Remove fixed background-attachment
// ----------------------------
$(function () {
    var mozilla = /firefox/.test(navigator.userAgent.toLowerCase());
    if (mozilla == false) {
        $(".call-to").css({"background-attachment":"scroll"});
    }
});

jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

