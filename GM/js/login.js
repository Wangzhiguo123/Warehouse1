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
            //http://10.10.77.180/cgi-bin/pgamegm
            // url: 'http://35.194.68.198/cgi-bin/dengtg',
            data: url,
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            success: function (data) {
                if(data[0].id == '0'){
                    // location.href = 'http://35.194.68.198/tg/tg.html';
                    location.href='../main.html'
                }else {
                    alert('账号或者密码错误，请重新输入！')
                }

            }

        });
    })
});

