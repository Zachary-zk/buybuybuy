$(function () {
    let titleid = 0;
    ajax('http://127.0.0.1:9090/api/getbaicaijiatitle', function (response) {
        $('.baicai_left ul').html(template('nav', response))
        new IScroll('.baicai_left', {
            scrollX: true,
            scrollY: false
        })
    })
    render(titleid)
    function render(titleid) {
        ajax('http://127.0.0.1:9090/api/getbaicaijiaproduct',{
            titleid: titleid
        },function(response){
            $('.baicai_center ul').html(template('cnter', response))
        })
    }

    $('.baicai_left').on('click', 'li', function () {
        titleid = $(this).data('id')
        render(titleid)
    })
})