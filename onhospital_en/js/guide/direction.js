$(document).ready(function(){
 $('#selec4').prop("selected", true);
  $('.address_b').click(function(){
      
      const in_v = $('.input_b').val();

      // 화면에서 hidden 처리한 input box type을 text로 일시 변환
        $('.input_b').attr('type', 'text');

        // input에 담긴 데이터를 선택
        $('.input_b').select();

        //  clipboard에 데이터 복사
      var copy = document.execCommand('copy');

        // input box를 다시 hidden 처리
      $('.input_b').attr('type', 'hidden');
      
      // 사용자 알림
      if(copy) {
          alert("주소가 복사되었습니다.");
      }
  })
  $('.address_m').click(function(){
      
    const in_v = $('.input_m').val();

    // 화면에서 hidden 처리한 input box type을 text로 일시 변환
      $('.input_m').attr('type', 'text');

      // input에 담긴 데이터를 선택
      $('.input_m').select();

      //  clipboard에 데이터 복사
    var copy = document.execCommand('copy');

      // input box를 다시 hidden 처리
    $('.input_m').attr('type', 'hidden');
    
    // 사용자 알림
    if(copy) {
        alert("영문 주소가 복사되었습니다.");
    }
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