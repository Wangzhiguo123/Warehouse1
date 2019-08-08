//判断是否在前面加0
function getNow(s) {
    return s < 10 ? '0' + s: s;
}
var myDate = new Date();
var year=myDate.getFullYear();        //获取当前年
var month=myDate.getMonth()+1;   //获取当前月
var date=myDate.getDate();            //获取当前日
var h=myDate.getHours();              //获取当前小时数(0-23)
var m=myDate.getMinutes();          //获取当前分钟数(0-59)
var s=myDate.getSeconds();
var now=year+'-'+getNow(month)+"-"+getNow(date)+" "+getNow(h)+':'+getNow(m)+":"+getNow(s);
// console.log(now)
// 事件触发
$('.es').click(function () {
    $(this).hide()
    if ($(this).text()=='高级筛选'){
        $('.select_box').show(500)
    }else{
        $('.select_box').hide(500)
        $(" .select_box input").val("");
    }
    $(this).siblings().show()
})
$('.search_btn').click(function () {
    methods.Search()
})
// 事件处理
var methods = {
    Search:function(){
        var param ={
            "Id":null,
            "Type":parseInt(1),
            "Match":['']
        }
    util('rewards',JSON.stringify(param),(res,xhr)=>{
    if (xhr=='success'){
        // arr.push(res.data)
        $("tbody tr").remove();
        $.each(res.data,function (data,item) {
            $('tbody').append(
                '<tr>'+
                // '<td>'+
                // '<img class="tupian" src="../img/'+item.RewardIcon+'">'+
                // '</td>'+
                // '<td class="zz">'+item.RewardType+"."+str[item.RewardType]+'</td>'+
                // '<td>'+item.RewardId+'</td>'+
                // '<td>'+item.RewardName+'</td>'+
                // '<td>'+item.RewardDesc+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+'-'+'</td>'+
                '<td>'+
                '<span>'+'礼包内容'+'</span>'+'|'+
                '<span>'+'修改时间'+'</span>'+'|'+
                '<span>'+'服务器组'+'</span>'+'|'+
                '<span>'+'更多↓'+'</span>'+
                '</td>'+
                '</tr>'
            );
        })
        res.data =null
        b=arr
        arr =[]
    }
})
    }
}