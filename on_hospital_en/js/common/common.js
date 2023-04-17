
$(document).ready(function(){
	$('#google_translate_element').val('en').trigger('change');

	  // 한국어판에서 번역기 클릭 시 영어판으로 와서 클릭한 언어로 번역기 돌리기!

	  const urlParams = new URL(location.href).searchParams;
	  const trans = urlParams.get('trans');
	  console.log('trans',trans)

	  if (trans == 'el') {
		$('#google_translate_element').val('el').trigger('change');
	  }else if (trans == 'nl') {
		$('#google_translate_element').val('nl').trigger('change');
	  }else if (trans == 'no') {
		$('#google_translate_element').val('no').trigger('change');
	  }else if (trans == 'da') {
		$('#google_translate_element').val('da').trigger('change');
	  }else if (trans == 'de') {
		$('#google_translate_element').val('de').trigger('change');
	  }else if (trans == 'ru') {
		$('#google_translate_element').val('ru').trigger('change');
	  }else if (trans == 'ro') {
		$('#google_translate_element').val('ro').trigger('change');
	  }else if (trans == 'mk') {
		$('#google_translate_element').val('mk').trigger('change');
	  }else if (trans == 'ms') {
		$('#google_translate_element').val('ms').trigger('change');
	  }else if (trans == 'mn') {
		$('#google_translate_element').val('mn').trigger('change');
	  }else if (trans == 'vi') {
		$('#google_translate_element').val('vi').trigger('change');
	  }else if (trans == 'bg') {
		$('#google_translate_element').val('bg').trigger('change');
	  }else if (trans == 'sv') {
		$('#google_translate_element').val('sv').trigger('change');
	  }else if (trans == 'es') {
		$('#google_translate_element').val('es').trigger('change');
	  }else if (trans == 'ar') {
		$('#google_translate_element').val('ar').trigger('change');
	  }else if (trans == 'af') {
		$('#google_translate_element').val('af').trigger('change');
	  }else if (trans == 'sq') {
		$('#google_translate_element').val('sq').trigger('change');
	  }else if (trans == 'et') {
		$('#google_translate_element').val('et').trigger('change');
	  }else if (trans == 'en') {
		$('#google_translate_element').val('en').trigger('change');
	  }else if (trans == 'uz') {
		$('#google_translate_element').val('uz').trigger('change');
	  }else if (trans == 'uk') {
		$('#google_translate_element').val('uk').trigger('change');
	  }else if (trans == 'it') {
		$('#google_translate_element').val('it').trigger('change');
	  }else if (trans == 'id') {
		$('#google_translate_element').val('id').trigger('change');
	  }else if (trans == 'ja') {
		$('#google_translate_element').val('ja').trigger('change');
	  }else if (trans == 'zh-CN') {
		$('#google_translate_element').val('zh-CN').trigger('change');
	  }else if (trans == 'zh-TW') {
		$('#google_translate_element').val('zh-TW').trigger('change');
	  }else if (trans == 'cs') {
		$('#google_translate_element').val('cs').trigger('change');
	  }else if (trans == 'hr') {
		$('#google_translate_element').val('hr').trigger('change');
	  }else if (trans == 'th') {
		$('#google_translate_element').val('th').trigger('change');
	  }else if (trans == 'fa') {
		$('#google_translate_element').val('fa').trigger('change');
	  }else if (trans == 'pt') {
		$('#google_translate_element').val('pt').trigger('change');
	  }else if (trans == 'fr') {
		$('#google_translate_element').val('fr').trigger('change');
	  }else if (trans == 'fi') {
		$('#google_translate_element').val('fi').trigger('change');
	  }else if (trans == 'hu') {
		$('#google_translate_element').val('hu').trigger('change');
	  }else if (trans == 'hi') {
		$('#google_translate_element').val('hi').trigger('change');
	  }else if (trans == 'ko') {
		$(location).attr("href",'https://bryonsilver.github.io/ON_Hospital/on_hospital/index.html?trans=ko');	
	  }
   
	// nav

	$('.h_nav_li').mouseenter(function(){

		$('.nav_pan_box').addClass('p_active');

		$('.nav_0').hover(function(){
			$('.nav_pan_box').css({height: "150px"})
		})
		$('.nav_1').hover(function(){
			$('.nav_pan_box').css({height: "120px"})
		})
		$('.nav_2').hover(function(){
			$('.nav_pan_box').css({height: "350px"})
		})
		$('.nav_3').hover(function(){
			$('.nav_pan_box').css({height: "150px"})
		})
		$('.nav_4').hover(function(){
			$('.nav_pan_box').css({height: "0px"})
		})
		$('.nav_5').hover(function(){
			$('.nav_pan_box').css({height: "140px"})
		})


		// li에서 몇번째꺼에 마우스 올라갔는지 감지
		console.log($(this).index());

		// n_pan_box 안에 있는 pan들중에서 그 번째꺼만 display: block으로 변경
		$('.n_pan').removeClass('n_pan_active') 
		$('.n_pan').eq($(this).index()).addClass('n_pan_active')
	});
	$('.h_nav_li, .nav_pan_box').mouseleave(function(){
		$('.nav_pan_box').css('height', 'auto')
	});
	




// 햄버거 버튼의 바탕 클릭 시 뒤로가기
	$('.b_pan_box').click(function(){
		history.go(-1);
		console.log('뒤돌아감')
	})


	$('.root_daum_roughmap_landing').css({width:'100%'})


	
	




	$(window).resize(function(){
		var width = window.innerWidth;
		if(width < 600){
			$('.goog-te-combo').css({
				background:'#fff',
				color:'#333',
				border:'1px solid #7d7d7d',
				outline:'none',
				borderRadius:'20px'

			})
		} 
	}).resize();


	
	$('.all_see').click(function(){
		$('.first_line2').css({transform: 'rotate(-45deg)'})
		$('.last_line2').css({transform: 'rotate(45deg)'})
		$('.mid_bur').css({opacity: '0'})
	})
	$('.as_tab_title').click(function(){
		$('.first_line2').css({transform: 'rotate(0deg)'})
		$('.last_line2').css({transform: 'rotate(0deg)'})
		$('.mid_bur').css({opacity: '1'})
	})
	$('.black_pan').click(function(){
		$('.first_line2').css({transform: 'rotate(0deg)'})
		$('.last_line2').css({transform: 'rotate(0deg)'})
		$('.mid_bur').css({opacity: '1'})
	})

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop == 0){
			//스크롤이 끝에 도달했을때 실행될 이벤트
			$('.top_btn').css({opacity: '0'})
		} else {
			//아닐때 이벤트
			$('.top_btn').css({opacity: '1'})
		}
	})

	$('.top_btn').click(function(){
		$( 'html, body' ).animate( { scrollTop : 0 },0 );
		return false;
	})
  

	$('.bn_li').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).toggleClass('bn_active')
	})
	$(".bn_li ul.bn_n_ul").hide();
	$('.btn_p').click(function(){
		$('.bn_li').removeClass('bn_active')
		$(this).parents('.bn_li').toggleClass('bn_active')
		$(".bn_li").off('click').click(function(){
			$("ul",this).slideToggle();
		});
		var clicks = $(this).data('clicks');
		if (clicks) {
		   // odd clicks
		   $(this).find('.bn_p_after').removeClass('bn_p_after_d')
		} else {
		   // even clicks
		   $(this).find('.bn_p_after').addClass('bn_p_after_d')
		}
		$(this).data("clicks", !clicks);
	})


	var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',

        // 분기점
        breakpoints: {
            2000: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 5,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 4,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            100: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }  
    });

	var swiper = new Swiper(".mySwiper5", {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000, // 몇 밀리초마다 새로 들어올지
        },
        speed: 500, // duration
        // direction: 'vertical',

        // 분기점
        breakpoints: {
            2000: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 3,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 3,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }  
    });
    $(window).resize(function(){
		var width = window.innerWidth;
		if(width < 1000){
			$('.black_pan').css({display: 'none'})
		}
	}).resize();
    
    $('.swiper').hover(function(){
        swiper.autoplay.stop()
    }, function(){
        swiper.autoplay.start()
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

	// $('#google_translate_element').on('change' , function() {
	// 	console.log('여기까지는 되니?')
	// 	let selectEl = document.querySelector(".goog-te-combo");
	// 	$(selectEl).append("<option value='lang'>언어</option>")
	// 	console.log('언어 option 추가함')
	// })
	





	
})