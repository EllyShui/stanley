$(document).ready(function(){

    // 카테고리 depth1 li 클릭 > depth2 li
    $('.category .depth1 ul li').click(function(){
        let idx = $(this).index();
        $('.category .depth2>li').eq(idx).addClass('cg_on').siblings().removeClass();
    });

    // 카테고리 depth2 li 클릭 > 탭메뉴
    $('.category .depth2 .cg_on li').click(function(){
        $(this).addClass('on').siblings().removeClass();
        let idx = $(this).index();
        $('.tab article').eq(idx).show().siblings().hide();
    }); 

    

    // 반응형
    let w_width = $(window).width() + 17;
    if(w_width <= 1319){ //태블릿
        // 제품 더보기 클릭 > 15개씩 보여주기(3줄)
        $('.product_more').click(function(){
            let li = $(this).siblings('li:hidden');
            if(li.length <= 15){
                $(this).find('span').text('접기 -');
            }
            if(li.length != 0){
                for(var i=0;i<15;i++){
                    li[i].style.display = 'block';
                }
            }else{ // 8개만 보여주기
                $(this).parent('ul').find('li:nth-child(n+9)').hide();
                $(this).show().find('span').text('더보기 +');
            }
        });
    }else{ // PC
        // 제품 더보기 클릭 > 15개씩 보여주기(3줄)
        $('.product_more').click(function(){
            let li = $(this).siblings('li:hidden');
            if(li.length <= 15){
                $(this).find('span').text('접기 -');
            }
            if(li.length != 0){
                for(var i=0;i<15;i++){
                    li[i].style.display = 'block';
                }
            }else{ // 9개만 보여주기
                $(this).parent('ul').find('li:nth-child(n+10)').hide();
                $(this).show().find('span').text('더보기 +');
            }
        });
    }

});