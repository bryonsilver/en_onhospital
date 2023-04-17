$(document).ready(function(){
    $('#selec3').prop("selected", true);
    $('.ms_b_1').click(function(){
        $(this).css({
            background:'#ee791c',
            color: '#fff',
            border:'1px solid transparent',
        })
        $('.described').css({color:'#666'})
        $('.ms_b_2').css({
            background:'transparent',
            color: '#333',
            border:'1px solid #ee791c',
        })

        $('.ms_f_1').css({display:'block'})
        $('.ms_f_2').css({display:'none'})
    })
    $('.ms_b_2').click(function(){
        $(this).css({
            background:'#ee791c',
            color: '#fff',
            border:'1px solid transparent',
        })
        $('.described').css({color:'#fff'})
        $('.ms_b_1').css({
            background:'transparent',
            color: '#333',
            border:'1px solid #ee791c',
        })

        $('.ms_f_1').css({display:'none'})
        $('.ms_f_2').css({display:'block'})
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