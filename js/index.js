$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getindexmenu",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.mmm_nav ul').html( template('menuapi1',response) )
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getmoneyctrl",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.recommend_body ul').html( template('recommend',response) )
        }
    });

    $('.mmm_nav ul').on('click','.geng',function(){
        // console.log($('.mmm_nav ul li').find('.hide'));
        $('.mmm_nav ul').find('.hide').toggle()
    })

})