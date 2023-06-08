$(document).ready(function(){

    const urlParams = new URL(location.href).searchParams;
    const selec = urlParams.get('selec');
    console.log('selec',selec)
    const num = urlParams.get('num');
    console.log(num)

    if (num == 0) {
         $('#selec0').prop("selected", true);
        $('.notice').addClass('active')
        $('.n_news_1').addClass('nav_active')
        $('.m_right').css({paddingBottom:'150px'})
        
        $('.dn_1').css({color: '#ee791c'})
    } else if (num == 1) {
         $('#selec1').prop("selected", true);
        $('.ect').addClass('active')
        $('.n_news_2').addClass('nav_active')
        $('.m_right').css({paddingBottom:'200px'})
        
        $('.dn_2').css({color: '#ee791c'})
    } else if (num == 2) {
         $('#selec2').prop("selected", true);
        $('.media').addClass('active')
        $('.n_news_3').addClass('nav_active')
        
        $('.dn_3').css({color: '#ee791c'})
    } else if (num == 3) {
         $('#selec3').prop("selected", true);
        $('.recruitment').addClass('active')
        $('.n_news_4').addClass('nav_active')
        
        $('.dn_4').css({color: '#ee791c'})
    } else if (num == 4) {
         $('#selec4').prop("selected", true);
        $('.diet').addClass('active')
        $('.n_news_5').addClass('nav_active')
        $('.m_right').css({paddingBottom:'150px'})
        
        $('.dn_5').css({color: '#ee791c'})
    } else if (num == 5) {
         $('#selec5').prop("selected", true);
        $('.question').addClass('active')
        $('.n_news_6').addClass('nav_active')
        
        $('.dn_6').css({color: '#ee791c'})
    }

    for(let i=0; i<1; i++) {
        let list2 = `
                <p>${NEWS_TITLE[0][num].title}</p>
        `
        $('.title_box').append(list2);
    } 
   
   

    for(let i=0; i<NEWS_LIST[num].length; i++) {
        var c_input = $('.t_li').find('.view_input').val
        console.log('c_input : ', c_input)
        let list = `

                        <li class="t_li">
                            <a href="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}" style=" overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" class="color" >
                                <form action="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}" method="get">
                                    <p class="t_text_p">
                                        <strong class="t_title">${NEWS_LIST[num][i].title}</strong>
                                        <span class="t_inner_text">
                                            <span class="name" style="max-width: 300px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" title="${NEWS_LIST[num][i].writer}">
                                                ${NEWS_LIST[num][i].writer}
                                                <span class="date notranslate mobile_da_vi">${NEWS_LIST[num][i].date}</span>
                                                <!--span class="view notranslate mobile_da_vi">0</span>
                                                <input type="hidden" class="view_input" value="0" name="view_input_n"-->
                                            </span>
                                            <span class="date notranslate desk_da_vi">${NEWS_LIST[num][i].date}</span>
                                            <input type="hidden" class="news_divide" value="num_${NEWS_LIST[num][i].item_no}" id="num_${NEWS_LIST[num][i].item_no}" name="news_${NEWS_LIST[num][i].cate_no}">
                                            <!--span class="view notranslate desk_da_vi" id="view_${NEWS_LIST[num][i].cate_no}_${NEWS_LIST[num][i].item_no}">0</span>
                                            <input type="hidden" class="view_input" value="0" name="view_input_n"-->
                                        </span>
                                    </p>
                                </form>
                            </a>
                        </li>`
        $('.t_box').append(list);
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



//     setTimeout(()=>
//     {
//          var count = 0;
//          var inter;
         
//          function add(){
//              count += 1;
//          }
     
//          // $(document).ready(function(){
//          //     $('#plus').on('mousedown',function(){
//          //         inter = setInterval(add , 70)
//          //     })
     
//          //     $('#plus').on('mouseup',function(){
//          //         clearInterval(inter)
//          //     })
//          // })
//         //  if(num == 0) {
//         //      console.log("공지사항")
             
//         //      $('.t_li').click(function(){
//         //          setTimeout(()=>
//         //          { var news_divide = $(this).find('.view').attr('id');
//         //              alert("news_divide :", news_divide) 

//         //              if(news_divide == 'view_0_1') {
//         //                  localStorage.setItem('news_0_1', '0_1번입니다');
//         //              } else if(news_divide == 'view_0_2') {
//         //                  localStorage.setItem('news_0_2', '0_2번입니다');
//         //              }
                 
//         //          }, 200)
                 

//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  } else if(num == 1) {
//         //      $('.t_li').click(function(){
//         //          setTimeout(()=>
//         //          { var news_divide = $(this).find('.view').attr('id');
//         //          alert("news_divide :", news_divide) 

//         //          if(news_divide == 'view_1_1') {
//         //              localStorage.setItem('news_1_1', '1_1번입니다');
//         //          } else if(news_divide == 'view_1_2') {
//         //              localStorage.setItem('news_1_2', '1_2번입니다');
//         //              alert(localStorage.news_1_2(0))
//         //          }
             
//         //          }, 200)
                 
                 

//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  } else if(num == 2) {
//         //      $('.t_li').click(function(){
//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  } else if(num == 3) {
//         //      $('.t_li').click(function(){
//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  } else if(num == 4) {
//         //      $('.t_li').click(function(){
//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  } else if(num == 5) {
//         //      $('.t_li').click(function(){
//         //          add();
//         //          $(this).find('.view').html(count)
//         //          var id_view = $(this).find('.view').attr("id");
//         //          $(this).find('.view_input').val('');
//         //          $(this).find('.view_input').val(count);
//         //          localStorage.setItem(id_view, count);
//         //          console.log( $(this).find('.view').attr("id"))
//         //          console.log("view_ add 1+ ")
 
 
//         //          if(localStorage.getItem('id_view_alpha')) {
//         //              var lastData = localStorage.getItem('id_view_alpha')
//         //              console.log('lastData :', lastData)
 
                     
//         //              localStorage.setItem(id_view, count + Number(lastData));
//         //              $(this).find('.view').html(lastData)
//         //          }
                 
//         //      })
//         //  }
         

//          // var view_input = $('.view_input').val('');
//          // var location_1 = $(location).attr('href');
//          // var location_2 = location_1 + '&' + 'view' + '=' + Number(count);
//          // console.log("location_1 :", location_1, "location_2 : ", location_2)

//     }, 100
         
//  )
 
    
})