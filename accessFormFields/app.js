$("#myForm").submit(function () {
    var values = $(this).serialize();
    console.log(values);
});
