$(document).ready(function(){

    // 반응형
    let w_width = $(window).width() + 17;
    if(w_width > 768){ //PC + 태블릿
        let sec2_top = $('.sec2').offset().top,
            sec3_top = $('.sec3').offset().top,
            window_top = $(window).scrollTop();

        $(window).on('resize',function(){
            sec2_top = $('.sec2').offset().top;
            sec3_top = $('.sec3').offset().top;
            window_top = $(window).scrollTop();
        });
        
        $(window).on("scroll touchmove mousewheel",function(){
            sec2_top = $('.sec2').offset().top;
            sec3_top = $('.sec3').offset().top;
            window_top = $(window).scrollTop();

            // sec2 fadeinup
            if(window_top + $('.sec1').height() > sec2_top){
                $('.sec2 article').children('h3,p').addClass('fadeinup');
                $('.sec2 ul li').addClass('fadeinup');
            }else{
                $('.sec2 article').children('h3,p').removeClass('fadeinup');
                $('.sec2 ul li').removeClass('fadeinup');
            }

            // sec3 fadein
            if(window_top + $('.sec2').height() > sec3_top){
                $('.sec3 article').addClass('fadein');
            }else{
                $('.sec3 article').removeClass('fadein');
            }
        });
    }
});




