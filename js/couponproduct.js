$(function () {

    let arr = location.search.slice(1).split('=');
    let productid = arr[1];

    ajax('http://127.0.0.1:9090/api/getcouponproduct', {
        couponid: productid
    }, response => {
        $('.couponproduct_center ul').html(template('app', response))
    })
})