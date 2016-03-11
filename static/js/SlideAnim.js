var SlideAnim = function(){

    var $main = $('#main').outerHeight(),
        $services = $('#services'),
        $fade = $services.find('.slide');

    var tableau = [];

    function resize(tab) {
        $fade.each(function (i) {
            var Objet = {};
            Objet.ElementFade = $fade.eq(i);
            Objet.ElementOffsetTop = $fade.eq(i).offset().top - $main;
            Objet.ElementOuterHeight = $fade.eq(i).outerHeight(true);
            tab.push(Objet);
        });
    }
    resize(tableau);
    $(window).on('resize', function(){
        tableau = [];
        resize(tableau);
    });
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop() /*- $main*/;

        for (var i = 0; i < tableau.length; i++) {
            var Fade = tableau[i].ElementFade;
            var OffsetTop = tableau[i].ElementOffsetTop;
            var OuterHeight = tableau[i].ElementOuterHeight;

            if (scrollTop >= OffsetTop && scrollTop <= OffsetTop + OuterHeight) {
                Fade.fadeIn(300).animate({
                        opacity : '1'
                    });
            }
        }
    });
};

