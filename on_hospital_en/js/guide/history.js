$(document).ready(function(){
 $('#selec1').prop("selected", true);

    var h_1 = $('#h_1').offset().top - 180;
    var h_2 = $('#h_2').offset().top - 160;
    var h_3 = $('#h_3').offset().top - 140;
    var h_4 = $('#h_4').offset().top - 130;
    var h_5 = $('#h_5').offset().top - 120;
    var h_6 = $('#h_6').offset().top - 110;
    var h_7 = $('#h_7').offset().top - 100;
    var h_8 = $('#h_8').offset().top - 0;
    var h_9 = $('#h_9').offset().top - 40;
    var h_10 = $('#h_10').offset().top - 40;
    var h_11 = $('#h_11').offset().top - 40;
    var h_12 = $('#h_12').offset().top - 40;
    var h_13 = $('#h_13').offset().top - -40;


    let h_1_bot = h_1 + $('#h_1').outerHeight();
    let h_2_bot = h_2 + $('#h_2').outerHeight();
    let h_3_bot = h_3 + $('#h_3').outerHeight();
    let h_4_bot = h_4 + $('#h_4').outerHeight();
    let h_5_bot = h_5 + $('#h_5').outerHeight();
    let h_6_bot = h_6 + $('#h_6').outerHeight();
    let h_7_bot = h_7 + $('#h_7').outerHeight();
    let h_8_bot = h_8 + $('#h_8').outerHeight();
    let h_9_bot = h_9 + $('#h_9').outerHeight();
    let h_10_bot = h_10 + $('#h_10').outerHeight();
    let h_11_bot = h_11 + $('#h_11').outerHeight();
    let h_12_bot = h_12 + $('#h_12').outerHeight();
    let h_13_bot = h_13 + $('#h_13').outerHeight();



    let his_1 = 0;
    let his_2 = 50;
    let his_3 = 90;
    let his_4 = 130;
    let his_5 = 170;
    let his_6 = 210;
    let his_7 = 250;
    let his_8 = 290;
    let his_9 = 330;
    let his_10 = 370;
    let his_11 = 410;
    let his_12 = 450;
    let his_13 = 490;


    var innerHeight = $(this).innerHeight();
    var scrollHeight = $(this).prop('scrollHeight');



$('.every_btn').on("click", function(){
    $('.his_box').css({display: 'flex'})
    $('.his_total_box').css('height', '5140px')
    
    $('.every_btn').css({backgroundColor: '#ee791c', color: '#fff'})
    $('.hs_b').css({color:'#ddd'})
    console.log('전체보기 데스크탑 클릭 확인 되었습니다.')
})
$('.every_m_btn').on("click", function(){
    $('.his_box').css({display: 'flex'})
    $('.his_total_box').css('height', '5140px')

    $('.every_m_btn').css({backgroundColor: '#ee791c', color: '#fff'})
    $('.hs_b').css({color:'#ddd'})
    console.log('전체보기 모바일 클릭 확인 되었습니다.')
})

    $(window).resize(function(){ 
        var width = window.innerWidth;
        if (width > 1150) {  // 다바이스 크기가 1400이상일때 
            console.log("이건 와웅 데스크탑용 이넹!")
            
            $('.every_m_btn').trigger("click")
            
                    
        /* 스크립트내용*/ 
            $('.hs_1').click(function(){
                $('.hs_1').css('color', '#ee791c')
                $('.hs_b').not('.hs_1').css('color', '#ddd')
                
                 $('.his_shorts_button').css('top', '185px')
                 $('.his_sb_title').css('top', '135px')


                 $('#h_1').css({display: 'flex',});
                 $('.his_box').not('#h_1').css({display: 'none',});
                 $('.his_total_box').css('height', '650px')

                 $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_2').click(function(){
                $('.hs_2').css('color', '#ee791c')
                $('.hs_b').not('.hs_2').css('color', '#ddd')

                $('#h_2').css({display: 'flex',});
                $('.his_box').not('#h_2').css({display: 'none',});
                $('.his_total_box').css('height', '450px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_3').click(function(){
                $('.hs_3').css('color', '#ee791c')
                $('.hs_b').not('.hs_3').css('color', '#ddd')


                $('#h_3').css({display: 'flex',});
                $('.his_box').not('#h_3').css({display: 'none',});
                $('.his_total_box').css('height', '450px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_4').click(function(){
                $('.hs_4').css('color', '#ee791c')
                $('.hs_b').not('.hs_4').css('color', '#ddd')

                $('#h_4').css({display: 'flex',});
                $('.his_box').not('#h_4').css({display: 'none',});
                $('.his_total_box').css('height', '700px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_5').click(function(){
                $('.hs_5').css('color', '#ee791c')
                $('.hs_b').not('.hs_5').css('color', '#ddd')


                $('#h_5').css({display: 'flex',});
                $('.his_box').not('#h_5').css({display: 'none',});
                $('.his_total_box').css('height', '250px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_6').click(function(){
                $('.hs_6').css('color', '#ee791c')
                $('.hs_b').not('.hs_6').css('color', '#ddd')

                $('#h_6').css({display: 'flex',});
                $('.his_box').not('#h_6').css({display: 'none',});
                $('.his_total_box').css('height', '200px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_7').click(function(){
                $('.hs_7').css('color', '#ee791c')
                $('.hs_b').not('.hs_7').css('color', '#ddd')

                $('#h_7').css({display: 'flex',});
                $('.his_box').not('#h_7').css({display: 'none',});
                $('.his_total_box').css('height', '550px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_8').click(function(){
                $('.hs_8').css('color', '#ee791c')
                $('.hs_b').not('.hs_8').css('color', '#ddd')

                $('#h_8').css({display: 'flex',});
                $('.his_box').not('#h_8').css({display: 'none',});
                $('.his_total_box').css('height', '400px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_9').click(function(){
                $('.hs_9').css('color', '#ee791c')
                $('.hs_b').not('.hs_9').css('color', '#ddd')

                $('#h_9').css({display: 'flex',});
                $('.his_box').not('#h_9').css({display: 'none',});
                $('.his_total_box').css('height', '450px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_10').click(function(){
                $('.hs_10').css('color', '#ee791c')
                $('.hs_b').not('.hs_10').css('color', '#ddd')

                $('#h_10').css({display: 'flex',});
                $('.his_box').not('#h_10').css({display: 'none',});
                $('.his_total_box').css('height', '150px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_11').click(function(){
                $('.hs_11').css('color', '#ee791c')
                $('.hs_b').not('.hs_11').css('color', '#ddd')

                $('#h_11').css({display: 'flex',});
                $('.his_box').not('#h_11').css({display: 'none',});
                $('.his_total_box').css('height', '550px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})

            })
            $('.hs_12').click(function(){
                $('.hs_12').css('color', '#ee791c')
                $('.hs_b').not('.hs_12').css('color', '#ddd')

                $('#h_12').css({display: 'flex',});
                $('#h_11').css({display: 'none',});
                $('.his_box').not('#h_12').css({display: 'none',});
                $('.his_total_box').css('height', '200px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})

            })
            $('.hs_13').click(function(){
                $('.hs_13').css('color', '#ee791c')
                $('.hs_b').not('.hs_13').css('color', '#ddd')

                $('#h_13').css({display: 'flex',});
                $('.his_box').not('#h_13').css({display: 'none',});
                $('.his_total_box').css('height', '200px')
                
                $('.every_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            

        
        } 
        else if (1500 > width &&  900 < width) {
            console.log("이건 900 큼")
            $('.his_box').css({display: 'flex'})
            $('.his_total_box').css('height', '5140px')
            $('.every_m_btn').trigger("click")
        
                        
            $('.every_m_btn').on("click", function(){
                $('.his_box').css({display: 'flex'})
                $('.his_total_box').css('height', '5140px')
            
                $('.every_m_btn').css({backgroundColor: '#ee791c', color: '#fff'})
                $('.hs_b').css({color:'#ddd'})
                console.log('전체보기 모바일 클릭 확인 되었습니다.')
                $(".his_shorts_button").scrollLeft(0);
            })
        /* 스크립트내용*/ 

            $('.hs_1').click(function(){
                $('.hs_1').css('color', '#ee791c')
                $('.hs_b').not('.hs_1').css('color', '#ddd')
                $('#h_1').css({display: 'flex',});
                $('.his_box').not('#h_1').css({display: 'none',});
                $('.his_total_box').css('height', '600px')

                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
        
            })
            $('.hs_2').click(function(){
                $('.hs_2').css('color', '#ee791c')
                $('.hs_b').not('.hs_2').css('color', '#ddd')
                $('#h_2').css({display: 'flex',});
                $('.his_box').not('#h_2').css({display: 'none',});
                $('.his_total_box').css('height', '400px')

                $('#h_1').css({display: 'none',});
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})

            })
            $('.hs_3').click(function(){
                $('.hs_3').css('color', '#ee791c')
                $('.hs_b').not('.hs_3').css('color', '#ddd')
                $('#h_3').css({display: 'flex',});
                $('.his_box').not('#h_3').css({display: 'none',});
                $('.his_total_box').css('height', '400px')

                $('#h_1').css({display: 'none',});
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_4').click(function(){
                $('.hs_4').css('color', '#ee791c')
                $('.hs_b').not('.hs_4').css('color', '#ddd')
                $('#h_4').css({display: 'flex',});
                $('.his_box').not('#h_4').css({display: 'none',});
                $('.his_total_box').css('height', '600px')

                $('#h_1').css({display: 'none',});
                $(".his_shorts_button").scrollLeft(250);
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_5').click(function(){
                $('.hs_5').css('color', '#ee791c')
                $('.hs_b').not('.hs_5').css('color', '#ddd')
                $('#h_5').css({display: 'flex',});
                $('.his_box').not('#h_5').css({display: 'none',});
                $('.his_total_box').css('height', '250px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_6').click(function(){
                $('.hs_6').css('color', '#ee791c')
                $('.hs_b').not('.hs_6').css('color', '#ddd')
                $('#h_6').css({display: 'flex',});
                $('.his_box').not('#h_6').css({display: 'none',});
                $('.his_total_box').css('height', '200px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_7').click(function(){
                $('.hs_7').css('color', '#ee791c')
                $('.hs_b').not('.hs_7').css('color', '#ddd')
                $('#h_7').css({display: 'flex',});
                $('.his_box').not('#h_7').css({display: 'none',});
                $('.his_total_box').css('height', '500px')

                $('#h_1').css({display: 'none',});
                $(".his_shorts_button").scrollLeft(500);
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                
            })
            $('.hs_8').click(function(){
                $('.hs_8').css('color', '#ee791c')
                $('.hs_b').not('.hs_8').css('color', '#ddd')
                $('#h_8').css({display: 'flex',});
                $('.his_box').not('#h_8').css({display: 'none',});
                $('.his_total_box').css('height', '350px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_9').click(function(){
                $('.hs_9').css('color', '#ee791c')
                $('.hs_b').not('.hs_9').css('color', '#ddd')
                $('#h_9').css({display: 'flex',});
                $('.his_box').not('#h_9').css({display: 'none',});
                $('.his_total_box').css('height', '400px')

                $(".his_shorts_button").scrollLeft(600);

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_10').click(function(){
                $('.hs_10').css('color', '#ee791c')
                $('.hs_b').not('.hs_10').css('color', '#ddd')
                $('#h_10').css({display: 'flex',});
                $('.his_box').not('#h_10').css({display: 'none',});
                $('.his_total_box').css('height', '150px')

                $('#h_1').css({display: 'none',});
                
                $(".his_shorts_button").scrollLeft(750);
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_11').click(function(){
                $('.hs_11').css('color', '#ee791c')
                $('.hs_b').not('.hs_11').css('color', '#ddd')
                $('#h_11').css({display: 'flex',});
                $('.his_box').not('#h_11').css({display: 'none',});
                $('.his_total_box').css('height', '450px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            
            $('.hs_12').click(function(){
                $('.hs_12').css('color', '#ee791c')
                $('.hs_b').not('.hs_12').css('color', '#ddd')
                $('#h_12').css({display: 'flex',});
                $('#h_11').css({display: 'none',});
                $('.his_box').not('#h_12').css({display: 'none',});
                $('.his_total_box').css('height', '200px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_13').click(function(){
                $('.hs_13').css('color', '#ee791c')
                $('.hs_b').not('.hs_13').css('color', '#ddd')
                $('#h_13').css({display: 'flex',});
                $('.his_box').not('#h_13').css({display: 'none',});
                $('.his_total_box').css('height', '200px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
        
        }
        else if (900 > width && 380 <= width) {
            console.log("이건 380보다 큼")
            $('.every_m_btn').trigger("click")

            $('.every_m_btn').on("click", function(){
                $('.his_box').css({display: 'flex'})
                $('.his_total_box').css('height', '5140px')
            
                $('.every_m_btn').css({backgroundColor: '#ee791c', color: '#fff'})
                $('.hs_b').css({color:'#ddd'})
                console.log('전체보기 모바일 클릭 확인 되었습니다.')
                $(".his_shorts_button").scrollLeft(0);
            })
        
        /* 스크립트내용*/ 

            $('.hs_1').click(function(){
                $('.hs_1').css('color', '#ee791c')
                $('.hs_b').not('.hs_1').css('color', '#ddd')
                $('#h_1').css({display: 'flex',});
                $('.his_box').not('#h_1').css({display: 'none',});
                
                $('.his_total_box').css('height', '550px')
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
        
            })
            $('.hs_2').click(function(){
                $('.hs_2').css('color', '#ee791c')
                $('.hs_b').not('.hs_2').css('color', '#ddd')
                $('#h_2').css({display: 'flex',});
                $('.his_box').not('#h_2').css({display: 'none',});
                $('.his_total_box').css('height', '350px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_3').click(function(){
                $('.hs_3').css('color', '#ee791c')
                $('.hs_b').not('.hs_3').css('color', '#ddd')
                $('#h_3').css({display: 'flex',});
                $('.his_box').not('#h_3').css({display: 'none',});
                $('.his_total_box').css('height', '350px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_4').click(function(){
                $('.hs_4').css('color', '#ee791c')
                $('.hs_b').not('.hs_4').css('color', '#ddd')
                $('#h_4').css({display: 'flex',});
                $('.his_box').not('#h_4').css({display: 'none',});
                $('.his_total_box').css('height', '600px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})

                // 이거 누르면 his_shorts_button (년도 바로가기 버튼 ul가 맨 밑으로 이동)
                $(".his_shorts_button").scrollLeft(200);
                console.log("이건 380보다 큼 - 2017   1")
            })
            $('.hs_5').click(function(){
                $('.hs_5').css('color', '#ee791c')
                $('.hs_b').not('.hs_5').css('color', '#ddd')
                $('#h_5').css({display: 'flex',});
                $('.his_box').not('#h_5').css({display: 'none',});
                $('.his_shorts_button').scrollTop(0);

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                $('.his_total_box').css('height', '200px')
            })
            $('.hs_6').click(function(){
                $('.hs_6').css('color', '#ee791c')
                $('.hs_b').not('.hs_6').css('color', '#ddd')
                $('#h_6').css({display: 'flex',});
                $('.his_box').not('#h_6').css({display: 'none',});
                $('.his_total_box').css('height', '150px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_7').click(function(){
                $('.hs_7').css('color', '#ee791c')
                $('.hs_b').not('.hs_7').css('color', '#ddd')
                $('#h_7').css({display: 'flex',});
                $('.his_box').not('#h_7').css({display: 'none',});
                $('.his_total_box').css('height', '400px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                
                // 이거 누르면 his_shorts_button (년도 바로가기 버튼 ul가 맨 밑으로 이동)
                $(".his_shorts_button").scrollLeft(400);
            })
            $('.hs_8').click(function(){
                $('.hs_8').css('color', '#ee791c')
                $('.hs_b').not('.hs_8').css('color', '#ddd')
                $('#h_8').css({display: 'flex',});
                $('.his_box').not('#h_8').css({display: 'none',});
                $('.his_total_box').css('height', '300px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_9').click(function(){
                $('.hs_9').css('color', '#ee791c')
                $('.hs_b').not('.hs_9').css('color', '#ddd')
                $('#h_9').css({display: 'flex',});
                $('.his_box').not('#h_9').css({display: 'none',});
                $('.his_total_box').css('height', '300px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_10').click(function(){
                $('.hs_10').css('color', '#ee791c')
                $('.hs_b').not('.hs_10').css('color', '#ddd')
                $('#h_10').css({display: 'flex',});
                $('.his_box').not('#h_10').css({display: 'none',});
                $('.his_total_box').css('height', '100px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})

                // 이거 누르면 his_shorts_button (년도 바로가기 버튼 ul가 맨 밑으로 이동)
                $(".his_shorts_button").scrollLeft(620);
            })
            $('.hs_11').click(function(){
                $('.hs_11').css('color', '#ee791c')
                $('.hs_b').not('.hs_11').css('color', '#ddd')
                $('#h_11').css({display: 'flex',});
                $('.his_box').not('#h_11').css({display: 'none',});
                $('.his_total_box').css('height', '450px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_12').click(function(){
                $('#h_12').css({display: 'flex'});
                $('.hs_12').css('color', '#ee791c')
                $('.hs_b').not('.hs_12').css('color', '#ddd')
                $('.his_box').not('#h_12').css({display: 'none',});
                $('.his_total_box').css('height', '50px')

                console.log("dhkdhkdhk")
                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                $('#h_11').css({display: 'none'});
            })
            $('.hs_13').click(function(){
                $('.hs_13').css('color', '#ee791c')
                $('.hs_b').not('.hs_13').css('color', '#ddd')
                $('#h_13').css({display: 'flex',});
                $('.his_box').not('#h_13').css({display: 'none',});
                $('.his_total_box').css('height', '50px')

                $('#h_1').css({display: 'none',});
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
        
        }
        else if (width < 380)  {
            console.log("이건 380보다 작음")
            $('.every_m_btn').trigger("click")
            $('.every_m_btn').on("click", function(){
                $('.his_box').css({display: 'flex'})
                $('.his_total_box').css('height', '5140px')
            
                $('.every_m_btn').css({backgroundColor: '#ee791c', color: '#fff'})
                $('.hs_b').css({color:'#ddd'})
                console.log('전체보기 모바일 클릭 확인 되었습니다.')
                $(".his_shorts_button").scrollLeft(0);
            })
            $('.hs_1').click(function(){
                $('.hs_1').css('color', '#ee791c')
                $('.hs_b').not('.hs_1').css('color', '#ddd')
                $('#h_1').css({display: 'flex',});
                $('.his_box').not('#h_1').css({display: 'none',});

                $('.his_total_box').css('height', '400px')

                $('#h_1').addClass("m_active_display");
                $('.his_box').not('#h_1').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_2').click(function(){
                
                $('.hs_2').css('color', '#ee791c')
                $('.hs_b').not('.hs_2').css('color', '#ddd')
                $('#h_2').css({display: 'flex',});
                $('.his_box').not('#h_2').css({display: 'none',});

                $('.his_total_box').css('height', '400px')

                $('#h_2').addClass("m_active_display");
                $('.his_box').not('#h_2').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_3').click(function(){
                $('.hs_3').css('color', '#ee791c')
                $('.hs_b').not('.hs_3').css('color', '#ddd')
                $('#h_3').css({display: 'flex',});
                $('.his_box').not('#h_3').css({display: 'none',});

                $('.his_total_box').css('height', '400px')

                $('#h_3').addClass("m_active_display");
                $('.his_box').not('#h_3').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_4').click(function(){
                $('.hs_4').css('color', '#ee791c')
                $('.hs_b').not('.hs_4').css('color', '#ddd')
                $('#h_4').css({display: 'flex',});
                $('.his_box').not('#h_4').css({display: 'none',});

                $('.his_total_box').css('height', '800px')

                $('#h_4').addClass("m_active_display");
                $('.his_box').not('#h_4').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                
                $(".his_shorts_button").scrollLeft(260);
                console.log("이건 380보다 작음 - 2017")
            })
            $('.hs_5').click(function(){
                $('.hs_5').css('color', '#ee791c')
                $('.hs_b').not('.hs_5').css('color', '#ddd')
                $('#h_5').css({display: 'flex',});
                $('.his_box').not('#h_5').css({display: 'none',});

                $('.his_total_box').css('height', '250px')

                $('#h_5').addClass("m_active_display");
                $('.his_box').not('#h_5').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_6').click(function(){
                $('.hs_6').css('color', '#ee791c')
                $('.hs_b').not('.hs_6').css('color', '#ddd')
                $('#h_6').css({display: 'flex',});
                $('.his_box').not('#h_6').css({display: 'none',});

                $('.his_total_box').css('height', '150px')

                $('#h_6').addClass("m_active_display");
                $('.his_box').not('#h_6').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_7').click(function(){
                $('.hs_7').css('color', '#ee791c')
                $('.hs_b').not('.hs_7').css('color', '#ddd')
                $('#h_7').css({display: 'flex',});
                $('.his_box').not('#h_7').css({display: 'none',});

                $('.his_total_box').css('height', '550px')

                $('#h_7').addClass("m_active_display");
                $('.his_box').not('#h_7').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_8').click(function(){
                $('.hs_8').css('color', '#ee791c')
                $('.hs_b').not('.hs_8').css('color', '#ddd')
                $('#h_8').css({display: 'flex',});
                $('.his_box').not('#h_8').css({display: 'none',});

                $('.his_total_box').css('height', '400px')

                $('#h_8').addClass("m_active_display");
                $('.his_box').not('#h_8').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                
                $(".his_shorts_button").scrollLeft(460);
            })
            $('.hs_9').click(function(){
                $('.hs_9').css('color', '#ee791c')
                $('.hs_b').not('.hs_9').css('color', '#ddd')
                $('#h_9').css({display: 'flex',});
                $('.his_box').not('#h_9').css({display: 'none',});

                $('.his_total_box').css('height', '400px')

                $('#h_9').addClass("m_active_display");
                $('.his_box').not('#h_9').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_10').click(function(){
                $('.hs_10').css('color', '#ee791c')
                $('.hs_b').not('.hs_10').css('color', '#ddd')
                $('#h_10').css({display: 'flex',});
                $('.his_box').not('#h_10').css({display: 'none',});

                $('.his_total_box').css('height', '50px')

                $('#h_10').addClass("m_active_display");
                $('.his_box').not('#h_10').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_11').click(function(){
                $('.hs_11').css('color', '#ee791c')
                $('.hs_b').not('.hs_11').css('color', '#ddd')
                $('#h_11').css({display: 'flex',});
                $('.his_box').not('#h_11').css({display: 'none',});

                $('.his_total_box').css('height', '550px')

                $('#h_11').addClass("m_active_display");
                $('.his_box').not('#h_11').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
                
                $(".his_shorts_button").scrollLeft(800);
            })
            $('.hs_12').click(function(){
                $('.hs_12').css('color', '#ee791c')
                $('.hs_b').not('.hs_12').css('color', '#ddd')
                $('#h_12').css({display: 'flex',});
                $('.his_box').not('#h_12').css({display: 'none',});

                $('.his_total_box').css('height', '30px')

                $('#h_12').addClass("m_active_display");
                $('.his_box').not('#h_12').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
            $('.hs_13').click(function(){
                $('.hs_13').css('color', '#ee791c')
                $('.hs_b').not('.hs_13').css('color', '#ddd')
                $('#h_13').css({display: 'flex',});
                $('.his_box').not('#h_13').css({display: 'none',});

                $('.his_total_box').css('height', '30px')

                $('#h_13').addClass("m_active_display");
                $('.his_box').not('#h_13').removeClass("m_active_display");
                
                $('.every_m_btn').css({backgroundColor: '#ddd', color: '#999'})
            })
        }
        
    }).resize(); 



  
    
    

    

    
})