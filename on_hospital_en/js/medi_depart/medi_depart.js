$(document).ready(function(){
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
    $('#selec4').prop("selected", true);
    $('.rt1_box .box_input').css({
        background:'#ee791c',
        color:'#fff'
    })
    $('.sec_med_depart').click(function(){
        $('.sec_med_depart').addClass("sec_active")
        $('.sec_med_team').removeClass("sec_active")
        console.log('DEPARTMENT 클릭')

        $('.sec_q_1').css({display:'grid'})
        $('.sec_q_2').css({display:'none'})
    })
    
    $('.sec_med_team').click(function(){
        $('.sec_med_team').addClass("sec_active")
        $('.sec_med_depart').removeClass("sec_active")
        console.log('의료진 클릭')

        $('.sec_q_2').css({display:'grid'})
        $('.sec_q_1').css({display:'none'})
    })
    
    $('.rt1').addClass('rt_active')
    $('.radio_tab_box1').addClass('rt_box_active')

    $('#rt1').click(function(){
        $('.rt1').addClass('rt_active')
        

        // 가나다순 
        $('.rt2').removeClass('rt_active')

        $('.radio_tab_box1').addClass('rt_box_active')
        $('.radio_tab_box2').removeClass('rt_box2_active')

    })
    $('#rt2').click(function(){
        $('.rt2').addClass('rt_active')
        // 가나다순 
        $('.rt1').removeClass('rt_active')


        $('.radio_tab_box2').addClass('rt_box2_active')
        $('.radio_tab_box1').removeClass('rt_box_active')
    })




    // if(!!medi_depart) {
    //     console.log("DEPARTMENT 체크 해주셔서 감사합니다")
    // } 
    // else if(!!medi_center) {
    //     console.log("센터 체크 해주셔서 감사합니다")
    // } 
    // else if (!!medi_clinic){
    //     console.log("클리닉 체크 해주셔서 감사합니다")
    // }

    // medi_depart 센터 클리닉 클릭 시
    var medi_depart_val = $('.input[id=medi_de]:checked').val();
    var medi_center_val = $('.input[id=medi_ce]:checked').val();
    var medi_clinic_val = $('.input[id=medi_cl]:checked').val();

    $('#medi_de').trigger('click');
    $('.be_de').css({display:'none'})
    $('.af_de').css({display:'inline-block'})

    $('input[id=medi_de]').on('change', function(){
        console.log('DEPARTMENT 클릭')
        // radio 옆 아이콘 이미지 교체 코드
        $('.be_de').css({display:'none'})
        $('.af_de').css({display:'inline-block'})
        $('.chk_after').not('.af_de').css({display:'none'})
        $('.chk_before').not('.be_de').css({display:'inline-block'})


        $('.medi_de').removeClass('di_none')
        $('.medi_ul').not('.medi_de').addClass('di_none')

        $('.sec_scroll').css({maxHeight:'250px'})
        $('.medi_de_box').css({maxHeight:'250px'})

    })
    $('input[id=medi_ce]').on('change', function(){
        console.log('센터 클릭')
        // radio 옆 아이콘 이미지 교체 코드
        $('.be_ce').css({display:'none'})
        $('.af_ce').css({display:'inline-block'})
        $('.chk_after').not('.af_ce').css({display:'none'})
        $('.chk_before').not('.be_ce').css({display:'inline-block'})

        $('.medi_ce').removeClass('di_none')
        $('.medi_ul').not('.medi_ce').addClass('di_none')

        $('.sec_scroll').css({maxHeight:'250px'})
        $('.medi_de_box').css({maxHeight:'250px'})
    })
    $('input[id=medi_cl]').on('change', function(){
        console.log('클리닉 클릭')
        // radio 옆 아이콘 이미지 교체 코드
        $('.be_cl').css({display:'none'})
        $('.af_cl').css({display:'inline-block'})
        $('.chk_after').not('.af_cl').css({display:'none'})
        $('.chk_before').not('.be_cl').css({display:'inline-block'})

        $('.medi_cl').removeClass('di_none')
        $('.medi_ul').not('.medi_cl').addClass('di_none')

        $('.sec_scroll').css({maxHeight:'140px'})
        $('.medi_de_box').css({maxHeight:'140px'})
    })



    $('#medi').on("click", function(){
        var clicks = $(this).data('clicks');
        if (clicks) {
            // odd clicks
            $('#medi').removeClass('medi_active')
            $('.arrow_af').addClass('di_none')
            $('.arrow_be').removeClass('di_none')
            console.log('두번클릭')

            $('.sec_scroll').addClass('di_none')
        } else {
            // even clicks
            $('#medi').addClass('medi_active')
            
            $('.arrow_af').removeClass('di_none')
            $('.arrow_be').addClass('di_none')
            $('.arrow_af').addClass('spin')
            console.log('한번클릭')

            $('.sec_scroll').removeClass('di_none')
        }
        
        $(this).data("clicks", !clicks);


    })



        $('#google_translate_element').off("change").on('change' , function(){
                if (document.getElementsByClassName('goog-te-combo')[0].selectedOptions[0].value === 'en') {
                        console.log('영어 맞고 눌름')
                        if ($('.rt1').hasClass('rt_active') === true) {
                                $('.rt2').addClass('rt_active')
                                // 가나다순 
                                $('.rt1').removeClass('rt_active')
                        
                        
                                $('.radio_tab_box2').addClass('rt_box2_active')
                                $('.radio_tab_box1').removeClass('rt_box_active')
                                console.log('DEPARTMENT 눌렀는데 의료진으로 변경!')




                                $('#rt_2_box .rt_abc_box').remove();
                                var medi_depart_en = [
                                        {
                                                name : 'Family Medicine',
                                                a_link :'./medi_detail.html?value=0&item=1',
                                                img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                        },
                                        {
                                                name : 'Family Medicine Examination Center</span>',
                                                a_link :'./medi_detail.html?value=1&item=28',
                                                img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {
                                                name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                                a_link :'./medi_detail.html?value=2&item=15',
                                                img_link :'./img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Liver',
                                                a_link :'./medi_center.html?cen_v=1&item=14',
                                                img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                        },
                                        {
                                                name : 'Joint and Spine ',
                                                a_link :'./medi_center.html?cen_v=21&item=29',
                                                img_link :'./img/medi_details/icon/medi_icon_30.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                        },
                                        {
                                                name : 'Memory Improvement <span> Dementia Clinic</span>',
                                                a_link :'./medi_detail.html?cen_v=102&item=41',
                                                img_link :'./img/medi_details/icon/medi_icon_42.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                        },
                                        {
                                                name : 'Internal Medicine',
                                                a_link :'./medi_detail.html?value=3&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Endocrinology',
                                                a_link :'./medi_detail.html?value=4&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Anesthesiology <span> and Pain Medicine</span>',
                                                a_link :'./medi_detail.html?value=5&item=22',
                                                img_link :'./img/medi_details/icon/medi_icon_23.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                        },
                                        {
                                                name : 'Radiation Oncology',
                                                a_link :'./medi_detail.html?value=6&item=23',
                                                img_link :'./img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Urology',
                                                a_link :'./medi_detail.html?value=7&item=10',
                                                img_link :'./img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Obstetrics and Gynecology',    
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {
                                                name : 'Plastic Surgery Center',
                                                a_link: './medi_detail.html?value=9&item=12',
                                                img_link : './img/medi_details/icon/medi_icon_13.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                        },
                                        {    
                                                name : 'Pediatrics',    
                                                a_link: './medi_detail.html?value=10&item=2',
                                                img_link : './img/medi_details/icon/medi_icon_3.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                        },
                                        {    
                                                name : 'Gastroenterology',    
                                                a_link: './medi_detail.html?value=11&item=0',
                                                img_link : './img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                                a_link: './medi_center_2.html?cen_v2=6&item=45',
                                                img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                        },
                                        {    
                                                name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                                a_link: './medi_center.html?cen_v=5&item=31',
                                                img_link : './img/medi_details/icon/medi_icon_32.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                        },
                                        {    
                                                name : 'Neurology',    
                                                a_link: './medi_detail.html?value=12&item=3',
                                                img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                        },
                                        {    
                                                name : 'Neurosurgery',    
                                                a_link: './medi_detail.html?value=13&item=7',
                                                img_link : './img/medi_details/icon/medi_icon_8.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                        },
                                        {
                                                name : 'Nephrology',
                                                a_link: './medi_detail.html?value=14&item=10',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {
                                                name : 'Cardio <span>Cardiocerebrovascular</span>',
                                                a_link: './medi_center.html?cen_v=8&item=32',
                                                img_link : './img/medi_details/icon/medi_icon_33.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                        },
                                        {    
                                                name : 'Cardiology',    
                                                a_link: './medi_detail.html?value=15&item=19',
                                                img_link : './img/medi_details/icon/medi_icon_20.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                        },
                                        {    
                                                name : 'Ophthalmology',    
                                                a_link: './medi_detail.html?value=16&item=47',
                                                img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                        },
                                        {    
                                                name : 'Otolaryngology',    
                                                a_link: './medi_detail.html?value=17&item=13',
                                                img_link : './img/medi_details/icon/medi_icon_14.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                        },
                                        {
                                                name : 'Women`s Cancer',
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Radiology',    
                                                a_link: './medi_detail.html?value=18&item=24',
                                                img_link : './img/medi_details/icon/medi_icon_25.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                        },
                                        {
                                                name : 'Surgery',
                                                a_link: './medi_detail.html?value=19&item=6',
                                                img_link : './img/medi_details/icon/medi_icon_7.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                        },
                                        {
                                                name : 'Pressure Ulcer Clinic',
                                                a_link: './medi_detail.html?value=29&item=43',
                                                img_link : './img/medi_details/icon/medi_icon_44.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                        },
                                        {    
                                                name : 'Breast/Thyroid <span>Cancer</span>',    
                                                _link: './medi_center.html?cen_v=12&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {    
                                                name : 'Emergency Medicine',    
                                                a_link: './medi_detail.html?value=20&item=25',
                                                img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                        },
                                        {            
                                                name : 'Bioartificial Kidney',
                                                a_link: './medi_detail.html?cen_v=110&item=35',
                                                img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                        },
                                        {    
                                                name : 'Cognitive Development <span>Promotion Center</span>',    
                                                a_link: './medi_detail.html?value=21&item=5',
                                                img_link : './img/medi_details/icon/medi_icon_37.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                        },
                                        {    
                                                name : 'Rehabilitation <span>Treatment Center</span>',    
                                                a_link: './medi_detail.html?cen_v=18&item=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {    
                                                name : 'Rehabilitation Medicine',    
                                                a_link: './medi_center.html?cen_v=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {
                                                name : 'Prostate Cancer',
                                                a_link: './medi_center.html?cen_v=20&item=37',
                                                img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                        },
                                        {    
                                                name : 'Psychiatry',    
                                                a_link: './medi_detail.html?value=21&item=23',
                                                img_link : './img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Orthopedics',
                                                a_link: './medi_detail.html?value=22&item=8',
                                                img_link : './img/medi_details/icon/medi_icon_9.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                        },
                                                {
                                                name : 'Laboratory Medicine',
                                                a_link: './medi_detail.html?value=23&item=28',
                                                img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {    
                                                name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                                a_link: './medi_detail.html?value=24&item=15',
                                                img_link : './img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Dentistry',
                                                a_link: './medi_detail.html?value=25&item=27',
                                                img_link : './img/medi_details/icon/medi_icon_28.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                        },
                                        {
                                                name : 'Industrial Health Center',
                                                a_link: './medi_detail.html?value=31&item=50',
                                                img_link : './img/medi_details/icon/medi_icon_47.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                        },
                                        {
                                                name : 'Maxillofacial Surgery',
                                                a_link: './medi_center.html?cen_v=24&item=39',
                                                img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                        },
                                        {
                                                name : 'Hemato-oncology',
                                                a_link: './medi_detail.html?value=26&item=20',
                                                img_link : './img/medi_details/icon/medi_icon_21.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                        },
                                        {
                                                name : 'Respiratory Medicine',        
                                                a_link: './medi_detail.html?value=27&item=21',
                                                img_link : './img/medi_details/icon/medi_icon_22.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                        },
                                        {
                                                name : 'Thoracic Surgery',
                                                a_link: './medi_detail.html?value=28&item=9',
                                                img_link : './img/medi_details/icon/medi_icon_10.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                        },
                                ]
                
                
                
                                medi_depart_en.sort(function(a,b) { //오름차순
                                        return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                                })
                                // console.log('medi_depart_en : ', medi_depart_en)
                
                                medi_depart_en.forEach((v, i) => {
                                        // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                                        // console.log('v : ',v, 'name : ', v.name, 'a_link :',  v.a_link );  
                                        
                
                                        for(let i=0; i<1; i++) {
                                                let medi_depart_list2 =`
                                                        <div class="rt_abc_box">
                                                                <div class="rt_a_box">
                                                                        <a href="${v.a_link}">
                                                                        <img src="${v.img_link}" alt="">
                                                                        <img src="${v.img_hover_link}" alt="" class="orange_img">
                                                                        <h5 class="rt2_h5" style="font-size:15px">${v.name}<span class="hidden">/</span></h5>
                                                                        <input type="hidden" name="h5_text" v="${v.name}" id="h5_text_input">
                                                                        </a>
                                                                </div>
                                                        </div>`
                                                $('#rt_2_box').append(medi_depart_list2);   
                                        }
                                
                                });
                                
                                $(window).resize(function(){
                                        var width = window.innerWidth;
                                        if (500 > width && 300 <= width) {
                                                console.log('300보다 큼')
                                                $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))'});
                                                $('.rt_a_box').css({height: '160px'});
                                        } else if (width < 300) {
                                                console.log('300보다 작음')
                                                $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'});
                                                $('.rt_a_box').css({height: '170px'});
                                        }
                                }).resize();
                        }

                        if ($('.rt2').hasClass('rt_active') === true)  {
                                $('#rt2').off("click").on('click', function() {

                                        console.log('영어 선택 후 다시 의료진 클릭!')
                                        $('#rt_2_box .rt_abc_box').remove();
                                        $('#rt_1_box .rt_abc_box').remove();

                                        $('.rt2').addClass('rt_active')
                                        // 가나다순 
                                        $('.rt1').removeClass('rt_active')


                                        $('.radio_tab_box2').addClass('rt_box2_active')
                                        $('.radio_tab_box1').removeClass('rt_box_active')
                                        var medi_depart_en = [
                                                {
                                                        name : 'Family Medicine',
                                                        a_link :'./medi_detail.html?value=0&item=1',
                                                        img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                                },
                                                {
                                                        name : 'Family Medicine Examination Center</span>',
                                                        a_link :'./medi_detail.html?value=1&item=28',
                                                        img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                                },
                                                {
                                                        name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                                        a_link :'./medi_detail.html?value=2&item=15',
                                                        img_link :'./img/medi_details/icon/medi_icon_16.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                                },
                                                {
                                                        name : 'Liver',
                                                        a_link :'./medi_center.html?cen_v=1&item=14',
                                                        img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                                },
                                                {
                                                        name : 'Joint and Spine ',
                                                        a_link :'./medi_center.html?cen_v=21&item=29',
                                                        img_link :'./img/medi_details/icon/medi_icon_30.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                                },
                                                {
                                                        name : 'Memory Improvement <span> Dementia Clinic</span>',
                                                        a_link :'./medi_detail.html?cen_v=102&item=41',
                                                        img_link :'./img/medi_details/icon/medi_icon_42.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                                },
                                                {
                                                        name : 'Internal Medicine',
                                                        a_link :'./medi_detail.html?value=3&item=0',
                                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                                },
                                                {
                                                        name : 'Endocrinology',
                                                        a_link :'./medi_detail.html?value=4&item=0',
                                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                                },
                                                {
                                                        name : 'Anesthesiology <span> and Pain Medicine</span>',
                                                        a_link :'./medi_detail.html?value=5&item=22',
                                                        img_link :'./img/medi_details/icon/medi_icon_23.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                                },
                                                {
                                                        name : 'Radiation Oncology',
                                                        a_link :'./medi_detail.html?value=6&item=23',
                                                        img_link :'./img/medi_details/icon/medi_icon_24.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                                },
                                                {
                                                        name : 'Urology',
                                                        a_link :'./medi_detail.html?value=7&item=10',
                                                        img_link :'./img/medi_details/icon/medi_icon_11.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                                },
                                                {    
                                                        name : 'Obstetrics and Gynecology',    
                                                        a_link: './medi_detail.html?value=8&item=11',
                                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                                },
                                                {
                                                        name : 'Plastic Surgery Center',
                                                        a_link: './medi_detail.html?value=9&item=12',
                                                        img_link : './img/medi_details/icon/medi_icon_13.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                                },
                                                {    
                                                        name : 'Pediatrics',    
                                                        a_link: './medi_detail.html?value=10&item=2',
                                                        img_link : './img/medi_details/icon/medi_icon_3.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                                },
                                                {    
                                                        name : 'Gastroenterology',    
                                                        a_link: './medi_detail.html?value=11&item=0',
                                                        img_link : './img/medi_details/icon/medi_icon_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                                },
                                                {
                                                        name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                                        a_link: './medi_center_2.html?cen_v2=6&item=45',
                                                        img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                                },
                                                {    
                                                        name : 'Gastroenterology <span> endoscopic Center</span>',    
                                                        a_link: './medi_center.html?cen_v=5&item=31',
                                                        img_link : './img/medi_details/icon/medi_icon_32.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                                },
                                                {    
                                                        name : 'Neurology',    
                                                        a_link: './medi_detail.html?value=12&item=3',
                                                        img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                                },
                                                {    
                                                        name : 'Neurosurgery',    
                                                        a_link: './medi_detail.html?value=13&item=7',
                                                        img_link : './img/medi_details/icon/medi_icon_8.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                                },
                                                {
                                                        name : 'Nephrology',
                                                        a_link: './medi_detail.html?value=14&item=10',
                                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                                },
                                                {
                                                        name : 'Cardio <span>Cardiocerebrovascular</span>',
                                                        a_link: './medi_center.html?cen_v=8&item=32',
                                                        img_link : './img/medi_details/icon/medi_icon_33.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                                },
                                                {    
                                                        name : 'Cardiology',    
                                                        a_link: './medi_detail.html?value=15&item=19',
                                                        img_link : './img/medi_details/icon/medi_icon_20.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                                },
                                                {    
                                                        name : 'Ophthalmology',    
                                                        a_link: './medi_detail.html?value=16&item=47',
                                                        img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                                },
                                                {    
                                                        name : 'Otolaryngology',    
                                                        a_link: './medi_detail.html?value=17&item=13',
                                                        img_link : './img/medi_details/icon/medi_icon_14.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                                },
                                                {
                                                        name : 'Women`s Cancer',
                                                        a_link: './medi_detail.html?value=8&item=11',
                                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                                },
                                                {    
                                                        name : 'Radiology',    
                                                        a_link: './medi_detail.html?value=18&item=24',
                                                        img_link : './img/medi_details/icon/medi_icon_25.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                                },
                                                {
                                                        name : 'Surgery',
                                                        a_link: './medi_detail.html?value=19&item=6',
                                                        img_link : './img/medi_details/icon/medi_icon_7.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                                },
                                                {
                                                        name : 'Pressure Ulcer Clinic',
                                                        a_link: './medi_detail.html?value=29&item=43',
                                                        img_link : './img/medi_details/icon/medi_icon_44.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                                },
                                                {    
                                                        name : 'Breast/Thyroid <span>Cancer</span>',    
                                                        _link: './medi_center.html?cen_v=12&item=11',
                                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                                },
                                                {    
                                                        name : 'Emergency Medicine',    
                                                        a_link: './medi_detail.html?value=20&item=25',
                                                        img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                                },
                                                {            
                                                        name : 'Bioartificial Kidney',
                                                        a_link: './medi_detail.html?cen_v=110&item=35',
                                                        img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                                },
                                                {    
                                                        name : 'Cognitive Development <span>Promotion Center</span>',    
                                                        a_link: './medi_detail.html?value=21&item=5',
                                                        img_link : './img/medi_details/icon/medi_icon_37.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                                },
                                                {    
                                                        name : 'Rehabilitation <span>Treatment Center</span>',    
                                                        a_link: './medi_detail.html?cen_v=18&item=18',
                                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                                },
                                                {    
                                                        name : 'Rehabilitation Medicine',    
                                                        a_link: './medi_center.html?cen_v=18',
                                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                                },
                                                {
                                                        name : 'Prostate Cancer',
                                                        a_link: './medi_center.html?cen_v=20&item=37',
                                                        img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                                },
                                                {    
                                                        name : 'Psychiatry',    
                                                        a_link: './medi_detail.html?value=21&item=23',
                                                        img_link : './img/medi_details/icon/medi_icon_24.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                                },
                                                {
                                                        name : 'Orthopedics',
                                                        a_link: './medi_detail.html?value=22&item=8',
                                                        img_link : './img/medi_details/icon/medi_icon_9.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                                },
                                                        {
                                                        name : 'Laboratory Medicine',
                                                        a_link: './medi_detail.html?value=23&item=28',
                                                        img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                                },
                                                {    
                                                        name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                                        a_link: './medi_detail.html?value=24&item=15',
                                                        img_link : './img/medi_details/icon/medi_icon_16.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                                },
                                                {
                                                        name : 'Dentistry',
                                                        a_link: './medi_detail.html?value=25&item=27',
                                                        img_link : './img/medi_details/icon/medi_icon_28.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                                },
                                                {
                                                        name : 'Industrial Health Center',
                                                        a_link: './medi_detail.html?value=31&item=50',
                                                        img_link : './img/medi_details/icon/medi_icon_47.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                                },
                                                {
                                                        name : 'Maxillofacial Surgery',
                                                        a_link: './medi_center.html?cen_v=24&item=39',
                                                        img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                                },
                                                {
                                                        name : 'Hemato-oncology',
                                                        a_link: './medi_detail.html?value=26&item=20',
                                                        img_link : './img/medi_details/icon/medi_icon_21.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                                },
                                                {
                                                        name : 'Respiratory Medicine',        
                                                        a_link: './medi_detail.html?value=27&item=21',
                                                        img_link : './img/medi_details/icon/medi_icon_22.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                                },
                                                {
                                                        name : 'Thoracic Surgery',
                                                        a_link: './medi_detail.html?value=28&item=9',
                                                        img_link : './img/medi_details/icon/medi_icon_10.png',
                                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                                },
                                        ]
                        
                        
                        
                                        medi_depart_en.sort(function(a,b) { //오름차순
                                                return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                                        })
                                        // console.log('medi_depart_en : ', medi_depart_en)
                        
                                        medi_depart_en.forEach((v, i) => {
                                                // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                                                // console.log('v : ',v, 'name : ', v.name, 'a_link :',  v.a_link );  
                                                
                        
                                                for(let i=0; i<1; i++) {
                                                        let medi_depart_list2 =`
                                                                <div class="rt_abc_box">
                                                                        <div class="rt_a_box">
                                                                                <a href="${v.a_link}">
                                                                                <img src="${v.img_link}" alt="">
                                                                                <img src="${v.img_hover_link}" alt="" class="orange_img">
                                                                                <h5 class="rt2_h5" style="font-size:15px">${v.name}<span class="hidden">/</span></h5>
                                                                                <input type="hidden" name="h5_text" v="${v.name}" id="h5_text_input">
                                                                                </a>
                                                                        </div>
                                                                </div>`
                                                        $('#rt_2_box').append(medi_depart_list2);   
                                                }
                                        
                                        });
                                        
                                        $(window).resize(function(){
                                                var width = window.innerWidth;
                                                if (500 > width && 300 <= width) {
                                                        console.log('300보다 큼')
                                                        $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))'});
                                                        $('.rt_a_box').css({height: '160px'});
                                                } else if (width < 300) {
                                                        console.log('300보다 작음')
                                                        $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'});
                                                        $('.rt_a_box').css({height: '170px'});
                                                }
                                        }).resize();
                                })
                                
                        }
                        
                }
                else if (document.getElementsByClassName('goog-te-combo')[0].selectedOptions[0].value !== 'en') {
                        console.log('영어 아님!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                        $('#rt_2_box .rt_abc_box').remove();
                        $('#rt_1_box .rt_abc_box').remove();

                        $('.rt2').addClass('rt_active')
                        // 가나다순 
                        $('.rt1').removeClass('rt_active')


                        $('.radio_tab_box2').addClass('rt_box2_active')
                        $('.radio_tab_box1').removeClass('rt_box_active')

                        console.log('!! 영어가 아닐때 의료진 클릭!!!')
                        var medi_depart_kor = [
                                {
                                        name : 'Family Medicine',
                                        a_link :'./medi_detail.html?value=0&item=1',
                                        img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                },
                                {
                                        name : 'Family Medicine Examination Center</span>',
                                        a_link :'./medi_detail.html?value=1&item=28',
                                        img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                },
                                {
                                        name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                        a_link :'./medi_detail.html?value=2&item=15',
                                        img_link :'./img/medi_details/icon/medi_icon_16.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                },
                                {
                                        name : 'Liver',
                                        a_link :'./medi_center.html?cen_v=1&item=14',
                                        img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                },
                                {
                                        name : 'Joint and Spine ',
                                        a_link :'./medi_center.html?cen_v=21&item=29',
                                        img_link :'./img/medi_details/icon/medi_icon_30.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                },
                                {
                                        name : 'Memory Improvement <span> Dementia Clinic</span>',
                                        a_link :'./medi_detail.html?cen_v=102&item=41',
                                        img_link :'./img/medi_details/icon/medi_icon_42.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                },
                                {
                                        name : 'Internal Medicine',
                                        a_link :'./medi_detail.html?value=3&item=0',
                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Endocrinology',
                                        a_link :'./medi_detail.html?value=4&item=0',
                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Anesthesiology <span> and Pain Medicine</span>',
                                        a_link :'./medi_detail.html?value=5&item=22',
                                        img_link :'./img/medi_details/icon/medi_icon_23.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                },
                                {
                                        name : 'Radiation Oncology',
                                        a_link :'./medi_detail.html?value=6&item=23',
                                        img_link :'./img/medi_details/icon/medi_icon_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                },
                                {
                                        name : 'Urology',
                                        a_link :'./medi_detail.html?value=7&item=10',
                                        img_link :'./img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {    
                                        name : 'Obstetrics and Gynecology',    
                                        a_link: './medi_detail.html?value=8&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                },
                                {
                                        name : 'Plastic Surgery Center',
                                        a_link: './medi_detail.html?value=9&item=12',
                                        img_link : './img/medi_details/icon/medi_icon_13.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                },
                                {    
                                        name : 'Pediatrics',    
                                        a_link: './medi_detail.html?value=10&item=2',
                                        img_link : './img/medi_details/icon/medi_icon_3.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                },
                                {    
                                        name : 'Gastroenterology',    
                                        a_link: './medi_detail.html?value=11&item=0',
                                        img_link : './img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                        a_link: './medi_center_2.html?cen_v2=6&item=45',
                                        img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                },
                                {    
                                        name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                        a_link: './medi_center.html?cen_v=5&item=31',
                                        img_link : './img/medi_details/icon/medi_icon_32.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                },
                                {    
                                        name : 'Neurology',    
                                        a_link: './medi_detail.html?value=12&item=3',
                                        img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                },
                                {    
                                        name : 'Neurosurgery',    
                                        a_link: './medi_detail.html?value=13&item=7',
                                        img_link : './img/medi_details/icon/medi_icon_8.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                },
                                {
                                        name : 'Nephrology',
                                        a_link: './medi_detail.html?value=14&item=10',
                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {
                                        name : 'Cardio <span>Cardiocerebrovascular</span>',
                                        a_link: './medi_center.html?cen_v=8&item=32',
                                        img_link : './img/medi_details/icon/medi_icon_33.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                },
                                {    
                                        name : 'Cardiology',    
                                        a_link: './medi_detail.html?value=15&item=19',
                                        img_link : './img/medi_details/icon/medi_icon_20.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                },
                                {    
                                        name : 'Ophthalmology',    
                                        a_link: './medi_detail.html?value=16&item=47',
                                        img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                },
                                {    
                                        name : 'Otolaryngology',    
                                        a_link: './medi_detail.html?value=17&item=13',
                                        img_link : './img/medi_details/icon/medi_icon_14.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                },
                                {
                                        name : 'Women`s Cancer',
                                        a_link: './medi_detail.html?value=8&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {    
                                        name : 'Radiology',    
                                        a_link: './medi_detail.html?value=18&item=24',
                                        img_link : './img/medi_details/icon/medi_icon_25.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                },
                                {
                                        name : 'Surgery',
                                        a_link: './medi_detail.html?value=19&item=6',
                                        img_link : './img/medi_details/icon/medi_icon_7.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                },
                                {
                                        name : 'Pressure Ulcer Clinic',
                                        a_link: './medi_detail.html?value=29&item=43',
                                        img_link : './img/medi_details/icon/medi_icon_44.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                },
                                {    
                                        name : 'Breast/Thyroid <span>Cancer</span>',    
                                        _link: './medi_center.html?cen_v=12&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                },
                                {    
                                        name : 'Emergency Medicine',    
                                        a_link: './medi_detail.html?value=20&item=25',
                                        img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                },
                                {            
                                        name : 'Bioartificial Kidney',
                                        a_link: './medi_detail.html?cen_v=110&item=35',
                                        img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                },
                                {    
                                        name : 'Cognitive Development <span>Promotion Center</span>',    
                                        a_link: './medi_detail.html?value=21&item=5',
                                        img_link : './img/medi_details/icon/medi_icon_37.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                },
                                {    
                                        name : 'Rehabilitation <span>Treatment Center</span>',    
                                        a_link: './medi_detail.html?cen_v=18&item=18',
                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                },
                                {    
                                        name : 'Rehabilitation Medicine',    
                                        a_link: './medi_center.html?cen_v=18',
                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                },
                                {
                                        name : 'Prostate Cancer',
                                        a_link: './medi_center.html?cen_v=20&item=37',
                                        img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                },
                                {    
                                        name : 'Psychiatry',    
                                        a_link: './medi_detail.html?value=21&item=23',
                                        img_link : './img/medi_details/icon/medi_icon_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                },
                                {
                                        name : 'Orthopedics',
                                        a_link: './medi_detail.html?value=22&item=8',
                                        img_link : './img/medi_details/icon/medi_icon_9.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                },
                                        {
                                        name : 'Laboratory Medicine',
                                        a_link: './medi_detail.html?value=23&item=28',
                                        img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                },
                                {    
                                        name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                        a_link: './medi_detail.html?value=24&item=15',
                                        img_link : './img/medi_details/icon/medi_icon_16.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                },
                                {
                                        name : 'Dentistry',
                                        a_link: './medi_detail.html?value=25&item=27',
                                        img_link : './img/medi_details/icon/medi_icon_28.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                },
                                {
                                        name : 'Industrial Health Center',
                                        a_link: './medi_detail.html?value=31&item=50',
                                        img_link : './img/medi_details/icon/medi_icon_47.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                },
                                {
                                        name : 'Maxillofacial Surgery',
                                        a_link: './medi_center.html?cen_v=24&item=39',
                                        img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                },
                                {
                                        name : 'Hemato-oncology',
                                        a_link: './medi_detail.html?value=26&item=20',
                                        img_link : './img/medi_details/icon/medi_icon_21.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                },
                                {
                                        name : 'Respiratory Medicine',        
                                        a_link: './medi_detail.html?value=27&item=21',
                                        img_link : './img/medi_details/icon/medi_icon_22.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                },
                                {
                                        name : 'Thoracic Surgery',
                                        a_link: './medi_detail.html?value=28&item=9',
                                        img_link : './img/medi_details/icon/medi_icon_10.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                },
                        ]


                        medi_depart_kor.sort(function(a,b) { //오름차순
                                return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                        })
                        // console.log('medi_depart_kor : ', medi_depart_kor)

                        medi_depart_kor.forEach((value, index) => {
                        // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                        // console.log('value : ',value, 'name : ', value.name, 'a_link :',  value.a_link );  
                                let onInit = true;
                                if (onInit == true)

                                {
                                        let medi_depart_list =`
                                                <div class="rt_abc_box">
                                                        <div class="rt_a_box">
                                                                <a href="${value.a_link}">
                                                                <img src="${value.img_link}" alt="">
                                                                <img src="${value.img_hover_link}" alt="" class="orange_img">
                                                                <h5 class="rt2_h5">${value.name}<span class="hidden">/</span></h5>
                                                                <input type="hidden" name="h5_text" value="${value.name}" id="h5_text_input">
                                                                </a>
                                                        </div>
                                                </div>`
                                        $('#rt_2_box').append(medi_depart_list);   

                                        onInit = false;

                                } 
                        
                        
                        });

                        $('#rt2').off("click").on('click', function() {
                                $('#rt_2_box .rt_abc_box').remove();
                                $('#rt_1_box .rt_abc_box').remove();

                                $('.rt2').addClass('rt_active')
                                // 가나다순 
                                $('.rt1').removeClass('rt_active')


                                $('.radio_tab_box2').addClass('rt_box2_active')
                                $('.radio_tab_box1').removeClass('rt_box_active')

                                console.log('!! 영어가 아닐때 의료진 클릭!!!')
                                var medi_depart_kor = [
                                        {
                                                name : 'Family Medicine',
                                                a_link :'./medi_detail.html?value=0&item=1',
                                                img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                        },
                                        {
                                                name : 'Family Medicine Examination Center</span>',
                                                a_link :'./medi_detail.html?value=1&item=28',
                                                img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {
                                                name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                                a_link :'./medi_detail.html?value=2&item=15',
                                                img_link :'./img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Liver',
                                                a_link :'./medi_center.html?cen_v=1&item=14',
                                                img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                        },
                                        {
                                                name : 'Joint and Spine ',
                                                a_link :'./medi_center.html?cen_v=21&item=29',
                                                img_link :'./img/medi_details/icon/medi_icon_30.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                        },
                                        {
                                                name : 'Memory Improvement <span> Dementia Clinic</span>',
                                                a_link :'./medi_detail.html?cen_v=102&item=41',
                                                img_link :'./img/medi_details/icon/medi_icon_42.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                        },
                                        {
                                                name : 'Internal Medicine',
                                                a_link :'./medi_detail.html?value=3&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Endocrinology',
                                                a_link :'./medi_detail.html?value=4&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Anesthesiology <span> and Pain Medicine</span>',
                                                a_link :'./medi_detail.html?value=5&item=22',
                                                img_link :'./img/medi_details/icon/medi_icon_23.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                        },
                                        {
                                                name : 'Radiation Oncology',
                                                a_link :'./medi_detail.html?value=6&item=23',
                                                img_link :'./img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Urology',
                                                a_link :'./medi_detail.html?value=7&item=10',
                                                img_link :'./img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Obstetrics and Gynecology',    
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {
                                                name : 'Plastic Surgery Center',
                                                a_link: './medi_detail.html?value=9&item=12',
                                                img_link : './img/medi_details/icon/medi_icon_13.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                        },
                                        {    
                                                name : 'Pediatrics',    
                                                a_link: './medi_detail.html?value=10&item=2',
                                                img_link : './img/medi_details/icon/medi_icon_3.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                        },
                                        {    
                                                name : 'Gastroenterology',    
                                                a_link: './medi_detail.html?value=11&item=0',
                                                img_link : './img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                                a_link: './medi_center_2.html?cen_v2=6&item=45',
                                                img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                        },
                                        {    
                                                name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                                a_link: './medi_center.html?cen_v=5&item=31',
                                                img_link : './img/medi_details/icon/medi_icon_32.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                        },
                                        {    
                                                name : 'Neurology',    
                                                a_link: './medi_detail.html?value=12&item=3',
                                                img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                        },
                                        {    
                                                name : 'Neurosurgery',    
                                                a_link: './medi_detail.html?value=13&item=7',
                                                img_link : './img/medi_details/icon/medi_icon_8.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                        },
                                        {
                                                name : 'Nephrology',
                                                a_link: './medi_detail.html?value=14&item=10',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {
                                                name : 'Cardio <span>Cardiocerebrovascular</span>',
                                                a_link: './medi_center.html?cen_v=8&item=32',
                                                img_link : './img/medi_details/icon/medi_icon_33.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                        },
                                        {    
                                                name : 'Cardiology',    
                                                a_link: './medi_detail.html?value=15&item=19',
                                                img_link : './img/medi_details/icon/medi_icon_20.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                        },
                                        {    
                                                name : 'Ophthalmology',    
                                                a_link: './medi_detail.html?value=16&item=47',
                                                img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                        },
                                        {    
                                                name : 'Otolaryngology',    
                                                a_link: './medi_detail.html?value=17&item=13',
                                                img_link : './img/medi_details/icon/medi_icon_14.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                        },
                                        {
                                                name : 'Women`s Cancer',
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Radiology',    
                                                a_link: './medi_detail.html?value=18&item=24',
                                                img_link : './img/medi_details/icon/medi_icon_25.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                        },
                                        {
                                                name : 'Surgery',
                                                a_link: './medi_detail.html?value=19&item=6',
                                                img_link : './img/medi_details/icon/medi_icon_7.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                        },
                                        {
                                                name : 'Pressure Ulcer Clinic',
                                                a_link: './medi_detail.html?value=29&item=43',
                                                img_link : './img/medi_details/icon/medi_icon_44.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                        },
                                        {    
                                                name : 'Breast/Thyroid <span>Cancer</span>',    
                                                _link: './medi_center.html?cen_v=12&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {    
                                                name : 'Emergency Medicine',    
                                                a_link: './medi_detail.html?value=20&item=25',
                                                img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                        },
                                        {            
                                                name : 'Bioartificial Kidney',
                                                a_link: './medi_detail.html?cen_v=110&item=35',
                                                img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                        },
                                        {    
                                                name : 'Cognitive Development <span>Promotion Center</span>',    
                                                a_link: './medi_detail.html?value=21&item=5',
                                                img_link : './img/medi_details/icon/medi_icon_37.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                        },
                                        {    
                                                name : 'Rehabilitation <span>Treatment Center</span>',    
                                                a_link: './medi_detail.html?cen_v=18&item=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {    
                                                name : 'Rehabilitation Medicine',    
                                                a_link: './medi_center.html?cen_v=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {
                                                name : 'Prostate Cancer',
                                                a_link: './medi_center.html?cen_v=20&item=37',
                                                img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                        },
                                        {    
                                                name : 'Psychiatry',    
                                                a_link: './medi_detail.html?value=21&item=23',
                                                img_link : './img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Orthopedics',
                                                a_link: './medi_detail.html?value=22&item=8',
                                                img_link : './img/medi_details/icon/medi_icon_9.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                        },
                                                {
                                                name : 'Laboratory Medicine',
                                                a_link: './medi_detail.html?value=23&item=28',
                                                img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {    
                                                name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                                a_link: './medi_detail.html?value=24&item=15',
                                                img_link : './img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Dentistry',
                                                a_link: './medi_detail.html?value=25&item=27',
                                                img_link : './img/medi_details/icon/medi_icon_28.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                        },
                                        {
                                                name : 'Industrial Health Center',
                                                a_link: './medi_detail.html?value=31&item=50',
                                                img_link : './img/medi_details/icon/medi_icon_47.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                        },
                                        {
                                                name : 'Maxillofacial Surgery',
                                                a_link: './medi_center.html?cen_v=24&item=39',
                                                img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                        },
                                        {
                                                name : 'Hemato-oncology',
                                                a_link: './medi_detail.html?value=26&item=20',
                                                img_link : './img/medi_details/icon/medi_icon_21.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                        },
                                        {
                                                name : 'Respiratory Medicine',        
                                                a_link: './medi_detail.html?value=27&item=21',
                                                img_link : './img/medi_details/icon/medi_icon_22.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                        },
                                        {
                                                name : 'Thoracic Surgery',
                                                a_link: './medi_detail.html?value=28&item=9',
                                                img_link : './img/medi_details/icon/medi_icon_10.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                        },
                                ]


                                medi_depart_kor.sort(function(a,b) { //오름차순
                                        return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                                })
                                // console.log('medi_depart_kor : ', medi_depart_kor)

                                medi_depart_kor.forEach((value, index) => {
                                // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                                // console.log('value : ',value, 'name : ', value.name, 'a_link :',  value.a_link );  
                                        let onInit = true;
                                        if (onInit == true)

                                        {
                                                let medi_depart_list =`
                                                        <div class="rt_abc_box">
                                                                <div class="rt_a_box">
                                                                        <a href="${value.a_link}">
                                                                        <img src="${value.img_link}" alt="">
                                                                        <img src="${value.img_hover_link}" alt="" class="orange_img">
                                                                        <h5 class="rt2_h5">${value.name}<span class="hidden">/</span></h5>
                                                                        <input type="hidden" name="h5_text" value="${value.name}" id="h5_text_input">
                                                                        </a>
                                                                </div>
                                                        </div>`
                                                $('#rt_2_box').append(medi_depart_list);   

                                                onInit = false;

                                        } 
                                
                                
                                });
                        });
                }
        });


        if($('.rt2').hasClass('rt_active') === true) {
                console.log('의료진 선택 됬어!')

                $('#rt_2_box .rt_abc_box').remove();
                var medi_depart_en = [
                {
                        name : 'Family Medicine',
                        a_link :'./medi_detail.html?value=0&item=1',
                        img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                },
                {
                        name : 'Family Medicine Examination Center</span>',
                        a_link :'./medi_detail.html?value=1&item=28',
                        img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                },
                {
                        name : 'Hepatobiliary <span>Pancreatic Surgery</span>',
                        a_link :'./medi_detail.html?value=2&item=15',
                        img_link :'./img/medi_details/icon/medi_icon_16.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                },
                {
                        name : 'liver center',
                        a_link :'./medi_center.html?cen_v=1&item=14',
                        img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                },
                {
                        name : 'Joint ㆍ <span>Spine Center</span>',
                        a_link :'./medi_center.html?cen_v=21&item=29',
                        img_link :'./img/medi_details/icon/medi_icon_30.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                },
                {
                        name : 'Memory Improvement <span> Dementia Clinic</span>',
                        a_link :'./medi_detail.html?cen_v=102&item=41',
                        img_link :'./img/medi_details/icon/medi_icon_42.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                },
                {
                        name : 'Internal Medicine',
                        a_link :'./medi_detail.html?value=3&item=0',
                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                },
                {
                        name : 'Endocrine Medicine',
                        a_link :'./medi_detail.html?value=4&item=0',
                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                },
                {
                        name : 'Anesthesiology <span> and Pain Medicine</span>',
                        a_link :'./medi_detail.html?value=5&item=22',
                        img_link :'./img/medi_details/icon/medi_icon_23.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                },
                {
                        name : 'Radiation Oncology',
                        a_link :'./medi_detail.html?value=6&item=23',
                        img_link :'./img/medi_details/icon/medi_icon_24.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                },
                {
                        name : 'Urology',
                        a_link :'./medi_detail.html?value=7&item=10',
                        img_link :'./img/medi_details/icon/medi_icon_11.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                },
                {       
                        name : 'obesity clinic',
                        a_link: './medi_detail.html?cen_v=104&item=11',
                        img_link : './img/medi_details/icon/medi_icon_abc_12.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_12.png',
                },
                {    
                        name : 'Obstetrics <span> and Gynecology</span>',    
                        a_link: './medi_detail.html?value=8&item=11',
                        img_link : './img/medi_details/icon/medi_icon_12.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                },
                {
                        name : 'Plastic <span>Surgery Center</span>',
                        a_link: './medi_detail.html?value=9&item=12',
                        img_link : './img/medi_details/icon/medi_icon_13.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                },
                {    
                        name : 'Pediatrics</span>',    
                        a_link: './medi_detail.html?value=10&item=2',
                        img_link : './img/medi_details/icon/medi_icon_3.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                },
                {    
                        name : 'Gastroenterology',    
                        a_link: './medi_detail.html?value=11&item=0',
                        img_link : './img/medi_details/icon/medi_icon_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                },
                {
                        name : 'Digestive Cancer <span>Surgery Center</span>',
                        a_link: './medi_center_2.html?cen_v2=6&item=45',
                        img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                },
                {    
                        name : 'Gastroenterology <span>Endoscopy Center</span>',    
                        a_link: './medi_center.html?cen_v=5&item=31',
                        img_link : './img/medi_details/icon/medi_icon_32.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                },
                {    
                        name : 'Neurology',    
                        a_link: './medi_detail.html?value=12&item=3',
                        img_link : './img/medi_details/icon/medi_icon_4_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                },
                {    
                        name : 'Neurosurgery',    
                        a_link: './medi_detail.html?value=13&item=7',
                        img_link : './img/medi_details/icon/medi_icon_8.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                },
                {
                        name : 'Nephrology',
                        a_link: './medi_detail.html?value=14&item=10',
                        img_link : './img/medi_details/icon/medi_icon_11.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                },
                {
                        name : 'Cardio <span> Cardiocerebrovascular</span>',
                        a_link: './medi_center.html?cen_v=8&item=32',
                        img_link : './img/medi_details/icon/medi_icon_33.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                },
                {    
                        name : 'Cardiology',    
                        a_link: './medi_detail.html?value=15&item=19',
                        img_link : './img/medi_details/icon/medi_icon_20.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                },
                {    
                        name : 'Ophthalmology',    
                        a_link: './medi_detail.html?value=16&item=47',
                        img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                },
                {    
                        name : 'Otorhinolaryngology',    
                        a_link: './medi_detail.html?value=17&item=13',
                        img_link : './img/medi_details/icon/medi_icon_14.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                },
                {
                        name : 'Women`s Cancer Center',
                        a_link: './medi_detail.html?value=8&item=11',
                        img_link : './img/medi_details/icon/medi_icon_11.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                },
                {    
                        name : 'Radiology</span>',    
                        a_link: './medi_detail.html?value=18&item=24',
                        img_link : './img/medi_details/icon/medi_icon_25.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                },
                {
                        name : 'Surgery',
                        a_link: './medi_detail.html?value=19&item=6',
                        img_link : './img/medi_details/icon/medi_icon_7.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                },
                {
                        name : 'Pressure Ulcer Clinic',
                        a_link: './medi_detail.html?value=29&item=43',
                        img_link : './img/medi_details/icon/medi_icon_44.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                },
                {    
                        name : 'BreastㆍThyroid <span>Cancer Center</span>',    
                        _link: './medi_center.html?cen_v=12&item=11',
                        img_link : './img/medi_details/icon/medi_icon_12.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                },
                {    
                        name : 'Emergency Medicine',    
                        a_link: './medi_detail.html?value=20&item=25',
                        img_link : './img/medi_details/icon/medi_icon_26_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                },
                {            
                        name : 'Artificial Nephrology',
                        a_link: './medi_detail.html?cen_v=110&item=35',
                        img_link : './img/medi_details/icon/medi_icon_36_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                },
                {    
                        name : 'Cognitive Development <span>Promotion Center</span>',    
                        a_link: './medi_detail.html?value=21&item=5',
                        img_link : './img/medi_details/icon/medi_icon_37.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                },
                {    
                        name : 'Rehabilitation <span>Treatment Center</span>',    
                        a_link: './medi_detail.html?cen_v=18&item=18',
                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                },
                {    
                        name : 'Rehabilitation Medicine',    
                        a_link: './medi_center.html?cen_v=18',
                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                },
                {
                        name : 'Prostate Cancer <span>Center<span>',
                        a_link: './medi_center.html?cen_v=20&item=37',
                        img_link : './img/medi_details/icon/medi_icon_38_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                },
                {    
                        name : 'Mental Health',    
                        a_link: './medi_detail.html?value=21&item=23',
                        img_link : './img/medi_details/icon/medi_icon_24.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                },
                {
                        name : 'Orthopedics',
                        a_link: './medi_detail.html?value=22&item=8',
                        img_link : './img/medi_details/icon/medi_icon_9.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                },
                        {
                        name : 'Laboratory Medicine',
                        a_link: './medi_detail.html?value=23&item=28',
                        img_link : './img/medi_details/icon/medi_icon_29_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                },
                {    
                        name : 'Pancreatic  and <span>Biliary Medicine</span>',    
                        a_link: './medi_detail.html?value=24&item=15',
                        img_link : './img/medi_details/icon/medi_icon_16.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                },
                {
                        name : 'Dentist',
                        a_link: './medi_detail.html?value=25&item=27',
                        img_link : './img/medi_details/icon/medi_icon_28.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                },
                {
                        name : 'Corona Aftermath <span>Recovery Center</span>',
                        a_link: '#',
                        img_link : './img/medi_details/icon/medi_icon_39.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_39.png',
                },
                {
                        name : 'Chin & Facial <span>Surgery Center</span>',
                        a_link: './medi_center.html?cen_v=24&item=39',
                        img_link : './img/medi_details/icon/medi_icon_40_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                },
                {
                        name : 'Lung Cancer <span>Surgery Center</span>',
                        a_link: './medi_detail.html?cen_v=115&item=46',
                        img_link : './img/medi_details/icon/medi_icon_abc_last.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_last.png',
                },
                {
                        name : 'Hematology Oncology',
                        a_link: './medi_detail.html?value=26&item=20',
                        img_link : './img/medi_details/icon/medi_icon_21.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                },
                {
                        name : 'Respiratory Medicine',        
                        a_link: './medi_detail.html?value=27&item=21',
                        img_link : './img/medi_details/icon/medi_icon_22.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                },
                {
                        name : 'Burn Clinic',        
                        a_link: './medi_detail.html?cen_v=116&item=44',
                        img_link : './img/medi_details/icon/medi_icon_45_1.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_45.png',
                },
                {
                        name : 'Thoracic Surgery',
                        a_link: './medi_detail.html?value=28&item=9',
                        img_link : './img/medi_details/icon/medi_icon_10.png',
                        img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                },
                ]



                medi_depart_en.sort(function(a,b) { //오름차순
                        return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                })
                // console.log('medi_depart_en : ', medi_depart_en)

                medi_depart_en.forEach((v, i) => {
                        // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                        // console.log('v : ',v, 'name : ', v.name, 'a_link :',  v.a_link );  
                        

                        for(let i=0; i<1; i++) {
                                let medi_depart_list2 =`
                                        <div class="rt_abc_box">
                                                <div class="rt_a_box">
                                                        <a href="${v.a_link}">
                                                        <img src="${v.img_link}" alt="">
                                                        <img src="${v.img_hover_link}" alt="" class="orange_img">
                                                        <h5 class="rt2_h5" style="font-size:15px">${v.name}<span class="hidden">/</span></h5>
                                                        <input type="hidden" name="h5_text" v="${v.name}" id="h5_text_input">
                                                        </a>
                                                </div>
                                        </div>`
                                $('#rt_2_box').append(medi_depart_list2);   
                        }
                
                });
                
                $(window).resize(function(){
                        var width = window.innerWidth;
                        if (500 > width && 300 <= width) {
                                console.log('300보다 큼')
                                $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))'});
                                $('.rt_a_box').css({height: '160px'});
                        } else if (width < 300) {
                                console.log('300보다 작음')
                                $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'});
                                $('.rt_a_box').css({height: '170px'});
                        }
                }).resize();
        }
        // 의료진 페이지에서 가나다순 버튼을 클릭했을때 가나다 순으로 배열 바꾸기
        $('#rt2').on("click", function(){
                $('#rt_2_box .rt_abc_box').remove();
                var medi_depart_kor = [
                        {
                                name : 'Family Medicine',
                                a_link :'./medi_detail.html?value=0&item=1',
                                img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                        },
                        {
                                name : 'Family Medicine Examination Center</span>',
                                a_link :'./medi_detail.html?value=1&item=28',
                                img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                        },
                        {
                                name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                a_link :'./medi_detail.html?value=2&item=15',
                                img_link :'./img/medi_details/icon/medi_icon_16.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                        },
                        {
                                name : 'Liver',
                                a_link :'./medi_center.html?cen_v=1&item=14',
                                img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                        },
                        {
                                name : 'Joint and Spine ',
                                a_link :'./medi_center.html?cen_v=21&item=29',
                                img_link :'./img/medi_details/icon/medi_icon_30.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                        },
                        {
                                name : 'Memory Improvement <span> Dementia Clinic</span>',
                                a_link :'./medi_detail.html?cen_v=102&item=41',
                                img_link :'./img/medi_details/icon/medi_icon_42.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                        },
                        {
                                name : 'Internal Medicine',
                                a_link :'./medi_detail.html?value=3&item=0',
                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                        },
                        {
                                name : 'Endocrinology',
                                a_link :'./medi_detail.html?value=4&item=0',
                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                        },
                        {
                                name : 'Anesthesiology <span> and Pain Medicine</span>',
                                a_link :'./medi_detail.html?value=5&item=22',
                                img_link :'./img/medi_details/icon/medi_icon_23.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                        },
                        {
                                name : 'Radiation Oncology',
                                a_link :'./medi_detail.html?value=6&item=23',
                                img_link :'./img/medi_details/icon/medi_icon_24.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                        },
                        {
                                name : 'Urology',
                                a_link :'./medi_detail.html?value=7&item=10',
                                img_link :'./img/medi_details/icon/medi_icon_11.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                        },
                        {    
                                name : 'Obstetrics and Gynecology',    
                                a_link: './medi_detail.html?value=8&item=11',
                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                        },
                        {
                                name : 'Plastic Surgery Center',
                                a_link: './medi_detail.html?value=9&item=12',
                                img_link : './img/medi_details/icon/medi_icon_13.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                        },
                        {    
                                name : 'Pediatrics',    
                                a_link: './medi_detail.html?value=10&item=2',
                                img_link : './img/medi_details/icon/medi_icon_3.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                        },
                        {    
                                name : 'Gastroenterology',    
                                a_link: './medi_detail.html?value=11&item=0',
                                img_link : './img/medi_details/icon/medi_icon_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                        },
                        {
                                name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                a_link: './medi_center_2.html?cen_v2=6&item=45',
                                img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                        },
                        {    
                                name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                a_link: './medi_center.html?cen_v=5&item=31',
                                img_link : './img/medi_details/icon/medi_icon_32.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                        },
                        {    
                                name : 'Neurology',    
                                a_link: './medi_detail.html?value=12&item=3',
                                img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                        },
                        {    
                                name : 'Neurosurgery',    
                                a_link: './medi_detail.html?value=13&item=7',
                                img_link : './img/medi_details/icon/medi_icon_8.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                        },
                        {
                                name : 'Nephrology',
                                a_link: './medi_detail.html?value=14&item=10',
                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                        },
                        {
                                name : 'Cardio <span>Cardiocerebrovascular</span>',
                                a_link: './medi_center.html?cen_v=8&item=32',
                                img_link : './img/medi_details/icon/medi_icon_33.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                        },
                        {    
                                name : 'Cardiology',    
                                a_link: './medi_detail.html?value=15&item=19',
                                img_link : './img/medi_details/icon/medi_icon_20.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                        },
                        {    
                                name : 'Ophthalmology',    
                                a_link: './medi_detail.html?value=16&item=47',
                                img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                        },
                        {    
                                name : 'Otolaryngology',    
                                a_link: './medi_detail.html?value=17&item=13',
                                img_link : './img/medi_details/icon/medi_icon_14.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                        },
                        {
                                name : 'Women`s Cancer',
                                a_link: './medi_detail.html?value=8&item=11',
                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                        },
                        {    
                                name : 'Radiology',    
                                a_link: './medi_detail.html?value=18&item=24',
                                img_link : './img/medi_details/icon/medi_icon_25.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                        },
                        {
                                name : 'Surgery',
                                a_link: './medi_detail.html?value=19&item=6',
                                img_link : './img/medi_details/icon/medi_icon_7.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                        },
                        {
                                name : 'Pressure Ulcer Clinic',
                                a_link: './medi_detail.html?value=29&item=43',
                                img_link : './img/medi_details/icon/medi_icon_44.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                        },
                        {    
                                name : 'Breast/Thyroid <span>Cancer</span>',    
                                _link: './medi_center.html?cen_v=12&item=11',
                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                        },
                        {    
                                name : 'Emergency Medicine',    
                                a_link: './medi_detail.html?value=20&item=25',
                                img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                        },
                        {            
                                name : 'Bioartificial Kidney',
                                a_link: './medi_detail.html?cen_v=110&item=35',
                                img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                        },
                        {    
                                name : 'Cognitive Development <span>Promotion Center</span>',    
                                a_link: './medi_detail.html?value=21&item=5',
                                img_link : './img/medi_details/icon/medi_icon_37.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                        },
                        {    
                                name : 'Rehabilitation <span>Treatment Center</span>',    
                                a_link: './medi_detail.html?cen_v=18&item=18',
                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                        },
                        {    
                                name : 'Rehabilitation Medicine',    
                                a_link: './medi_center.html?cen_v=18',
                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                        },
                        {
                                name : 'Prostate Cancer',
                                a_link: './medi_center.html?cen_v=20&item=37',
                                img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                        },
                        {    
                                name : 'Psychiatry',    
                                a_link: './medi_detail.html?value=21&item=23',
                                img_link : './img/medi_details/icon/medi_icon_24.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                        },
                        {
                                name : 'Orthopedics',
                                a_link: './medi_detail.html?value=22&item=8',
                                img_link : './img/medi_details/icon/medi_icon_9.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                        },
                                {
                                name : 'Laboratory Medicine',
                                a_link: './medi_detail.html?value=23&item=28',
                                img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                        },
                        {    
                                name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                a_link: './medi_detail.html?value=24&item=15',
                                img_link : './img/medi_details/icon/medi_icon_16.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                        },
                        {
                                name : 'Dentistry',
                                a_link: './medi_detail.html?value=25&item=27',
                                img_link : './img/medi_details/icon/medi_icon_28.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                        },
                        {
                                name : 'Industrial Health Center',
                                a_link: './medi_detail.html?value=31&item=50',
                                img_link : './img/medi_details/icon/medi_icon_47.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                        },
                        {
                                name : 'Maxillofacial Surgery',
                                a_link: './medi_center.html?cen_v=24&item=39',
                                img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                        },
                        {
                                name : 'Hemato-oncology',
                                a_link: './medi_detail.html?value=26&item=20',
                                img_link : './img/medi_details/icon/medi_icon_21.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                        },
                        {
                                name : 'Respiratory Medicine',        
                                a_link: './medi_detail.html?value=27&item=21',
                                img_link : './img/medi_details/icon/medi_icon_22.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                        },
                        {
                                name : 'Thoracic Surgery',
                                a_link: './medi_detail.html?value=28&item=9',
                                img_link : './img/medi_details/icon/medi_icon_10.png',
                                img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                        },
                ]


                medi_depart_kor.sort(function(a,b) { //오름차순
                        return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                })
                // console.log('medi_depart_kor : ', medi_depart_kor)

                medi_depart_kor.forEach((value, index) => {
                // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                // console.log('value : ',value, 'name : ', value.name, 'a_link :',  value.a_link );  
                        let onInit = true;

                        if (onInit == true)

                        {
                                let medi_depart_list =`
                                        <div class="rt_abc_box">
                                                <div class="rt_a_box">
                                                        <a href="${value.a_link}">
                                                        <img src="${value.img_link}" alt="">
                                                        <img src="${value.img_hover_link}" alt="" class="orange_img">
                                                        <h5 class="rt2_h5">${value.name}<span class="hidden">/</span></h5>
                                                        <input type="hidden" name="h5_text" value="${value.name}" id="h5_text_input">
                                                        </a>
                                                </div>
                                        </div>`
                                $('#rt_2_box').append(medi_depart_list);   

                                onInit = false;

                        } 
                
                
                });

                if ($('.rt2').hasClass('rt_active') === true) {
                        $('#rt2').off("click").on('click', function() {
                                $('#rt_2_box .rt_abc_box').remove();
                                $('#rt_1_box .rt_abc_box').remove();

                                $('.rt2').addClass('rt_active')
                                // 가나다순 
                                $('.rt1').removeClass('rt_active')


                                $('.radio_tab_box2').addClass('rt_box2_active')
                                $('.radio_tab_box1').removeClass('rt_box_active')

                                console.log('!! 영어가 아닐때 의료진 클릭!!!')
                                var medi_depart_kor = [
                                        {
                                                name : 'Family Medicine',
                                                a_link :'./medi_detail.html?value=0&item=1',
                                                img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                        },
                                        {
                                                name : 'Family Medicine Examination Center</span>',
                                                a_link :'./medi_detail.html?value=1&item=28',
                                                img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {
                                                name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                                a_link :'./medi_detail.html?value=2&item=15',
                                                img_link :'./img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Liver',
                                                a_link :'./medi_center.html?cen_v=1&item=14',
                                                img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                        },
                                        {
                                                name : 'Joint and Spine ',
                                                a_link :'./medi_center.html?cen_v=21&item=29',
                                                img_link :'./img/medi_details/icon/medi_icon_30.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                        },
                                        {
                                                name : 'Memory Improvement <span> Dementia Clinic</span>',
                                                a_link :'./medi_detail.html?cen_v=102&item=41',
                                                img_link :'./img/medi_details/icon/medi_icon_42.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                        },
                                        {
                                                name : 'Internal Medicine',
                                                a_link :'./medi_detail.html?value=3&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Endocrinology',
                                                a_link :'./medi_detail.html?value=4&item=0',
                                                img_link :'./img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Anesthesiology <span> and Pain Medicine</span>',
                                                a_link :'./medi_detail.html?value=5&item=22',
                                                img_link :'./img/medi_details/icon/medi_icon_23.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                        },
                                        {
                                                name : 'Radiation Oncology',
                                                a_link :'./medi_detail.html?value=6&item=23',
                                                img_link :'./img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Urology',
                                                a_link :'./medi_detail.html?value=7&item=10',
                                                img_link :'./img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Obstetrics and Gynecology',    
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {
                                                name : 'Plastic Surgery Center',
                                                a_link: './medi_detail.html?value=9&item=12',
                                                img_link : './img/medi_details/icon/medi_icon_13.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                        },
                                        {    
                                                name : 'Pediatrics',    
                                                a_link: './medi_detail.html?value=10&item=2',
                                                img_link : './img/medi_details/icon/medi_icon_3.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                        },
                                        {    
                                                name : 'Gastroenterology',    
                                                a_link: './medi_detail.html?value=11&item=0',
                                                img_link : './img/medi_details/icon/medi_icon_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                        },
                                        {
                                                name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                                a_link: './medi_center_2.html?cen_v2=6&item=45',
                                                img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                        },
                                        {    
                                                name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                                a_link: './medi_center.html?cen_v=5&item=31',
                                                img_link : './img/medi_details/icon/medi_icon_32.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                        },
                                        {    
                                                name : 'Neurology',    
                                                a_link: './medi_detail.html?value=12&item=3',
                                                img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                        },
                                        {    
                                                name : 'Neurosurgery',    
                                                a_link: './medi_detail.html?value=13&item=7',
                                                img_link : './img/medi_details/icon/medi_icon_8.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                        },
                                        {
                                                name : 'Nephrology',
                                                a_link: './medi_detail.html?value=14&item=10',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {
                                                name : 'Cardio <span>Cardiocerebrovascular</span>',
                                                a_link: './medi_center.html?cen_v=8&item=32',
                                                img_link : './img/medi_details/icon/medi_icon_33.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                        },
                                        {    
                                                name : 'Cardiology',    
                                                a_link: './medi_detail.html?value=15&item=19',
                                                img_link : './img/medi_details/icon/medi_icon_20.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                        },
                                        {    
                                                name : 'Ophthalmology',    
                                                a_link: './medi_detail.html?value=16&item=47',
                                                img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                        },
                                        {    
                                                name : 'Otolaryngology',    
                                                a_link: './medi_detail.html?value=17&item=13',
                                                img_link : './img/medi_details/icon/medi_icon_14.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                        },
                                        {
                                                name : 'Women`s Cancer',
                                                a_link: './medi_detail.html?value=8&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_11.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                        },
                                        {    
                                                name : 'Radiology',    
                                                a_link: './medi_detail.html?value=18&item=24',
                                                img_link : './img/medi_details/icon/medi_icon_25.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                        },
                                        {
                                                name : 'Surgery',
                                                a_link: './medi_detail.html?value=19&item=6',
                                                img_link : './img/medi_details/icon/medi_icon_7.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                        },
                                        {
                                                name : 'Pressure Ulcer Clinic',
                                                a_link: './medi_detail.html?value=29&item=43',
                                                img_link : './img/medi_details/icon/medi_icon_44.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                        },
                                        {    
                                                name : 'Breast/Thyroid <span>Cancer</span>',    
                                                _link: './medi_center.html?cen_v=12&item=11',
                                                img_link : './img/medi_details/icon/medi_icon_12.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                        },
                                        {    
                                                name : 'Emergency Medicine',    
                                                a_link: './medi_detail.html?value=20&item=25',
                                                img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                        },
                                        {            
                                                name : 'Bioartificial Kidney',
                                                a_link: './medi_detail.html?cen_v=110&item=35',
                                                img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                        },
                                        {    
                                                name : 'Cognitive Development <span>Promotion Center</span>',    
                                                a_link: './medi_detail.html?value=21&item=5',
                                                img_link : './img/medi_details/icon/medi_icon_37.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                        },
                                        {    
                                                name : 'Rehabilitation <span>Treatment Center</span>',    
                                                a_link: './medi_detail.html?cen_v=18&item=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {    
                                                name : 'Rehabilitation Medicine',    
                                                a_link: './medi_center.html?cen_v=18',
                                                img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                        },
                                        {
                                                name : 'Prostate Cancer',
                                                a_link: './medi_center.html?cen_v=20&item=37',
                                                img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                        },
                                        {    
                                                name : 'Psychiatry',    
                                                a_link: './medi_detail.html?value=21&item=23',
                                                img_link : './img/medi_details/icon/medi_icon_24.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                        },
                                        {
                                                name : 'Orthopedics',
                                                a_link: './medi_detail.html?value=22&item=8',
                                                img_link : './img/medi_details/icon/medi_icon_9.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                        },
                                                {
                                                name : 'Laboratory Medicine',
                                                a_link: './medi_detail.html?value=23&item=28',
                                                img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                        },
                                        {    
                                                name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                                a_link: './medi_detail.html?value=24&item=15',
                                                img_link : './img/medi_details/icon/medi_icon_16.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                        },
                                        {
                                                name : 'Dentistry',
                                                a_link: './medi_detail.html?value=25&item=27',
                                                img_link : './img/medi_details/icon/medi_icon_28.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                        },
                                        {
                                                name : 'Industrial Health Center',
                                                a_link: './medi_detail.html?value=31&item=50',
                                                img_link : './img/medi_details/icon/medi_icon_47.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                        },
                                        {
                                                name : 'Maxillofacial Surgery',
                                                a_link: './medi_center.html?cen_v=24&item=39',
                                                img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                        },
                                        {
                                                name : 'Hemato-oncology',
                                                a_link: './medi_detail.html?value=26&item=20',
                                                img_link : './img/medi_details/icon/medi_icon_21.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                        },
                                        {
                                                name : 'Respiratory Medicine',        
                                                a_link: './medi_detail.html?value=27&item=21',
                                                img_link : './img/medi_details/icon/medi_icon_22.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                        },
                                        {
                                                name : 'Thoracic Surgery',
                                                a_link: './medi_detail.html?value=28&item=9',
                                                img_link : './img/medi_details/icon/medi_icon_10.png',
                                                img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                        },
                                ]


                                medi_depart_kor.sort(function(a,b) { //오름차순
                                        return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                                })
                                // console.log('medi_depart_kor : ', medi_depart_kor)

                                medi_depart_kor.forEach((value, index) => {
                                // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                                // console.log('value : ',value, 'name : ', value.name, 'a_link :',  value.a_link );  
                                        let onInit = true;

                                        if (onInit == true)

                                        {
                                                let medi_depart_list =`
                                                        <div class="rt_abc_box">
                                                                <div class="rt_a_box">
                                                                        <a href="${value.a_link}">
                                                                        <img src="${value.img_link}" alt="">
                                                                        <img src="${value.img_hover_link}" alt="" class="orange_img">
                                                                        <h5 class="rt2_h5">${value.name}<span class="hidden">/</span></h5>
                                                                        <input type="hidden" name="h5_text" value="${value.name}" id="h5_text_input">
                                                                        </a>
                                                                </div>
                                                        </div>`
                                                $('#rt_2_box').append(medi_depart_list);   

                                                onInit = false;

                                        } 
                                
                                
                                });
                        })
                        
                }



                $('#google_translate_element').on('change' , function(){
                        if (document.getElementsByClassName('goog-te-combo')[0].selectedOptions[0].value !== 'en')
                                return;

                               
        
                        
                        // $('.radio_tab_box2').css({gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'})
                        $('#rt_2_box .rt_abc_box').remove();
                        var medi_depart_en = [
                                {
                                        name : 'Family Medicine',
                                        a_link :'./medi_detail.html?value=0&item=1',
                                        img_link :'./img/medi_details/icon/medi_icon_2_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_2.png',
                                },
                                {
                                        name : 'Family Medicine Examination Center</span>',
                                        a_link :'./medi_detail.html?value=1&item=28',
                                        img_link :'./img/medi_details/icon/medi_icon_29_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                },
                                {
                                        name : 'Hepatobiliary and <span> Pancreatic Surgery</span>',
                                        a_link :'./medi_detail.html?value=2&item=15',
                                        img_link :'./img/medi_details/icon/medi_icon_16.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                },
                                {
                                        name : 'Liver',
                                        a_link :'./medi_center.html?cen_v=1&item=14',
                                        img_link :'./img/medi_details/icon/medi_icon_15_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_15.png',
                                },
                                {
                                        name : 'Joint and Spine ',
                                        a_link :'./medi_center.html?cen_v=21&item=29',
                                        img_link :'./img/medi_details/icon/medi_icon_30.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_30.png',
                                },
                                {
                                        name : 'Memory Improvement <span> Dementia Clinic</span>',
                                        a_link :'./medi_detail.html?cen_v=102&item=41',
                                        img_link :'./img/medi_details/icon/medi_icon_42.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_42.png',
                                },
                                {
                                        name : 'Internal Medicine',
                                        a_link :'./medi_detail.html?value=3&item=0',
                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Endocrinology',
                                        a_link :'./medi_detail.html?value=4&item=0',
                                        img_link :'./img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Anesthesiology <span> and Pain Medicine</span>',
                                        a_link :'./medi_detail.html?value=5&item=22',
                                        img_link :'./img/medi_details/icon/medi_icon_23.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_23.png',
                                },
                                {
                                        name : 'Radiation Oncology',
                                        a_link :'./medi_detail.html?value=6&item=23',
                                        img_link :'./img/medi_details/icon/medi_icon_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                },
                                {
                                        name : 'Urology',
                                        a_link :'./medi_detail.html?value=7&item=10',
                                        img_link :'./img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {    
                                        name : 'Obstetrics and Gynecology',    
                                        a_link: './medi_detail.html?value=8&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                },
                                {
                                        name : 'Plastic Surgery Center',
                                        a_link: './medi_detail.html?value=9&item=12',
                                        img_link : './img/medi_details/icon/medi_icon_13.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_13.png',
                                },
                                {    
                                        name : 'Pediatrics',    
                                        a_link: './medi_detail.html?value=10&item=2',
                                        img_link : './img/medi_details/icon/medi_icon_3.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_3.png',
                                },
                                {    
                                        name : 'Gastroenterology',    
                                        a_link: './medi_detail.html?value=11&item=0',
                                        img_link : './img/medi_details/icon/medi_icon_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_1.png',
                                },
                                {
                                        name : 'Gastrointestinal <span> Cancer Surgery</span>',
                                        a_link: './medi_center_2.html?cen_v2=6&item=45',
                                        img_link : './img/medi_details/icon/medi_icon_abc_17.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_17.png',
                                },
                                {    
                                        name : 'Gastroenterology <span> Endoscopic Center</span>',    
                                        a_link: './medi_center.html?cen_v=5&item=31',
                                        img_link : './img/medi_details/icon/medi_icon_32.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_32.png',
                                },
                                {    
                                        name : 'Neurology',    
                                        a_link: './medi_detail.html?value=12&item=3',
                                        img_link : './img/medi_details/icon/medi_icon_4_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_4.png',
                                },
                                {    
                                        name : 'Neurosurgery',    
                                        a_link: './medi_detail.html?value=13&item=7',
                                        img_link : './img/medi_details/icon/medi_icon_8.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_8.png',
                                },
                                {
                                        name : 'Nephrology',
                                        a_link: './medi_detail.html?value=14&item=10',
                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {
                                        name : 'Cardio <span>Cardiocerebrovascular</span>',
                                        a_link: './medi_center.html?cen_v=8&item=32',
                                        img_link : './img/medi_details/icon/medi_icon_33.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_33.png',
                                },
                                {    
                                        name : 'Cardiology',    
                                        a_link: './medi_detail.html?value=15&item=19',
                                        img_link : './img/medi_details/icon/medi_icon_20.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_20.png',
                                },
                                {    
                                        name : 'Ophthalmology',    
                                        a_link: './medi_detail.html?value=16&item=47',
                                        img_link : './img/medi_details/icon/medi_icon_abc_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_abc_24.png',
                                },
                                {    
                                        name : 'Otolaryngology',    
                                        a_link: './medi_detail.html?value=17&item=13',
                                        img_link : './img/medi_details/icon/medi_icon_14.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_14.png',
                                },
                                {
                                        name : 'Women`s Cancer',
                                        a_link: './medi_detail.html?value=8&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_11.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_11.png',
                                },
                                {    
                                        name : 'Radiology',    
                                        a_link: './medi_detail.html?value=18&item=24',
                                        img_link : './img/medi_details/icon/medi_icon_25.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_25.png',
                                },
                                {
                                        name : 'Surgery',
                                        a_link: './medi_detail.html?value=19&item=6',
                                        img_link : './img/medi_details/icon/medi_icon_7.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_7.png',
                                },
                                {
                                        name : 'Pressure Ulcer Clinic',
                                        a_link: './medi_detail.html?value=29&item=43',
                                        img_link : './img/medi_details/icon/medi_icon_44.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_44.png',
                                },
                                {    
                                        name : 'Breast/Thyroid <span>Cancer</span>',    
                                        _link: './medi_center.html?cen_v=12&item=11',
                                        img_link : './img/medi_details/icon/medi_icon_12.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_12.png',
                                },
                                {    
                                        name : 'Emergency Medicine',    
                                        a_link: './medi_detail.html?value=20&item=25',
                                        img_link : './img/medi_details/icon/medi_icon_26_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_26.png',
                                },
                                {            
                                        name : 'Bioartificial Kidney',
                                        a_link: './medi_detail.html?cen_v=110&item=35',
                                        img_link : './img/medi_details/icon/medi_icon_36_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_36.png',
                                },
                                {    
                                        name : 'Cognitive Development <span>Promotion Center</span>',    
                                        a_link: './medi_detail.html?value=21&item=5',
                                        img_link : './img/medi_details/icon/medi_icon_37.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_37.png',
                                },
                                {    
                                        name : 'Rehabilitation <span>Treatment Center</span>',    
                                        a_link: './medi_detail.html?cen_v=18&item=18',
                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                },
                                {    
                                        name : 'Rehabilitation Medicine',    
                                        a_link: './medi_center.html?cen_v=18',
                                        img_link : './img/medi_details/icon/medi_icon_5_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_5.png',
                                },
                                {
                                        name : 'Prostate Cancer',
                                        a_link: './medi_center.html?cen_v=20&item=37',
                                        img_link : './img/medi_details/icon/medi_icon_38_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_38.png',
                                },
                                {    
                                        name : 'Psychiatry',    
                                        a_link: './medi_detail.html?value=21&item=23',
                                        img_link : './img/medi_details/icon/medi_icon_24.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_24.png',
                                },
                                {
                                        name : 'Orthopedics',
                                        a_link: './medi_detail.html?value=22&item=8',
                                        img_link : './img/medi_details/icon/medi_icon_9.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_9.png"',
                                },
                                        {
                                        name : 'Laboratory Medicine',
                                        a_link: './medi_detail.html?value=23&item=28',
                                        img_link : './img/medi_details/icon/medi_icon_29_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_29.png',
                                },
                                {    
                                        name : 'Pancreatic  and <span>Biliary Tract</span>',    
                                        a_link: './medi_detail.html?value=24&item=15',
                                        img_link : './img/medi_details/icon/medi_icon_16.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_16.png',
                                },
                                {
                                        name : 'Dentistry',
                                        a_link: './medi_detail.html?value=25&item=27',
                                        img_link : './img/medi_details/icon/medi_icon_28.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_28.png',
                                },
                                {
                                        name : 'Industrial Health Center',
                                        a_link: './medi_detail.html?value=31&item=50',
                                        img_link : './img/medi_details/icon/medi_icon_47.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_47.png',
                                },
                                {
                                        name : 'Maxillofacial Surgery',
                                        a_link: './medi_center.html?cen_v=24&item=39',
                                        img_link : './img/medi_details/icon/medi_icon_40_1.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_40.png',
                                },
                                {
                                        name : 'Hemato-oncology',
                                        a_link: './medi_detail.html?value=26&item=20',
                                        img_link : './img/medi_details/icon/medi_icon_21.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_21.png',
                                },
                                {
                                        name : 'Respiratory Medicine',        
                                        a_link: './medi_detail.html?value=27&item=21',
                                        img_link : './img/medi_details/icon/medi_icon_22.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_22.png',
                                },
                                {
                                        name : 'Thoracic Surgery',
                                        a_link: './medi_detail.html?value=28&item=9',
                                        img_link : './img/medi_details/icon/medi_icon_10.png',
                                        img_hover_link : './img/medi_details/icon/medi_icon_orange_10.png',
                                },
                        ]
        
        
        
                        medi_depart_en.sort(function(a,b) { //오름차순
                                return a.name < b.name ? -1 : a.name > b.name ? 1:0;
                        })
                        // console.log('medi_depart_en : ', medi_depart_en)
        
                        medi_depart_en.forEach((v, i) => {
                                // 인덱스와 값을 순서대로 출력   // 0 '딸기', 1 '귤', 2 '사과' 순서로 출력
                                // console.log('v : ',v, 'name : ', v.name, 'a_link :',  v.a_link );  
                                
        
                                for(let i=0; i<1; i++) {
                                        let medi_depart_list2 =`
                                                <div class="rt_abc_box">
                                                        <div class="rt_a_box">
                                                                <a href="${v.a_link}">
                                                                <img src="${v.img_link}" alt="">
                                                                <img src="${v.img_hover_link}" alt="" class="orange_img">
                                                                <h5 class="rt2_h5" style="font-size:15px">${v.name}<span class="hidden">/</span></h5>
                                                                <input type="hidden" name="h5_text" v="${v.name}" id="h5_text_input">
                                                                </a>
                                                        </div>
                                                </div>`
                                        $('#rt_2_box').append(medi_depart_list2);   
                                }
                        
                        });
                        
                        $(window).resize(function(){
                                var width = window.innerWidth;
                                if (500 > width && 300 <= width) {
                                        console.log('300보다 큼')
                                        $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))'});
                                        $('.rt_a_box').css({height: '160px'});
                                } else if (width < 300) {
                                        console.log('300보다 작음')
                                        $('.radio_tab_box2, .rt_box').css({gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'});
                                        $('.rt_a_box').css({height: '170px'});
                                }
                        }).resize();
                })
        });
    
        $('#google_translate_element > div').click(function(){
                console.log("여긴 되니?")
        })



      
         


})