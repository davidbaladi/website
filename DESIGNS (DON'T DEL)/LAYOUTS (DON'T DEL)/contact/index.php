<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>David Baladi | Contact Page</title>
    <link rel="stylesheet" href="contact_page.css">
        <script src="https://kit.fontawesome.com/976e15b6ea.js" crossorigin="anonymous"></script>
</head>
<body>

    <!--   ****IMPORTANT****   ENABLE MANAGE GOOGLE ACCOUNTS > SECURITY > "LESS SECURE APP ACCESS" FOR WEBSITE EMAIL TO FORWARD TO GMAIL!!-->
    
    <!--CONTACT SECTION-->
    <div id="contact_Section">
        <div id="contact_Information">
            <div><i class="fas fa-map-marker-alt"></i>Toronto, ON, Canada</div>
            <div><i class="fas fa-envelope"></i>DavidBaladi@gmail.com</div>
            <div><i class="fas fa-phone"></i>(416) 688-8645</div>
            <div><i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
        </div>
        <div id="contact_Form">
            <h2>Contact Me</h2>
            <form action="contact_page.php" method="post">
                <?php
                    if (isset($_GET['name'])) {
                        $name = $_GET['name'];
                        echo '<input type="text" name="name" id="name_Box" placeholder="Your Full Name (Required)" required value="'.$name.'">';
                    }else {
                        echo '<input type="text" name="name" id="name_Box" placeholder="Your Full Name (Required)" required>';
                    }
                    if (isset($_GET['email'])) {
                        $email = $_GET['email'];
                        echo '<input type="email" name="email" id="email_Box" placeholder="Your Email Address (Required)" required value="'.$email.'">';
                    }else {
                        echo '<input type="email" name="email" id="email_Box" placeholder="Your Email Address (Required)" required>';
                    }
                    if (isset($_GET['subject'])) {
                        $subject = $_GET['subject'];
                        echo '<input type="subject" name="subject" id="subject_Box" placeholder="Subject of Email (Optional)" value="'.$subject.'">';
                    }else {
                        echo '<input type="subject" name="subject" id="subject_Box" placeholder="Subject of Email (Optional)">';
                    }
                    if (isset($_GET['message'])) {
                        $message = $_GET['message'];
                        echo '<textarea type="message" name="message" id="message_Box" cols="30" rows="10" placeholder="Your Message">'. $message .'</textarea>';
                    }else {
                        echo '<textarea type="message" name="message" id="message_Box" cols="30" rows="10" placeholder="Your Message"></textarea>';
                    }
                ?>                
                <input type="submit" name="submit" id="send_Button" value="Send" >
            </form>
        </div>
    </div>
    <!--END -- CONTACT SECTION -- END-->

    <!--DATA-->
    <?php

        /*$fullUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        if (strpos($fullUrl, "form=empty") == true) {
            echo
            "<div id='alert_Error'>
                <span>
                    An error (empty) occured while trying to send! Please try again.
                </span>
            </div>";
            exit();
        }elseif (strpos($fullUrl, "form=invalidchar") == true) {
            echo
            "<div id='alert_Error'>
                <span>
                    An error (invalidchar) occured while trying to send! Please try again.
                </span>
            </div>";
            exit();
        }elseif (strpos($fullUrl, "form=invalidemail") == true) {
            echo
            "<div id='alert_Error'>
                <span>
                    An error (invalidemail) occured while trying to send! Please try again.
                </span>
            </div>";
            exit();
        }elseif (strpos($fullUrl, "form=mailsent") == true) {
            echo
            "<div id='alert_Success'>
                <span>
                    Message Sent! Thank you for contacting. I will reply promptly.
                </span>
            </div>";
            exit();
        }*/

        $formCheck = $_GET['form'];
        
        if ($formCheck == "empty") {
            echo
            '<div id="alert_Error">
                <span>
                    An error (empty) occured while trying to send! Please try again.
                </span>
            </div>';
            exit();
        }elseif ($formCheck == "invalidchar") {
            echo
            '<div id="alert_Error">
                <span>
                    An error (invalidchar) occured while trying to send! Please try again.
                </span>
            </div>';
            exit();
        }elseif ($formCheck == "invalidemail") {
            echo
            '<div id="alert_Error">
                <span>
                    An error (invalidemail) occured while trying to send! Please try again.
                </span>
            </div>';
            exit();
        }elseif ($formCheck == "mailsent") {
            echo
            '<div id="alert_Success">
                <span>
                    Message Sent! Thank you for contacting. I will reply promptly.
                </span>
            </div>';
            exit();
        }
    ?>
    <!--END -- DATA -- END-->

</body>
</html>