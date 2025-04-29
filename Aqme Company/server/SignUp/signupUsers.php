<?php
    session_start();

    include_once '../config.php';

    if(isset($_POST['signup'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Check if the name, email, and password are not empty
        if (!empty($name) && !empty($email) && !empty($password)) {
            // Prepare the SQL statement to prevent SQL injection
            $stmt = $connection->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $name, $email, $password);
            
            // Execute the statement and check for success
            if ($stmt->execute()) {
                echo "<script>alert('User registered successfully');</script>";
                header("Location: ../Login/userLogin.php");
                exit();
            } else {
                echo "<script>alert('Error: " . $stmt->error . "');</script>";
            }
        } else {
            echo "<script>alert('Please fill in all fields');</script>";
        }
    }
?>