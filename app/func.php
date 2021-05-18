<?php
switch ( $_POST['action'] ) {   

    //getlesson
    case "login": 
        
        session_start();
        ini_set("display_errors", "On"); 
        $acc=$_POST["user_acct"];
        $pwd=$_POST["user_pwd"];

        if(!isset($acc) || !isset($pwd)){
            echo '<script> window.alert("請輸入帳號或密碼!");</script>';
            echo '<script>window.location.replace("/login")</script>';
        }
        else{
            include("dbconnect.php");
            $sqlresult =$conn->query("select * from hct_user where user_acct = '$acc' and user_pwd=md5('$pwd')");
            $user=$sqlresult->fetch();
            print_r ($user);
            if($user){
                $_SESSION['user_id']=$user['user_id'];
                $_SESSION['user_name']=$user['user_name'];
                $_SESSION['pc']=$user['pc'];
                echo '<script>window.location.replace("/")</script>';
            }
            else{ 
                echo '<script> window.alert("帳號或密碼錯誤!");</script>';
                echo '<script>window.location.replace("/login")</script>';
            }
            $conn=null;
        }

    break;

    case "logout":
        session_start();
        session_destroy();
        echo '<script>window.location.replace("/login")</script>';
    break;
}