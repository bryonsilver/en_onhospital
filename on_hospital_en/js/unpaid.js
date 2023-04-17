$(document).ready(function(){

	const urlParams = new URL(location.href).searchParams;
	const selec = urlParams.get('selec');
	console.log('selec',selec)

    $(window).resize(function(){
        // var alert_ck= false;
		var width = window.innerWidth;
		if(width < 1150){
			$('.danger').css({opacity:'1'})
            alert('모바일에서는 보기 어려움으로 모니터화면으로 봐주시기 바랍니다.')
            // alert_ck= ture; 
			// ture false 하면 햄버거 MENU까지 안먹히게 됨... 방법 모색....
		}
	}).resize();


	// if($('.carousel_txt').length) {
   //     console.log(1)
              
   //     $(window).on('scroll', function() {
   //         if ($(window).scrollTop() >= 500) {
   //             $('#quick').attr('style', 'top:130px !important');
   //         } else {
    //            $('#quick').attr('style', 'top:837px !important');
    //        }
    //    })
   //  } else {console.log('false')}


   
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