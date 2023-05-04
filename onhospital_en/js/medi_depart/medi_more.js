$(document).ready(function(){
    $('.mv_li').click(function(){
        $('.mv_li').removeClass('active')
        $(this).addClass('active')
    })

    


    const urlParams = new URL(location.href).searchParams;
    const cate = urlParams.get('cate');
    console.log('cate',cate)
    const item = urlParams.get('item');
    console.log('item',item)

    var item_n = item-1;
    console.log('item_n', item_n)


    for(let i=0; i<1; i++) {
        let list = `
                            <div>
                                <div class="content_box">
                                    <div class="top_center_box">
                                        <div class="tc_backgrounc_c">
                                            <div class="tc_container">
                                                <div class="c_left_box">
                                                    <div class="l_img_box">
                                                        <img src="./img/medi_details/ilove_img/${DOCTOR[cate][item_n].img_src}.png" alt="d_${DOCTOR[cate][item_n].img_src}_img" class="l_img">
                                                    </div>
                                                </div>

                                                <div class="doctor_ext">
                                                    <div class="doctor_name_box">
                                                        <div class="doctor_name">${DOCTOR[cate][item_n].name}</div>
                                                        <div class="doctoer_field">${DOCTOR[cate][item_n].medi_con}</div>
                                                    </div>
                                                    <div class="doctor_field_box">
                                                        <div>Main Career</div>
                                                        <div class="doc_field_text">
                                                            <span>${DOCTOR[cate][item_n].one_speci_con}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="doctor_field_box">
                                                        <div>SPECIALTY</div>
                                                        <div class="doc_field_text">`
                                                        for(let j=0; j<DOCTOR[cate][item_n].professional.length; j++) {
                                                            list +=`<span>${DOCTOR[cate][item_n].professional[j]}</span>`
                                                        }
                                                    list +=`</div>
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
                                                                    for(let j=0; j<DOCTOR[cate][item_n].morn_color.length; j++) {
                                                                    list +=`<td>
                                                                            <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>`
                                                                    }
                                                                list +=`</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="t_bg_light">PM</th>`
                                                                    for(let j=0; j<DOCTOR[cate][item_n].afte_color.length; j++) {
                                                                    list +=`<td>
                                                                            <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>`
                                                                    }
                                                                list +=`</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="t_bg_light">Note</th>`
                                                                        if(DOCTOR[cate][item_n].note != null) {
                                                                        list +=`<td class="text_left" colspan="6">${DOCTOR[cate][item_n].note}</td>`
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
                                                                <div class="circle cir_success"></div>
                                                                <span class="text_success">Inquiry</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="container c_right_box">
                                        <div class="doctor_ext_2">
                                            <div class="doctor_name_box">
                                                <div class="doctor_name">${DOCTOR[cate][item_n].name}</div>
                                                <div class="doctoer_field">${DOCTOR[cate][item_n].medi_con}</div>
                                            </div>
                                            <div class="doctor_field_box">
                                                <div>Main Career</div>
                                                <div class="doc_field_text">
                                                    <span>${DOCTOR[cate][item_n].one_speci_con}</span>
                                                </div>
                                            </div>
                                            <div class="doctor_field_box">
                                                <div>SPECIALTY</div>
                                                <div class="doc_field_text doc_f_t">`
                                                for(let j=0; j<DOCTOR[cate][item_n].professional.length; j++) {
                                                    list +=`<span><span class="doc_comma"></span>${DOCTOR[cate][item_n].professional[j]}</span>`
                                                }
                                        list +=`</div>
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
                                                            for(let j=0; j<DOCTOR[cate][item_n].morn_color.length; j++) {
                                                            list +=`<td>
                                                                    <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>`
                                                            }
                                                        list +=`</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="t_bg_light">PM</th>`
                                                            for(let j=0; j<DOCTOR[cate][item_n].afte_color.length; j++) {
                                                            list +=`<td>
                                                                    <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>`
                                                            }
                                                        list +=`</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="t_bg_light">Note</th>`
                                                                if(DOCTOR[cate][item_n].note != null) {
                                                                list +=`<td class="text_left" colspan="6">${DOCTOR[cate][item_n].note}</td>`
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
                                        </div>`
                                    if(DOCTOR[cate][item_n].ifram_src != null) {
                                list += `<div class="c_top_btn_box">
                                            <span class="ct_introduce_btn c_top_btn_active">
                                                <span class="ct_top_after"></span>
                                                <span>INTRODUCTION</span>
                                            </span>
                                            <span class="ct_tv_box">
                                                <span class="ct_top_after"></span>
                                                <span>TV Video</span>
                                            </span>
                                        </div>`
                                    }
                                    else {
                                list += `<div class="c_top_btn_box none_span_iframe">
                                            <span class="ct_introduce_btn c_top_btn_active">
                                                <span class="ct_top_after"></span>
                                                <span>INTRODUCTION</span>
                                            </span>
                                        </div>`
                                    }
                                        
                                list +=`<div class="c_bottom_content_box">
                                            <div class="cb_common_box cb_1">
                                                
                                                
                                                <div class="cbc_con cbc_1_3">
                                                    <div class="cbc_title_box">
                                                        <span>
                                                            <img src="./img/medi_details/icon/medi_more_3.png" alt="">
                                                        </span>
                                                        <span>Society Activities</span>
                                                    </div>
                                                    <div class="cbc_con_box">
                                                        <div class="cbc_pan">`
                                                            for(let j=0; j<DOCTOR[cate][item_n].activity.length; j++) {
                                                                list +=`<span>${DOCTOR[cate][item_n].activity[j]}</span>`
                                                            }
                                                list += `</div>
                                                    </div>
                                                </div>
                                                <div class="cbc_con cbc_1_2">
                                                    <div class="cbc_title_box">
                                                        <span>
                                                            <img src="./img/medi_details/icon/medi_more_4.png" alt="">
                                                        </span>
                                                        <span>Brief History</span>
                                                    </div>
                                                    <div class="cbc_con_box">
                                                        <div class="cbc_pan pan1">`
                                                            for(let j=0; j<DOCTOR[cate][item_n].phamacology.length; j++) {
                                                                list +=`<span>${DOCTOR[cate][item_n].phamacology[j]}</span>`
                                                            }
                                                list += `</div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>`
                                        if(DOCTOR[cate][item_n].ifram_src != null) {
                                    list += ` <div class="cb_common_box cb_2">
                                                <div class="cbc_con cbc_2_1">
                                                    <div class="cbc_con_box">
                                                        <iframe src="${DOCTOR[cate][item_n].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>`
                                        }
                                        else {
                                    list += `<div class="cb_common_box cb_2 none"></div>`
                                        }
                                    
                                list += `</div>
                                </div>
                            </div>`;


        $('.one_doctor_box').append(list);
        console.log(10)
    }


    $('.ct_introduce_btn .ct_top_after').css({display: 'inline-block'})
    $('.ct_tv_box').click(function(){
        $('.ct_tv_box').addClass('c_top_btn_active')
        $('.ct_introduce_btn').removeClass('c_top_btn_active')

        $('.ct_tv_box .ct_top_after').css({display: 'inline-block'})
        $('.ct_introduce_btn .ct_top_after').css({display: 'none'})

        $('.cb_1').css({display:'none'})
        $('.cb_2').css({display:'block'})
        $('.cbc_con').css({maxWidth:'100%'})
    })
    $('.ct_introduce_btn').click(function(){
        $('.ct_introduce_btn').addClass('c_top_btn_active')
        $('.ct_tv_box').removeClass('c_top_btn_active')

        $('.ct_tv_box .ct_top_after').css({display: 'none'})
        $('.ct_introduce_btn .ct_top_after').css({display: 'inline-block'})

        $('.cb_2').css({display:'none'})
        $('.cb_1').css({display:'grid'})
        $('.cbc_con').css({maxWidth:'90%'})
    })


    
    // for(let i=0; i<1; i++) {
    //     let more_list = `<a href="./medi_detail.html?value=${cate}" class="rounded">돌아가기</a>`
    //     $('.back_btn').append(more_list);
    //     console.log('back_btn', 'cate = value', cate)
    // }



    $('.m2').css({borderBottom:'1px solid #dee2e6'})
    $('.m3').css({borderBottom:'1px solid #dee2e6'})
    $('#home_tab').click(function(){
        $('.pan1').addClass('block')
        $('.tab_pan').not('.pan1').removeClass('block')
        $('.m1').css({
            border: '1px solid #dee2e6',
            borderBottom: '1px solid #fff',
            fontWeight: 'bold',
            color:'rgb(29,90,40)'
        })
        $('.mv_li').not('.m1').css({
            border:'1px solid #fff',
            borderBottom: '1px solid #dee2e6',
            color:'#0d6efd',
            fontWeight:'400'
        })
    })
    $('#profile_tab').click(function(){
        $('.pan1').addClass('none')
        $('.pan2').addClass('block')
        $('.tab_pan').not('.pan2').removeClass('block')

        $('.m2').css({
            border: '1px solid #dee2e6',
            borderBottom: '1px solid #fff',
            fontWeight: 'bold',
            color:'rgb(29,90,40)'
        })
        $('.mv_li').not('.m2').css({
            border:'1px solid #fff',
            borderBottom: '1px solid #dee2e6',
            color:'#0d6efd',
            fontWeight:'400'
        })
    })
    $('#contact_tab').click(function(){
        $('.pan1').addClass('none')
        $('.pan3').addClass('block')
        $('.tab_pan').not('.pan3').removeClass('block')

        $('.m3').css({
            border: '1px solid #dee2e6',
            borderBottom: '1px solid #fff',
            fontWeight: 'bold',
            color:'rgb(29,90,40)'
        })
        $('.mv_li').not('.m3').css({
            border:'1px solid #fff',
            borderBottom: '1px solid #dee2e6',
            color:'#0d6efd',
            fontWeight:'400'
        })
    })


    
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