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
                                                        <div>Medical Field</div>
                                                        <div class="doc_field_text">
                                                            <span>${DOCTOR[cate][item_n].one_speci_con}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="doctor_field_box">
                                                        <div>SPECIALTY</div>
                                                        <div class="doc_field_text">`
                                                        for(let j=0; j<DOCTOR[cate][i].professional.length; j++) {
                                                            list +=`<span>${DOCTOR[cate][i].professional[j]}</span>`
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
                                                                    for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                                    list +=`<td>
                                                                            <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>
                                                                            <div>${DOCTOR[cate][item_n].morn_schedule[j]}</div>`
                                                                    }
                                                                list +=`</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th class="t_bg_light">PM</th>`
                                                                    for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                                    list +=`<td>
                                                                            <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>
                                                                            <div>${DOCTOR[cate][item_n].afte_schedule[j]}</div>`
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
                                                <div>Medical Field</div>
                                                <div class="doc_field_text">
                                                    <span>${DOCTOR[cate][item_n].one_speci_con}</span>
                                                </div>
                                            </div>
                                            <div class="doctor_field_box">
                                                <div>SPECIALTY</div>
                                                <div class="doc_field_text doc_f_t">`
                                                for(let j=0; j<DOCTOR[cate][i].professional.length; j++) {
                                                    list +=`<span><span class="doc_comma"></span>${DOCTOR[cate][i].professional[j]}</span>`
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
                                                            for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                            list +=`<td>
                                                                    <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>
                                                                    <div>${DOCTOR[cate][item_n].morn_schedule[j]}</div>`
                                                            }
                                                        list +=`</td>
                                                            </tr>
                                                            <tr>
                                                                <th class="t_bg_light">PM</th>`
                                                            for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                            list +=`<td>
                                                                    <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>
                                                                    <div>${DOCTOR[cate][item_n].afte_schedule[j]}</div>`
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


    for(let i=0; i<1; i++) {
        let list = `
                            <div>
                                <div class="content_box">
                                    <div class="c_left_box">
                                        <div class="l_img_box">
                                            <img src="./img/medi_details/${DOCTOR[cate][item_n].img_src}.jpg" alt="d_${DOCTOR[cate][item_n].img_src}_img" class="l_img">
                                            <div class="doctor_name_box">
                                                <div class="doctor_name">${DOCTOR[cate][item_n].name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c_right_box">
                                        <div class="cr_top_box">
                                            <dl class="top_dl">
                                                <div class="cr_dd">
                                                    <dt class="top_first"><b>DEPARTMENT</b></dt>
                                                    <dd class="top_con">${DOCTOR[cate][item_n].medi_con}</dd>

                                                    <dt class="top_first"><b>대표약력</b></dt>
                                                    <dd class="top_con text_danger">${DOCTOR[cate][item_n].medi_his_con}</dd>
                                                </div>

                                                <div class="cr_dd2">
                                                    <dt class="top_first"><b>SPECIALTY</b></dt>
                                                    <dd class="top_con width">${DOCTOR[cate][item_n].one_speci_con}</dd>
                                                </div>
                                            </dl>
                                        </div>`
                                        if(DOCTOR[cate][item_n].ifram_src != null) {
                                        list += `<div class="cr_center_box">
                                                    <iframe src="${DOCTOR[cate][item_n].ifram_src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>`
                                        } 
                                        else if(DOCTOR[cate][item_n].ifram_src = null) {
                                        list += `<div class="cr_center_box"><img src="../img/common/sorry.png" alt="" class="sorry_img"></div>`
                                        }
                                list += `<div class="cr_bottom_box">
                                            <div class="cr_bot">
                                                <table class="bottom_table">
                                                    <thead class="t_bg_light">
                                                        <th></th>
                                                        <th>월</th>
                                                        <th>화</th>
                                                        <th>수</th>
                                                        <th>목</th>
                                                        <th>금</th>
                                                        <th>토</th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th class="t_bg_light">AM</th>`
                                                        for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[cate][item_n].morn_color[j]}"></span></div>
                                                                <div>${DOCTOR[cate][item_n].morn_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">오후</th>`
                                                        for(let j=0; j<DOCTOR[cate][item_n].morn_schedule.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[cate][item_n].afte_color[j]}"></span></div>
                                                                <div>${DOCTOR[cate][item_n].afte_schedule[j]}</div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">비고</th>`
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
                                                    <span class="text_primary">진료</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_danger"></div>
                                                    <span class="text_danger">수술/검사</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_success"></div>
                                                    <span class="text_success">문의</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;


        // $('.one_doctor_box').append(list);
        console.log(10)
    }

    for(let i=0; i<1; i++) {
        let list = `
                    <div class="container">
                        <ul class="mv_ul">
                            <li class="mv_li active"><a href="#home" id="home_tab" class="mv_link">약력</a></li>
                            <li class="mv_li"><a href="#profile" id="profile_tab" class="mv_link">학회활동</a></li>
                            <li class="mv_li"><a href="#contact" id="contact_tab" class="mv_link">SPECIALTY</a></li>
                        </ul>
                        <div class="mv_content_box">
                            <div class="tab_pan pan1">
                                <span>- 한양대학교 의과대학 졸업</span>
                                <span>- 연세대학교 의과대학 의학박사</span>
                                <span>- Former Medical Specialist, Seoul Asan Hospital</span>
                                <span>- 미국 피츠버그대학병원 연수의</span>
                                <span>- 미국 메이요병원 연수의</span>
                                <span>- 서울아산병원 간담도췌SURGERY 교수</span>
                                <span>- SURGERY전문의고시출제위원</span>
                                <span>- 마르퀴즈후즈후 세계인명사전 등재</span>
                                <span>- 서울아산병원 이메디팀 담당교수</span>
                                <span>- 서울아산병원 국제진료센터 외국인진료 담당교수</span>
                                <span>- 서울아산병원 간담도췌장SURGERY 과장</span>
                                <span>- 누적SURGERY수술 1만례 달성</span>
                            </div>
                            <div class="tab_pan pan2">
                                <span>- SCI급 국제학술지 147편 저자 및 공저자</span>
                                <span>- SURGERY술기교과서 공저자</span>
                                <span>- NECROX 신약개발/공동개발자(LG생명과학)</span>
                            </div>
                            <div class="tab_pan pan3">
                                <span>- 간담도췌장SURGERY</span>
                                <span>- SURGERY영역 중 가장 어려운 분야인 간, 담도계, 쓸개, 췌장 및 비장등의 장기에 발생하는 질환을 치료</span>
                            </div>
                        </div>
                    </div>`;


        // $('.more_view_box').append(list);
        console.log('more_view_box')
    }
    
    // for(let i=0; i<1; i++) {
    //     let more_list = `<a href="./medi_detail.html?value=${cate}" class="rounded">돌아가기</a>`
    //     $('.back_btn').append(more_list);
    //     console.log('back_btn', 'cate = value', cate)
    // }

    for(let i=0; i<1; i++) {
        let list3 =`    <div class="container">
                            <ul class="mv_ul">
                                <li class="mv_li active m1"><a href="#home" id="home_tab" class="mv_link">약력</a></li>
                                <li class="mv_li m2"><a href="#profile" id="profile_tab" class="mv_link">학회활동</a></li>
                                <li class="mv_li m3"><a href="#contact" id="contact_tab" class="mv_link">SPECIALTY</a></li>
                            </ul>
                            <div class="mv_content_box">
                                <div class="tab_pan pan1">`
                                    for(let j=0; j<DOCTOR[cate][i].phamacology.length; j++) {
                                        list3 +=`<span>${DOCTOR[cate][i].phamacology[j]}</span>`
                                    }
                      list3 += `</div>
                                <div class="tab_pan pan2">`
                                    for(let j=0; j<DOCTOR[cate][i].activity.length; j++) {
                                        list3 +=`<span>${DOCTOR[cate][i].activity[j]}</span>`
                                    }
                     list3 += `</div>
                                <div class="tab_pan pan3">`
                                    for(let j=0; j<DOCTOR[cate][i].professional.length; j++) {
                                        list3 +=`<span>${DOCTOR[cate][i].professional[j]}</span>`
                                    }
                     list3 += `</div>
                            </div>
                        </div>`
        // $('.more_view_box').append(list3);     
        console.log('안되냐? 약력 등')               
    }


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