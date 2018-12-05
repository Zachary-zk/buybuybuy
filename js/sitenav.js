$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getsitenav",
        dataType: "json",
        success: function (response) {
            console.log(response);
            $('.siten_center ul').html( template('app',response) )
        }
    });
})