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
    setTimeout(()=>
       {
            var count = 0;
            var inter;
            
            function add(){
                count += 1;
            }
        
            // $(document).ready(function(){
            //     $('#plus').on('mousedown',function(){
            //         inter = setInterval(add , 70)
            //     })
        
            //     $('#plus').on('mouseup',function(){
            //         clearInterval(inter)
            //     })
            // })

            $('.t_li').click(function(){
                add();
                $(this).find('.view').html(count)
                $(this).find('.view_input').val('');
                $(this).find('.view_input').val(count);
                console.log("view_ add 1+ ")
                
            })

       }, 500
            
    )

    for(let i=0; i<NEWS_LIST[num].length; i++) {
        var c_input = $('.t_li').find('.view_input').val
        console.log('c_input : ', c_input)
        let list = `

                        <li class="t_li">
                            <a href="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}&view=${c_input}" style=" overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" class="color" >
                                <form action="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}&view=${c_input}" method="get">
                                    <p class="t_text_p">
                                        <strong class="t_title">${NEWS_LIST[num][i].title}</strong>
                                        <span class="t_inner_text">
                                            <span class="name" style="max-width: 300px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" title="${NEWS_LIST[num][i].writer}">
                                                ${NEWS_LIST[num][i].writer}
                                                <span class="date notranslate mobile_da_vi">${NEWS_LIST[num][i].date}</span>
                                                <span class="view notranslate mobile_da_vi">0</span>
                                                <input type="hidden" class="view_input" value="0" name="view_input_n">
                                            </span>
                                            <span class="date notranslate desk_da_vi">${NEWS_LIST[num][i].date}</span>
                                            <span class="view notranslate desk_da_vi">0</span>
                                            <input type="hidden" class="view_input" value="0" name="view_input_n">
                                        </span>
                                    </p>
                                </form>
                            </a>
                        </li>`
        $('.t_box').append(list);
    }

   

    
                        
//     <tr>
//     <td class="d_none t_td notranslate">${NEWS_LIST[num][i].num}</td>
//     <td class="t_td">
//         <a href="./news_detail.html?num=${num}&de_num=${NEWS_LIST[num][i].item_no}" style="max-width: 300px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" class="color">${NEWS_LIST[num][i].title}</a>
//         <span class="label_icon"></span>
//     </td>
//     <td class="d_none t_td t_centerv">
//         <a href="#" class="member_1" style="max-width: 300px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" title="${NEWS_LIST[num][i].writer}">${NEWS_LIST[num][i].writer}</a>
//     </td>
//     <td class="t_td right notranslate"><span class="t_td_desk">${NEWS_LIST[num][i].date}</span> <span class="t_td_mobile">${NEWS_LIST[num][i].date2}</span></td>
//     <td class="d_none t_td t_center notranslate">15497</td>
// </tr>
    // let tr_length = $('.table > tbody tr').length;  // 총개수
    // let dataPerPage;  //한 페이지에 나타낼 글 수
    // let pageCount  = 10; //페이징에 나타낼 페이지 수
    // let globalCurrentPage=1; // 현재페이지

    // let totalPageSize = Math.ceil(total / listSize)
    
    // console.log('tr_length : ', tr_length)

    let totalCount = 23; //글의 총수
    let pageSize =10;
    let pageNumber = 1; // 현재 페이지

    let _totalPages = totalCount / 10

    // 10  만약 글이 23개 있다면 10개로 나눠서 페이지당 글 구성이 10개 10개 3개가 된다는 말.
    if(totalCount % 10 > 0){
        _totalPages++;
    }

    // $('.t_box').twbsPagination({ 
    //     startPage:1,
    //     totalPages: _totalPages,
    //     //페이지당 보이는 글의수는 10개
    //     visiblePages: 10,
        
    //     //" « "라는 문자열로 최신글 방향을 표시
    //     first:'<span sris-hidden="true"><<</span>' ,
        
    //     //" » "라는 문자열로 마지막글 방향을 표시
    //     last:'<span sris-hidden="true">>></span>' ,
        
    //     prev:"<",
    //     next:">",
    //     onPageClick: function (event, page) {
        
    //     //확인을 위해 클릭한 페이지의 번호를 알림창으로 출력	
    //         // alert(page); 
    //             }
    //     })
        

    // if (tr_length > 15) {
    //     console.log('15개야 더이상 안돼! 다음페이지에서 봐')
    // }

    // $('.first ').click(function(){
        
    // })
    $(function(){
        /* 
            변수 생성
            - rowsPerPage 페이지당 보여줄 개수 7
            - rows 가로행의 tr
            - rowsCount 가로행의 개수 tr 개수 
            - pageCount 페이지네이션 개수 = 100/20
            - numbers
            콘솔에서 page Count
        */
       var rowsPerPage = 10,
           rows = $('.table tbody tr'),
           rowsCount = rows.length,
           pageCount = Math.ceil(rowsCount/rowsPerPage),
           numbers = $('#numbers');

        // console.log('pageCount', pageCount);

        /* 페이지네이션 li를 생성 반복문 */
        for(var i=1; i<= pageCount; i++) {
            numbers.append('<li><a class="notranslate" href="">'+i+'</a></li>')
        }
        /*  1번 1~ 20
                2번 21 ~ 40
                3번 41 ~ 60
                1.2.3.4.5.6.7.8.9.....

                함수(1)
                A.slice(시작값, 끝값)
                A.slice(0, 20)
                  //A.slice(10, 20)

                함수(2)
                A.slice(20, 40)
                2~

                .show()
        */
        // #numbers li:first-child a
        numbers.find('li:first-child a').addClass('pagination_active');

        // 페이지네이션 함수 displayRows
        function displayRows(idx) {
                var start = (idx - 1) * rowsPerPage;
                    end = start + rowsPerPage;
                rows.hide();
                rows.slice(start, end).show();
        }
        displayRows(1);
        // 페이지네이션 클릭시 보여주기
        /*
            쿨락헌 그 a tag에 active,
            그요소의 숫자를 displayRows의 매개변수 지정.
        */

        numbers.find('li a').click(function(e){
            e.preventDefault();
            numbers.find('li a').removeClass('pagination_active');
            $(this).addClass('pagination_active');
            var index = $(this).text();
            console.log(index);
            displayRows(index);
        })
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