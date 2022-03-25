//发送按钮绑定事件处理函数
$(function() {
    resetui();
    $('.input_sub').on('click', function() {
        let text = $('.input_txt').val().trim();

        if (text.length <= 0) {
            console.log(text);
            $('.input_txt').val('');
            return;

        } else {
            console.log(text);
            //把用户输入的内容显示在界面上
            $('.talk_list').append('<li class="right_word"><img src="img/person02.png "/> <span> ' + text + '</span></li>');
            //清空输入框
            $('.input_txt').val('');
            resetui();
        }
    })


})