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
                                        <div class="l_img_box">
                                            <img src="./img/medi_details/${DOCTOR[value][i].img_src}.jpg" alt="d_${DOCTOR[value][i].img_src}_img" class="l_img">
                                            <a href="./medi_more.html?cate=${DOCTOR[value][i].cate_no}&item=${DOCTOR[value][i].item_no}" class="more_btn desk_more_btn">자세히보기</a> 
                                        </div>
                                    </div>
                                    <div class="c_right_box">
                                        <div class="list_div cr_top_box">
                                            <ul class="list_ul">
                                                <li class="list_li">
                                                    <span class="name_li">${DOCTOR[value][i].name}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>진료과</span>
                                                    <span class="li_span">${DOCTOR[value][i].medi_con}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>대표약력</span>
                                                    <span class="li_span" style="color:#dc3545">${DOCTOR[value][i].medi_his_con}</span>
                                                </li>
                                                <li class="list_li">
                                                    <span>전문분야</span>
                                                    <span class="li_span">${DOCTOR[value][i].one_speci_con}</span>
                                                </li>
                                            </ul>
                                            
                                        </div>
                                        <div class="cr_bottom_box">
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
                                                            <th class="t_bg_light">오전</th>`
                                                        for(let j=0; j<DOCTOR[value][i].morn_color.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[value][i].morn_color[j]}"></span></div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">오후</th>`
                                                        for(let j=0; j<DOCTOR[value][i].afte_color.length; j++) {
                                                        list +=`<td>
                                                                <div><span class="text_circle ${DOCTOR[value][i].afte_color[j]}"></span></div>`
                                                        }
                                                    list +=`</td>
                                                        </tr>
                                                        <tr>
                                                            <th class="t_bg_light">비고</th>`
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
                                                    <span class="text_primary">진료</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_danger"></div>
                                                    <span class="text_danger">수술/검사</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_intensive_care_unit"></div>
                                                    <span class="text_intensive_care_unit">중환자실</span>
                                                </span>
                                                <span>
                                                    <div class="circle cir_success"></div>
                                                    <span class="text_success">문의</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="l_more_btn">
                                            <a href="./medi_more.html?cate=${DOCTOR[value][i].cate_no}&item=${DOCTOR[value][i].item_no}" class="more_btn mobile_more_btn">자세히보기</a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            `
    
            $('.one_doctor_box').append(list);
            console.log(10)
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
    
    })