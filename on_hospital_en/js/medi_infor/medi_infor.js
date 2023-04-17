$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.pm_1').addClass('active')
        $('.medi_infor_1').addClass('nav_active')
        $('.n_pan_1 .dep2_li:nth-of-type(2) .dep2_a').css({color: '#ee791c'})
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.pm_2').addClass('active')
        $('.medi_infor_2').addClass('nav_active')
        $('.n_pan_1 .dep2_li:nth-of-type(3) .dep2_a').css({color: '#ee791c'})
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.pm_3').addClass('active')
        $('.medi_infor_3').addClass('nav_active')
        $('.n_pan_1 .dep2_li:nth-of-type(4) .dep2_a').css({color: '#ee791c'})
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.pm_4').addClass('active')
        $('.medi_infor_4').addClass('nav_active')
        $('.n_pan_1 .dep2_li:nth-of-type(5) .dep2_a').css({color: '#ee791c'})
    }
    else if (num == 5) {
        $('#selec4').prop("selected", true);
        $('.pm_5').addClass('active')
        $('.medi_infor_5').addClass('nav_active')
        $('.dm_1').css({color: '#ee791c'})
    }
    else if (num == 6) {
        $('#selec5').prop("selected", true);
        $('.pm_6').addClass('active')
        $('.medi_infor_6').addClass('nav_active')
        $('.dm_6').css({color: '#ee791c'})
    }

    // let data = INFOR_LIST[0];
    // for(let i=0; i<1; i++){
    //     let infor_list = `
    //                         <div class="mr_title">
    //                             <h1 class="title_box">
    //                                 <div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div>
    //                                 <span>${data[num].title}</span>
    //                             </h1>
    //                         </div>

    //                         <div class="mr_content">
    //                             <div class="mr_c_title">${data[num].sub_title}</div>

    //                             <div class="mr_c_img"></div>
    //                             <div class="mr_c_first_content">
    //                                 <p>${data[num].content_name}</p>`
    //                                 for(let j=0; j<data[num].content.length; j++) {
    //                      infor_list += `<p>
    //                                         ${data[num].content[j]}
    //                                     </p>`
    //                                 }
    //                    infor_list += `</div>
    //                         </div>
    //                         `
    //     $('.m_content_box').append(infor_list)
    // }


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