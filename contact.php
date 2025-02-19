<?php
include 'config.php';

if (isset($_POST['send'])) {
    $name = $con->real_escape_string($_POST['name']);
    $mail = $con->real_escape_string($_POST['mail']);
    $phone = $con->real_escape_string($_POST['phone']);
    $message = $con->real_escape_string($_POST['message']);

    $sql = "INSERT INTO contact (name, mail, phone, message) VALUES ('$name', '$mail', '$phone', '$message')";

    if ($con->query($sql) === TRUE) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }

    $con->close();
}
?>
