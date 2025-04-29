<?php
    session_start();

    include_once '../config.php';

    if($_SERVER['REQUEST_METHOD'] == "POST") {
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        $username = test_input($_POST['userName']);
        $email = test_input($_POST['email']);
        $password = test_input($_POST['userPassword']);

        //Check if the name, email and password are not empty

        if(!empty($username) && !empty($email) && !empty($password)) {
            // Prepare the SQL statement to prevent SQL injection
            $stmt = $connection->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $email, $password);

            // Execute the statement and check for success

            if($stmt->execute()) {
                echo "<script>console.error('User registered successfully');</script>";
                header("Location: ../../client/index.html");
                exit();
            }
            // Check for errors
            else {
                echo "<script>console.error('Error: ". $stmt->error > "');<script>";
                
            }
        }
        else {
            echo "<script>console.error('Please fill in all fields');<script>";
           
        }

    }
    else {
        echo "<script>console.error('Invalid request');</script>";
        header("Location: ../../client/index.html");
        exit();
    }
    $stmt->close();
?>