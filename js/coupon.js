$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcoupon",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.coupon').html( template('app',response) )
        }
    });
})