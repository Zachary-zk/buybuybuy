$(function () {
    let pageid = 0;
    render(pageid)

    function render(pageid) {

        ajax('http://127.0.0.1:9090/api/getmoneyctrl', {
            pageid: pageid
        }, response => {
            $('.recommend_body ul').html(template('recommend', response))

            let ye = Math.ceil(response.totalCount / response.pagesize)
            // console.log(ye);
            let str = '';
            for (let i = 0; i < ye; i++) {
                if (i == pageid) {
                    str += `<option value="${i}" selected>${i + 1}/${ye}</option>`
                } else {
                    str += `<option value="${i}">${i + 1}/${ye}</option>`
                }

            }
            $('select').html(str)
        })
    }

    // 下一页
    $('.list .fr').on('click', function () {
        pageid++
        render(pageid)
    })
    // 上一页
    $('.list .fl').on('click', function () {
        if (pageid >= 0) {
            pageid--
        }
        render(pageid)
    })

    $('select').on('change', function () {
        render($(this).val())
    })

})