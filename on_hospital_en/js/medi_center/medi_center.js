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
    const cen_v = urlParams.get('cen_v');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(cen_v)

    if (cen_v == 0) {
        $('#selec0').prop("selected", true);
        $('.m1').addClass('active');
        $('.spe_cen_1').addClass('nav_active')
        
        $('.dc_12').css({color: '#ee791c'})
    } else if (cen_v == 1) {
        $('#selec1').prop("selected", true);
        $('.m2').addClass('active');
        $('.spe_cen_2').addClass('nav_active')

        $('.dc_16').css({color: '#ee791c'})
    } else if (cen_v == 2) {
        $('#selec2').prop("selected", true);
        $('.m3').addClass('active');
        $('.spe_cen_3').addClass('nav_active')
        
        $('.dc_3').css({color: '#ee791c'})
    } else if (cen_v == 3) {
        $('#selec3').prop("selected", true);
        $('.m4').addClass('active');
        $('.spe_cen_4').addClass('nav_active')
        
        $('.dc_22').css({color: '#ee791c'})
    } else if (cen_v == 4) {
        $('#selec4').prop("selected", true);
        $('.m5').addClass('active');
        $('.spe_cen_5').addClass('nav_active')
        
        $('.dc_21').css({color: '#ee791c'})
    } else if (cen_v == 5) {
        $('#selec5').prop("selected", true);
        $('.m6').addClass('active');
        $('.spe_cen_6').addClass('nav_active')
        
        $('.dc_11').css({color: '#ee791c'})
    } else if (cen_v == 6) {
        $('#selec6').prop("selected", true);
        $('.m7').addClass('active');
        $('.spe_cen_7').addClass('nav_active')
        
        $('.dc_10').css({color: '#ee791c'})
    } else if (cen_v == 7) {
        $('#selec7').prop("selected", true);
        $('.m8').addClass('active');
        $('.spe_cen_8').addClass('nav_active')
        
        $('.dc_19').css({color: '#ee791c'})
    } else if (cen_v == 8) {
        $('#selec8').prop("selected", true);
        $('.m9').addClass('active');
        $('.spe_cen_9').addClass('nav_active')
        
        $('.dc_6').css({color: '#ee791c'})
    } else if (cen_v == 9) {
        $('#selec9').prop("selected", true);
        $('.m10').addClass('active');
        $('.spe_cen_10').addClass('nav_active')
        
        $('.dc_1').css({color: '#ee791c'})
    } else if (cen_v == 10) {
        $('#selec10').prop("selected", true);
        $('.m11').addClass('active');
        $('.spe_cen_11').addClass('nav_active')
        
        $('.dc_5').css({color: '#ee791c'})
    } else if (cen_v == 11) {
        $('#selec11').prop("selected", true);
        $('.m12').addClass('active');
        $('.spe_cen_12').addClass('nav_active')
        
        $('.dc_29').css({color: '#ee791c'})
    } else if (cen_v == 12) {
        $('#selec12').prop("selected", true);
        $('.m13').addClass('active');
        $('.spe_cen_4').addClass('nav_active')
        
        $('.dc_4').css({color: '#ee791c'})
    } else if (cen_v == 13) {
        $('#selec13').prop("selected", true);
        $('.m14').addClass('active');
        $('.spe_cen_14').addClass('nav_active')
        
        $('.dc_3').css({color: '#ee791c'})
    } else if (cen_v == 14) {
        $('#selec14').prop("selected", true);
        $('.m15').addClass('active');
        $('.spe_cen_15').addClass('nav_active')
        
        $('.dc_8').css({color: '#ee791c'})
    } else if (cen_v == 15) {
        $('#selec15').prop("selected", true);
        $('.m16').addClass('active');
        $('.spe_cen_16').addClass('nav_active')
        
        $('.dc_2').css({color: '#ee791c'})
    } else if (cen_v == 16) {
        $('#selec16').prop("selected", true);
        $('.m17').addClass('active');
        $('.spe_cen_17').addClass('nav_active')
        
        $('.dc_15').css({color: '#ee791c'})
    } else if (cen_v == 17) {
        $('#selec17').prop("selected", true);
        $('.m18').addClass('active');
        $('.spe_cen_18').addClass('nav_active');
        
        $('.dc_9').css({color: '#ee791c'})
    } else if (cen_v == 18) {
        $('#selec18').prop("selected", true);
        $('.m19').addClass('active');
        $('.spe_cen_19').addClass('nav_active')
        
        $('.dc_25').css({color: '#ee791c'})
    } else if (cen_v == 19) {
        $('#selec19').prop("selected", true);
        $('.m20').addClass('active');
        $('.spe_cen_20').addClass('nav_active')
        
        $('.dc_23').css({color: '#ee791c'})
    } else if (cen_v == 20) {
        $('#selec20').prop("selected", true);
        $('.m21').addClass('active');
        $('.spe_cen_21').addClass('nav_active')
        
        $('.dc_24').css({color: '#ee791c'})
    } else if (cen_v == 21) {
        $('#selec21').prop("selected", true);
        $('.m22').addClass('active');
        $('.spe_cen_22').addClass('nav_active')
        
        $('.dc_27').css({color: '#ee791c'})
    } else if (cen_v == 22) {
        $('#selec22').prop("selected", true);
        $('.m23').addClass('active');
        $('.spe_cen_23').addClass('nav_active')
        
        $('.dc_28').css({color: '#ee791c'})
    } else if (cen_v == 23) {
        $('#selec23').prop("selected", true);
        $('.m24').addClass('active');
        $('.spe_cen_24').addClass('nav_active')
        
        $('.dc_20').css({color: '#ee791c'})
    } else if (cen_v == 24) {
        $('#selec24').prop("selected", true);
        $('.m25').addClass('active');
        $('.spe_cen_25').addClass('nav_active')
        
        $('.dc_18').css({color: '#ee791c'})
    } else if (cen_v == 25) {
        $('#selec25').prop("selected", true);
        $('.m26').addClass('active');
        $('.spe_cen_26').addClass('nav_active')
        
        $('.dc_17').css({color: '#ee791c'})
    } else if (cen_v == 26) {
        $('#selec26').prop("selected", true);
        $('.m27').addClass('active');
        $('.spe_cen_27').addClass('nav_active')
        
        $('.dc_7').css({color: '#ee791c'})
    } else if (cen_v == 27) {
        $('#selec27').prop("selected", true);
        $('.m28').addClass('active');
        $('.spe_cen_28').addClass('nav_active')
        
        $('.dc_13').css({color: '#ee791c'})
    } else if (cen_v == 28) {
        $('#selec28').prop("selected", true);
        $('.m29').addClass('active');
        $('.spe_cen_29').addClass('nav_active')
        
        $('.dc_26').css({color: '#ee791c'})
    } 

    let cen_sub_context1 = CENT_LIST[0][cen_v].sub_context1;

    for(let i=0; i<1; i++) {
        let cent_list = ``
        if (cen_v == 25) {
cent_list += `<div class="m_r_content_box c_25">`
        } else {
            cent_list += `<div class="m_r_content_box">`
        }
cent_list += `<div class="mr_title">
                    <div class="row mb-4"> 
                        <div class="col-lg-12">
                            <h1 class="top_title">
                                <span class="icon"></span>
                                ${CENT_TITLE[0][cen_v].title}
                            </h1>
                        </div>
                    </div>

                </div>
            <div class="mr_img">`
                for(let j=0; j<1; j++) {
        cent_list += `<div class="box_img cen2_${LIST_N[0][cen_v].item_no}"></div>`
                }
cent_list += `</div>`
                if (cen_v == 4) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div class="top_text_box  c_4">
                                            <div>${CENT_LIST[0][cen_v].bold_top[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[2]}</div>
                                        </div>
                                        <div class="top_small_text">${CENT_LIST[0][cen_v].small_top[0]}</div>
                                    </span>
                                    `
                } else if (cen_v == 7) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </div>
                                    </span>
                                    `
                } else if (cen_v == 9) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <div class="text_4 top_text">
                                                <span class="bolder">${CENT_LIST[0][cen_v].top_text[0]}</span>
                                                ${CENT_LIST[0][cen_v].top_text[1]}
                                            </div>
                                            <div class="text_4 top_text">
                                                <span class="bolder">${CENT_LIST[0][cen_v].top_text[2]}</span>
                                            </div>
                                        </div>
                                    </span>
                                    `
                } else if (cen_v == 10) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <img src="./img/medi_center/11_.png" alt="">
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 14) {
                    cent_list += `
                                    <span class="cent_box">
                                        <div>
                                            <img src="./img/medi_center/emergency.png" alt="">
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 16) {
                    cent_list += `  <div>
                                        <div class="top_gray_text">
                                            ${CENT_LIST[0][cen_v].top_text[0]}
                                        </div>
                                    </div>
                                    `
                }
                else if (cen_v == 23) {
                    cent_list += `
                                    <span class="cent_box c_23_top">
                                        <div class="top_text_box">
                                            <div>${CENT_LIST[0][cen_v].bold_top[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].bold_top[2]}</div>
                                        </div>
                                    </span>
                                    `
                }
                else if (cen_v == 25) {
                    cent_list += `  <div>
                                        <div class="top_gray_text c_25_top">
                                            ${CENT_LIST[0][cen_v].sub_context1[0]}
                                            ${CENT_LIST[0][cen_v].sub_context1[1]}
                                        </div>
                                    </div>
                                    `
                }
                else if (cen_v == 27) {
                    cent_list += `  <div>
                                        <div class="top_gray_text c_25_top">
                                            ${CENT_LIST[0][cen_v].top_small}
                                        </div>
                                    </div>
                                    `
                }
cent_list+= `<div class="mr_content">`
                if (cen_v == 25) {
                    cent_list+=  `<div class="mr_c_box c_25">`
                } else if (cen_v == 23 || cen_v == 21 || cen_v == 18 || cen_v == 4 || cen_v ==7) {
                    cent_list+=  `<div class="mr_c_box c_23">`
                } 
                else {
                    cent_list+=  `<div class="mr_c_box ">`
                }


                if (
                    cen_v == 11 || 
                    cen_v == 20 || 
                    cen_v == 21 ||
                    cen_v == 0  ||
                    cen_v == 1  ||
                    cen_v == 2  ||
                    cen_v == 8  ||
                    cen_v == 10 ||
                    cen_v == 11 ||
                    cen_v == 14 ||
                    cen_v == 17 ||
                    cen_v == 18 ||
                    cen_v == 25
                    ) {
                    cent_list += `<div class="mr_c_title"></div>`
                } else if (cen_v == 28 || cen_v == 9) {
                    cent_list += `<div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title[0]}</div>`
                }
                else {
                    cent_list += `  <div class="mr_c_title">
                                        <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                        ${CENT_LIST[0][cen_v].sub_title[0]}
                                    </div>`
                }
            
        cent_list +=  `<div class="mr_c_content">`
                       if(cen_v == 24){
                            for(let j=0; j<cen_sub_context1.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context1[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context1.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context2[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context1.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context3[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context1.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context4[j]}</span>`
                            }
                            for(let j=0; j<cen_sub_context1.length; j++) {
                                cent_list += `<span>${CENT_LIST[0][cen_v].sub_context5[j]}</span>`
                            }
                       } 
                       else if (cen_v == 12) {
                cent_list += `<div class="mr_c_content cent_13">
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                </span>
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                    <div>${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                </span>
                                <span class="cent_box">
                                    <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                </span>
                                `
                    } else if (cen_v == 3) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                        </span>
                                        `
                    }  else if (cen_v == 0) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 1) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box margin_bottom_0">
                                            <div class="image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v].img_src[0]}" alt="${CENT_LIST[0][cen_v].img_src[0]}"></div>
                                            <div class="cent_1_text margin_top_30">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            <div class="cent_1_text">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            <div class="cent_1_text margin_bottom_15">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="image_box"><img src="./img/medi_center/${CENT_LIST[0][cen_v].img_src[1]}" alt="${CENT_LIST[0][cen_v].img_src[1]}"></div>
                                            <table class="table_line">
                                                <tbody>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v].table_th[0]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v].table_td[0]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v].table_th[1]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v].table_td[1]}</td>
                                                    </tr>
                                                    <tr>
                                                        <th class="bold table_th th_cen_1">${CENT_LIST[0][cen_v].table_th[2]}</th>
                                                        <td class="table_td td_cen_1">${CENT_LIST[0][cen_v].table_td[2]}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </span>
                                        <span class="cent_box">
                                            <div class="flex_box">
                                                <div class="f_left_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v].num_bold[0]}<span class="small">${CENT_LIST[0][cen_v].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                        <div>${CENT_LIST[0][cen_v].num[0]}</div>
                                                    </div>
                                                </div>
                                                <div class="f_right_box">
                                                    <div class="bold text_box">${CENT_LIST[0][cen_v].num_bold[2]}<span class="small">${CENT_LIST[0][cen_v].num_bold[1]}</span></div>
                                                    <div class="num_box">
                                                        <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                        <div>${CENT_LIST[0][cen_v].num[1]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 2) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 4) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        <div class="line"></div>
                                        `
                    }
                    else if (cen_v == 5) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[4]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 6) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                            <div class="num_box">
                                                <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                <div>${CENT_LIST[0][cen_v].small_phone[0]}</div>
                                            </div>
                                        </span>
                                        <div class="line"></div>
                                        `
                    }
                    else if (cen_v == 7) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="table_text">
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[0]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[0]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[1]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[1]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[2]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[2]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[3]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[3]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[4]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[4]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[5]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[5]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[6]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[6]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[7]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[7]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[8]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[8]}</div>
                                                    </div>
                                                    <div>
                                                        <div class="th_table">${CENT_LIST[0][cen_v].table_th[9]}</div>
                                                        <div class="td_table">${CENT_LIST[0][cen_v].table_td[9]}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 8) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context6[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context7[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context8[0]}</div>\
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context9[0]}</div>\
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 9) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                            </div>
                                        </span>
                                        <div class="line"></div>
                                        `
                    }
                    else if (cen_v == 11) {
                        cent_list += `  <div class="flex_box_11">
                                            <div class="f_text_box2">
                                                <div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                                </div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context2[3]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box">
                                                <img src="./img/medi_center/12_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 13) {
                        cent_list += `  <div class="flex_box_11">
                                            <div class="f_text_box2">
                                                <div class="c_title">${CENT_LIST[0][cen_v].middle_text[0]}</div>
                                                <div class="line"></div>
                                                <div class="circle_box line_circle">
                                                    <div class="circle_box">
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[0]}</span></div>
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[1]}</span></div>
                                                        <div class="circle_s_box"><span>${CENT_LIST[0][cen_v].circle_text[2]}</span></div>
                                                    </div>
                                                </div>
                                                <div class="blue_big">${CENT_LIST[0][cen_v].blue_text}</div>
                                                <div class="line"></div>
                                                <div class="chk_box">
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="c_title">${CENT_LIST[0][cen_v].middle_text[1]}</div>
                                                <div class="s_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>

                                                <div class="num_box">
                                                    <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                    <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 15) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <div class="chk_box_2">
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                    </div>
                                                    <div class="chk_text">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="line"></div>
                                                <span class="cent_box">
                                                    <div class="flex_box_2 padding_0">
                                                        <div class="f_left_box">
                                                            <div class="bold text_box">${CENT_LIST[0][cen_v].phone_num[0]}<span class="small">${CENT_LIST[0][cen_v].phone_num[1]}</span></div>
                                                            <div class="num_box">
                                                                <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                                <div>${CENT_LIST[0][cen_v].phone_text[0]}</div>
                                                            </div>
                                                        </div>
                                                        <div class="f_right_box">
                                                            <div class="bold text_box">${CENT_LIST[0][cen_v].phone_num[2]}<span class="small">${CENT_LIST[0][cen_v].phone_num[3]}</span></div>
                                                            <div class="num_box">
                                                                <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                                <div>${CENT_LIST[0][cen_v].phone_text[1]}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 16) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <ul>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[0]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[1]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[2]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[3]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[4]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[5]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[6]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[7]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[8]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[9]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[10]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[11]}</li>
                                                    <li class="cent_li">${CENT_LIST[0][cen_v].sub_context1[12]}</li>
                                                </ul>
                                            </div>
                                            <div class="chk_box_3">
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                </div>
                                                <div class="chk_t">
                                                    <span><span class="circle_icon"></span></span>
                                                    <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }
                     else if (cen_v == 17) {
                        cent_list+= `
                                        <div class="row mb-5">
                                            <div class="col-lg-12 top_banner">
                                                <div class="top">
                                                    <!-- <div class="mb-4 mb-lg-0"><img src="../img/guide/funeral.jpg" class="mx-auto d-block rounded-circle" style="width: 150px;height: 150px;" alt=""></div> -->
                                                    <div class="cont ml-lg-4">
                                                        <h3 class="mb-3 color1 title2"><b>ON Hospital Funeral Home / Mortuary</b></h3>
                                                        <div class="mb-3">
                                                            Located in the best transportation hub directly connected to the subway station (Buam Station on Line 2), it provides the best funeral services, including high-quality food cooked directly on-site.</span>
                                                        </div>
                                                        <h5 class="call_box">
                                                            <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                            <span class="mr-4">24-hour phone consultation service is available.</span> 
                                                            <i class="fas fa-phone-square text-primary"></i>&nbsp; <span>051) 607-0111,0591</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-lg-12">
                                                <div class="section1">					
                                                    <ul class="row best_box">
                                                        <li class="col-lg-6 best_re">
                                                            <h5 class="mb-3 pl-5 color1"> Operated <b class="section1_span">directly by </b>ON Hospital.</h5>
                                                        </li>
                                                        <li class="col-lg-6 best_re">
                                                            <h5 class="mb-3 pl-5 color1"> It is cheaper than the city funeral homes <br><b class="section1_span">with the lowest usage fee </b>in Busan.</h5>
                                                        </li>
                                                        <li class="col-lg-6 best_re">
                                                            <h5 class="mb-3 mb-lg-0 pl-5 color1"> There is no additional burden beyond the <br><b class="section1_span">official costs due to honest operation.</b></h5>
                                                        </li>
                                                        <li class="col-lg-6 best_re">							
                                                            <h5 class="mb-3 mb-lg-0 pl-5 color1"> The boiled pork (domestic refrigerated pork) is <span>prepared by </span><br class="mo"><b class="section1_span">the chef </b> upon ordering.</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4 context_top col-lg-12 text-justify">
                                            <div class="title_icon_box">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                <h4>Funeral Homes</h4>
                                            </div>
                                        </div>
                                        <div class="row mb-4 swiper_flex">
                                            <!-- <div thumbsSlider="" class="swiper mySwiper3 swiper-container gallery-thumbs">
                                                <div class="swiper-wrapper thum_v">
                                                    <div class="swiper-slide swiper-slide-thumb-active silde_v_1 silde_v" data-slide-index="1">
                                                        <img src="./img/guide/funeral_1.png" class="img-fluid mx-auto d-block" alt="">
                                                    </div>
                                                    <div class="swiper-slide silde_v_2 silde_v" data-slide-index="1">
                                                        <img src="./img/guide/funeral_2.png" class="img-fluid mx-auto d-block" alt="">
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="swiper mySwiper1 swiper-container gallery-top">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide silde_v_1_1">
                                                        <div class="col-lg-6 mb-4">
                                                            <img src="./img/guide/funeral_1.png" class="img-fluid mx-auto d-block" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide silde_v_2_1">
                                                        <div class="col-lg-6">
                                                            <img src="./img/guide/funeral_2.png" class="img-fluid mx-auto d-block" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="swiper-pagination"></div>
                                            </div>
                                            
                                        </div>
                                        <div class="row mb-4 context_top col-lg-12 text-justify">
                                            <div class="title_icon_box">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                <h4>Directions</h4>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-lg-12">
                                                <div class="section2">
                                                    <div class="subway_box">
                                                        <div class="col-lg-2 sub_title_b">
                                                            <div class="img_box car"><img src="./img/guide/funeral.svg" alt="" class="sub_svg"></div>
                                                            <h5 class="mb-3">When visiting by car</h5>
                                                        </div>
                                                        <div class="text_box">
                                                            <h5 class="mb-4">966 Danggam 2-dong, Busanjin-gu, Busan</h5>
                                                        </div>
                                                    </div>

                                                    <div class="row subway_box">
                                                        <div class="col-lg-2 sub_title_b">
                                                            <div class="img_box"><img src="./img/guide/direction_2.svg" alt="" class="bus_svg"></div>
                                                            <h5 class="mb-3">When using the bus</h5>
                                                        </div>
                                                        <div class="col-lg-10 text_box_bus">
                                                            <div class="text_one">
                                                                <h6 class="em">- Danggam Entrance Bus Stop</h6>
                                                                <div class="span">17, 23, 129-1, 138-1, 141, 160, 167, 169-1, 141 (night bus)</div>
                                                            </div>
                                                            <div class="text_one">
                                                                <h6 class="em">- Buam Station Bus Stop</h6>
                                                                <div class="span">31, 33, 62, 67, 68, 77, 85, 87, 110-1, 108, 133, 138, 1004 (night bus)</div>
                                                            </div>
                                                        </div>
                                                    </div>	
                                                    

                                                    <div class="subway_box">
                                                        <div class="col-lg-2 sub_title_b">
                                                            <div class="img_box sub"><img src="./img/guide/direction_1.svg" alt="" class="sub_svg"></div>
                                                            <h5 class="mb-3">When using the subway</h5>
                                                        </div>
                                                        <div class="text_box">
                                                            <h5 class="mb-4">Take Subway Line 2 > Buam Station > Connected to Exit 6</h5>
                                                        </div>
                                                    </div>				
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4 context_top col-lg-12 text-justify">
                                            <div class="title_icon_box">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                <h4>Facilities</h4>
                                            </div>
                                        </div>
                                        <div class="table_a">
                                            <span class="row mb-5 table_b">
                                                <div class="box">
                                                    <div class="col-6 col-lg-2 p-4 th">
                                                        <h5 class="mb-0 t_1">VIP Room : 1</h5>
                                                    </div>
                                                </div>
                                                <div class="box">
                                                    <div class="col-6 col-lg-2 p-4 th">
                                                        <h5 class="mb-0 t_1">Special Room : 2</h5>
                                                    </div>
                                                </div>
                                                <div class="box">
                                                    <div class="col-6 col-lg-2 p-4 th">
                                                        <h5 class="mb-0 t_1">Regular Room : 5</h5>
                                                    </div>
                                                </div>
                                            </span>
                                            <div class="div">
                                                <div class="row no-gutters mb-5">
                                                    <!-- <div thumbsSlider="" class="swiper mySwiper_1">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide slide_t_2 slide_t">
                                                                <img src="./img/guide/room2.jpg" class="img-fluid mx-auto d-block" alt="">
                                                            </div>
                                                            <div class="swiper-slide slide_t_3 slide_t">
                                                                <img src="./img/guide/room3.png" class="img-fluid mx-auto d-block" alt="">
                                                            </div>
                                                            <div class="swiper-slide swiper-slide-thumb-active slide_t_1 slide_t">
                                                                <img src="./img/guide/room1.jpg" class="img-fluid mx-auto d-block" alt="">
                                                            </div>
                                                        
                                                        </div>
                                                    </div>
                                                    <div class="swiper mySwiper2">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide slide_t_1_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room1.jpg" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide slide_t_2_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room2.jpg" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="swiper-slide slide_t_3_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room3.png" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> -->
                                                    <div class="swiper mySwiper2 swiper-container gallery-top">
                                                        <div class="swiper-wrapper">
                                                            <div class="swiper-slide silde_v_1_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room1.png" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide silde_v_2_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room2.png" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                            <div class="swiper-slide silde_v_2_1">
                                                                <div class="col-lg">
                                                                    <img src="./img/guide/room3.png" class="img-fluid mx-auto d-block" alt="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="swiper-pagination"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4 margin_b">
                                            <div class="col-lg-12">
                                                <h3 class="color1 font-myeongjo text-center" style="line-height: 1.6;">We will always do our best with a noble and solemn heart to provide a comfortable funeral home <span>where the family can remember the life of their loved one in the most beautiful way.</span></h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg">
                                                <img src="./img/guide/flower.png" class="img-fluid mx-auto d-block" alt="">
                                            </div>
                                        </div>
                                    </div>`
                     }
                     else if (cen_v == 18) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 19) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div>
                                                        <div class="text_18">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 20) {
                        cent_list += `  <div class="flex_20">
                                            <div class="f_text_box2_20">
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[1]}</div>
                                                <div class="chk_box_20">
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[0]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[1]}</span>
                                                    </div>
                                                    <div class="chk_20">
                                                        <span><span class="circle_icon"></span></span>
                                                        <span>${CENT_LIST[0][cen_v].check_box[2]}</span>
                                                    </div>
                                                </div>
                                                <div class="mr_c_title title_20">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                                <div class="ft_box">
                                                    <div class="f_box">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                </div>
                                                <div class="chk_num_box">
                                                    <div class="margin_bottom_30">특징</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[0]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[1]}</div>
                                                    <div class="chk_num">${CENT_LIST[0][cen_v].special[2]}</div>
                                                </div>
                                            </div>
                                            <div class="f_img_box_20">
                                                <img src="./img/medi_center/21_.jpg" alt="">
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 21) {
                        cent_list += `  <div class="flex_21">
                                            <div class="f_text_box2_21">
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[0]}</div>
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[1]}</div>
                                                <div class="mr_c_title title_21">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                            </div>
                                        </div>
                                        <div class="circle_box">
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[0]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[0]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[1]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[1]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[2]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[2]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[3]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[3]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[4]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[4]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[5]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[5]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[6]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[6]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[7]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[7]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_num">${CENT_LIST[0][cen_v].circle_num[8]}</span>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[8]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_21">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_21">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 22) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].small_top[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].small_top[1]}</div>
                                            </div>
                                        </span>
                                        
                                        `
                    }
                    else if (cen_v == 23) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <div class="line"></div>
                                        `
                    }
                    else if (cen_v == 26) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                            </div>
                                        </span>
                                        `
                    }
                    else if (cen_v == 27) {
                        cent_list += `<div class="mr_c_content cent_13">
                                        <ul class="mr_ul2">
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[0]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[1]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[2]}</li>
                                            <li class="mr_li">${CENT_LIST[0][cen_v].top_li[3]}</li>
                                        </ul>
                                        `
                    }
                    else if (cen_v == 28) {
                        cent_list += `<div class="mr_c_content cent_13 ">
                                        <div>
                                            <span class="border_box">${CENT_LIST[0][cen_v].circle_border}</span>
                                        </div>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                            </div>
                                        </span>
                                        <span class="cent_box">
                                            <div class="top_text_box2">
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                            </div>
                                        </span>

                                        <div class="circle_box">
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[0]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[1]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="circle_text">
                                                <div class="cir_box">
                                                    <span class="cir_span">
                                                        <h6>
                                                            <span class="cir_text">${CENT_LIST[0][cen_v].circle_text[2]}</span>
                                                        </h6>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        `
                    }


          cent_list += `</div>`
                            if (
                                cen_v == 20 || 
                                cen_v == 21 || 
                                cen_v == 28 || 
                                cen_v == 16 ||
                                cen_v == 0 || 
                                cen_v == 1 || 
                                cen_v == 7 || 
                                cen_v == 8 || 
                                cen_v == 10 || 
                                cen_v == 13 || 
                                cen_v == 14 || 
                                cen_v == 15 || 
                                cen_v == 17 || 
                                cen_v == 11 ||
                                cen_v == 18
                                
                                ) {
                                cent_list += `<div class="mr_c_title"></div>`
                            } else if (cen_v == 9) {
                                cent_list += `<div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title[1]}</div>`
                            }
                            else if (cen_v == 24) {
                                cent_list +=  ` <div class="mr_c_title margin${CENT_LIST[0][cen_v].item_no}">
                                                    <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                    ${CENT_LIST[0][cen_v].sub_title[1]}
                                                </div>`
                            }
                            else {
                                cent_list +=  ` <div class="mr_c_title margin2 margin${CENT_LIST[0][cen_v].item_no}">
                                                    <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                    ${CENT_LIST[0][cen_v].sub_title[1]}
                                                </div>`
                            }
                    if (cen_v == 5) {
                    cent_list += `<div class="mr_c_content cent_24">`
                                    for(let j=0; j<3; j++) {
                            cent_list +=`<div><div class="small_circle"></div>${CENT_LIST[0][cen_v].sub_context2[j]}</div>`
                        }
                    } else if (cen_v == 24) {
                    cent_list += `<div class="mr_c_content cent_24">
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[0]}</span>
                                        <div class="margin con">
                                            <div>${CENT_LIST[0][cen_v].pro_context1[0]}</div>
                                            <div>${CENT_LIST[0][cen_v].pro_context1[1]}</div>
                                        </div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[1]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context2}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[2]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context3}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[3]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context4}</div>
                                    </div>
                                    <div class="line"></div>
                                    <div class="cent_24_span">
                                        <span class="bold">${CENT_LIST[0][cen_v].pro_title[4]}</span>
                                        <div class="con">${CENT_LIST[0][cen_v].pro_context5}</div>
                                    </div>
                                    <div class="line"></div>
                                
                                `
                    } else if (cen_v == 12) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].sub_context4[0]}</div>`
                    } else if (cen_v == 3) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].sub_context5[0]}</div>
                                <div>${CENT_LIST[0][cen_v].sub_context5[1]}</div>`
                    }
                    else if (cen_v == 2) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <div>${CENT_LIST[0][cen_v].text}</div>
                                <ul class="mr_ul">
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[0]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[1]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[2]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[3]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[4]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[5]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[6]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[7]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[8]}</li>
                                    <li class="mr_li">${CENT_LIST[0][cen_v].li_text[9]}</li>
                                </ul>
                                `
                    }
                    else if (cen_v == 4) {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                ${CENT_LIST[0][cen_v].sub_title[2]}
                                            </div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context5[0]}</span>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                ${CENT_LIST[0][cen_v].sub_title[3]}
                                            </div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context6[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context6[1]}</div>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context7[0]}</span>
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context7[1]}</span>
                                            </div>
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context8[0]}</span>
                                            </div>
                                `
                    }
                    else if (cen_v == 6)  {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[2]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                    <div>${CENT_LIST[0][cen_v].small_phone[1]}</div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="mr_c_title margin2">
                                                <span class="icon_title"><img src="./img/common/chk_2.png" alt=""></span>
                                                ${CENT_LIST[0][cen_v].sub_title[2]}
                                            </div>
                                            <div class="margin_bottom_30">
                                                <div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v].black_bold[0]}</div>
                                                    <div class="black_bold">${CENT_LIST[0][cen_v].black_bold[1]}</div>
                                                    <div class="small_2">${CENT_LIST[0][cen_v].sub_context1[3]}</div>
                                                </div>
                                                <div class="num_box">
                                                    <div class="img_box_call"><img src="./img/guide/funeral_call.svg" alt="" class="call_svg"></div>
                                                    <div>${CENT_LIST[0][cen_v].small_phone[2]}</div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div class="margin_bottom_30 plus_margin_30">
                                                <div>
                                                    <div class="chk_box">
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[0]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[1]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[2]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[3]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[4]}</span>
                                                        </div>
                                                        <div class="chk_text">
                                                            <span><span class="circle_icon"></span></span>
                                                            <span>${CENT_LIST[0][cen_v].chk_text[5]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="line"></div>
            `
                    }
                    else if (cen_v == 9) {
                        cent_list += `
                                    <div class="margin_bottom_30">
                                    <div class="margin_bottom_40">
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[4]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[5]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[6]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[7]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[8]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[9]}</div>
                                    </div>
                                    
                                    <div class="line"></div>
                                    <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>
                                    <div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[10]}</div>
                                        <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[11]}</div>
                                        <div class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context1[12]}</div>
                                    </div>
                                    <div class="margin_top_30">
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[13]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[14]}</div>
                                        <div class="text_4">${CENT_LIST[0][cen_v].sub_context1[15]}</div>
                                    </div>
                                    
                                        `
                    }
                    else if (cen_v == 19) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                                    </div>
                                                </span>
                                                <div class="line"></div>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 22) {
                        cent_list += `<div class="mr_c_content cent_13">
                                <ul class="mr_ul">
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[0]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[1]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[2]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[3]}</li>
                                    <li class="mr_li cent_22">${CENT_LIST[0][cen_v].sub_context1[4]}</li>
                                </ul>
                                `
                    }
                    else if (cen_v == 23) {
                        cent_list += `<div class="mr_c_content cent_13">
                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context2[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[2]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context3[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context3[1]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[3]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4">${CENT_LIST[0][cen_v].sub_context4[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context4[2]}</div>
                                            </div>
                                            <div class="line"></div>

                                            <div class="mr_c_title margin2">${CENT_LIST[0][cen_v].sub_title[4]}</div>

                                            <div class="margin_bottom_30">
                                                <span class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context5[0]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[1]}</div>
                                                <span class="text_4 bolder">${CENT_LIST[0][cen_v].sub_context5[2]}</span>
                                                <div class="text_4">${CENT_LIST[0][cen_v].sub_context5[3]}</div>
                                            </div>
                                `
                    }
                    else if (cen_v == 25) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18">
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[1]}</div>
                                                        <div>${CENT_LIST[0][cen_v].sub_context2[2]}</div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 26) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="bolder color c_26_">
                                                        <div>${CENT_LIST[0][cen_v].bold}</div>
                                                    </div>
                                                    <div class="text_18 c_26">
                                                        <div>${CENT_LIST[0][cen_v].sub_context5[0]}</div>
                                                        <div class="c_26_pad"> <a href="http://www.onhospital.org/down/%EB%B0%A9%EC%82%AC%EC%84%A0%20%EC%B9%98%EB%A3%8C%20%EC%95%88%EB%82%B4%EC%B1%85%EC%B0%A8.pdf" target="_black">${CENT_LIST[0][cen_v].sub_context5[1]}</a></div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        `
                    }
                    else if (cen_v == 27) {
                        cent_list += `  <div>
                                            <div class="f_text_box2">
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[0]}</span>${CENT_LIST[0][cen_v].main_title[0]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context1[0]}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context1[1]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[1]}</span>${CENT_LIST[0][cen_v].main_title[1]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context2[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[2]}</span>${CENT_LIST[0][cen_v].main_title[2]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context3[0]}</div>
                                                    </div>
                                                </span>
                                                <span class="cent_box">
                                                    <div class="text_18 c_27">
                                                        <div class="bolder color c_27_"><span class="blue circle_num">${CENT_LIST[0][cen_v].main_num[3]}</span>${CENT_LIST[0][cen_v].main_title[3]}</div>
                                                        <div class="small">${CENT_LIST[0][cen_v].main_red_text}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context4[0]}</div>
                                                        <div class="line_height">${CENT_LIST[0][cen_v].sub_context4[1]}</div>
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
//                     <div class="mr_c_title">${CENT_LIST[0][cen_v].sub_title}</div>
//                     <div class="mr_c_content">
//                         <span>${CENT_LIST[0][cen_v].sub_context1}</span>
//                     </div>
//                 </div>`
                // `<div class="mr_c_box">
                //     <div class="mr_title">센터 의료진 소개</div>
                //     <div class="mr_cb_content">`
                //     for(let j=0; j<CENT_TITLE[0][cen_v].cent_doc.length; j++) {
                //         `<div class="mr_doc_n">
                //             <a href="#">${CENT_LIST[0][cen_v].cent_doc[j]}</a>
                //         </div>`
                //     }
        cent_list += `</div>
                </div>
            </div>
        </div>
        
        `

        $('.m_right').append(cent_list);
    }

    if (cen_v == 0 || cen_v ==1 || cen_v == 2 || cen_v == 8 || cen_v == 10 || cen_v == 11 || cen_v == 13 || cen_v == 14 || cen_v == 20 || cen_v == 17 || cen_v == 26 || cen_v == 28) {
        $('.mr_img').css({display:'none'})
        $('.mr_c_box').css({paddingTop:'0',})
        $('.m_r_content_box').css({gap:'0'})
    } else if (cen_v == 3 || cen_v == 4) {
        $('.mr_img').css({display:'block'})
    }


    // top_banner

    
    for(let i=0; i<1; i++) {
        let banner_li_2 =`<div class="img_medi_center_box"></div>
                    <div class="onn_desk_title">
                        <div class="title_box_onn">
                            <span class="icon_box_center"><img src="./img/medi_details/icon/${CENT_TITLE[0][cen_v].icon_src}.png" alt=""></span>
                            <h4>${CENT_TITLE[0][cen_v].title}</h4>
                        </div>
                    </div>
        `
        $('.top_banner_2').append(banner_li_2);                    
    }


                                // <div class="content_box_onn">
    //                             <span>${DOC_TITLE[0][value].content}</span>
    //                         </div>


    if (cen_v == 9) {
        $('.mr_c_title').css({marginTop: '20px'})
    } 


    var swiper1 = new Swiper(".mySwiper1", {
        // slidesPerView: 'auto',
        // initialSlide: 2,
        // speed: 1000,
        // spaceBetween: 32,
        // loop: true,
        // loopedSlides: 2,
        // touchRatio:0,
        // roundLengths: true,
        // mousewheel: false,
        // grabCursor: true,
        // allowTouchMove: true,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        // slideToClickedSlide: true,
        // thumbs: {
        //   swiper: swiper3
        // },
  
  
        slidesPerView: 2.5,
        pagination: {
            el: ".swiper-pagination",
        },
        
        slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드로 위치 이동
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,     // 슬라이드 회전 각도 (클수록 슬라이딩 시 회전이 커짐)
            stretch: -100,  // 슬라이더 간 거리:px (클수록 슬라이더가 겹침)
            depth: 400,     // 깊이 효과 값 (클수록 멀리)
            modifier: 1,    // 효과 배수 (효과를 강하게 처리)
            slideShadows: false,    // 슬라이더에 그림자(기본값) 없앰
        },
        autoplay: {
            delay: 2500, // 몇 밀리초마다 새로 들어올지
        },
        breakpoints: {
            2000: {
                slidesPerView: 2.2,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 2.2,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 1.3,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 1.3,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 1.3,
                spaceBetween: 0
            }
        }  ,
  
        spaceBetween: 10,   // 슬라이드 사이 여백
        centeredSlides: true,   // 센터 모드
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // }, // 자동재생
        speed: 1000,    // 넘길때 속도]
  
    });
    var swiper2 = new Swiper(".mySwiper2", {
        // spaceBetween: 10,
        // loop: true,
        // mousewheel: false,
        // loopedSlides: 3,
        // allowTouchMove: true,
        // slideToClickedSlide: true,
        // // mousewheel: true,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        // touchRatio: 0,
        // thumbs: {
        //   swiper: swiper4
        // },
  
  
        slidesPerView: 2.5,
        pagination: {
            el: ".swiper-pagination",
        },
        
        slideToClickedSlide : true, // 해당 슬라이드 클릭시 슬라이드로 위치 이동
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,     // 슬라이드 회전 각도 (클수록 슬라이딩 시 회전이 커짐)
            stretch: -100,  // 슬라이더 간 거리:px (클수록 슬라이더가 겹침)
            depth: 400,     // 깊이 효과 값 (클수록 멀리)
            modifier: 1,    // 효과 배수 (효과를 강하게 처리)
            slideShadows: false,    // 슬라이더에 그림자(기본값) 없앰
        },
        autoplay: {
            delay: 2500, // 몇 밀리초마다 새로 들어올지
        },
        breakpoints: {
            2000: {
                slidesPerView: 2.2,
                spaceBetween: 0
            },
            // when window width is >= 768px
            1025: {
            slidesPerView: 2.2,
            spaceBetween: 0
            },
            // when window width is >= 1024px
            767: {
            slidesPerView: 1.3,
            spaceBetween: 0
            },
            400: {
                slidesPerView: 1.3,
                spaceBetween: 0
            },
            100: {
                slidesPerView: 1.3,
                spaceBetween: 0
            }
        }  ,
  
        spaceBetween: 10,   // 슬라이드 사이 여백
        centeredSlides: true,   // 센터 모드
        // autoplay: {
        //     delay: 4500,
        //     disableOnInteraction: false,
        // }, // 자동재생
        speed: 1000,    // 넘길때 속도]
  
    });
  
  
  
  
  
  
  
  
  
    // 빈소안내 슬라이드 opacity
  
   $('.silde_v_1').addClass("opacity_active")
   $('.silde_v_1').click(function(){
     setTimeout(function(){
       swiper1.slideTo(2)
     }, 175)
     $(this).addClass("opacity_active")
     $('.silde_v').not(this).removeClass("opacity_active")
  
     console.log('1클릭중 빈소안내 슬라이드')
   })
   $('.silde_v_2').on("click",function(){
     setTimeout(function(){
       swiper1.slideTo(1)
     }, 175)
     $(this).addClass("opacity_active")
     $('.silde_v').not(this).removeClass("opacity_active")
     console.log('2클릭중 빈소안내 슬라이드')
   })
  
  
  
  
  
  
  
  
    // 시설안내 슬라이드 opacity
  
  
  $('.slide_t_3').addClass("opacity_active")
  $('.slide_t_1').click(function(){
    setTimeout(function(){
      swiper2.slideTo(1)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")
  
    console.log('1클릭중 시설안내 슬라이드')
  })
  $('.slide_t_2').on("click",function(){
    setTimeout(function(){
      swiper2.slideTo(3)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")
    console.log('2클릭중 시설안내 슬라이드')
  })
  $('.slide_t_3').on("click",function(){
    setTimeout(function(){
      swiper2.slideTo(2)
    }, 175)
    $(this).addClass("opacity_active")
    $('.slide_t').not(this).removeClass("opacity_active")
    console.log('3클릭중 시설안내 슬라이드')
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