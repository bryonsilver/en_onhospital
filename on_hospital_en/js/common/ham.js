$(document).ready(function(){
   

    const urlParams = new URL(location.href).searchParams;
    const num = urlParams.get('num');
    console.log('num',num)

    if (num == 'en') {
        $('.bur_pan_box').css({height: 'auto'})
        $('.b_pan_box').css({height: 'auto'})
    } 
})