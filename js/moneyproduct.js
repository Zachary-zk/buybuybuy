$(function () {

    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    // console.log(productid);

    ajax('http://127.0.0.1:9090/api/getmoneyctrlproduct', {
        productid: productid
    }, response => {
        $('.inlan_center').html(template('center', response))
    })
})