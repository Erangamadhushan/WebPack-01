<?php
    $servername = "localhost:3200";
    $username = "root";
    $password = "HelloWorld";
    $dbName = "WebPack01";

    $connection = new mysqli($servername,$username,$password,$dbName);

    if($connection->connect_error){
        die("Connection failed ").$connection->connect_error;
    }
    else {
        echo "<script>window.alert('Successfully login to the database');</script>";
    }

?>