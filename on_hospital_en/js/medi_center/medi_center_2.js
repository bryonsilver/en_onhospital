$(document).ready(function(){
    $('#select_id').click(function(){
        $(this).css({boxShadow: '0 0 0 5px #007eeb4d'})
    })

    $('html').click(function(e) {   
        if(!$(e.target).hasClass("select_class")) {
            $('#select_id').css({boxShadow: '0 0 0 0px #007eeb4d'})
        }
    });   


    const urlParams = new URL(location.href).searchParams;
    const cen_v2 = urlParams.get('cen_v2');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(cen_v2)

    if (cen_v2 == 1) {
        $('#selec1').prop("selected", true);
        $('.m3').addClass('active');
        $('.spe_cen_2').addClass('nav_active')
        
        $('.dc_2_1').css({color: '#ee791c'})
    } else if (cen_v2 == 6) {
        $('#selec6').prop("selected", true);
        $('.m6').addClass('active');
        $('.spe_cen_7').addClass('nav_active')
        
        $('.dc_2_2').css({color: '#ee791c'})
    } else if (cen_v2 == 11) {
        $('#selec11').prop("selected", true);
        $('.m11').addClass('active');
        $('.spe_cen_12').addClass('nav_active')
        
        $('.dc_2_3').css({color: '#ee791c'})
    } else if (cen_v2 == 12) {
        $('#selec12').prop("selected", true);
        $('.m12').addClass('active');
        $('.spe_cen_13').addClass('nav_active')
        
        $('.dc_2_4').css({color: '#ee791c'})
    } else if (cen_v2 == 16) {
        $('#selec16').prop("selected", true);
        $('.m16').addClass('active');
        $('.spe_cen_17').addClass('nav_active')
        
        $('.dc_2_5').css({color: '#ee791c'})
    }  else if (cen_v2 == 20) {
        $('#selec20').prop("selected", true);
        $('.m20').addClass('active');
        $('.spe_cen_21').addClass('nav_active')
        
        $('.dc_2_6').css({color: '#ee791c'})
    } else if (cen_v2 == 25) {
        $('#selec25').prop("selected", true);
        $('.m25').addClass('active');
        $('.spe_cen_26').addClass('nav_active')
        
        $('.dc_2_7').css({color: '#ee791c'})
    } else if (cen_v2 == 26) {
        $('#selec26').prop("selected", true);
        $('.m26').addClass('active');
        $('.spe_cen_27').addClass('nav_active')
        
        $('.dc_2_8').css({color: '#ee791c'})
    }

    for(let i=0; i<1; i++) {
        let cent_list = ``
        if (cen_v2 == 25) {
cent_list += `<div class="m_r_content_box c_25">`
        } else {
            cent_list += `<div class="m_r_content_box">`
        }
cent_list += `<div class="mr_title">
                <h1 class="title_box">`
                for(let j=0; j<1; j++) {
         cent_list += `<span class="icon"></span> 
                        ${CENT_TITLE[0][cen_v2].title}`
                }  
     cent_list += `</h1>
            </div>
            <div class="mr_img">`
                for(let j=0; j<1; j++) {
        cent_list += `<div class="box_img cen2_${LIST_N[0][cen_v2].item_no}"></div>`
                }
cent_list += `</div>`
                if (cen_v2 == 16) {
                    cent_list += `  <div>
                                        <div class="top_gray_text">
                                            ${CENT_LIST[0][cen_v2].top_text[0]}
                                        </div>
                                    </div>
                                    `
                }
                else if (cen_v2 == 25) {
                    cent_list += `  <div>
                                        <div class="top_gray_text c_25_top">
                                            ${CENT_LIST[0][cen_v2].sub_context1[0]}
                                            ${CENT_LIST[0][cen_v2].sub_context1[1]}
                                        </div>
                                    </div>
                                    `
                }
                
cent_list+= `<div class="mr_content">`
                if (cen_v2 == 25) {
                    cent_list+=  `<div class="mr_c_box c_25">`
                }
                else {
                    cent_list+=  `<div class="mr_c_box ">`
                }


                if (cen_v2 == 20 || cen_v2 == 25 || cen_v2 == 1 || cen_v2 == 11) {
                    cent_list += `<div class="mr_c_title"></div>`
                } else {
                    cent_list += `<div class="mr_c_title">
                                        <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                        ${CENT_LIST[0][cen_v2].sub_title[0]}
                                    </div>`
                }
            
        cent_list +=  `<div class="mr_c_content">`
                       if (cen_v2 == 1) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box margin_bottom_0">
                                            <div class="img_box image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v2].img_src[0]}" alt="${CENT_LIST[0][cen_v2].img_src[0]}"></div>
                                            <div class="cent_1_text margin_top_30">${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                            <div class="cent_1_text">${CENT_LIST[0][cen_v2].sub_context1[1]}</div>
                                            <div class="cent_1_text margin_bottom_15">${CENT_LIST[0][cen_v2].sub_context1[2]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="img_box image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v2].img_src[1]}" alt="${CENT_LIST[0][cen_v2].img_src[1]}"></div>
                                            <table class="table_line">
                                                <tbody>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v2].table_th[0]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v2].table_td[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v2].table_th[1]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v2].table_td[1]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v2].table_th[2]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v2].table_td[2]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </span>
                                        <span class="cent_box">
                                            <div class="flex_box">
                                                <div class="f_left_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v2].num_bold[0]}<span class="small">${CENT_LIST[0][cen_v2].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <span><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></span>
                                                        <div>${CENT_LIST[0][cen_v2].num[0]}</div>
                                                    </div>
                                                </div>
                                                <div class="f_right_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v2].num_bold[2]}<span class="small">${CENT_LIST[0][cen_v2].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <span><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></span>
                                                        <div>${CENT_LIST[0][cen_v2].num[1]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v2 == 6) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context1[1]}</div>
                                            </div>
                                            <div class="num_box">
                                                <span><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></span>
                                                <div>${CENT_LIST[0][cen_v2].small_phone[0]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v2 == 11) {
                        cent_list += `  <div class="flex_box_11">
                                            <div class="f_text_box2">
                                                <div class="mr_c_title">${CENT_LIST[0][cen_v2].sub_title[0]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context1[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context1[2]}</div>
                                                </div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context2[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context2[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context2[2]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context2[3]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box">
                                                <img src="./img/medi_center/12_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v2 == 16) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <ul>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[0]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[1]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[2]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[3]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[4]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[5]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[6]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[7]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[8]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[9]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[10]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[11]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v2].sub_context1[12]}</li>
                                                </ul>
                                            </div>
                                            <div class="chk_box_3">
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v2].chk_text[0]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v2].chk_text[1]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v2].chk_text[2]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v2 == 20) {
                        cent_list += `  <div class="flex_20">
                                            <div class="f_text_box2_20">
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v2].sub_title[0]}</div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v2].sub_title[1]}</div>
                                                <div class="chk_box_20">
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v2].check_box[0]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v2].check_box[1]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v2].check_box[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v2].sub_title[2]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                                </div>
                                                <div class="chk_num_box">
                                                    <div class="margin_bottom_30">특징</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v2].special[0]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v2].special[1]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v2].special[2]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box_20">
                                                <img src="./img/medi_center/21_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v2 == 26) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context2[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context2[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context2[2]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context3[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context4[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context4[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v2].sub_context4[2]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v2 == 12) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v2].sub_context1[0]}</div>
                                            <div>${CENT_LIST[0][cen_v2].sub_context1[1]}</div>
                                            <div>${CENT_LIST[0][cen_v2].sub_context1[2]}</div>
                                            <div>${CENT_LIST[0][cen_v2].sub_context1[3]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v2].sub_context2[0]}</div>
                                            <div>${CENT_LIST[0][cen_v2].sub_context2[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v2].sub_context3[0]}</div>
                                        </span>
                                        `
                    }
                    
          cent_list += `</div>`
                            if (cen_v2 == 20 || cen_v2 == 16 || cen_v2 == 1 || cen_v2 == 11) {
                                cent_list += `<div class="mr_c_title"></div>`
                            } else {
                                cent_list +=  `<div class="mr_c_title margin2 margin${CENT_LIST[0][cen_v2].item_no}"><span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>${CENT_LIST[0][cen_v2].sub_title[1]}</div>`
                            }
                    if (cen_v2 == 12) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v2].sub_context4[0]}</div>`
                    }else if (cen_v2 == 6)  {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="text_4">${CENT_LIST[0][cen_v2].sub_context1[2]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <span><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></span>
                                                    <div>${CENT_LIST[0][cen_v2].small_phone[1]}</div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v2].sub_title[2]}</div>
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v2].black_bold[0]}</div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v2].black_bold[1]}</div>
                                                    <div class="small_2">${CENT_LIST[0][cen_v2].sub_context1[3]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <span><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></span>
                                                    <div>${CENT_LIST[0][cen_v2].small_phone[2]}</div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="margin_bottom_30 plus_margin_30">
                                                <div>
                                                    <div class="chk_box">
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[0]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[1]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[2]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[3]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[4]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><svg class="svg-inline--fa fa-check-square fa-w-14 text-info" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg></span>
                                                            <span>${CENT_LIST[0][cen_v2].chk_text[5]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
            `
                    }
                    
                    else if (cen_v2 == 25) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v2].sub_context2[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v2].sub_context2[1]}</div>
                                                        <div>${CENT_LIST[0][cen_v2].sub_context2[2]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v2 == 26) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="bolder color c_26_">
                                                        <div>${CENT_LIST[0][cen_v2].bold}</div>
                                                    </div>
                                                    <div class="text_18 c_26">
                                                        <div>${CENT_LIST[0][cen_v2].sub_context5[0]}</div>
                                                        <div class="c_26_pad"> <a href="#" target="_black">${CENT_LIST[0][cen_v2].sub_context5[1]}</a></div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    
    cent_list +=  `</div>
                </div>`
// cent_list += `</div>
//             <div class="mr_content">
//                 <div class="mr_c_box">
//                     <div class="mr_c_title">${CENT_LIST[0][cen_v2].sub_title}</div>
//                     <div class="mr_c_content">
//                         <span>${CENT_LIST[0][cen_v2].sub_context1}</span>
//                     </div>
//                 </div>`
                // `<div class="mr_c_box">
                //     <div class="mr_title">센터 의료진 소개</div>
                //     <div class="mr_cb_content">`
                //     for(let j=0; j<CENT_TITLE[0][cen_v2].cent_doc.length; j++) {
                //         `<div class="mr_doc_n">
                //             <a href="#">${CENT_LIST[0][cen_v2].cent_doc[j]}</a>
                //         </div>`
                //     }
        cent_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent_list);
    }

    if (cen_v2 ==1 || cen_v2 == 11 || cen_v2 == 20 || cen_v2 == 26) {
        $('.mr_img').css({display:'none'})
        $('.mr_c_box').css({paddingTop:'0',})
        $('.m_r_content_box').css({gap:'0'})
    } 

    
    // top_banner

    
    for(let i=0; i<1; i++) {
        let banner_li_2 =`<div class="img_medi_center_box"></div>
                    <div class="onn_desk_title">
                        <div class="title_box_onn">
                            <span class="icon_box_center"><img src="./img/medi_details/icon/${CENT_TITLE[0][cen_v2].icon_src}.png" alt=""></span>
                            <h4>${CENT_TITLE[0][cen_v2].title}</h4>
                        </div>
                    </div>
        `
        $('.top_banner_2').append(banner_li_2);                    
    }

})