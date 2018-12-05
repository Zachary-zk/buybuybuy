$.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getbrandtitle",
    dataType: "json",
    success: function (response) {
        console.log(response);

        $('.mmm_center ul').html( template('center',response) )
    }
});