let arr = location.search.slice(1).split('=');
let productid = arr[1];
render(productid)
function render(productid) {

    ajax('http://127.0.0.1:9090/api/getbrandproductlist', {
        brandtitleid: productid
    }, response => {
        $('.brand_details ul').html(template('app2', response))

        let ye = Math.ceil(response.totalCount / response.pagesize)
        // console.log(ye);
        let str = '';
        for (let i = 0; i < ye; i++) {
            if (i == productid) {
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
    productid++
    render(productid)
})
// 上一页
$('.list .fl').on('click', function () {
    if (productid >= 0) {
        productid--
    }
    render(productid)
})

$('select').on('change', function () {
    render($(this).val())
})