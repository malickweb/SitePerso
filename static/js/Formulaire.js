var Formulaire = function() {

    var $form = $('form'),
        $button = $form.find('button'),
        $name = $form.find('#name'),
        $mail = $form.find('#mail'),
        $textArea = $form.find('.text');


    //var regex = /^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6}/i;
    var regex = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;

    var valid = true;
    $name.on('focusout', function() {
        validName();
    });
    $mail.on('focusout', function() {
        validMail();
    });
    $textArea.on('focusout', function() {
        validMessage();
    });
    $form.on('submit', function(e){
        e.preventDefault();
        validName();
        validMail();
        validMessage();
        $.post("php/form.php",{nom: $name, email : $mail, message : $textArea},function(data){
            alert(data);

        });
        return valid;
    });

    function validName(){
        if($name.val() === ""){
            $('.error-message-name').fadeIn(500);
            valid = false;
        }
        else if(!$name.val().match(/^[a-zA-Z]+$/)){
            $('.error-message-name').fadeIn(500);
            valid = false;
        }
        else{
            $('.error-message-name').fadeOut(500);
            valid = true;
        }
    }

    function validMail(){
        if($mail.val() === "") {
            $('.error-message-mail').fadeIn(500);
            valid = false;
        }
        else if (!$mail.val().match(/^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i)){
            $('.error-message-mail').fadeIn(500);
            valid = false;
        }
        else{
            $('.error-message-mail').fadeOut(500);
            valid = true;
        }
    }
    function validMessage(){
        if($textArea.val() === '') {
            $('.error-message-text').fadeIn(500);
            valid = false;
        }
        else{
            $('.error-message-text').fadeOut(500);
            valid = true;
        }
    }
};