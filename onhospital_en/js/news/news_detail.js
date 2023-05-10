$(document).ready(function(){
    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    const de_num = urlParams.get('de_num');
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    console.log(num)
    console.log(de_num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.ml_ul > .nav_1').addClass('active')
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.ml_ul > .nav_2').addClass('active')
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.ml_ul > .nav_3').addClass('active')
        // $('.mr_main_comment').css({margin:'0 !important', padding: '0 !important'})
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.ml_ul > .nav_4').addClass('active')
    } else if (num == 4) {
         $('#selec4').prop("selected", true);
        $('.ml_ul > .nav_5').addClass('active')
    } else if (num == 5) {
         $('#selec5').prop("selected", true);
        $('.ml_ul > .nav_6').addClass('active')
    }

    
    let d_num = de_num -1
    let data = NEWS_DETAIL[num];
    let dn5_const = data[d_num].const
    let dn2_const = data[d_num].top_bold
    let dn2_center_con = data[d_num].center_con
    let dn_con_4 = data[d_num].con4
    for(let i=0; i<1; i++) {
         let list = `
                        <div class="mr_title_box">
                            <div class="mr_t_title">
                                ${data[d_num].title}
                            </div>
                            <div class="mr_t_date">
                                <div class="date_box">
                                    <div class="date">
                                        <span>${data[d_num].date[0]}</span>
                                        <span>${data[d_num].date[1]}</span>
                                    </div>
                                    <div class="read_num">506</div>
                                </div>
                                <div class="writer">
                                    <a href="#" class="member_1">${data[d_num].writer}</a>
                                </div>
                            </div>
                        </div>`

                        if(num == 0 ) {
                    list += `<div class="mr_coment_box">
                                <div class="mr_main_comment">
                                    <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                    <p><span class="red_text2" style="display:block">${data[d_num].red}</span>${data[d_num].const}</p>
                                    <p>step,<span class="red_text2">ON Hospital Emergency Center is available 24 hours a day, 365 days a year.</span></p>
                                    <p>[※ Emergency room: 051) 607-0119]</p>
                                </div>`
                        } else if (num == 1) {
                            if(de_num != 4) {
                                list += `<div class="mr_coment_box">
                                            <div class="mr_main_comment">
                                                <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>`
                            }
                            else if(de_num == 4) {
                        list += `<div class="mr_coment_box">
                                    <div class="mr_main_comment">
                                        <p style="margin:0"><video controls="" data-file-srl="1818" src="./img/news/${data[d_num].iframe_link}">&nbsp;</video></p>
                                        <p style="margin:0" class="mr_underline_text">${data[d_num].under_text}</p>
                                        <p style="margin:0" class="mr_num_text margin_top">${data[d_num].num_text[0]}</p>
                                        <p style="margin:0" class="mr_num_text">${data[d_num].num_text[1]}</p>
                                        <p style="margin:0" class="mr_num_text">${data[d_num].num_text[2]}</p>
                                        <p style="margin:0" class="mr_num_text">${data[d_num].num_text[3]}</p>
                                        <p style="margin:0" class="mr_num_text">${data[d_num].num_text[4]}</p>
                                        <p style="margin:0" class="mr_ext margin_top">${data[d_num].ext_text[0]}</p>
                                        <p style="margin:0" class="mr_ext">${data[d_num].ext_text[1]}</p>
                                        <hr>
                                        <p style="margin:0" class="mr_recomm">${data[d_num].recomm_text[0]}</p>
                                        <p style="margin:0" class="mr_recomm">${data[d_num].recomm_text[1]}</p>
                                        <p style="margin:0" class="mr_recomm">
                                            <a href="https://cafe.naver.com/standuphospital/54">
                                                ${data[d_num].link_text[0]}
                                                <img src="./img/news/${data[d_num].link_text[1]}" alt="">
                                            </a>
                                        </p> `
                            }
                        } else if (num == 2) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p class="top_small">${data[d_num].top_small}</p>`
                                            if(de_num != 1) {
                                                for(let j=0; j<dn2_const.length; j++) {
                                                list += `<p class="top_bold">${data[d_num].top_bold[j]}</p>`
                                                }
                                            } else if (de_num == 1) {
                                            }
                                    list += `<p class="top_content">${data[d_num].top_content}</p>`
                                        if (de_num == 10) {
                                           list+= `<p class="img_p" style="text-align:center"><img style="max-width: 500px" src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                           
                                           <p class="img_text">${data[d_num].img_text}</p>
                                           `
                                        }
                                        else if (de_num == 8 ) {
                                            list+= `<p class="img_p" style="text-align:center"><img style="max-width: 500px" src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                           
                                           <p class="img_text">${data[d_num].img_text}</p>
                                           `
                                        }
                                        else if (de_num == 4 ) {
                                            list+= `<p class="img_p"><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                           
                                           <p class="img_text">${data[d_num].img_text[0]}</p>
                                           <p class="img_text">${data[d_num].img_text[1]}</p>
                                           <p class="img_text">${data[d_num].img_text[2]}</p>
                                           `
                                        }
                                        else if (de_num != 10 || de_num != 8 || de_num != 7 || de_num != 4) {
                                            list +=`<p class="img_p"><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                            <p class="img_text">${data[d_num].img_text}</p>`
                                        }
                                   
                                            for(let j=0; j<dn2_center_con.length; j++) {
                                                list += `<p class="center_con">${data[d_num].center_con[j]}</p>`
                                            }
                                            if(de_num == 4) {
                                                list += `
                                                    <p class="img_p"><img src="./img/news/${data[d_num].img_src_2}" alt="${data[d_num].img_src_2}" class="news_de_img"></p>
                                                `
                                            }
                                    list +=  `<div class="sources_box">
                                            <div>${data[d_num].editor}</div>
                                            <a href="${data[d_num].a_link}"> <div>${data[d_num].sources}</div></a>
                                        </div>
                                    </div>`
                        } else if (num == 3) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            `
                                            if (de_num == 1) {
                                     list +=  `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>`
                                            }
                                            else if (de_num == 9) {
                                                for(let j=0; j<4; j++) {
                                                    list+= `<p>${data[d_num].con1[j]}</p>`
                                                }
                                            } 
                                            else if (de_num == 10) {
                                                for(let j=0; j<1; j++) {
                                                    list+= `<p>${data[d_num].con1[j]}</p>`
                                                }
                                            } 
                                            
                                            else if(de_num != 5) {
                                    list += `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p> 
                                            <div class="box_1 box">
                                                <p class="blue_bold_t">${data[d_num].con_title[0]}</p>`
                                                for(let j=0; j<4;j++) {
                                         list +=  `<p>${data[d_num].con1[j]}</p>`
                                                }
                                    list+= ` </div>
                                            <div class="box_2 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[1]}</p>`
                                                for(let j=0; j<data[d_num].con2.length;j++) {
                                                    if (de_num == 1 ) {
                                                        list +=  `<p>${data[d_num].con2[j]}</p>`
                                                    } 
                                                    else if (de_num == 4) {
                                                        list +=  `<p class="bold">${data[d_num].con2[j]}</p>`
                                                    }
                                                } 
                                                if (de_num == 2 || de_num == 3 ) {
                                                    list +=  `<p class="bold">${data[d_num].con2[0]}</p>
                                                            <p class="left3">${data[d_num].con2[1]}</p>
                                                            <p class="left4">${data[d_num].con2[2]}</p>
                                                    `
                                                } 
                                    list+= `</div>
                                            <div class="box_3 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[2]}</p>
                                                <p class="bold">${data[d_num].con3[0]}</p>
                                                <p>${data[d_num].con3[1]}</p>
                                            </div>
                                            <div class="box_4 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[3]}</p>`
                                                for(let j=0; j<dn_con_4.length; j++) {
                                            list +=`<p>${data[d_num].con4[j]}</p>`
                                                }
                                     list+=  `</div>
                                            <div class="box_5 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[4]}</p>`
                                                if (de_num != 4) {
                                                    list+=    `<p>${data[d_num].con5[0]}</p>
                                                    <p class="small_left">${data[d_num].con5[1]}</p>
                                                    <p class="small_left">${data[d_num].con5[2]}</p>
                                                    <p class="small_left">${data[d_num].con5[3]}</p>
                                                    <p class="small_left">${data[d_num].con5[4]}</p>
                                                    <p class="small_left">${data[d_num].con5[5]}</p>
                                                    <p class="small_left">${data[d_num].con5[6]}</p>`
                                                } else if (de_num == 4) [
                                                    list+=   `<p>${data[d_num].con5[0]}</p>
                                                    <p class="small">${data[d_num].con5[1]}</p>
                                                    <p class="small">${data[d_num].con5[2]}</p>
                                                    <p class="small">${data[d_num].con5[3]}</p>
                                                    <p class="small_under">${data[d_num].con5[4]}</p>
                                                    <p class="small_under">${data[d_num].con5[5]}</p>`
                                                ]
                                                
                                                list+=  `</div>

                                            <div class="box_6 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[5]}</p>
                                                <p>${data[d_num].con6[0]}</p>
                                                <p>${data[d_num].con6[1]}</p>
                                            </div>

                                            <div class="box_7 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[6]}</p>`
                                            if (de_num != 4) {
                                        list += `<p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                                <p>${data[d_num].con7[2]}</p>
                                                <p>${data[d_num].con7[3]}</p>`
                                            } else if (de_num == 4) {
                                        list +=  `<p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                                <p class="left2">${data[d_num].con7[2]}</p>
                                                <p class="left">${data[d_num].con7[3]}</p>
                                                <p class="left">${data[d_num].con7[4]}</p>
                                                <p class="left">${data[d_num].con7[5]}</p>
                                                <p class="left">${data[d_num].con7[6]}</p>
                                                <p class="left">${data[d_num].con7[7]}</p>
                                                <p class="left">${data[d_num].con7[8]} <span  class="bold">${data[d_num].con7[9]}</span></p>`
                                            }
                                   list += `</div>
                                            <div class="box_8 box"> 
                                                <p class="blue_bold_t">${data[d_num].con_title[7]}</p>
                                                <p>${data[d_num].con8[0]}</p>
                                                <p>${data[d_num].con8[1]}</p>
                                            </div>
                                                
                                            `
                                            } else if (de_num == 5) {
                                    list += `<p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                            <span class="bold2">${data[d_num].img_text}</span>
                                            <div class="box_1 box">
                                                <p class="orange_bold_t">${data[d_num].con_title[0]}</p>`
                                                for(let j=0; j<3;j++) {
                                         list +=  `<p>${data[d_num].con1[j]}</p>`
                                                }
                                    list+= ` </div>
                                            <div class="box_2 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[1]}</p>
                                                <p class="bold">${data[d_num].con2[0]}</p>
                                                <p class="bold">${data[d_num].con2[1]}</p>
                                                <p class="bold">${data[d_num].con2[2]}</p>
                                                <p>${data[d_num].con2[3]}</p>
                                                <p>${data[d_num].con2[4]}</p>
                                            </div>
                                            <div class="box_3 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[2]}</p>
                                                <p>${data[d_num].con3}</p>
                                            </div>
                                            <div class="box_4"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[3]}</p>`
                                                for(let j=0; j<10; j++) {
                                            list +=`<p class="n_bold">${data[d_num].con4[j]}</p>`
                                                }
                                        list +=`</div>
                                            <div class="box_5 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[4]}</p>
                                                <p>${data[d_num].con5[0]}</p>
                                                <p class="small">${data[d_num].con5[1]}</p>
                                                <p class="small">${data[d_num].con5[2]}</p>
                                                <p class="small">${data[d_num].con5[3]}</p>
                                                <p class="small_under">${data[d_num].con5[4]}</p>
                                                <p class="small_under">${data[d_num].con5[5]}</p>
                                            </div>

                                            <div class="box_6 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[5]}</p>
                                                <p>${data[d_num].con6[0]}</p>
                                                <p class="left5">${data[d_num].con6[1]}</p>
                                                <p class="left5">${data[d_num].con6[2]}</p>
                                                <p>${data[d_num].con6[3]} <span  class="bold">${data[d_num].con6[4]}</span></p>
                                            </div>
                                            <div class="box_7 box"> 
                                                <p class="orange_bold_t">${data[d_num].con_title[6]}</p>
                                                <p>${data[d_num].con7[0]}</p>
                                                <p>${data[d_num].con7[1]}</p>
                                            </div>
                                            `
                                            }
                        } else if (num == 4) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">
                                            <p><img src="./img/news/${data[d_num].img_src}" alt="${data[d_num].img_src}" class="news_de_img"></p>
                                        </div>`
                        } else if (num == 5) {
                            list += `<div class="mr_coment_box">
                                        <div class="mr_main_comment">`
                                            for (let j=0; j<dn5_const.length; j++) {
                                         list += `<p class="question">${data[d_num].const[j]}</p>`
                                            }
                                list += `</div>`
                        }
            list += `   <div class="turn_table_box">
                            <div class="pr_ne_box">
                                <div class="prev">`
                                    if(de_num == 1) {
                                        console.log('배열 마지막 de_num last : ',de_num.length - 1)
                                list += `<a href="" class="news_de_prev news_btn" style="pointer-events: none; cursor: default">◀ PREV</a>`
                                    } else if (de_num != 1) {
                                list += `<a href="./news_detail.html?num=${num}&de_num=${de_num - 1}" class="news_de_prev news_btn">◀ PREV</a>`
                                    }
                        list += `</div>
                                <div class="next">`
                                    if(data.length == de_num) {
                                        console.log('data length : ', data.length)
                                list += `<a href="" class="news_de_next news_btn" style="pointer-events: none; cursor: default">NEXT ▶</a>`
                                    }
                                    else if (data.length != de_num) {
                                list += `<a href="./news_detail.html?num=${num}&de_num=${Number(de_num) + 1}" class="news_de_next news_btn">NEXT ▶</a>`                                     
                                    }                                        
                        list += `</div>
                                </div>
                                <div class="list_return">
                                    <a href="./news.html?num=${num}" class="news_de_list news_btn">목록</a>
                                </div>
                            </div>
                        </div>`
         $('.m_right').append(list);
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