var MainScroll = function() {

    var $main = $('#main'),
        $name = $('.name'),
        $linkMain = $('.nav-main-link'),
        $heightMain = $main.outerHeight();



    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();


            if (scrollTop > $heightMain) {
                $main.addClass('main-back-color');
                $name.addClass('main-color');
                $linkMain.addClass('main-color');

            }
            else {
                $main.removeClass('main-back-color');
                $name.removeClass('main-color');
                $linkMain.removeClass('main-color');
            }
    });
};