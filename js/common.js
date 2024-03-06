$(document).ready(function(){

    


    // [series&product] 카테고리 depth1 열고 텍스트 설정
    $('.category .depth1 ul').hide();
    $('.category .depth1 button').click(function(){
        $(this).siblings('ul').toggle();
    });
    $('.category .depth1 ul li a').click(function(){
        let cg_li = this.innerText;
        document.querySelector('.category .depth1 button').innerHTML = cg_li+'<span class="down"></span>';
        $('.category .depth1 ul').hide();
    });

    // 반응형
    let w_width = $(window).width() + 17;
    if(w_width <= 768){ //모바일
        // [All]메뉴 펼치기&닫기
        $('.menu_nav').click(function(){
            let menu = $('header>div:nth-child(2)');
            if(menu.css('display') == 'none'){ // 메뉴 닫혀있으면 열기
                menu.slideDown(500);
                $('.menu_nav .m_bar4, .menu_nav .m_bar5').css({'transform':'rotate(0)'});
                $('.menu_nav .m_bar1').css({'transform':'rotate(-30deg)','top':'-1px'});
                $('.menu_nav .m_bar2').css({'transform':'rotate(30deg)','top':'-1px'});
            }else{ // 메뉴 열려있으면 닫기
                menu.slideUp(500);
                $('.menu_nav .m_bar1, .menu_nav .m_bar2').css({'transform':'rotate(0)','top':'0'});
                $('.menu_nav .m_bar4').css({'transform':'rotate(30deg)'});
                $('.menu_nav .m_bar5').css({'transform':'rotate(-30deg)'});            
            }
        });

        // search
        $('.search svg').click(function(){
            $('.search input').toggle();
        });
    }else{
        // [All]메뉴 펼치기&닫기
        $('.menu_nav').click(function(){
            let menu = $('header>div:nth-child(2)');
            if(menu.css('display') == 'none'){ // 메뉴 닫혀있으면 열기
                menu.slideDown(500);
                $('.logo').stop().animate({'height':'50px'});
                $('.menu_nav .m_bar4, .menu_nav .m_bar5').css({'transform':'rotate(0)'});
                $('.menu_nav .m_bar1').css({'transform':'rotate(-30deg)','top':'-1px'});
                $('.menu_nav .m_bar2').css({'transform':'rotate(30deg)','top':'-1px'});
            }else{ // 메뉴 열려있으면 닫기
                menu.slideUp(500);
                $('.logo').stop().animate({'height':'30px'});
                $('.menu_nav .m_bar1, .menu_nav .m_bar2').css({'transform':'rotate(0)','top':'0'});
                $('.menu_nav .m_bar4').css({'transform':'rotate(30deg)'});
                $('.menu_nav .m_bar5').css({'transform':'rotate(-30deg)'});            
            }
        });
    }
    

});