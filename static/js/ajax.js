var Ajax = function() {

    var $form = $('form'),
        $name = $form.find("input[name=nom]"),
        $mail = $form.find("input[name=email]"),
        $textArea = $form.find("textarea[name=message]");

    var valid = true;

    $form.on('submit', function(e){
        var $nomVal = $(this).find("input[name=nom]").val(),
            $emailVal = $(this).find("input[name=email]").val(),
            $messageVal = $(this).find("textarea[name=message]").val();
        e.preventDefault();
        validName();
        validMail();
        validMessage();
        if (valid === true) {
            $.post('static/php/test.php', {
                name: $nomVal, email: $emailVal, texte: $messageVal
            }, function (data) {
            }, "json");
            $('.message-ok').fadeIn(300);
            $textArea.val("");
        }
        else {
            $('.message-ok').fadeOut(300);
            console.log('nul')
        }
    });


    $name.on('blur', function() {
        validName();
    });

    $mail.on('blur', function() {
        validMail();
    });

    $textArea.on('blur', function() {
        validMessage();
    });

    function validName(){
        if($name.val() === ""){
            $('.error-name').fadeIn(300);
            $('.error-name-synt').fadeOut(300);
            valid = false;
        }
        else if(!$name.val().match(/^[a-zA-Z]+$/)){
            $('.error-name-synt').fadeIn(300);
            $('.error-name').fadeOut(300);
            valid = false;
        }
        else{
            $('.error-name').fadeOut(300);
            $('.error-name-synt').fadeOut(300);
            valid = true;
        }
    }

    function validMail(){
        if($mail.val() === "") {
            $('.error-mail').fadeIn(300);
            $('.error-mail-synt').fadeOut(300);
            valid = false;
        }
        else if (!$mail.val().match(/^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i)){
            $('.error-mail').fadeOut(300);
            $('.error-mail-synt').fadeIn(300);
            valid = false;
        }
        else{
            $('.error-mail').fadeOut(300);
            $('.error-mail-synt').fadeOut(300);
            valid = true;
        }
    }

    function validMessage(){
        if($textArea.val() === '') {
            $('.error-text').fadeIn(300);
            valid = false;
        }
        else{
            $('.error-text').fadeOut(300);
            valid = true;
        }
    }
};