$(function () {
    // 导航跳转
    $('.nav_titles').on('click','li',function () {
        var tit = $(this).html();
        console.log(tit)
        if(tit == 'SUPPORT'||tit=='支持'){
            return window.location.href = 'https://gamebear.helpshift.com/a/nova-empire/';
        }
        if(tit == 'WIKI'||tit=='维基'){
            return window.location.href = 'http://wiki.novaempiregame.com';
        }
         if(tit == 'HOME'||tit=='首页'){
            tit = 'index';
         }
        jump(tit,tit);
    });

    $('#accordion').on('click','li',function () {
        var result = $(this).find('li').html();
        if(result == undefined){
            var tit = $(this).find('span').html();
            if( tit == undefined){
                tit = $(this).parent().prev().find('span').html();
                var list = $(this).html();
            }
            if(tit == 'SUPPORT'||tit=='支持'){
                return window.location.href = 'https://gamebear.helpshift.com/a/nova-empire/';
            }
            if(tit == 'WIKI'||tit=='维基'){
                return window.location.href = 'http://wiki.novaempiregame.com';
            }
             if(tit == 'HOME'){
                 tit = 'index';
             }
            jump(tit,list);
        }
    });

    $('#mobile_nav').click(function () {
        $('body').css('overflow','hidden');
        modalOpen();
    });

});
function modalOpen() {
    mobilMenu();
    $('.Navbar-modalContent').css('display','block');

    $('.Navbar-right').on('touchmove',function () {
        $(this).css('display','none');
        window.location.reload();
    });

    $('.Navbar-right').on('click',function () {
        $(this).css('display','none');
        window.location.reload();
    });

    $('.Navbar-modalClose').bind('click',function () {
        $('.Navbar-modalContent').css('display','none');
        window.location.reload();
    });
}

// 二级菜单
function mobilMenu() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this), $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
}

function jump(type,list) {
    if (list=='特性'){
        var list ='FEATURES'
        var type ='FEATURES'
    }else if(list=='首页'){
        var list='HOME'
        var type ='HOME'
    }else if(list=='动态'){
        var list='NEWS'
        var type ='NEWS'
    }else if(list =='媒体'){
        var list='MEDIA'
        var type ='MEDIA'
    }else if(list=='维基'){
        var list='WIKI'
        var type ='WIKI'
    }else if (list=='支持'){
        var list='SUPPORT'
        var type ='SUPPORT'
    }
    var searchText = jQuery.trim(list);
    var searchUrl = encodeURI(type+".html?searchText=" + searchText);
    console.log(decodeURI(searchUrl))
    location.href = searchUrl;
}

