// if(location.href.indexOf('https://bryonsilver.github.io/en_on_hospital/on_hospital_en/index.html') > -1){ // location.href 로 현재 페이지 주소를 가져옵니다.
// 	$('#google_translate_element').val('en').trigger('change');
// 	console.log("영어판 링크얏!!")
// }

	  // 한국어판에서 번역기 클릭 시 영어판으로 와서 클릭한 언어로 번역기 돌리기!

	  
	
	  
	
	  
$(document).ready(function(){



	const searchParams = new URLSearchParams(location.search);

    for (const param of searchParams) {
        if(param[0] == 'trans') {
            var trans_lang = param[1]  // param[1] = 23.5  Number(param[1])

            if (trans_lang == 'el') {
				$(".goog-te-combo option:eq(2)").prop("selected",true);
				console.log("el");
            }
            else if (trans_lang == 'nl') {
				$(".goog-te-combo option:eq(3)").prop("selected",true);
				console.log("nl");
            }
			else if (trans_lang == 'no') {
				$(".goog-te-combo option:eq(4)").prop("selected",true);
				console.log("no");
            }
			else if (trans_lang == 'da') {
				$(".goog-te-combo option:eq(5)").prop("selected",true);
				console.log("da");
            }
			else if (trans_lang == 'de') {
				$(".goog-te-combo option:eq(6)").prop("selected",true);
				console.log("de");
            }
			else if (trans_lang == 'ru') {
				$(".goog-te-combo option:eq(7)").prop("selected",true);
				console.log("ru");
            }
			else if (trans_lang == 'ro') {
				$(".goog-te-combo option:eq(8)").prop("selected",true);
				console.log("ro");
            }
			else if (trans_lang == 'mk') {
				$(".goog-te-combo option:eq(9)").prop("selected",true);
				console.log("mk");
            }
			else if (trans_lang == 'ms') {
				$(".goog-te-combo option:eq(10)").prop("selected",true);
				console.log("ms");
            }
			else if (trans_lang == 'mn') {
				$(".goog-te-combo option:eq(11)").prop("selected",true);
				console.log("mn");
            }
			 else if (trans_lang == 'vi') {
				$(".goog-te-combo option:eq(12)").prop("selected",true);
				console.log("vi");
            } else if (trans_lang == 'bg') {
				$(".goog-te-combo option:eq(13)").prop("selected",true);
				console.log("bg");
            }
			else if (trans_lang == 'sv') {
				$(".goog-te-combo option:eq(14)").prop("selected",true);
				console.log("sv");
            }
			else if (trans_lang == 'es') {
				$(".goog-te-combo option:eq(15)").prop("selected",true);
				console.log("es");
            }
			else if (trans_lang == 'ar') {
				$(".goog-te-combo option:eq(16)").prop("selected",true);
				console.log("ar");
            }
			else if (trans_lang == 'af') {
				$(".goog-te-combo option:eq(17)").prop("selected",true);
				console.log("af");
            }
			else if (trans_lang == 'sq') {
				$(".goog-te-combo option:eq(18)").prop("selected",true);
				console.log("sq");
            }
			else if (trans_lang == 'et') {
				$(".goog-te-combo option:eq(19)").prop("selected",true);
				console.log("et");
            }
			else if (trans_lang == 'en') {
				$(".goog-te-combo option:eq(20)").prop("selected",true);
				console.log("en");
            }
			else if (trans_lang == 'uz') {
				$(".goog-te-combo option:eq(21)").prop("selected",true);
				console.log("uz");
            }
			else if (trans_lang == 'uk') {
				$(".goog-te-combo option:eq(22)").prop("selected",true);
				console.log("uk");
            }
			else if (trans_lang == 'it') {
				$(".goog-te-combo option:eq(23)").prop("selected",true);
				console.log("it");
            }
			else if (trans_lang == 'id') {
				$(".goog-te-combo option:eq(24)").prop("selected",true);
				console.log("id");
            }
			else if (trans_lang == 'ja') {
				$(".goog-te-combo option:eq(25)").prop("selected",true);
				console.log("ja");
            }
			else if (trans_lang == 'zh-CN') {
				$(".goog-te-combo option:eq(26)").prop("selected",true);
				console.log("zh-CN");
            }
			else if (trans_lang == 'zh-TW') {
				$(".goog-te-combo option:eq(27)").prop("selected",true);
				console.log("zh-TW");
            }
			else if (trans_lang == 'cs') {
				$(".goog-te-combo option:eq(28)").prop("selected",true);
				console.log("cs");
            }
			else if (trans_lang == 'hr') {
				$(".goog-te-combo option:eq(29)").prop("selected",true);
				console.log("hr");
            }
			else if (trans_lang == 'th') {
				$(".goog-te-combo option:eq(30)").prop("selected",true);
				console.log("th");
            }
			else if (trans_lang == 'fa') {
				$(".goog-te-combo option:eq(31)").prop("selected",true);
				console.log("fa");
            }
			else if (trans_lang == 'pt') {
				$(".goog-te-combo option:eq(32)").prop("selected",true);
				console.log("pt");
            }
			else if (trans_lang == 'fr') {
				$(".goog-te-combo option:eq(33)").prop("selected",true);
				console.log("fr");
            }
			else if (trans_lang == 'fi') {
				$(".goog-te-combo option:eq(34)").prop("selected",true);
				console.log("fi");
            }
			else if (trans_lang == 'hu') {
				$(".goog-te-combo option:eq(35)").prop("selected",true);
				console.log("hu");
            }
			else if (trans_lang == 'hi') {
				$(".goog-te-combo option:eq(36)").prop("selected",true);
				console.log("hi");
            }

        }
    } 

	// const urlParams = new URL(location.href).searchParams;
	//   const trans = urlParams.get('trans');
	//   console.log('trans',trans)

	//   if (trans == 'el') {
	// 	$('#google_translate_element').val('el').trigger('change');
	// 	console.log("el");
	//   }else if (trans == 'nl') {
	// 	$('#google_translate_element').val('nl').trigger('change');
	// 	console.log("nl");
	//   }else if (trans == 'no') {
	// 	$('#google_translate_element').val('no').trigger('change');
	// 	console.log("no");
	//   }else if (trans == 'da') {
	// 	$('#google_translate_element').val('da').trigger('change');
	// 	console.log("da");
	//   }else if (trans == 'de') {
	// 	$('#google_translate_element').val('de').trigger('change');
	// 	console.log("de");
	//   }else if (trans == 'ru') {
	// 	$('#google_translate_element').val('ru').trigger('change');
	// 	console.log("ru");
	//   }else if (trans == 'ro') {
	// 	$('#google_translate_element').val('ro').trigger('change');
	// 	console.log("ro");
	//   }else if (trans == 'mk') {
	// 	$('#google_translate_element').val('mk').trigger('change');
	// 	console.log("mk");
	//   }else if (trans == 'ms') {
	// 	$('#google_translate_element').val('ms').trigger('change');
	// 	console.log("ms");
	//   }else if (trans == 'mn') {
	// 	$('#google_translate_element').val('mn').trigger('change');
	// 	console.log("mn");
	//   }else if (trans == 'vi') {
	// 	$('#google_translate_element').val('vi').trigger('change');
	// 	console.log("vi");
	//   }else if (trans == 'bg') {
	// 	$('#google_translate_element').val('bg').trigger('change');
	// 	console.log("bg");
	//   }else if (trans == 'sv') {
	// 	$('#google_translate_element').val('sv').trigger('change');
	// 	console.log("sv");
	//   }else if (trans == 'es') {
	// 	$('#google_translate_element').val('es').trigger('change');
	// 	console.log("es");
	//   }else if (trans == 'ar') {
	// 	$('#google_translate_element').val('ar').trigger('change');
	// 	console.log("ar");
	//   }else if (trans == 'af') {
	// 	$('#google_translate_element').val('af').trigger('change');
	// 	console.log("af");
	//   }else if (trans == 'sq') {
	// 	$('#google_translate_element').val('sq').trigger('change');
	// 	console.log("sq");
	//   }else if (trans == 'et') {
	// 	$('#google_translate_element').val('et').trigger('change');
	// 	console.log("et");
	//   }else if (trans == 'en') {
	// 	$('#google_translate_element').val('en').trigger('change');
	// 	console.log("en");
	//   }else if (trans == 'uz') {
	// 	$('#google_translate_element').val('uz').trigger('change');
	// 	console.log("uz");
	//   }else if (trans == 'uk') {
	// 	$('#google_translate_element').val('uk').trigger('change');
	// 	console.log("uk");
	//   }else if (trans == 'it') {
	// 	$('#google_translate_element').val('it').trigger('change');
	// 	console.log("it");
	//   }else if (trans == 'id') {
	// 	$('#google_translate_element').val('id').trigger('change');
	// 	console.log("id");
	//   }else if (trans == 'ja') {
	// 	$('#google_translate_element').val('ja').trigger('change');
	// 	console.log("ja");
	//   }else if (trans == 'zh-CN') {
	// 	$('#google_translate_element').val('zh-CN').trigger('change');
	// 	console.log("zh-CN");
	//   }else if (trans == 'zh-TW') {
	// 	$('#google_translate_element').val('zh-TW').trigger('change');
	// 	console.log("zh-TW");
	//   }else if (trans == 'cs') {
	// 	$('#google_translate_element').val('cs').trigger('change');
	// 	console.log("cs");
	//   }else if (trans == 'hr') {
	// 	$('#google_translate_element').val('hr').trigger('change');
	// 	console.log("hr");
	//   }else if (trans == 'th') {
	// 	$('#google_translate_element').val('th').trigger('change');
	// 	console.log("th");
	//   }else if (trans == 'fa') {
	// 	$('#google_translate_element').val('fa').trigger('change');
	// 	console.log("fa");
	//   }else if (trans == 'pt') {
	// 	$('#google_translate_element').val('pt').trigger('change');
	// 	console.log("pt");
	//   }else if (trans == 'fr') {
	// 	$('#google_translate_element').val('fr').trigger('change');
	// 	console.log("fr");
	//   }else if (trans == 'fi') {
	// 	$('#google_translate_element').val('fi').trigger('change');
	// 	console.log("fi");
	//   }else if (trans == 'hu') {
	// 	$('#google_translate_element').val('hu').trigger('change');
	// 	console.log("hu");
	//   }else if (trans == 'hi') {
	// 	$('#google_translate_element').val('hi').trigger('change');
	// 	console.log("hi");
	//   }else if (trans == 'ko') {
	// 	$(location).attr("href",'https://bryonsilver.github.io/ON_Hospital/on_hospital/index.html?trans=ko');	
	//   }

	$('#google_translate_element').off("change").on('change' , function(){
		if (document.getElementsByClassName('goog-te-combo')[0].selectedOptions[0].value === 'ko') {
			console.log("한국어 입니다~ ㅎㅎㅎ ")
			$(location).attr("href",'https://bryonsilver.github.io/ON_Hospital/on_hospital/index.html?trans=ko');	
		}
	});


	
   
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
			$('.nav_pan_box').css({height: "450px"})
		})
		$('.nav_3').hover(function(){
			$('.nav_pan_box').css({height: "130px"})
		})
		$('.nav_4').hover(function(){
			$('.nav_pan_box').css({height: "0px"})
		})
		$('.nav_5').hover(function(){
			$('.nav_pan_box').css({height: "200px"})
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