$(function(){
    $('.forum_nav').on('click','.forum_nav_item',function () {
        var item = $(this).parent();
        var list = $(this).attr('num');
        item.hide();
        // handover(list);
        init();
    });

    $("#steps-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();

        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        var list = $(this).attr("num");
        handover(list);
        init();
        // 判断ab
        $(function new_r() {
        })
        $(function new_s() {
        })
        var $a = sessionStorage.choose
        this.ak = $a
        console.log('feature.js获取到的缓存值：'+this.ak)
        if($a==1 ||$a==undefined){
            $(".a").show();
            $(".b").hide()
        }else if ($a==2){
            $(".a").hide();
            $(".b").show()
        }

    });

    $('#forum_list').on('click','#guide_btn',function () {
        location.href = 'features/gameAction.html';
    });

    init();
});

function init() {
    var cur=0;//当前显示的图片的下标
    var number=$('.forum_content_top>li').size()-1;
    var $imgList=$('.forum_content_top>li');//图片列表
    var $inList=$('.forum_content_foot>li');//小圆点列表
    //左右箭头
    $('.prev').click(slidePrev);
    $('.next').click(slideNext);

    $('.forum_content_foot>li').click(function(){
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

function handover(list) {
    var that = this
    // that.ak = this.ak
    // console.log('这里获取'+that.ak)
    var str ='';
    switch(list)
    {
        case '2':
        {
            $('.rotundity2').show();
            str +=
            '<li id="guide">'+
                '<div class="forum_content">'+
                '<ul class="forum_content_top">'+
                '<li style="display:block;">'+
                '<h3 class="word_tit a"><span class="guide_ico">1</span>Download</h3>'+
                '<h3 class="word_tit b"><span class="guide_ico">1</span>下载</h3>'+
            '<div class="guide_content">'+
                // '+($a==1?'a':'b')+'b
                '<p class=" a">Nova Empire is available on both iOS and Android. Tap the link for your device below to get started!</p>'+
                '<p class="b">Nova Empire可以在iOS和Android上使用。点击下面的链接来启动你的设备!</p>'+
                '<div class="guide_item">'+
                '<div class="box_left">'+
            '<img src="images/pic.png" alt="">'+
            '</div>'+
            '<div class="box_right">'+
            '<p><a href="http://m.onelink.me/79b49f0e"><img src="images/app_store.png" alt=""></a></p>'+
            '<p><a href="http://m.onelink.me/eac2cdec"><img src="images/GOOGLE.png" alt=""></a></p>'+
            '</div>'+
                '</div>'+
                '</div>'+
                '</li>'+
                '<li style="display:none;" id="game_action">'+
            '<h3 class="word_tit a"><span class="guide_ico">2</span>Overview1</h3>'+
            '<h3 class="word_tit b"><span class="guide_ico">2</span>概述</h3>'+
            '<div class="guide_content game_action">'+
            '<div class="game_btn_list">'+
            '<img src="images/features/game_action_kj01.png" alt="">'+
            '<div class="new_btn a" id="guide_btn" item="gameAction">View More</div>'+
            '<div class="new_btn b" id="guide_btn" item="gameAction">更多</div>'+
            '</div>'+
            '</div>'+
            '</li>'+
            '<li style="display: none" id="game_play">'+
                '<h3 class="word_tit a"><span class="guide_ico">3</span>Features</h3>'+
                '<h3 class="word_tit b"><span class="guide_ico">3</span>特性</h3>'+
                '<div class="guide_content game_play">'+
                '<img src="images/features/hd.png" alt="">'+
                '<img src="images/features/ts.png" alt="">'+
                '<img src="images/features/zdjc.png" alt="">'+
                '<img src="images/features/kjz.png" alt="">'+
                '<img src="images/features/klk.png" alt="">'+
                '<img src="images/features/lm.png" alt="">'+
                '</div>'+
                '</li>'+
            '</ul>'+
            '<div class="forum_btn">'+
                '<span class="prev"></span>'+
                '<span class="next"></span>'+
                '</div>'+
                '<ul class="forum_content_foot guide_foot">'+
                '<li class="nav_item_active">'+
                '<div class="nav_pic"></div>'+
                '<p class="a">Download</p>'+
                '<p class="b">下载</p>'+
                '</li>'+
                '<li>'+
                '<div class="nav_pic"></div>'+
                '<p class="a">Overview</p>'+
                '<p class="b">概述</p>'+
                '</li>'+
                '<li>'+
                '<div class="nav_pic"></div>'+
                '<p class="a">Features</p>'+
                '<p class="b">特性</p>'+
                '</li>';
            $('#forum_list').html(str);
        }
            break;
        case '3':
        {
            $('.rotundity3').show();
            str +=
                '<li id="ship">'+
                    '<div class="forum_content">'+
                        '<ul class="forum_content_top">'+
                            '<li style="display: block">'+
                            '<div class="ship_top_left">'+
                            '<img src="images/features/ship01.png" alt="">'+
                            '</div>'+
                            '<div class="ship_top_right">'+
                            '<div class="ship_top_right_tit">'+
                            '<h2 class="a">"Drone" Workship</h2>'+
                            '<h2 class="b">“无人驾驶”飞船</h2>'+
                            '<img src="images/features/separation_line.png" alt="">'+
                            '<span class="a">Reliably mine, collect, transport, build and perform essential maintenance across large areas of space.</span>'+
                            '<span class="b">在大面积空间内可靠地进行采矿、收集、运输、建造和必要的维护。</span>'+
                '</div>'+
                            '<img src="images/features/ship_data01.png" alt="">'+
                            '</div>'+
                            '</li>'+
                            '<li style="display:none;">'+
                                '<div class="ship_top_left">'+
                                    '<img src="images/features/ship07.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                    '<div class="ship_top_right_tit">'+
                                        '<h2 class="a">"Tracer" Gunship</h2>'+
                                        '<h2 class="b">“追踪者”武装飞船</h2>'+
                                        '<img src="images/features/separation_line.png" alt="">'+
                                        '<span class="a">Gunships served as human\'s earliest combat fleets. The first rapid and flexible gunships designed were the "Tracer" class.</span>'+
                                        '<span class="b">炮艇是人类最早的战斗舰队。第一种快速和灵活的炮艇设计是“追踪者”级。</span>'+
                '</div>'+
                                    '<img src="images/features/ship_data07.png" alt="">'+
                                '</div>'+
                            '</li>'+

                            '<li style="display: none">'+
                                '<div class="ship_top_left">'+
                                    '<img src="images/features/ship02.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                    '<div class="ship_top_right_tit">'+
                                        '<h2 class="a">"Eagle" Frigate</h2>'+
                                        '<h2 class="b">“鹰”护卫舰</h2>'+
                                        '<img src="images/features/separation_line.png" alt="">'+
                                        '<span class="a">The first core ships of the human fleets, nicknamed "Eagle". Their modular configuration allows for much great flexibility and firepower.</span>'+
                                        '<span class="b">人类舰队的第一艘核心船，绰号“鹰”。他们的模块化配置允许极大的灵活性和火力。</span>'+
                                    '</div>'+
                                    '<img src="images/features/ship_data02.png" alt="">'+
                                '</div>'+
                            '</li>'+
                            '<li style="display: none">'+
                                '<div class="ship_top_left">'+
                                    '<img src="images/features/ship04.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                    '<div class="ship_top_right_tit">'+
                                        '<h2 class="a">"Tiger" Destroyer</h2>'+
                                        '<h2 class="b">“老虎”驱逐舰</h2>'+
                                        '<img src="images/features/separation_line.png" alt="">'+
                                        '<span class="a">The destroyer has larger artillery than a frigate and was used effectively to defeat the first fleet of the Republic.</span>'+
                                        '<span clasbs="">驱逐舰拥有比护卫舰更大的火炮，并被有效地用于击败共和国第一舰队。</span>'+
                '</div>'+
                                    '<img src="images/features/ship_data04.png" alt="">'+
                                '</div>'+
                            '</li>'+
                            '<li style="display: none">'+
                                '<div class="ship_top_left">'+
                                '<img src="images/features/ship03.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                '<div class="ship_top_right_tit">'+
                                '<h2 class="a">"Knight" bLight Cruiser</h2>'+
                                '<h2 class="b">“骑士”轻型巡洋舰</h2>'+
                                '<img src="images/features/separation_line.png" alt="">'+
                                '<span class="a">After the Human Republic\'s defeat in the Gordor War, cruisers were produced. These became crucial elements of the Human Republic\'s fleets.</span>'+
                                '<span class="b">在戈多战争中人类共和国战败后，巡洋舰被制造出来。这些成为人类共和国舰队的重要组成部分。</span>'+
                '</div>'+
                            '<img src="images/features/ship_data03.png" alt="">'+
                            '</div>'+
                            '</li>'+
                            '<li style="display: none">'+
                                '<div class="ship_top_left">'+
                                    '<img src="images/features/ship05.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                    '<div class="ship_top_right_tit">'+
                                        '<h2 class="a">"Enterprise" Battle Cruiser</h2>'+
                                        '<h2 class="b">“企业”战斗巡洋舰</h2>'+
                                        '<img src="images/features/separation_line.png" alt="">'+
                                        '<span class="a">Raedesigned and strengthened cruiser models produced after the first galaxy civil war. Expensive and very strong.</span>'+
                                        '<span class="b">瑞伊设计并加强了第一次银河内战后生产的巡洋舰模型。又贵又结实。</span>'+
                                    '</div>'+
                                    '<img src="images/features/ship_data05.png" alt="">'+
                                '</div>'+
                            '</li>'+
                            '<li style="display: none">'+
                                '<div class="ship_top_left">'+
                                    '<img src="images/features/ship06.png" alt="">'+
                                '</div>'+
                                '<div class="ship_top_right">'+
                                    '<div class="ship_top_right_tit">'+
                                        '<h2 class="a">"Crown" Dreadnought</h2>'+
                                        '<h2 class="b">“皇冠”无畏战列舰</h2>'+
                                        '<img src="images/features/separation_line.png" alt="">'+
                                        '<span class="a">Huge, immensely powerful goliaths. Entire navies of smaller ships have fallen to a single dreadnought on more than one occasion.</span>'+
                                        '<span class="b">巨大无比强大的歌利亚。由较小船只组成的整个海军不止一次地落入一艘无畏级战舰。</span>'+
                                    '</div>'+
                                    '<img src="images/features/ship_data06.png" alt="">'+
                                '</div>'+
                            '</li>'+
                        '</ul>'+
                        '<div class="forum_btn">'+
                            '<span class="prev"></span>'+
                            '<span class="next"></span>'+
                        '</div>'+
                        '<ul class="forum_content_foot ship_foot">'+
                            '<li class="nav_item_active">'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Workship</p>'+
                                '<p class="b">任务船</p>'+
                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Gunship</p>'+
                                '<p class="b">炮艇</p>'+

                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Frigate</p>'+
                                '<p class="b">护卫舰</p>'+
                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Destroyer</p>'+
                                '<p class="b">驱逐舰</p>'+
                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Light Cruiser</p>'+
                                '<p class="b">轻巡</p>'+
                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Battle Cruiser</p>'+
                                '<p class="b">重巡</p>'+
                            '</li>'+
                            '<li>'+
                                '<div class="nav_pic"></div>'+
                                '<p class="a">Dreadnought</p>'+
                                '<p class="b">战列舰</p>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</li>'
            $('#forum_list').html(str);
        }
            break;
        default:
        {
            $('.rotundity4').show();
            console.log('这里获取缓存值：'+$a)
            if ($a==1) {
            str +=
            '<li id="feature" style="padding:50px 20px;">'+
            '<div class="container" style="width: 90%">'+
            '<div id="slide" class="slide" class="index-slide" alt="star">'+
            '<div class="img"><img src="images/banner01.png" tit="1Work together to achieve dominance over your foes"></div>'+
            '<div class="img"><img src="images/banner02.png" tit="2Discover a rich and vast galaxy"></div>'+
            '<div class="img"><img src="images/banner03.png" tit="3Organize your fleets and send them into combat"></div>'+
            '<div class="img"><img src="images/banner04.png" tit="4Create and enhance your Space station"></div>'+
                '</div>'+
            '</div>'+
            '<div id="banner_footer">'+
                '<div style="float: left;width: 37%">'+
            '<em id="banner_footer_left"></em>'+
            '</div>'+
            '<span id="banner_footer_title">1Organize your fleets and them into combat</span>'+
            '<div style="float: right;width: 37%">'+
            '<em id="banner_footer_right"></em>'+
            '</div>'+
            '</div>'+
            '</li>'
            }else if($a==2){
                str +=
                    '<li id="feature" style="padding:50px 20px;">'+
                    '<div class="container" style="width: 90%">'+
                    '<div id="slide" class="slide" class="index-slide" alt="star">'+
                    '<div class="img b"><img src="images/banner01.png" tit="共同努力以获得对敌人的统治"></div>'+
                    '<div class="img b"><img src="images/banner02.png" tit="发现一个丰富而广阔的星系"></div>'+
                    '<div class="img b"><img src="images/banner03.png" tit="组织你的舰队和他们进入战斗"></div>'+
                    '<div class="img b"><img src="images/banner04.png" tit="创造并增强你的空间站"></div>'+
                    '</div>'+
                    '</div>'+
                    '<div id="banner_footer">'+
                    '<div style="float: left;width: 37%">'+
                    '<em id="banner_footer_left"></em>'+
                    '</div>'+
                    '<span id="banner_footer_title">测试1：Organize your fleets and them into combat</span>'+
                    '<div style="float: right;width: 37%">'+
                    '<em id="banner_footer_right"></em>'+
                    '</div>'+
                    '</div>'+
                    '</li>'
            }
            $('#forum_list').html(str);
            banner();
        }
    }
}

function sidebar(searchText) {
    if(searchText){
        var str = '';
        switch(searchText)
        {
            case 'Guide':
            {
                str +=
                    '<div class="item_cell current">'+
                    '<span class="a">Download</span>'+
                    '<span class="b">下载</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<sapan class="a">Overview</sapan>'+
                    '<span class="b">概述</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span class="a">Features</span>'+
                    '<span class="b">特性</span>'+
                    '</div>';
                $('#wx_items').html(str);
                $('#mobile_ship').remove();
                $('#mobile_feature').remove();
                tab();

            }
                break;
            case 'Ships':
            {
                str +=
                    '<div class="item_cell current">'+
                    '<span>Workship</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Gunship</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Frigate</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Destroyer</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Light Cruiser</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Battle Cruiser</span>'+
                    '</div>'+
                    '<div class="item_cell">'+
                    '<span>Dreadnought</span>'+
                    '</div>';
                $('#wx_items').html(str);
                $('#mobile_guide').remove();
                $('#mobile_feature').remove();
                tab();
            }
                break;
            default:{
                $('#mobile_guide').remove();
                $('#mobile_ship').remove();
            }
        }

    }
}

// 移动端tab导航切换
function tab() {
    var cur=0;
    $(".item_cell").click(function () {
        var $imgList=$('.mobile_list>.mobile_item');
        $(this).addClass('current').siblings().removeClass('current');
        var now=$(this).index();
        if(now!=cur){
            $imgList.eq(cur).hide();
            $imgList.eq(now).show();
            cur=now;
        }
    });

}

// banner轮播
function banner() {

    $(".slide").height($(".slide").width()*0.56);
    slideNub = $(".slide .img").size();             //获取轮播图片数量
    for(i=0;i<slideNub;i++){
        $(".slide .img:eq("+i+")").attr("data-slide-imgId",i);
    }


    //根据轮播图片数量设定图片位置对应的class
    if(slideNub==1){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img3");
        }
    }
    if(slideNub==2){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+3));
        }
    }
    if(slideNub==3){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+2));
        }
    }
    if(slideNub>3&&slideNub<6){
        for(i=0;i<slideNub;i++){
            $(".slide .img:eq("+i+")").addClass("img"+(i+1));
        }
    }
    if(slideNub>=6){
        for(i=0;i<slideNub;i++){
            if(i<5){
                $(".slide .img:eq("+i+")").addClass("img"+(i+1));
            }else{
                $(".slide .img:eq("+i+")").addClass("img5");
            }
        }
    }

    //自动轮播
    if(autoLb){
        setInterval(function(){
            right();
        }, autoLbtime*1000);
    }

    imgClickFy();
}
//右滑动
function right(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<slideNub;i++){
        if(i==0){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
        }else{
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i-1]);
        }
    }
    imgClickFy();
}


//左滑动
function left(){
    var fy = new Array();
    for(i=0;i<slideNub;i++){
        fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
    }
    for(i=0;i<slideNub;i++){
        if(i==(slideNub-1)){
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[0]);
        }else{
            $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i+1]);
        }
    }
    imgClickFy();
}


//轮播图片左右图片点击翻页
function imgClickFy(){
    console.log(2134)
    var pic = $(".slide .img3").html();
    var str = pic.split("\"");
    $('#banner_footer_title').html(str[3]);
    $(".slide .img").removeAttr("onclick");
    $(".slide .img2").attr("onclick","left()");
    $(".slide .img4").attr("onclick","right()");
}


