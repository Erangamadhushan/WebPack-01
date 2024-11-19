<?php
    if($_SERVER['REQUEST_METHOD'] == "POST") {
        function testInput($data) {
            $data = trim($data);
            $data = htmlspecialchars($data);
            $data = stripslashes($data);
            return $data;
        }
    
        $email = testInput($_POST['email']);
        $message = testInput($_POST['message']);

        if(empty($name) || empty($message) && !filter_var($email,FILTER_VALIDATE_EMAIL)) {
            echo "<script>window.alert('Input Fields are required ?');</script>";
            header("Location:../faq.html");
        }
        else {
            
        }
    }
    else {
        header("Location:../faq.html");
    }
    
?>