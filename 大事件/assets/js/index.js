//获取用户基本信息
function getUserINfo() {
    $.ajax({
        method: "GET",
        url: '',
        headers: {
            Authorization: localStorage.getItem('token') || ''
        },
        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败');
                //调用渲染用户头像
                renderAvatar()
            }
        }
    })

}
//渲染用户头像
function renderAvatar(user) {
    let name = user.nickname || user.username;
    //设置欢迎的文本
    //$('#welcome').
}