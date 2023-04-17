$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const cen2_v = urlParams.get('cen2_v');
    const item = urlParams.get('item');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(cen2_v)
    console.log(item)

    if (item == 0) {
        $('#selec0').prop("selected", true);
        $('.pm_1').addClass('active')
        $('.canc_1').addClass('nav_active')
    } else if (item == 1) {
        $('#selec1').prop("selected", true);
        $('.pm_2').addClass('active')
        $('.canc_2').addClass('nav_active')
    } else if (item == 2) {
        $('#selec2').prop("selected", true);
        $('.pm_3').addClass('active')
        $('.canc_3').addClass('nav_active')
    } else if (item == 3) {
        $('#selec3').prop("selected", true);
        $('.pm_4').addClass('active')
        $('.canc_4').addClass('nav_active')
    } else if (item == 4) {
        $('#selec4').prop("selected", true);
        $('.pm_5').addClass('active')
        $('.canc_5').addClass('nav_active')
    } else if (item == 5) {
        $('#selec5').prop("selected", true);
        $('.pm_6').addClass('active')
        $('.canc_6').addClass('nav_active')
    } else if (item == 6) {
        $('#selec6').prop("selected", true);
        $('.pm_7').addClass('active')
        $('.canc_7').addClass('nav_active')
    } else if (item == 7) {
        $('#selec7').prop("selected", true);
        $('.pm_8').addClass('active')
        $('.canc_8').addClass('nav_active')
    } 

    for(let i=0; i<1; i++) {
        let cent2_list = `
        <div class="m_r_content_box">
            <div class="mr_title">
                <h1 class="title_box">`
                for(let j=0; j<1; j++) {
        cent2_list += `<div class="img_box"><img src="./img/common/title_icon2.png" alt="title_icon" class="title_icon"></div> 
                        ${HOSPI_TITLE[0][item].title}`
                }  
     cent2_list += `</h1>
            </div>
            <div class="mr_img">
                <div class="box_img cen2_${cen2_v}"></div>
            </div>
            <div class="mr_content">
                <div class="mr_c_box">
                    <div class="mr_c_title">${CENT_LIST[0][cen2_v].sub_title}</div>
                    <div class="mr_c_content">
                        <span>${CENT_LIST[0][cen2_v].sub_context1}</span>
                    </div>
                </div>`
                // `<div class="mr_c_box">
                //     <div class="mr_title">센터 의료진 소개</div>
                //     <div class="mr_cb_content">`
                //     for(let j=0; j<CENT_TITLE[0][cen2_v].cent_doc.length; j++) {
                //         `<div class="mr_doc_n">
                //             <a href="#">${CENT_LIST[0][cen2_v].cent_doc[j]}</a>
                //         </div>`
                //     }
        cent2_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent2_list);
    }



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