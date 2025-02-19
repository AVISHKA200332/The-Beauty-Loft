<?php

$con = new mysqli("localhost", "root", "", "the_beauty_loft");

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

?>
