// 正式
function util(param,res,xhr){
    $.ajax({
        type:"GET",
        // url:'http://gogs.sleepbanana.com:8080/'+api,
        url:'js/data.json',
        // url:'http://10.10.77.180/cgi-bin/pgamegm?cmd=1&from=lu&pwd=123',
        dataType:"json",
        data:param,
        contentType: "application/json;charset=utf-8",
        // success:function(res){
        //     console.log(res)
        //     // console.log(data.msg)
        //     // if(data.success){
        //     //     // $("searchResult").html(data.msg);
        //     // }else{
        //     //     $("#searchResult").html("出现错误：" + data.msg);
        //     // }
        // },
        success:res,
        complete:xhr,
        error:function(jqXHR,xhr){
            alert(xhr+'：木有数据')
            // console.log(error)
            // alert("发生错误"+ jqXHR.status);
            // alert(jqXHR)
            // console.log("ERR_EMPTY_RESPONSE")
        }
    });
}