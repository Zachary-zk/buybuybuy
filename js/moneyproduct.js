$(function () {
    
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    // console.log(productid);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
        data: {
            productid:productid
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.inlan_center').html( template('center',response))
        }
    });
})