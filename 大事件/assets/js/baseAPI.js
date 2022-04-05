//Jquery自动在post/ajax前调用
$.ajaxPrefilter(function(options) {
    options.url = 'http://www.liulongbin.top:3007/' + options.url;
})