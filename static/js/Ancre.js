$(document).ready( function () {
    var $heightMain = $('#main').outerHeight(true);
    $('a[href^="#"]').click(function(){

        var id = $(this).attr("href");

        $('html, body').animate({
            scrollTop:$(id).offset().top - $heightMain + 50 }, 300);
        return false;
    });
});