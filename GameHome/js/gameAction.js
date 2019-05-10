$(function(){
    init();
    $('.modal_header>li').click(function(){
        var num = $(this).attr('num');
        $(this).siblings('li').removeClass('nav_item_active');
        $(this).addClass('nav_item_active');
        list(num);
        init();
    });


});
function init() {
    var cur=0;//当前显示的图片的下标
    var number=$('.modal_box_list>li').size()-1;
    var $imgList=$('.modal_box_list>li');//图片列表
    var $inList=$('.modal_foot>li');//小圆点列表
    //左右箭头
    $('.prev').click(slidePrev);
    $('.next').click(slideNext);

    $('.modal_foot>li').click(function(){
        var now=$(this).index();//获取用户触发的小圆点的下标
        if(now!=cur){//当用户触发的不是当前显示的图片对应的小圆点时
            $imgList.eq(cur).hide();
            $imgList.eq(now).show();
            $inList.removeClass().eq(now).addClass('nav_item_active');
            cur=now;
        }
    });
    //下一张
    function slideNext(){
        $imgList.eq(cur).hide();
        if(cur<number){
            $imgList.eq(cur+1).show();
            $inList.removeClass().eq(cur+1).addClass('nav_item_active');
            cur++;
        }else{
            $imgList.eq(0).show();
            $inList.removeClass().eq(0).addClass('nav_item_active')
            cur=0;
        }
    }
    //上一张
    function slidePrev(){
        $imgList.eq(cur).hide();
        if(cur>0){
            $imgList.eq(cur-1).show();
            $inList.removeClass().eq(cur-1).addClass('nav_item_active');
            cur--;
        }else{
            $imgList.eq(number).show();
            $inList.removeClass().eq(number).addClass('nav_item_active')
            cur=number;
        }
    }
}

function list(list) {
    var str ='';
    var item ='';
    switch(list)
    {
        case '1':
        {
            str +=
                '<li style="display:block;">'+
                '<img src="../images/features/game_action_kj01.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_kj02.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_kj03.png" alt="">'+
                '</li>';
            $('.modal_box_list').html(str);
        }
            break;
        case '2':
        {
            str +=
                '<li style="display:block;">'+
                '<img src="../images/features/game_action_xx01.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_xx02.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_xx03.png" alt="">'+
                '</li>'
            $('.modal_box_list').html(str);
        }
            break;
        case '3':
        {
            str +=
                '<li style="display:block;">'+
                '<img src="../images/features/game_action_xy01.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_xy02.png" alt="">'+
                '</li>'+
                '<li style="display: none">'+
                '<img src="../images/features/game_action_xy03.png" alt="">'+
                '</li>';
            $('.modal_box_list').html(str);
        }
            break;

        default:
        {

        }
    }
    item +=
        '<li class="nav_item_active">'+
        '<div class="nav_pic"></div>'+
        '<p>1</p>'+
        '</li>'+
        '<li>'+
        '<div class="nav_pic"></div>'+
        '<p>2</p>'+
        '</li>'+
        '<li>'+
        '<div class="nav_pic"></div>'+
        '<p>3</p>'+
        '</li>';
    $('.modal_foot').html(item);
}