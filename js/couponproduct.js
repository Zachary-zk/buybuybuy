$(function () {
    
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    // console.log(productid);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcouponproduct",
        data: {
            couponid:productid
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.couponproduct_center ul').html( template('app',response) )
        }
    });
})