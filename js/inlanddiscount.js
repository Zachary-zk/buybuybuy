$(function () {

    ajax('http://127.0.0.1:9090/api/getinlanddiscount', response => {
        $('.inland_center ul').html(template('app', response))
    })
})