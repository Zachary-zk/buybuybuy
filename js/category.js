$(function () {
    //大的列表
    ajax("http://127.0.0.1:9090/api/getcategorytitle", response => {
        $('.mmm_center ul').html(template('center', response))
    })
    // 列表的内容
    $('.mmm_center').on('click', 'h3', function () {
        $(this).siblings().toggleClass('displayNone');

        if (!$(this).siblings().hasClass('displayNone')) {

            ajax('http://127.0.0.1:9090/api/getcategory', {
                titleid: $(this).data('id')
            }, response => {
                console.log(response);
                $('.box ol').html(template('small', response))
            })
        }
    })
})