$(function () {
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrand",
        data: {
            brandtitleid: productid
        },
        dataType: "json",
        success: function (response) {
            console.log(response);

            $('.brand_center ul').html(template('app', response))
        }
    });


    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        data: {
            brandtitleid: productid,
            pagesize:4
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.brand_details ul').html( template('app2',response) )
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
            $('.brand_Evaluation ul').html( template('app3',response))
        }
    });
})
