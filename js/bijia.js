$(function () {
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    // 内容渲染
    ajax('http://127.0.0.1:9090/api/getproduct',{
        productid: productid
    },function(response){
        $('.bijia_center').html(template('app', response))
    })

    //评论渲染
    ajax('http://127.0.0.1:9090/api/getproductcom', { productid: productid }, function (response) {
        $('.brand_Evaluation ul').html(template('app1', response))
    })


});