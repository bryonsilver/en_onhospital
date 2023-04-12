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

})