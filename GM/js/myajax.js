// 正式
function utils(api,type,param,res,xhr){
    $.ajax({
        type:type,
        // url:'../js/data.json',
        // url:'http://10.10.77.180/cgi-bin/'+api,
        url:'http://10.10.77.83/cgi-bin/'+api,
        dataType:"json",
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
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