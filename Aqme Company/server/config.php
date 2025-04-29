<?php
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $database_name = "aqmecompany";

    //Create connection

    $connection = new mysqli($servername, $username, $password, $database_name);

    //Check connection
    if($connection->connect_error) {
        die("Connection failed :". $connection->connect_error);
    }else {
        echo "<script>console.log('Database connected successfully');</script>";
    }
?>