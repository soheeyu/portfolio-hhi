$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    //슬라이드 버튼 기능
    $('#prev').click(function () {
      swiper.slidePrev();
    });
    $('#next').click(function () {
      swiper.slideNext();
    });
    // $('.pagination div').click(function(){
    //   swiper.slideTo($(this).index());
    // });
  });

  //메뉴 개별 슬라이드
  $(document).ready(function () {
    $('#menu>ul>li').hover(function () {
      $(this).find('ul').stop().slideDown();
    }, function () {
      $(this).find('ul').stop().slideUp();
    });
  });
  //팝업 메뉴 개별 슬라이드
  $(document).ready(function () {
    $('.menu_mobile>ul>li').hover(function () {
      $(this).find('ul').stop().slideDown();
    }, function () {
      $(this).find('ul').stop().slideUp();
    });
  });

  //프로젝트 이미지 슬라이드 스와이퍼
  $(document).ready(function () {
    var swiper = new Swiper('.swiper-container-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination-2',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      //responive breakpoints
      breakpoints: {
        // when window width is >= 320px
        10: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
    //슬라이드 버튼 기능
    $('#prev-2').click(function () {
      swiper.slidePrev();
    });
    $('#next-2').click(function () {
      swiper.slideNext();
    });
  });

  //
  $(document).ready(function () {
    var swiper = new Swiper('.swiper-container-3', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        // when window width is >= 320px
        10: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
    //슬라이드 버튼 기능
    $('#prev-3').click(function () {
      swiper.slidePrev();
    });
    $('#next-3').click(function () {
      swiper.slideNext();
    });
  });

  //푸터 패밀리사이트 버튼 기능
  $(document).ready(function () {
    $('.footer-btn-2').on('click', function () {
      $('#family-site ul li').slideToggle(500);
      $(this).find('>img').attr('src', function (index, attr) {
        if (attr.match('up')) {
          return attr.replace('up', 'down');
        } else {
          return attr.replace('down', 'up')
        }
      });
    });
  });

  //스크롤 탑 이동
  $(document).ready(function () {
    $('#scroll-top').on('click', function () {
      $('html, body').animate({scrollTop: '0'}, 680);
    });
  });

  //모바일 메뉴
  $(document).ready(function(){
		$('button').click(function(){
			$('.menu_mobile').animate({right:0},600);
		});
		$('.close').click(function(){
			$('.menu_mobile').animate({right:'-100%'},600);
		});
		$(window).resize(function(){
			if ($(document).width() > 640) {
				$('.menu_mobile').stop().animate({right:'-100%'},600);
			}
		});
	});