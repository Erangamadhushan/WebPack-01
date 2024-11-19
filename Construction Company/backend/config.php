<?php
    $servername = "localhost:8080";
    $username = "root";
    $password = "";
    $dbName = "webpack1";

    //create connection with data base
    $connect = new mysqli($servername, $username, $password, $dbName);

    //check connection 
    if($connect->connect_error) {
        die("Connection failed ".$connect->connect_error);
    }else {
        echo"<script>window.alert('Connected successfully');</script>";
        header("Location:../faq.html");
    }
?>