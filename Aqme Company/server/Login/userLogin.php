<?php
    session_start();

    include_once '../config.php';
?>
<?php
    if(isset($_POST['login'])) {

        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);

            return $data;
        }
        $email = test_input($_POST['email']);
        $password = test_input($_POST['password']);

        // Check if the email and password are not empty
        if (!empty($email) && !empty($password)) {
            // Prepare the SQL statement to prevent SQL injection
            $stmt = $connection->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            $result = $stmt->get_result();

            // Check if a user was found
            if ($result->num_rows > 0) {
                // Fetch the user data
                $user = $result->fetch_assoc();
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
                header("Location:../../client/index.html");
                // Redirect to the desired page after successful login
                exit();
            } else {
                echo "<script>alert('Invalid email or password');</script>";
            }
        } else {
            echo "<script>alert('Please fill in all fields');</script>";
        }
    }

?>