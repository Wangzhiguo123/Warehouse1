// 渲染数据
var arr=[],
    newdata=[],
    tarInp = $('#xztb span'),
    config = $('.config span'),
    z = 0,
    tarSel = $('.a1 input');
myAjax('get','/proxy',{},(res)=>{
    arr.push(res)
    //这是初始化数据 也不用管
    $.each(arr[0],function sj(data,item) {
        $('#show_tbody').append(
            '<tr>'+
            '<td>'+item.RewardId+'</td>'+
            '<td>'+item.RewardName+'</td>'+
            '<td>'+item.RewardType+'</td>'+
            '<td>'+item.RewardIcon+'</td>'+
            '<td>'+item.RewardDesn+'</td>'+
            // '<td>'+item.sf+'</td>'+
            '<td>'+
            '<a class="edit">'+'★'+'</a>'+
            // '<a href="#" class="del">'+'删除'+'</a>'+
            '</td>'+
            '</tr>'
        );
    })
    // methods.wzg('.del')
},'json');

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
        for (var c=0;c<a.length;c++) {
            var txt = $('td:first', a.eq(c)).html().trim();
            nameArr.push(txt);
        }
        a.hide();
        for (var i=0;i<nameArr.length;i++) {
            if (nameArr[i].indexOf(nameVal)>-1) {
                a.eq(i).show();
            }
        }
        console.log('type:'+nameVal+'id:'+id)
        console.log(name)
    },
    // 编辑

    editHandle: function (the_index) {
        z+=1;//第单击一次i的值加1；
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
        //这的数据拿到了的 我只是挨个插入
        // console.log(arr)
        $('.a1').append(
            '<tr>'+
            '<td>'+arr[0][the_index].RewardId+'</td>'+
            '<td>'+arr[0][the_index].RewardName+'</td>'+
            '<td>'+arr[0][the_index].RewardType+'</td>'+
            '<td>'+'<input type="text" class="srk">'+
            '<td class="del">'+'删除'+'</td>'+
            // '<td class="test">'+'测试'+'</td>'+
            '</tr>'
        )

        // console.log($('.a1').html())
// 将数据引到input
        var ak = $('.a1 input');
        var bk =$('.a1').children('tr').length
        ak.eq(bk-1).val(arr[0][the_index].RewardId)
// console.log(bk)
        // for (var s=0;s<ak.length;s++) {
        //     .eq(ak.length).val(arr[0][the_index].RewardId)
        // }
        // ak.val(arr[0][the_index].RewardId)
        // 增添配置参数
        $('.config_1').append(
            '<span>'+arr[0][the_index].RewardId+'|'+'</span>'
        )
        $('.config_2').append(
            '<span>'+arr[0][the_index].RewardType+'|'+'</span>'
        )
        $('.config_3').append(
            '<span>'+arr[0][the_index].RewardId+'|'+'</span>'
        )
        console.log(z)
        // if (z>0){
        //     $('.config_1 span').eq(z).text(123556)
        // }
//         var es = $('.config_1 span').length
//         for (var i=0;i<es;i++){
//             // $('.config_1 span').addClass(z+'a')
// console.log(i)
//         }


        $('.del').click(function() {
            // console.log($('.del'))
            var x=$(this).parent().index()
            // console.log(x)
            // console.log($(this))
            // console.log($(this).parents('tr').html())
            // console.log($('.a1 tr').eq(x).html())
            // var a=$('.del').length
            // 2019.7.17 18:36
            // 可以获取到当前父元素tr所在表格的下标
            // 可以获取到同上者相对应的具体参数值
            // console.log(this)
            // console.log($('.config_1 span').eq(xb).html())

            $('.config_1 span').eq(x).remove()
            $('.config_2 span').eq(x).remove()
            $('.config_3 span').eq(x).remove()
            wzg('.del')

        })
        //实时监听输入框值
        $('.srk').on('input',function () {
            // 元素的值
            console.log($(this).val())
            // 元素下标
            var indexs =$(this).parents('tr').index()
            $('.config_1 span').eq(indexs).text($(this).val()+'|')
            $('.config_2 span').eq(indexs).text($(this).val()+'|')
            $('.config_3 span').eq(indexs).text($(this).val()+'|')
        })


        for (var j=0;j<tarSel.length;j++) {
            // tarInp.eq(j).html(nowConArr[j])
            // tarInp.eq(j).val(123)
        }
        for (var k=0;k<config.length;k++) {
            // config.eq(k).html(nowConArr[k])
        }
        // console.log(config)
        for (var p=0;p<tarSel.length;p++) {
            var the_p = p+tarInp.length;
            tarSel.eq(p).val(nowConArr[the_p]);
        }
    },
}