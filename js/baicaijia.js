$(function(){
    let titleid = 0;
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.baicai_left ul').html( template('nav',response) )

            new IScroll('.baicai_left',{
                scrollX:true,
                scrollY:false
            })
        }
    });
    render(titleid)
    function render(titleid ){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data: {
                titleid :titleid 
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.baicai_center ul').html( template('cnter',response))
            }
        });
    }

    $('.baicai_left').on('click','li',function(){
        titleid = $(this).data('id')
        render(titleid)
    })
})