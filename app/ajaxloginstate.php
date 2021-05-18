<?
session_start();
if(!isset($_SESSION['user_id'])){
	echo '<script> window.alert(請先登入!");</script>';
	echo '<script>window.location.replace("/login")</script>'; 
}
else{
	echo $_SESSION['user_name'];
}
?>