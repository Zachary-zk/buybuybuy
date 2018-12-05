$(function(){
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            $('.inland_center ul').html( template('app',response) )
        }
    });
})