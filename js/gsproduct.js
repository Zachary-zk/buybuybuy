$(function(){
    let shopid = 0;
    let areaid = 0;
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getgsshop",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.u1').html( template('app',response) )
        }
    });

    //点击京东 显示隐藏
    $('.one').on('click',function(){
        $('.u1').toggle();
    })

    // 点击京东 列表 切换内容
    $('.u1').on('click','li',function(){
        $('.one span').text( $(this).text() )
        
        $('.u1').toggle();
        shopid = $(this).data('id')
        render(shopid,areaid)
    })

    // 点击华北显隐
    $('.two').on('click',function(){
        $('.u2').toggle();
    })

    $('.u2').on('click','li',function(){
        // console.log($(this).text().slice(0,2));
        $('.two span').text( $(this).text().slice(0,2) )
        $('.u2').toggle();

        areaid = $(this).data('id')
        render(shopid,areaid)
    })

    ///渲染华北
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.u2').html( template('app1',response) )
        }
    });

    //渲染内容
    render()
    function render(shopid,areaid){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsproduct",
            data: {
                shopid:shopid || 0,
                areaid:areaid || 0
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.gsproduct_body ul').html( template('app2',response) )
            }
        });
    }
})