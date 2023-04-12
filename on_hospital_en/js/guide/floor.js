$(document).ready(function(){
    $('#selec3').prop("selected", true);
    $('.ms_b_1').click(function(){
        $(this).css({
            background:'#ee791c',
            color: '#fff',
            border:'1px solid transparent',
        })
        $('.described').css({color:'#666'})
        $('.ms_b_2').css({
            background:'transparent',
            color: '#333',
            border:'1px solid #ee791c',
        })

        $('.ms_f_1').css({display:'block'})
        $('.ms_f_2').css({display:'none'})
    })
    $('.ms_b_2').click(function(){
        $(this).css({
            background:'#ee791c',
            color: '#fff',
            border:'1px solid transparent',
        })
        $('.described').css({color:'#fff'})
        $('.ms_b_1').css({
            background:'transparent',
            color: '#333',
            border:'1px solid #ee791c',
        })

        $('.ms_f_1').css({display:'none'})
        $('.ms_f_2').css({display:'block'})
    })
})