$(function(){
    
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getcategorytitle",
        dataType: "json",
        success: function (response) {
            console.log(response);

            $('.mmm_center ul').html( template('center',response) )
        }
    });

    $('.mmm_center').on('click','h3',function(){
        $(this).siblings().toggleClass('displayNone');

        if(! $(this).siblings().hasClass('displayNone')){
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:9090/api/getcategory",
                data: {
                    titleid:$(this).data('id')
                },
                dataType: "json",
                success: function (response) {
                    // console.log(response);
                    $('.box ol').html( template('small',response))
                }
            });
        }
    })
})