$(function(){
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproduct",
        data: {
            productid :productid 
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.bijia_center').html( template('app',response))
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getproductcom",
        data: {
            productid: productid,
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.brand_Evaluation ul').html( template('app1',response))
        }
    });
})