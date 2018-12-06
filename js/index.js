$(function () {

    ajax('http://127.0.0.1:9090/api/getindexmenu', response => {
        $('.mmm_nav ul').html(template('menuapi1', response))
    })

    ajax('http://127.0.0.1:9090/api/getmoneyctrl', response => {
        $('.recommend_body ul').html(template('recommend', response))
    })

    $('.mmm_nav ul').on('click', '.geng', function () {
        $('.mmm_nav ul').find('.hide').toggle()
    })

})