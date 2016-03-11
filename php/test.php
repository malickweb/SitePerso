<?php

        $nom    =   html_entity_decode($_POST["name"],ENT_QUOTES, "UTF-8");
        $mail    =   html_entity_decode($_POST["email"],ENT_QUOTES, "UTF-8");
        $message    =   html_entity_decode($_POST["texte"],ENT_QUOTES, "UTF-8");
        echo ($nom);
        echo ($mail);
        echo ($message);

        $erreur = 0;
            echo($erreur);


        if(empty($nom)){
        $erreur = 1;
            echo($erreur);
            echo ('la case nom est vide. </br>');
            print ('la case nom est vide. </br>');
        }
        if(empty($mail)){
        $erreur = 1;
            echo 'la case email est vide. </br>';
            print 'la case email est vide. </br>';
        }
        else {
            //regex = '#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,5}$#'
            $validEmail = (preg_match('#^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$#i', $mail))?$mail:null;
                if(empty($validEmail)){
                $erreur = 1;
                    echo 'Votre adresse email est invalide. </br>';
                    print 'Votre adresse email est invalide. </br>';
                }
        }
        if(empty($message)){
        $erreur = 1;
            echo 'la case message est vide. </br>';
            print 'la case message est vide. </br>';
        }
        if($erreur === 0){
        echo('mail');
            $To = 'malick.belgrine@gmail.com';
            $Sujet = $nom.' ma contacté';
            $Header = "From: <$mail>";
            $Header .="Reply-To:" .$mail. " ";
            $messages = $message;
            $nom = $nom;
            if(mail($To, $Sujet, $messages, $Header)){
                echo 'Envoie du message';
                unset($nom);
                unset($email);
                unset($message);
            }
            else{
                echo 'Une erreur est survenue';
            }
        }
?>