// 渲染数据
var arr=[],
    b=[],//被筛选的数据
    z = 0,
    config={
    data0:[],
      data1:[],
    data2:[]
    },
    str={
        1:"资源",
        2:"道具",
        3:"联盟经验",
        4: "个人经验",
        5:"VIP点数",
        6:"cash",
        7:"英雄",
        8:"碎片",
        9:"联盟道具",
        10:"舰船",
        11:"联盟资源",
        12:"BUFF",
        13:"黑市币",
        14:"上架联盟舰船",
        15:"上架联盟物资",
        16:"玩家头像",
        17:"模组升级材料",
        18:"核心",
        19:"模组",
        20:"类星体碎片"
}
// 筛选事件
$('#search_btn').click(function () {
    methods.seachName();
})
// 反向查询事件
$('.select_search').click(function () {
    methods.ReverseQuery();
})
// 编辑事件
$('#show_tbody').on('click','.edit', function () {
    trIndex = $('.edit', '#show_tbody').index($(this));
    addEnter = false;
    $(this).parents('tr').addClass('has_case');
    methods.editHandle(trIndex);
})
// 具体方法
var methods = {
    // 筛选
    seachName: function () {
        var a = $('#show_tbody tr'),
            nameVal = $('.sp option:selected').val().trim(),//type资源
            id = $('#job_num').val().trim(), //id
            name = $('#job_num2').val().split(" ");//name(支持多个)

        if (nameVal==='') {
            alert('type值不能为空')
            return;
        }
        // a.hide();
        // for (var i=0;i<nameArr.length;i++) {
        //     if (nameArr[i].indexOf(nameVal)>-1) {
        //         a.eq(i).show();
        //     }
        // }

        var param ={
            "Id":parseInt(id),
            "Type":parseInt(nameVal),
            "Match":name
        }
        util('rewards',JSON.stringify(param),(res,xhr)=>{
            if (xhr=='success'){
                arr.push(res.data)
                $("#show_tbody tr").remove();
                $.each(res.data,function (data,item) {
                    $('#show_tbody').append(
                        '<tr>'+
                        '<td>'+
                        '<img class="tupian" src="../img/'+item.RewardIcon+'">'+
                        '</td>'+
                        '<td class="zz">'+item.RewardType+"."+str[item.RewardType]+'</td>'+
                        '<td>'+item.RewardId+'</td>'+
                        '<td>'+item.RewardName+'</td>'+
                        '<td>'+item.RewardDesc+'</td>'+
                        '<td>'+
                        '<a class="edit">'+'★'+'</a>'+
                        '</td>'+
                        '</tr>'
                    );
                })
                res.data =null
                b=arr
                arr =[]
            }
        })
    },
    // 反查
    ReverseQuery:function(){
        var type = $("input[name='type']").val().split("|"),
            id = $("input[name='id']").val().split("|"),
            count = $("input[name='count']").val().split("|"),
            i = 0 ,
            param ={
            "Type":type,
            "Id":id,
            "Count":count,
        };
        if (param.Type.length==param.Id.length && param.Type.length==param.Count.length && param.Type!=""&& param.Id!=""&& param.Count!="") {
            util('reward_parse',JSON.stringify(param),(res,xhr)=>{
                if (xhr=='success'){
                    config={
                        data0:[],
                        data1:[],
                        data2:[]
                    }
                    $(".a1").empty();
                    $(".sk span").remove();
                    $.each(res.data,function (data,item) {
                        $('.a1').append(
                            '<tr>'+
                            '<td>'+
                            '<img class="tupian_sm" src="../img/'+item.RewardIcon+'">'+ '</td>'+
                            '<td>'+item.RewardName+'</td>'+
                            '<td>'+str[item.RewardType]+'</td>'+
                            '<td>'+count[(i++)]+'</td>'+
                            '<td class="del">'+'删除'+'</td>'+
                            '</tr>'
                        );
                    })
                    $(".del").off("click");
                    $('.del').click(function () {
                        $(this).parent('tr').remove()
                    })
                }
            })
        } else {
            alert("请保证三个参数长度相同且每个输入框不为空再查询！")
        }
    },
    // 编辑
    editHandle: function (the_index) {
        z++
        var tar = $('#show_tbody tr').eq(the_index);
        var nowConArr = [];
        for (var i=0; i<tar.find('td').length-1;i++) {
            var a = tar.children('td').eq(i).html();
            nowConArr.push(a);
        }
        // Array.prototype.unique1 = function(){
        //     var res = [this[0]];
        //     for(var i = 1; i < this.length; i++){
        //         var repeat = false;
        //         for(var j = 0; j < res.length; j++){
        //             if(this[i] == res[j]){
        //                 repeat = true;
        //                 break;
        //             }
        //         }
        //         if(!repeat){
        //             res.push(this[i]);
        //         }
        //     }
        //     return res;
        // }
        // console.log(newdata.unique1())

        // for(var i = 0; i < nowConArr.length; i++){
        //     var repeat = false;
        //         for(var j = 0; j < newdata.length; j++){
        //             if(nowConArr[i] == newdata[j]){
        //                 repeat = true;
        //                 // console.log('重复了')
        //                 break;
        //             }
        //     }
        //     if(!repeat){
        //         // newdata.push(nowConArr[j]);
        //         newdata.push(nowConArr[i])
        //         // console.log('成功了')
        //     }
        // }

        // 所有新增数据
        // console.log(newdata)
        // 单个新增数据
        // console.log(nowConArr)
        // console.log(arr)
        $('.a1').append(
            '<tr>'+
            '<td>'+
            '<img class="tupian_sm" src="../img/'+b[0][the_index].RewardIcon+'">'+'</td>'+
            '<td>'+b[0][the_index].RewardName+'</td>'+
            '<td>'+str[b[0][the_index].RewardType]+'</td>'+
            '<td>'+'<input type="text" class="srk">'+
            '<td class="del">'+'删除'+'</td>'+
            '</tr>'
        )
        $(".del").off("click");
// 将数据copy到input
        var ak = $('.a1 input');
        var bk =$('.a1').children('tr').length
        ak.eq(bk-1).val(b[0][the_index].RewardType)
        // 增添配置参数
        config.data0.push(b[0][the_index].RewardType)
        config.data1.push(b[0][the_index].RewardType)
        config.data2.push(b[0][the_index].RewardId)
        $('.sk span').empty()
        $('.config_1').append(
            '<span>'+config.data0.join("|")+'</span>'
        )
        $('.config_3').append(
            '<span>'+config.data1.join("|")+'</span>'
        )
        $('.config_2').append(
            '<span>'+config.data2.join("|")+'</span>'
        )

        $('.del').click(function() {
            var i=$(this).parent().index()
            config.data0.splice(i,1)
            config.data1.splice(i,1)
            config.data2.splice(i,1)
            $('.sk span').empty()
            $('.config_1').append(
                '<span>'+config.data0.join("|")+'</span>'
            )
            $('.config_3').append(
                '<span>'+config.data1.join("|")+'</span>'
            )
            $('.config_2').append(
                '<span>'+config.data2.join("|")+'</span>'
            )
            $(this).parent('tr').remove()
        })
        //实时监听输入框值
        $('.srk').on('input',function () {
            // 元素下标
            var indexs =$(this).parents('tr').index()
            config.data1.splice(indexs,1,parseInt($(this).val()))
            $('.config_3 span').empty()
            $('.config_3').append(
                '<span>'+config.data1.join("|")+'</span>'
            )
            // $('.config_1 span').eq(indexs).text($(this).val()+'|')
            // $('.config_3 span').eq(indexs).text($(this).val()+'|')
        })
    },
}