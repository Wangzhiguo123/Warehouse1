// var data = 123
// let func = (name) => `Hello ${name}!`;
// func('Jack') // "Helllet a = 5;
// let b = 10;
// // 6.1*6=36.6
// function tag(s, v1, v2) {
//     console.log(s[0]);
//     console.log(s[1]);
//     console.log(s[2]);
//     console.log(v1);
//     console.log(v2);
//     return "OK";
// }
// tag`Hello ${ a + b } world ${ a * b}`;o Jack!"
// 此文件用于测试调用函数
function wzg1() {
    console.log("123456")
}
function myAjax(method,url,data,callback,type){
    //创建兼容 XMLHttpRequest 对象
    var xhr;
    if (window.XMLHttpRequest){//IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    //给请求添加状态变化事件处理函数
    xhr.onreadystatechange = function (){
        //判断状态码
        if(xhr.status==200 && xhr.readyState==4){
            //根据type参数，判断返回的内容需要进行怎样的处理
            if(type=='json'){
                //获得 json 形式的响应数据，并使用parse方法解析
                var res = JSON.parse(xhr.responseText);
            }else if(type=='xml'){
                //获得 XML 形式的响应数据
                var res = responseXML;
            }else{
                //获得字符串形式的响应数据
                var res = xhr.responseText;
            }
            //调用回调函数,并将响应数据传入回调函数
            callback(res);
        }
    };
    //判断data是否有数据
    var param = '';
    //这里使用stringify方法将js对象格式化为json字符串
    if(JSON.stringify(data) != '{}'){
        url += '?';
        for(var i in data){
            param += i+'='+data[i]+'&';   //将js对象重组，拼接成url参数存入param变量中
        }
        //使用slice函数提取一部分字符串，这里主要是为了去除拼接的最后一个&字符
        //slice函数：返回一个新的字符串。包括字符串从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。
        param = param.slice(0,param.length-1);
    }
    //判断method是否为get
    if(method == "get"){
        //是则将数据拼接在url后面
        url = url+param;
    }
    //初始化请求
    url = 'https://easy-mock.com/mock/5caff09431c675529c365621/example'+url
    xhr.open(method,url,true);
    //如果method == post
    if(method == "post"){
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //发送请求
        xhr.send(param);
    }else{
        //发送请求
        xhr.send(null);
    }
}
// 正式
function util(param,res){
    $.ajax({
        type:"POST",
        // url:"service.php?number="+$("#keyword").val(),
        url:'http://gogs.sleepbanana.com:8080/rewards',
        dataType:"json",
        data:param,
        contentType: "application/json;charset=utf-8",//这个参数也是header参数
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
        error:function(jqXHR){
            // console.log(error)
            // alert("发生错误："+ jqXHR.status);
        }
    });
}
