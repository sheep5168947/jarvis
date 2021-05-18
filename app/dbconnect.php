<?php
    $servername="class.hct369.com.tw";
    $dbuser="ysnkzxov_hct";
    $dbpwd="hctsqladmin!@#$";
    $dbname="ysnkzxov_hct_db";

    $conn = new PDO('mysql:host='.$servername.';dbname='.$dbname.';charset=utf8', $dbuser, $dbpwd);
    // if ($conn->connect_error) {
    //     die("Connection failed: " . $conn->connect_error);
    // }

?>