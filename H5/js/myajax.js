// 正式
function utils(api,type,param,res,xhr){
    $.ajax({
        type:type,
        url:'js/data.json',
        dataType:"json",
        crossDomain: true,
        // xhrFields: {
        //     withCredentials: true
        // },
        data:param,
        contentType: "application/json;charset=utf-8",
        success:res,
        complete:xhr,
        error:function(jqXHR,xhr){
            alert(xhr+'：木有数据')
        }
    });
}