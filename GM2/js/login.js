$(function () {
    $('#btn').click(function () {
        var num = $('#number').val(),
            password = $('#paw').val(),
            url = 'cmd=1&pwd=' + password + '&from=' + num;
        if (!num) {
            return alert('请输入账号！');
        }
        if (!password) {
            return alert('请输入密码！');
        }

        $.ajax({
            type: 'POST',
            // 最新接口
            url:'http://10.10.77.80/cgi-bin/pgmstop',
            data: url,
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                // console.log(data)
                if(data[0].data=='0'){
                    location.href='../page/main.html'
                }else if(data[0].data=='1'){
                    alert('密码错误！')
                }else if(data[0].data=='2'){
                    alert('账号错误！')
                }else if(data[0].data=='2'){
                    alert('账号或密码错误，请重新输入！')
                }else if(data[0].data=='4'){
                    alert('无权访问！')
                }else if(data[0].data=='5'){
                    alert('参数错误！')
                }
            }

        });
    })
});

