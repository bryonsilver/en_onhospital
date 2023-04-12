$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const cate = urlParams.get('cate');
    console.log(cate)

    

    for(let i=0; i<1; i++)  {
        let title_list1  = `
                    <div class="title_icon_box">
                        <div class="img_box"></div>
                        <div class="onn_desk_title">
                            <div class="title_box_onn" id="tbox_onn">
                                <span class="icon_title"><img src="./img/medi_details/icon/${onn_list[cate][0].title_icon}.png" alt=""></span>
                                <h4>${onn_list[cate][0].medi_name}</h4>
                            </div>
                            <div class="content_box_onn">
                                <span>${DOC_TITLE[0][cate].content}</span>
                            </div>
                        </div>
                    </div>
        `;
        $('.m_top_2').append(title_list1);
    }
    


    for(let i=0; i<1; i++) {
        list = `
                    <div class="onn_video_box">`
                            if(onn_list[cate][0].ifrma_name != null) {
                                for(let j=0; j<onn_list[cate][0].ifrma_name.length; j++) {
                                list += ` <div class="video">
                                                <div class="video_box yol_${onn_list[cate][0].cate_no}_on_${onn_list[cate][0].num[j]}">
                                                <span class="oe_num_box"><span>${onn_list[cate][0].num[j]}</span></span>
                                                    <span class="oe_content_box">
                                                        <div class="oe_c_thum_box">
                                                            <div class="oe_ct_img_box"><img src="./img/onn/${onn_list[cate][0].thum_img_src[j]}.webp" alt=""></div>
                                                            <div class="oe_ct_running_time"><span>${onn_list[cate][0].running_time[j]}</span></div>
                                                        </div>
                                                        <div class="oe_c_context_box">
                                                            <div class="oe_cc_title">
                                                                <span class="ifram_name">${onn_list[cate][0].ifrma_name[j]}</span>
                                                                <input type="hidden" id="oe_cc_input" value="${onn_list[cate][0].ifrma_name[j]}">
                                                            </div>
                                                            <div class="oe_cc_ext_text_box">
                                                                <div class="oe_cc_class"><span>${onn_list[cate][0].medi_name}</span></div>
                                                                <div class="oe_cc_tem">•</div>
                                                                <div class="oe_cc_ext_text">
                                                                    <span>${onn_list[cate][0].explanation[j]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                                
                                                    
                                                <span class="oe_video">
                                                    <iframe width="100%" height="450" src="${onn_list[cate][0].ifram_src[j]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </span>
                                            </div>`
                                }
                            } 
                            else {
                            list += `
                                    <span class="nothing_text">
                                        <img src="./img/common/sorry.png" alt="">
                                        <span>영상 준비중입니다...</span>
                                    </span>`
                            }
                list += `
                    </div>`;
                    //         if(onn_list[cate][0].ifrma_name != null) {
                    //             for(let j=0; j<onn_list[cate][0].ifrma_name.length; j++) {
                    //             list += `   <li class="onn_v_li">
                    //                             <div class="ov_li_title_box">
                    //                                 <img src="./img/guide/qm_1.png" alt="" class="onn_qm">
                    //                                 <span>${onn_list[cate][0].ifrma_name[j]}</span>
                    //                                 <img src="./img/guide/qm_2.png" alt="" class="onn_qm">
                    //                             </div>
                    //                             <div class="ov_li_video">
                    //                                 <iframe width="100%" height="600" src="${onn_list[cate][0].ifram_src[j]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    //                             </div>
                    //                         </li>   `
                    //             }
                    //         } 
                    //         else {
                    //         list += `<li class="onn_v_li">
                    //                     <span class="nothing_text">
                    //                         <img src="./img/common/sorry.png" alt="">
                    //                         <span>영상 준비중입니다...</span>
                    //                     </span>
                    //                 </li>`
                    //         }
                    // list += ` </ul>
                    //     </div> `;

        $('.onn_con_main').append(list);
    }

    // onn tv 리스트 클릭 시 아코디언 형식으로 영상 나오기
    $(document).ready(function(){
        $(".oe_video").hide();
        // $("ul > li:first-child a").next().show();
        $(".video_box").click(function(){
            $(this).next().slideToggle(300);
            // $(this).next().slideDown(300);
            $(".video_box").not(this).next().slideUp(300);
            return false;
        });
    });

    for(let i=0; i<1; i++) {
        list_2 = `<ul class="yo_ul">`
                    if(onn_list[cate][0].ifrma_name != null) {
                        for(let j=0; j<onn_list[cate][0].ifrma_name.length; j++) {
                            list_2 += ` <li class="yo_li yol_${onn_list[cate][0].cate_no}_${onn_list[cate][0].num[j]}">
                                            <iframe src="${onn_list[cate][0].ifram_src[j]}" allowfullscreen="" ></iframe>
                                            <input type="hidden" id="yl_input" value="${onn_list[cate][0].ifrma_name[j]}">
                                        </li>`
                        }
                    } 
                    else {
            list_2 += `
                        <li class="yo_li yol_1"></li>`
                    }
                    
            list_2 += `
                    </ul>`;

        $('.yo_center_box').append(list_2);
    }


// yo_center_box (검은 반투명 배경)을 클릭 시 영상이 꺼지며 검은 배경이 사라짐
    // $('.you_onn_box').click(function(){
    //     $('.you_onn_box').css('display', 'none')
    //     $('.yo_li').empty();
    // })
    // $('.yo_li').empty();


// 병원장 TV 클릭시 유튜브 팝업이 나오도록 
    $('.onn_video_bx').on('click',function(event){
        // let dv = event.currentTarget;
        console.log('클릭 youtube')
        // $('.you_onn_box').css('display', 'block')

        // this로 각각 하지말고 통합으로 해서 클릭했을때 onn video의 영상 이름과 영상 링크의 영상이름이 같으면 보여주고 다시 껐다 켰을때에도 그거에 맞는 링크를 추가하려고 했는데...
        // var span_v = $('#oe_cc_input').val();
        // var onn_frame_n = $('.ifram_name').text();
        // var cn = this_b.querySelector('#oe_cc_input').value;
        // var cn = $(this).children('.video_box').children('.oe_content_box').children('.oe_c_context_box').children('.oe_cc_title').children('#oe_cc_input').val();
        // $('#oe_cc_input').attr('value', cn);
        // var y_input_v = $('#oe_cc_input').val();
        // console.log("cn :", cn, ',',)





        let on_if_1 = '<iframe src="${onn_list[cate][0].ifram_src[j]}" allowfullscreen="" ></iframe>';
    })



    
//    var len = onn_list[cate][0].ifrma_name
//     // console.log("counter: ", onn_list[cate][0].ifrma_name.length)
//     $(document).ready(function() {
        
//         if (onn_list[cate][0].ifrma_name == null) {
//             console.log("if")
//             var num_2 = 0;
//             var con = 0;
            
//             console.log('con : ', con );

//         } 
//         else {
//             console.log("else")
//             var num_2 = 0;
//             for (var i = 0; i < len.length; i++) {
//                 var con = num_2++;
//             }
            
//             console.log('con : ', con + 1);
//         }             
        
//         // console.log('con: ', con)
//         // $('.medi_onn > a > .number_images').html(con)


       
//     })






    if (cate == 0) {
        $('#selec0').prop("selected", true);
        $('.medi_onn_1').addClass('nav_active')
    } else if (cate == 1) {
        $('#selec1').prop("selected", true);
        $('.medi_onn_2').addClass('nav_active')
        $('.medi_onn').not('.medi_onn_2').removeClass('active')
    } else if (cate == 2) {
        $('#selec2').prop("selected", true);
        $('.medi_onn_3').addClass('nav_active')
    } else if (cate == 3) {
        $('#selec3').prop("selected", true);
        $('.medi_onn_4').addClass('nav_active')
    } else if (cate == 4) {
        $('#selec4').prop("selected", true);
        $('.medi_onn_5').addClass('nav_active')
    } else if (cate == 5) {
        $('#selec5').prop("selected", true);
        $('.medi_onn_6').addClass('nav_active')
    } else if (cate == 6) {
        $('#selec6').prop("selected", true);
        $('.medi_onn_7').addClass('nav_active')
    } else if (cate == 7) {
        $('#selec7').prop("selected", true);
        $('.medi_onn_8').addClass('nav_active')
    } else if (cate == 8) {
        $('#selec8').prop("selected", true);
        $('.medi_onn_9').addClass('nav_active')
    } else if (cate == 9) {
        $('#selec9').prop("selected", true);
        $('.medi_onn_10').addClass('nav_active')
    } else if (cate == 10) {
        $('#selec10').prop("selected", true);
        $('.medi_onn_11').addClass('nav_active')
    } else if (cate == 11) {
        $('#selec11').prop("selected", true);
        $('.medi_onn_12').addClass('nav_active')
    } else if (cate == 12) {
        $('#selec12').prop("selected", true);
        $('.medi_onn_13').addClass('nav_active')
    } else if (cate == 13) {
        $('#selec13').prop("selected", true);
        $('.medi_onn_14').addClass('nav_active')
    } else if (cate == 14) {
        $('#selec14').prop("selected", true);
        $('.medi_onn_15').addClass('nav_active')
    } else if (cate == 15) {
        $('#selec15').prop("selected", true);
        $('.medi_onn_16').addClass('nav_active')
    } else if (cate == 16) {
        $('#selec16').prop("selected", true);
        $('.medi_onn_17').addClass('nav_active')
    } else if (cate == 17) {
        $('#selec17').prop("selected", true);
        $('.medi_onn_18').addClass('nav_active')
    } else if (cate == 18) {
        $('#selec18').prop("selected", true);
        $('.medi_onn_19').addClass('nav_active')
    } else if (cate == 19) {
        $('#selec19').prop("selected", true);
        $('.medi_onn_20').addClass('nav_active')
    } else if (cate == 20) {
        $('#selec20').prop("selected", true);
        $('.medi_onn_21').addClass('nav_active')
    } else if (cate == 21) {
        $('#selec21').prop("selected", true);
        $('.medi_onn_22').addClass('nav_active')
    } else if (cate == 22) {
        $('#selec22').prop("selected", true);
        $('.medi_onn_23').addClass('nav_active')
    } else if (cate == 23) {
        $('#selec23').prop("selected", true);
        $('.medi_onn_24').addClass('nav_active')
    } else if (cate == 24) {
        $('#selec24').prop("selected", true);
        $('.medi_onn_25').addClass('nav_active')
    } else if (cate == 25) {
        $('#selec25').prop("selected", true);
        $('.medi_onn_26').addClass('nav_active')
    } else if (cate == 26) {
        $('#selec26').prop("selected", true);
        $('.medi_onn_27').addClass('nav_active')
    } else if (cate == 27) {
        $('#selec27').prop("selected", true);
        $('.medi_onn_28').addClass('nav_active')
    } else if (cate == 28) {
        $('#selec28').prop("selected", true);
        $('.medi_onn_29').addClass('nav_active')
    } 
})