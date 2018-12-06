$(function () {
    let arr = location.search.slice(1).split('=');
    let productid = arr[1];
    // 那个牌子好
    ajax('http://127.0.0.1:9090/api/getbrand', {
        brandtitleid: productid
    }, function (response) {
        $('.brand_center ul').html(template('app', response))
    })

    //产品销量
    ajax('http://127.0.0.1:9090/api/getbrandproductlist', {
        brandtitleid: productid,
        pagesize: 4
    },function(response){
        $('.brand_details ul').html(template('app2', response))
    })
    // 最新评论
    ajax('http://127.0.0.1:9090/api/getproductcom',{
        productid: productid
    },function(response){
        $('.brand_Evaluation ul').html(template('app3', response))
    })
})
