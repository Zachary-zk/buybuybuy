$(function () {

    //返回上一页
    $('.mmm_head a').on('click', function () {
        history.back()
        return false;
    })
    //返回顶部
    $('.footer_body ul li').eq(2).on('click', function () {
        $(window).scrollTop(0)
    })




})
// ajax封装

function ajax(url, obj, callback) {
    if (typeof arguments[1] === "function") {
        [obj, callback] = [arguments[2], arguments[1]]
    }
    $.ajax({
        type: "get",
        url: url,
        data: obj,
        dataType: "json",
        success: function (response) {
            callback(response)
        }
    });
}