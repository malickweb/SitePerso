<?php

     if(isset($_POST['envoie'])){
        $nom = htmlentities($_POST['nom'],ENT_QUOTES, , "UTF-8");
        $email = htmlentities($_POST['email'],ENT_QUOTES, , "UTF-8");
        $message = htmlentities($_POST['message'],ENT_QUOTES, , "UTF-8");

        $erreur = array();

        if(empty($nom)){
            $erreur['nom'] = '<div>la case nom est vide.</div> </br>';
        }
        if(empty($email)){
            $erreur['email'] = '<div>la case email est vide.</div> </br>';
        }
        else {
            //regex = '#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,5}$#'
            $validEmail = (preg_match('#^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$#i', $email))?$email:null;
                if(empty($validEmail)){
                    $erreur['email'] = '<div>Votre adresse email est invalide.</div> </br>';
                }
        }
        if(empty($message)){
            $erreur['message'] = '<div>la case message est vide.</div> </br>';
        }
        if(empty($erreur)) {
            $To = 'malick.belgrine@gmail.com';
            $Sujet = $nom.' ma contacté';
            $Header = "From: $nom<$email>";
            $headers .='Reply-To: '.$_POST['mail']." ";
            $headers .='Content-Type: text/plain; charset="utf-8"'." ";
            $message = stripslashes($message);
            $nom = stripslashes($nom);
            if(mail($To, $Sujet, $message, $Header)){
                echo'<div style="display:block;color:green;text-align:center;">Envoie du message</div>';
                unset($nom);
                unset($email);
                unset($message);
            }
            else{
                echo'<div style="display:block;color:red;text-align:center;">Une erreur est survenue</div>';
            }
        }
     }
?>
