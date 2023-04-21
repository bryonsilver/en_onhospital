$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    const value = urlParams.get('value');
    console.log(value)
    const item = urlParams.get('item');
    console.log(item)
    
    
     var $el = $('#quick');
        var $window = $(window);
        var top = 80; //header 높이
        
         
        
        $window.bind("scroll resize", function() {
            var offset = $("body #container:first-child").offset;
            var visibleRight = offset.left + 990;	
            var gap = $window.height() - $el.height() ;
            var visibleFoot = 234 - ($(window).scrollTop() + $(window).height());
            var scrollTop = $window.scrollTop();
    
            console.log(scrollTop+"/"+top);
            
           
    
            
            if (scrollTop > top) {
                $el.css({
                    top: (scrollTop -top + 80) + "px",
                    bottom: "auto"
                });
            } else if (visibleFoot > gap) {
                $el.css({
                    top: "auto",
                    bottom: visibleFoot + "px"
                });
            } else {
                $el.css({
                    top:30,
                    bottom: "auto"
                });
            }
        }).scroll();
    
    
    
        for(let i=0; i<1; i++) {
            let list2_alpha =`<img src="./img/common/medi_bg_m_2.png" class="mobile_onn2">
                            <img src="./img/common/medi_bg.png" class="desk_onn">
                            <img src="./img/common/medi_bg_m.png" class="mobile_onn">
                        <div class="onn_desk_title">
                            <div class="title_box_onn">
                                <span class="icon_title"><img src="./img/medi_details/icon/${DOC_ICON[0][item].icon_src}.png" alt=""></span>
                                <h4>${DOC_TITLE[0][value].title}</h4>
                            </div>
                            <div class="content_box_onn">
                                <span>${DOC_TITLE[0][value].content}</span>
                            </div>
                        </div>
            `
            $('.top_title_box_2').append(list2_alpha);                    
        }

        for(let i=0; i<DOCTOR[value].length; i++) {
            let list = `
                            <div>
                                <div class="content_box">
                                    <div class="c_left_box">
                                        <div class="l_img_box"><img src="./img/medi_details/${DOCTOR[value][i].img_src}.jpg" alt="d_${DOCTOR[value][i].img_src}_img" class="l_img"></div>
                                    </div>
                                    <div class="c_right_box">
                                        <div class="list_div cr_top_box">
                                            <ul class="list_ul">
                                                <li class="list_li">
                                                    <span class="name_li">${DOCTOR[value][i].name}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>Department</span>
                                                    <span class="li_span">${DOCTOR[value][i].medi_con}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>Main Career</span>
                                                    <span class="li_span">${DOCTOR[value][i].medi_his_con}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>Specialty</span>
                                                    <span class="li_span">${DOCTOR[value][i].one_speci_con}</span>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                        <div class="cr_bottom_box">
                                            <div class="cr_bot">
                                                <table class="bottom_table">
                                                    <thead class="t_bg_light">
                                                        <th></th>
                                                        <th>Mon</th>
                                                        <th>Tue</th>
                                                        <th>Wed</th>
                                                        <th>Thur</th>
                                                        <th>Fri</th>
                                                        <th>Sat</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th class="t_bg_light">AM</th>`
                                                        for(let j=0; j<DOCTOR[value][i].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[value][i].morn_color[j]}"></span></div>
                                                                <div>${DOCTOR[value][i].morn_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">PM</th>`
                                                        for(let j=0; j<DOCTOR[value][i].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[value][i].afte_color[j]}"></span></div>
                                                                <div>${DOCTOR[value][i].afte_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">Note</th>`
                                                            if(DOCTOR[value][i].note != null) {
                                                            list +=`<td class="text_left" colspan="6">${DOCTOR[value][i].note}</td>`
                                                            } else{
                                                            list +=`<td class="text_left" colspan="6"></td>`
                                                            }
                                                list +=`</tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="text_ex_box">
                                                <span>
                                                    <div class="circle cir_primary"></div>
                                                    <span class="text_primary">Medical Treatment</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_danger"></div>
                                                    <span class="text_danger">Surgery/Test</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_intensive_care_unit"></div>
                                                    <span class="text_intensive_care_unit">Intensive Care Unit (ICU)</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_success"></div>
                                                    <span class="text_success">Inquiry</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="l_more_btn">
                                            <a href="./medi_more.html?cate=${DOCTOR[value][i].cate_no}&item=${DOCTOR[value][i].item_no}" class="more_btn">See More</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            `
    
            $('.one_doctor_box').append(list);
            console.log(10)
        }
       
    
        for(let i=0; i<DOCTOR[value].length; i++) {
                list_2 = `  
                            <div class="odb_box">
                                <div class="odb_outbox out_${DOCTOR[value][i].img_src}">
                                    <span class="odb_img_box">
                                        <img src="./img/medi_details/${DOCTOR[value][i].img_src}.jpg" alt="odb_img d_${DOCTOR[value][i].img_src}_img" class="odb_img">
                                    </span>
                                    <div class="odb_text_box">
                                        <div class="odb_name">${DOCTOR[value][i].name}</div>
                                        <div class="odb_pro">
                                            <span>${DOCTOR[value][i].one_speci_con}</span>
                                            <span class="more_btn">more</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="odb_innerbox in_${DOCTOR[value][i].img_src}">
                                    <div class="ob_in_text_box">
                                        <span class="obin_x">X</span>
                                        <div class="ob_in_flex">
                                            <div class="ob_in_name">${DOCTOR[value][i].name}</div>
                                            <div class="ob_in_pro">
                                            ${DOCTOR[value][i].one_speci_con}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ob_in_but_box">
                                        <a href="./medi_more.html?cate=${DOCTOR[value][i].cate_no}&item=${DOCTOR[value][i].item_no}">
                                            <img src="./img/medi_details/doctor_w.png" alt="">
                                            <span>Introduction of medical staff</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            
                            `;
                            
            // $('.one_doc_box_grid').append(list_2);
        }
    

        // $(document).on('click','.more_btn', function(e){   
        //     e.preventDefault();
        //     $(this).parents('.odb_outbox').css({display: 'none'})
        //     $(this).parents('.odb_outbox').siblings('.odb_innerbox').css({display: 'flex'})
        //     console.log('되냐?')
        // } )
        // $(document).on('click','.obin_x', function(e){   
        //     e.preventDefault();
        //     $(this).parents('.odb_innerbox').css({display: 'none'})
        //     $(this).parents('.odb_innerbox').siblings('.odb_outbox').css({display: 'flex'})
        //     console.log('되냐?')
        // } )
        // $('.more_btn').click(function(){
        //     $('.odb_innerbox').css({display: 'flex'})
        //     $('.odb_outbox').css({display: 'none'})
        // })
        // $('.obin_x').click(function(){
        //     $('.odb_innerbox').css({display: 'none'})
        //     $('.odb_outbox').css({display: 'flex'})
        // })
    
        //<iframe src="${DOCTOR[0][i].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
        
        // <h2 class="top_title">${DOC_TITLE[0][value].title}</h2>
        //                     <div class="top_content">${DOC_TITLE[0][value].content}</div>
    

        $('.back_btn').click(function(){
            history.go(-1);
            //뒤로 가는 기능 , 전페이지로 이동
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