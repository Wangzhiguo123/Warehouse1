// 渲染数据
var arr=[],
    b=[],
    newdata=[],
    tarInp = $('#xztb span'),
    // config = $('.config span'),
    z = 0,
    tarSel = $('.a1 input'),
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
// ---------------
// var yearArray = new Array(2009, 2009, 2008, 2010, 2009, 2010)
// console.log($.unique(yearArray.sort()))
// console.log($.unique(yearArray))
//----------------
// 筛选事件
$('#search_btn').click(function () {
    methods.seachName();
})
// 编辑事件
$('#show_tbody').on('click','.edit', function () {
    trIndex = $('.edit', '#show_tbody').index($(this));
    addEnter = false;
    $(this).parents('tr').addClass('has_case');
    methods.editHandle(trIndex);
})
// 删除事件
    function wzg(dom) {
    $(dom).click(function () {
        // 可以获取到同上者相对应的具体参数值
        // console.log(this)
        $(this).parents('tr').remove()
    })
}
// 具体方法
var methods = {
    // 筛选
    seachName: function () {
        var a = $('#show_tbody tr'),
            nameVal = $('#Ktext').val().trim(),//type资源
            id = $('#job_num').val().trim(), //id
            name = $('#job_num2').val().split(" "),//name(支持多个)
            nameStr = '',
            nameArr = [];

        if (nameVal==='') {
            alert('type值不能为空')
            return;
        }
        // for (var c=0;c<a.length;c++) {
        //     var txt = $('td:first', a.eq(c)).html().trim();
        //     nameArr.push(txt);
        // }
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
        util(JSON.stringify(param),(res)=>{
            arr.push(res.data)

            // console.log(arr)
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
                    // '<a href="#" class="del">'+'删除'+'</a>'+
                    '</td>'+
                    '</tr>'
                );
            })
            res.data =null
             b=arr
            arr =[]
        })
    },
    // 编辑
    editHandle: function (the_index) {
        // z+=1;//第单击一次i的值加1；
        // console.log(arr[0][the_index])
        // 这你不用管  我只是单纯从左边将数据移入右边
        var tar = $('#show_tbody tr').eq(the_index);
        // console.log(tar)
        var nowConArr = [];
        for (var i=0; i<tar.find('td').length-1;i++) {
            var a = tar.children('td').eq(i).html();
            // 这是将左边的数据插入到nowConArr数组中
            nowConArr.push(a);
            // newdata.push(a);
        }
        /*console.log()
        *
        *
        *
        *
        * */
        // $(this).attr(z)
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
            // '<td class="test">'+'测试'+'</td>'+
            '</tr>'
        )
        $(".del").off("click");
// 将数据引到input
        var ak = $('.a1 input');
        var bk =$('.a1').children('tr').length
        ak.eq(bk-1).val(b[0][the_index].RewardType)
        // 增添配置参数
        $('.config_1').append(
            '<span>'+b[0][the_index].RewardType+'|'+'</span>'
        )
        $('.config_2').append(
            '<span>'+b[0][the_index].RewardId+'|'+'</span>'
        )
        $('.config_3').append(
            '<span>'+b[0][the_index].RewardType+'|'+'</span>'
        )

        // var myList=new Array("Li","Wei","zhong","Shao","Ran");
        // var portableList=myList.join("|");

        $('.del').click(function() {
            var i=$(this).parent().index()
            $('.config_1 span').eq(i).remove()
            $('.config_2 span').eq(i).remove()
            $('.config_3 span').eq(i).remove()
            // wzg('.del')
            $(this).parent('tr').remove()

            // var e =$(this).parent()
            // auto(a,e)
            // adc(e)
            // /*点击之后调用的函数*/
            // function  auto(callback,e){
            //     $('.config_1 span').eq(x).remove()
            //     $('.config_2 span').eq(x).remove()
            //     $('.config_3 span').eq(x).remove()
            //     callback&&callback();
            // }
            // /*回调函数*/
            // function a(){
            //     // console.log(e.html())
            //     // $(e).remove()
            //     console.log('我是点击之后的回调函数')
            // }
        })
        //实时监听输入框值
        $('.srk').on('input',function () {
            // 元素的值
            console.log($(this).val())
            // 元素下标
            var indexs =$(this).parents('tr').index()
            $('.config_1 span').eq(indexs).text($(this).val()+'|')
            // $('.config_2 span').eq(indexs).text($(this).val()+'|')
            $('.config_3 span').eq(indexs).text($(this).val()+'|')
        })

        // for (var j=0;j<tarSel.length;j++) {
        //     // tarInp.eq(j).html(nowConArr[j])
        //     // tarInp.eq(j).val(123)
        // }
        // for (var k=0;k<config.length;k++) {
        //     // config.eq(k).html(nowConArr[k])
        // }
        // // console.log(config)
        // for (var p=0;p<tarSel.length;p++) {
        //     var the_p = p+tarInp.length;
        //     tarSel.eq(p).val(nowConArr[the_p]);
        // }
    },
}