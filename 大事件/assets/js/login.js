$(function() {
    //点击‘注册‘链接
    $('#link_login').on('click', function() {
            alert('login');
            $('.login-box').show();
            $('.reg-box').hide();
        })
        //点击‘登陆’链接
    $('#link_reg').on('click', function() {
        alert('reg');
        $('.login-box').hide();
        $('.reg-box').show();
    })
})

//添加自定义表单验证规则
layui.form.verify({
    pwd: [/^[\S]{6,12}$/,
        '密码不能为空格 并且是6-12位'
    ],
    repwd: function(input) {
        // 属性选择器，注意空格
        let pwd = $('.reg-box [name=password]').val()

        console.log(pwd);
        console.log(input);
        if (pwd !== input) {
            return '两次密码输入不一致';
        }
    }
})


//监听注册表单提交事件
$('#form_reg').on('submit', function(e) {
        //阻止默认的提交行为
        e.preventDefault();
        // 根据接口，发起Ajax请求
        let data = {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        }
        console.log(data);
        let url = 'api/reguser';
        $.post(url, data, function(res) {
            if (res.status !== 0) {
                console.log('lost');
                return layui.layer.msg(res.message)
            }

            layui.layer.msg('注册成功，请登录');
            $('#link_login').click()
        })
    })
    //监听登陆表单提交事件
$('#form_login').submit(function(e) {
    //阻止默认提交行为
    e.preventDefault();
    $.ajax({
        url: 'api/login',
        method: "POST",
        data: $(this).serialize(),
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('登陆失败')
            }
            layui.layer.msg('登陆成功');
            localStorage.setItem('token', res.token);
            location.href = '/index.html';
        }
    })
})