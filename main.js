$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
        $("#navbar").addClass("nav-bgc");
    }
    if (height <= 200){
        $("#navbar").removeClass("nav-bgc");
    }
});