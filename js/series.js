$(document).ready(function(){
    let list = $('.pd li').not('.product_more'), // 전체 상품
        li_soldout = $('.pd li:has(.soldout_on)'), // 품절 상품
        li_sale = $('.tag span:nth-child(2)').not('.soldout_on').parent().parent(), // 판매상품
        li_show, li_hidden, show_count;

    // list_filter
    $('.sorting').click(function(){
        $('.sorting_li').toggle();
    });
    $('.sorting_li li').click(function(){
        $('.sorting').text($(this).text());
        $('.sorting_li').hide();
    });

    // 품절 상품 제외 click
    $('#soldout').click(function(){
        li_show = $('.pd li:visible').not('.product_more'); // 보이는 제품
        show_count = li_show.length; // 보이는 제품 개수
        
        list.hide();
        if($(this).prop('checked') == true){ // 품절 체크 했을때
            $('.pd_num').text(li_sale.length);
            for(var i=0;i<show_count;i++){
                li_sale[i].style.display = 'block';
            }
        }else{ // 품절 체크 해제 > 11개만 보이기
            $('.pd_num').text(list.length);
            for(var i=0;i<11;i++){
                list[i].style.display = 'block';
            }
            $('.product_more').find('span').text('더보기 +');
        }
    });

    // 제품 더보기 click
    $('.product_more').click(function(){
        li_show = $('.pd li:visible').not('.product_more'); // 보이는 제품
        show_count = li_show.length; // 보이는 제품 개수

        // 품절 checked
        if($('#soldout').prop('checked') == true){ 
            li_hidden = li_sale.not('li:visible');

            if(li_hidden.length <= 12){
                $(this).find('span').text('접기 -');
            }
            if(li_hidden.length != 0){
                for(var i=0;i<12;i++){ 
                    li_hidden[i].style.display = 'block';
                }
            }else{ // 접기 누를때
                $(this).find('span').text('더보기 +');
                list.hide();
                for(var i=0;i<11;i++){ 
                    li_sale[i].style.display = 'block';
                }
            }
        }else{ // 품절 unchecked
            li_hidden = list.not('li:visible');
            
            if(li_hidden.length <= 12){
                $(this).find('span').text('접기 -');
            }
            if(li_hidden.length != 0){
                for(var i=0;i<12;i++){ 
                    // console.log(li_hidden[i].style);
                    li_hidden[i].style.display = 'block';
                }
            }else{ // 접기 누를때
                $(this).find('span').text('더보기 +');
                list.hide();
                for(var i=0;i<11;i++){ 
                    list[i].style.display = 'block';
                }
            }
        }
    });
});