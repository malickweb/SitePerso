var AnimMain = function() {

    var $actived = $('.actived');
    var clicked = false;
    $actived.click(function(){
        $(this).addClass("main-color");
        $(this).removeClass("main-color");


        var id = $(this).attr("href");
        clicked = true;


        $('html, body').animate({
                scrollTop:$(id).offset().top }, 'slow',
            function () {
                clicked = false;
            });
        return false;
    });
    var $active = $('.active-main');
    var $main = $('#main').outerHeight(true);
    var tab = [];
    function resize(tableau) {
        $active.each(function (i) {
            var Objet = {};
            Objet.ElementActive = $active.eq(i);
            Objet.ElementActived = $actived.eq(i);
            Objet.ElementOffsetTop = $active.eq(i).offset().top;
            Objet.ElementOuterHeight = $active.eq(i).outerHeight(true);
            tableau.push(Objet);
        });
    }
    resize(tab);
    $(window).on('resize', function(){
        tab = [];
        resize(tab);
    });

    $(window).on("scroll", function () {
        if(clicked === false) {
            var scrollTop = $(window).scrollTop() + $main;

            for (var i = 0; i < tab.length; i++) {
                var Active = tab[i].ElementActive;
                var Actived = tab[i].ElementActived;
                var OffsetTop = tab[i].ElementOffsetTop;
                var OuterHeight = tab[i].ElementOuterHeight;

                if (scrollTop >= OffsetTop && scrollTop <= OffsetTop + OuterHeight) {
                    Actived.addClass('main-color-li');
                }
                else {
                    Actived.removeClass('main-color-li');
                }
            }
        }

    });
};
