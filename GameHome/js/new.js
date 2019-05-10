$(function(){

    // 获取跳转参数
    var searchUrl = window.location.href;
    var searchData = searchUrl.split("=");
    var searchText = decodeURI(searchData[1]);
    sidebar(searchText);

    // 侧边栏点击
    $('#filter_nav').on('click','li',function () {
        $(this).siblings('li').removeClass('filter_active');
        $(this).addClass('filter_active');
        var item = $(this).html();
        var str='';
        str +=
       '<div id="content_list_right">'+
            '<h3>NEWS\\<span id="new_nav">All</span></h3>'+
        '<dl class="new_list">'+

        '</dl>'+
        // '<div class="new_btn">'+
        //     '<span>Next Page<em class="next_icon"></em></span>'+
        // '<span><em class="pre_icon"></em>Previous Page</span>'+
        // '</div>'+
        '</div>';
        $('#content_list_box').html(str);
        init(item);
    });

    // 视频播放
    $('.new_list').on('click','.paly_icon',function (evt) {
        var myVideo = $(evt.currentTarget).closest('.media_item').find('video')[0];
        if(myVideo.paused){
            $(this).hide();
            myVideo.play();
        }else{
            myVideo.pause();
            $(this).show();
        }
    });

    // 视频暂停
    $('.new_list').on('click','video',function (evt) {
        var myVideo = $(evt.currentTarget).closest('.media_item').find('video')[0];
        myVideo.pause();
        $(this).siblings('.paly_icon').show();
    });

    //new 详情
    $('#content_list_box').on('click','.show_more',function () {
        var type = $(this).attr('type');
        jump('new_detail',type);
    });


});
// 页面初始化
function init(list) {
    var data = {
        videos:
            [
                {url:"https://www.youtube.com/embed/yWux0h6Klqs?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"},
                {url:"https://www.youtube.com/embed/iw4OO06Emd0?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"},
                {url:"https://www.youtube.com/embed/h09cFCEgGPE?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"},
                {url:"https://www.youtube.com/embed/AJ9qtuhT_x0?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"},
                {url:"https://www.youtube.com/embed/Y29uUBjpi6Y?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"},
                {url:"https://www.youtube.com/embed/_Rok5-ulpXY?list=PLsFuD9MHkVPUmbJtjd-Lr5C2LCre3RvP4",tit:"For The Alliance"}
            ],
        Screenshots:
            [
                {url:"images/new/screenshots01.png",tit:"Space Station"},
                {url:"images/new/screenshots02.png",tit:""},
                {url:"images/new/screenshots03.png",tit:"Battle View"},
                {url:"images/new/screenshots04.png",tit:"Main View"},
                {url:"images/new/screenshots05.png",tit:"Server Selection"},
                {url:"images/new/screenshots06.png",tit:"War"}
            ],
        ConceptArt:
            [
                {url:"images/new/vedia01.png",tit:"Discover New Planets"},
                {url:"images/new/vedia02.png",tit:"For The Alliance"},
                {url:"images/new/vedia03.png",tit:"New Energy"},
                {url:"images/new/vedia04.png",tit:"Let's Run Away"},
                {url:"images/new/vedia05.png",tit:"Get Ready To Start Off"},
                {url:"images/new/vedia06.png",tit:"Alliance"}
            ],
        All: [
            {
                url:"images/new/new_bj01.jpg",
                id:'0',
                tit:"March 29 Update",
                content:"Please check Google Play / App Store for the update to enjoy all of the new features.",
                time:'March 29,2018'
            },
            {
                url:"images/new/new_bj02.jpg",
                id:'1',
                tit:"March 08 Update",
                content:"Please check Google Play / App Store for the update to enjoy all of the new features.",
                time:'March 08,2018'
            },
            {
                url:"images/new/new_bj02.jpg",
                id:'2',
                tit:"May 07 Update",
                content:"Please check Google Play / App Store for the update to enjoy all of the new features.",
                time:'May 07,2018'
            },
            {
                url:"images/new/new_bj02.jpg",
                id:'3',
                tit:"May 06 Update",
                content:"Please check Google Play / App Store for the update to enjoy all of the new features.",
                time:'May 06,2018'
            }

        ],
        Promotions: [],
        What: [],
    };
    var str = '';
    // ---------------------------------------------
    console.log(data.All)
    function compare(property){
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
    }
    var newdata = data.All.sort(compare('id'))
    console.log(newdata)
    // ---------------------------------------------
    switch(list)
    {
        case 'Videos':
        {
            var item = data.videos;
            $.each(item,function (key,value) {
                str +=
                    // '<dd class="media_item">'+
                    // '<div>' +
                    // '<video>' +
                    // '<source src="'+value.url+'" type="video/mp4">您的浏览器暂时无法播放此视频。'+
                    // '</video>'+
                    // '<i class="paly_icon"></i>'+
                    // '<span>'+value.tit+'</span>'+
                    // '</div>'+
                    // '</dd>'
                    '<dd class="media_item">'+
                    '<div>' +
                    '<iframe  width="100%" height="248" type="text/html" src="'+value.url+'"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
                    '</div>'+
                    '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
            break;
        case 'MEDIA':
        {
            var item = data.videos;
            $.each(item,function (key,value) {
                str +=
                //     '<dd class="media_item">'+
                //     '<div>' +
                //     '<video>' +
                //     '<source src="'+value.url+'" type="video/mp4">您的浏览器暂时无法播放此视频。'+
                //     '</video>'+
                //     '<i class="paly_icon"></i>'+
                //     '<span>'+value.tit+'</span>'+
                //     '</div>'+
                //     '</dd>'
                    '<dd class="media_item">'+
                    '<div>' +
                    '<iframe width="100%" height="248" type="text/html" src="'+value.url+'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'+
                    '</div>'+
                    '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html('Videos');
        }
            break;
        case 'Screenshots':
        {
            var item = data.Screenshots;
            $.each(item,function (key,value) {
                str +=
                    '<dd class="media_item">'+
                    '<div>' +
                    '<img src="'+value.url+'" alt="">'+
                    '<span>'+value.tit+'</span>'+
                    '</div>'+
                    '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
            break;
        case 'Concept Art':
        {
            var item = data.ConceptArt;
            $.each(item,function (key,value) {
                str +=
                    '<dd class="media_item">'+
                    '<div>' +
                    '<img src="'+value.url+'" alt="">'+
                    '<span>'+value.tit+'</span>'+
                    '</div>'+
                    '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
            break;
        case 'All':
        {
            var item = data.All;
            $.each(item,function (key,value) {
                str +=
                '<dd class="new_item">'+
                    '<div class="new_pic">'+
                    '<img src="'+value.url+'" alt="">'+
                    '</div>'+
                    '<div class="new_item_content">'+
                    '<h2>'+value.tit+'</h2>'+
                '<p class="new_item_tit">' +value.content +'</p>'+
                '<p class="show_more" type="'+value.id+'">show more >></p>'+
                '<div class="date">[promotions]<span>'+value.time+'</span></div>'+
                '</div>'+
                '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
            break;
        case 'NEWS':
        {
            var item = data.All;
            $.each(item,function (key,value) {
                str +=
                    '<dd class="new_item">'+
                    '<div class="new_pic">'+
                    '<img src="'+value.url+'" alt="">'+
                    '</div>'+
                    '<div class="new_item_content">'+
                    '<h2>'+value.tit+'</h2>'+
                    '<p class="new_item_tit">' +value.content +'</p>'+
                    '<p class="show_more" type="'+value.id+'">show more >></p>'+
                    '<div class="date">[promotions]<span>'+value.time+'</span></div>'+
                    '</div>'+
                '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html('All');
        }
            break;
        case 'Promotions':
        {
            var item = data.Promotions;
            $.each(item,function (key,value) {
                str +=
                    '<dd class="new_item">'+
                    '<div class="new_pic">'+
                    '<img src="images/new/new01.png" alt="">'+
                    '</div>'+
                    '<div class="new_item_content">'+
                    '<h2>December 23 Update Notes</h2>'+
                    '<p class="new_item_tit">The most threatened elite fleet of pirates will cruise through the galaxy looling for and striking.....</p>'+
                    '<p class="show_more" type="'+value.tit+'">show more >></p>'+
                    '<div class="date">[promotions]<span> December 23,2017</span></div>'+
                    '</div>'+
                '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
            break;
        default:
        {
            var item = data.What;
            $.each(item,function (key,value) {
                str +=
                    '<dd class="new_item">'+
                    '<div class="new_pic">'+
                    '<img src="images/new/new01.png" alt="">'+
                    '</div>'+
                    '<div class="new_item_content">'+
                    '<h2>December 23 Update Notes</h2>'+
                    '<p class="new_item_tit">The most threatened elite fleet of pirates will cruise through the galaxy looling for and striking.....</p>'+
                    '<p class="show_more" type="'+value.tit+'">show more >></p>'+
                    '<div class="date">[promotions]<span> December 23,2017</span></div>'+
                    '</div>'+
                '</dd>'
            });
            $('.new_list').html(str);
            $('#new_nav').html(list);
        }
    }
}
//侧边栏加载
function sidebar(searchText) {
    if(searchText){
        var str = '';
        switch(searchText)
        {
            case 'Videos':
            {
                str +=
                    '<li class="filter_active">Videos</li>'+
                    '<li>Screenshots</li>'+
                    '<li>Concept Art</li>';
                $('#filter_nav').html(str);

            }
                break;
            case 'MEDIA':
            {
                str +=
                    '<li class="filter_active">Videos</li>'+
                    '<li>Screenshots</li>'+
                    '<li>Concept Art</li>';
                $('#filter_nav').html(str);

            }
                break;
            case 'Screenshots':
            {
                str +=
                    '<li>Videos</li>'+
                    '<li class="filter_active">Screenshots</li>'+
                    '<li>Concept Art</li>';
                $('#filter_nav').html(str);
            }
                break;
            case 'Concept Art':
            {
                str +=
                    '<li>Videos</li>'+
                    '<li>Screenshots</li>'+
                    '<li class="filter_active">Concept Art</li>';
                $('#filter_nav').html(str);
            }
                break;
            case 'All':
            {
                str +=
                    '<li class="filter_active">All</li>'+
                    '<li></li>'+
                    '<li></li>';
                $('#filter_nav').html(str);
            }
                break;
            case 'NEWS':
            {
                str +=
                    '<li class="filter_active">All</li>'+
                    '<li></li>'+
                    '<li></li>';
                $('#filter_nav').html(str);
            }
                break;
            // case 'Promotions':
            // {
            //     str +=
            //         '<li>All</li>'+
            //         '<li class="filter_active">Promotions</li>'+
            //         '<li>What\'s news</li>';
            //     $('#filter_nav').html(str);
            // }
            //     break;
            // case 'What\'s news':
            // {
            //     str +=
            //         '<li>All</li>'+
            //         '<li>Promotions</li>'+
            //         '<li class="filter_active">What\'s news</li>';
            //     $('#filter_nav').html(str);
            // }
            //     break;
            default:{

            }
        }
        init(searchText);
    }
}


