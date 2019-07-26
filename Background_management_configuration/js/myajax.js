// 正式
function util(api,param,res,xhr){
    $.ajax({
        type:"POST",
        url:'http://gogs.sleepbanana.com:8080/'+api,
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