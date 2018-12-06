$(function () {
    ajax('http://127.0.0.1:9090/api/getbrandtitle', function (response) {
        $('.mmm_center ul').html(template('center', response))
    })
})