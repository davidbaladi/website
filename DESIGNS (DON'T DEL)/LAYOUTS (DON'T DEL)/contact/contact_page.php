<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name) || empty($mailFrom) || empty($message)) {
        header("Location: index.php?form=empty&name=$name&subject=$subject&email=$mailFrom&message=$message");
        exit();
    }else {

        if (ctype_alpha(str_replace(' ', '', $name)) === false) {
            header("Location: index.php?form=invalidchar&name=$name&subject=$subject&email=$mailFrom&message=$message");
            exit();
        }else {
            if (empty($mailFrom) || !filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
                header("Location: index.php?form=invalidemail&name=$name&subject=$subject&email=$mailFrom&message=$message");
                exit();
            }else {
                $mailTo = "davidbaladi@fullerstack.ca";
                $headers = "From: ".$mailFrom;
                $txt = "You Received an e-mail from ".$name.".\n\n".$message;
            
                mail($mailTo, $subject, $txt, $headers);
                header("Location: index.php?form=mailsent");
                exit();
            }
        }
    }
}else {
    header("Location: index.php?nosubmit=error");
    exit();
}

/*upload to host*/
/*then re-direct to gmail*/
