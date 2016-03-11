var MainTabMob = function() {

    var $main = $('.menu--contain');
    var $btnMain = $main.find('.btn-perso');


    $btnMain.click(function(){
        $(this).toggleClass('main-burger');
        $(".noscroll").toggleClass("open-nav");

    });
};


