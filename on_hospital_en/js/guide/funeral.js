$(document).ready(function(){
 $('#selec9').prop("selected", true);
  var swiper1 = new Swiper(".mySwiper1", {
      // slidesPerView: 'auto',
      // initialSlide: 2,
      // speed: 1000,
      // spaceBetween: 32,
      // loop: true,
      // loopedSlides: 2,
      // touchRatio:0,
      // roundLengths: true,
      // mousewheel: false,
      // grabCursor: true,
      // allowTouchMove: true,
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      // },
      // slideToClickedSlide: true,
      // thumbs: {
      //   swiper: swiper3
      // },


      slidesPerView: 2.5,
      pagination: {
          el: ".swiper-pagination",
      },
      
      slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드로 위치 이동
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
          rotate: 50,     // 슬라이드 회전 각도 (클수록 슬라이딩 시 회전이 커짐)
          stretch: -100,  // 슬라이더 간 거리:px (클수록 슬라이더가 겹침)
          depth: 400,     // 깊이 효과 값 (클수록 멀리)
          modifier: 1,    // 효과 배수 (효과를 강하게 처리)
          slideShadows: false,    // 슬라이더에 그림자(기본값) 없앰
      },
      autoplay: {
          delay: 2500, // 몇 밀리초마다 새로 들어올지
      },
      breakpoints: {
          2000: {
              slidesPerView: 2.2,
              spaceBetween: 0
          },
          // when window width is >= 768px
          1025: {
          slidesPerView: 2.2,
          spaceBetween: 0
          },
          // when window width is >= 1024px
          767: {
          slidesPerView: 1.3,
          spaceBetween: 0
          },
          400: {
              slidesPerView: 1.3,
              spaceBetween: 0
          },
          100: {
              slidesPerView: 1.3,
              spaceBetween: 0
          }
      }  ,

      spaceBetween: 10,   // 슬라이드 사이 여백
      centeredSlides: true,   // 센터 모드
      // autoplay: {
      //     delay: 4500,
      //     disableOnInteraction: false,
      // }, // 자동재생
      speed: 1000,    // 넘길때 속도]

  });
  var swiper2 = new Swiper(".mySwiper2", {
      // spaceBetween: 10,
      // loop: true,
      // mousewheel: false,
      // loopedSlides: 3,
      // allowTouchMove: true,
      // slideToClickedSlide: true,
      // // mousewheel: true,
      // navigation: {
      //     nextEl: ".swiper-button-next",
      //     prevEl: ".swiper-button-prev",
      // },
      // touchRatio: 0,
      // thumbs: {
      //   swiper: swiper4
      // },


      slidesPerView: 2.5,
      pagination: {
          el: ".swiper-pagination",
      },
      
      slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드로 위치 이동
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
          rotate: 50,     // 슬라이드 회전 각도 (클수록 슬라이딩 시 회전이 커짐)
          stretch: -100,  // 슬라이더 간 거리:px (클수록 슬라이더가 겹침)
          depth: 400,     // 깊이 효과 값 (클수록 멀리)
          modifier: 1,    // 효과 배수 (효과를 강하게 처리)
          slideShadows: false,    // 슬라이더에 그림자(기본값) 없앰
      },
      autoplay: {
          delay: 2500, // 몇 밀리초마다 새로 들어올지
      },
      breakpoints: {
          2000: {
              slidesPerView: 2.2,
              spaceBetween: 0
          },
          // when window width is >= 768px
          1025: {
          slidesPerView: 2.2,
          spaceBetween: 0
          },
          // when window width is >= 1024px
          767: {
          slidesPerView: 1.3,
          spaceBetween: 0
          },
          400: {
              slidesPerView: 1.3,
              spaceBetween: 0
          },
          100: {
              slidesPerView: 1.3,
              spaceBetween: 0
          }
      }  ,

      spaceBetween: 10,   // 슬라이드 사이 여백
      centeredSlides: true,   // 센터 모드
      // autoplay: {
      //     delay: 4500,
      //     disableOnInteraction: false,
      // }, // 자동재생
      speed: 1000,    // 넘길때 속도]

  });









  // 빈소안내 슬라이드 opacity

 $('.silde_v_1').addClass("opacity_active")
 $('.silde_v_1').click(function(){
   setTimeout(function(){
     swiper1.slideTo(2)
   }, 175)
   $(this).addClass("opacity_active")
   $('.silde_v').not(this).removeClass("opacity_active")

   console.log('1클릭중 빈소안내 슬라이드')
 })
 $('.silde_v_2').on("click",function(){
   setTimeout(function(){
     swiper1.slideTo(1)
   }, 175)
   $(this).addClass("opacity_active")
   $('.silde_v').not(this).removeClass("opacity_active")
   console.log('2클릭중 빈소안내 슬라이드')
 })








  // 시설안내 슬라이드 opacity


  $('.slide_t_3').addClass("opacity_active")
  $('.slide_t_1').click(function(){
    setTimeout(function(){
      swiper2.slideTo(1)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")

    console.log('1클릭중 시설안내 슬라이드')
  })
  $('.slide_t_2').on("click",function(){
    setTimeout(function(){
      swiper2.slideTo(3)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")
    console.log('2클릭중 시설안내 슬라이드')
  })
  $('.slide_t_3').on("click",function(){
    setTimeout(function(){
      swiper2.slideTo(2)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")
    console.log('3클릭중 시설안내 슬라이드')
  })




    // 구글번역 뒤로갔다가 돌아왔을때 번역기능 사라지는 것 제압
    var s = document.createElement("script");
    var a = document.createElement("script");

  window.onpageshow = function(event) {
    if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
      console.log('되고 있나요? onpageshow')
  // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
      $('.reloding').remove();
      $('.google_lang_box').prepend("<div id='google_translate_element' class='back'></div>")
      
      s.type = "text/javascript";
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      a.type = "text/javascript";
      a.src = "./js/common/google.js";
      $("head").append(s);
      $("head").append(a);
      location.reload();

      console.log('구글번역기능 가즈아!!')
    }
  }
})