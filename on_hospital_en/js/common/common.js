// if(location.href.indexOf('https://bryonsilver.github.io/en_on_hospital/on_hospital_en/index.html') > -1){ // location.href 로 현재 페이지 주소를 가져옵니다.
// 	$('#google_translate_element').val('en').trigger('change');
// 	console.log("영어판 링크얏!!")
// }

	  // 한국어판에서 번역기 클릭 시 영어판으로 와서 클릭한 언어로 번역기 돌리기!

	  $(".goog-te-combo").val('en').trigger('change');
	  
	
	  
	
	  
$(document).ready(function(){

	

	const urlParams = new URL(location.href).searchParams;
    const trans = urlParams.get('trans');
    console.log('trans',trans)
	// $(".width").append("<div style='font-size:30px; color: red; font-weight: bolder' class='width_hello'>Hello</div>");

	// setTimeout(function(){
	// 	$(".width").append("<div style='font-size:30px; color: blue; font-weight: bolder' class='width_hello'>Hello</div>");
	// },800)
	// setTimeout(function(){
	// 	if($('div').hasClass("width_hello")) {
	// 		alert("으아아앙 이건 되냐??!")
	// 	}
	// }, 1000)

	// setTimeout(function(){
	// 	if ($('select').hasClass("goog-te-combo")) {
	// 		console.log("있음!! ")
	// 		$('.nav_4').css({backgroundColor: 'blue'})
	// 		alert("nav_4 아리요")
	// 		setTimeout(function(){
	// 			$('.nav_4').css({backgroundColor: 'red'})
	// 			alert("nav_4 납시오오오오오오ㅗ오오ㅗㅇ")
	// 		}, 600)
	// 	}
	// }, 1000)

	
	setTimeout(function(){
		if($('select').hasClass("goog-te-combo")) {
			console.log("있음!! ")
			$('.nav_4').css({backgroundColor: 'blue'})
			alert("nav_4 아리요")
			// setTimeout(function(){
			// 	$('.nav_4').css({backgroundColor: 'red'})
			// 	alert("nav_4 납시오오오오오오ㅗ오오ㅗㅇ")
			// }, 600)
	
			if (trans == 'el') {
				//*[@id=":0.targetLanguage"]/select/option[3]
				$(".goog-te-combo").val('el').trigger('change');
				alert("el");
			}
			else if (trans == 'nl') {
				$(".goog-te-combo").val('nl').trigger('change');
				alert("nl");
			}
			else if (trans == 'no') {
				$(".goog-te-combo").val('no').trigger('change');
				alert("no");
			}
			else if (trans == 'da') {
				$(".goog-te-combo").val('da').trigger('change');
				alert("da");
			}
			else if (trans == 'de') {
				$(".goog-te-combo").val('de').trigger('change');
				alert("de");
			}
			else if (trans == 'ru') {
				$(".goog-te-combo").val('ru').trigger('change');
				alert("ru");
			}
			else if (trans == 'ro') {
				$(".goog-te-combo").val('ro').trigger('change');
				alert("ro");
			}
			else if (trans == 'mk') {
				$(".goog-te-combo").val('mk').trigger('change');
				alert("mk");
			}
			else if (trans == 'ms') {
				$(".goog-te-combo").val('ms').trigger('change');
				alert("ms");
			}
			else if (trans == 'mn') {
				$(".goog-te-combo").val('mn').trigger('change');
				alert("mn");
			}
			 else if (trans == 'vi') {
				$(".goog-te-combo").val('vi').trigger('change');
				alert("vi");
			} else if (trans == 'bg') {
				$(".goog-te-combo").val('bg').trigger('change');
				alert("bg");
			}
			else if (trans == 'sv') {
				$(".goog-te-combo").val('sv').trigger('change');
				alert("sv");
			}
			else if (trans == 'es') {
				$(".goog-te-combo").val('es').trigger('change');
				alert("es");
			}
			else if (trans == 'ar') {
				$(".goog-te-combo").val('ar').trigger('change');
				alert("ar");
			}
			else if (trans == 'af') {
				$(".goog-te-combo").val('af').trigger('change');
				alert("af");
			}
			else if (trans == 'sq') {
				$(".goog-te-combo").val('sq').trigger('change');
				alert("sq");
			}
			else if (trans == 'et') {
				$(".goog-te-combo").val('et').trigger('change');
				alert("et");
			}
			else if (trans == 'en') {
				$(".goog-te-combo").val('en').trigger('change');
				alert("en");
			}
			else if (trans == 'uz') {
				$(".goog-te-combo").val('uz').trigger('change');
				alert("uz");
			}
			else if (trans == 'uk') {
				$(".goog-te-combo").val('uk').trigger('change');
				alert("uk");
			}
			else if (trans == 'it') {
				$(".goog-te-combo").val('it').trigger('change');
				alert("it");
			}
			else if (trans == 'id') {
				$(".goog-te-combo").val('id').trigger('change');
				alert("id");
			}
			else if (trans == 'ja') {
				$(".goog-te-combo").val('ja').trigger('change');
				alert("ja");
			}
			else if (trans == 'zh-CN') {
				$(".goog-te-combo").val('zh-CN').trigger('change');
				alert("zh-CN");
			}
			else if (trans == 'zh-TW') {
				$(".goog-te-combo").val('zh-TW').trigger('change');
				alert("zh-TW");
			}
			else if (trans == 'cs') {
				$(".goog-te-combo").val('cs').trigger('change');
				alert("cs");
			}
			else if (trans == 'hr') {
				$(".goog-te-combo").val('hr').trigger('change');
				alert("hr");
			}
			else if (trans == 'th') {
				$(".goog-te-combo").val('th').trigger('change');
				alert("th");
			}
			else if (trans == 'fa') {
				$(".goog-te-combo").val('fa').trigger('change');
				alert("fa");
			}
			else if (trans == 'pt') {
				$(".goog-te-combo").val('pt').trigger('change');
				alert("pt");
			}
			else if (trans == 'fr') {
				$(".goog-te-combo").val('fr').trigger('change');
				alert("fr");
			}
			else if (trans == 'fi') {
				$(".goog-te-combo").val('fi').trigger('change');
				alert("fi");
			}
			else if (trans == 'hu') {
				$(".goog-te-combo").val('hu').trigger('change');
				alert("hu");
			}
			else if (trans == 'hi') {
				$(".goog-te-combo").val('hi').trigger('change');
				alert("hi");
			}
	
		}
	}, 1000)

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