var pourcent = function() {

    var $progress = $('.progress-pourcent'),
        $input = $progress.find('input'),
        //$barre = $progress.find('.barre'),
        $menu = $('#main'),
        $menuHeight = $menu.outerHeight(true);


    function init(){
        var grandTab = [];

    function calcul(tab) {
        $progress.each(function (i) {
            var Objet = {};
            Objet.ElementProgress = $progress.eq(i);
            Objet.ElementInput = $input.eq(i);
            Objet.ValueInput = $input.eq(i).attr('data-level');
            Objet.OffsetTopProgress = $progress.eq(i).offset().top;
            Objet.OuterHeightProgress = $progress.eq(i).outerHeight(true);
            //Objet.Barre = $barre.eq(i);
            tab.push(Objet);
        });
    }
        calcul(grandTab);
        $(window).on('resize', function(){
            grandTab = [];
            calcul(grandTab);
        });

        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop() + $menuHeight ;
            var wHeight = window.outerHeight;
            for (var i = 0; i < grandTab.length; i++) {
                var progress = grandTab[i].ElementProgress;
                var input = grandTab[i].ElementInput;
                var inputValue = grandTab[i].ValueInput;
                var offsetTop = grandTab[i].OffsetTopProgress;
                var progressHeight = grandTab[i].OuterHeightProgress;
                var barre = grandTab[i].Barre;
//scrollTop + wHeight >= offsetTop && scrollTop <= offsetTop + progressHeight
                if (scrollTop + progressHeight >= offsetTop && scrollTop <= offsetTop + progressHeight) {
                    input.css({width : "43px"});
                    if (!$progress.eq(i).hasClass('completed')) {
                        progress.addClass('completed');
                        startProgress(input, barre, inputValue);
                    }
                }
            }
        });

    }

    function startProgress($element, barreColor, value ) {
        var i = 0;

        function pourcentage() {
            window.setTimeout(function () {
                progress();
            }, 30);
        }

        function progress() {

            $element.val(i + "%");
            //barreColor.css({width : i + "%"});

            i++;

            if (i <= value) {
                pourcentage();
            }
        }

        pourcentage();
    }

    init();

};
