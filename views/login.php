<?php
$servername = "localhost";
$username = "lokayato_view";
$password = "aG]yTTO*AHSW";
$dbname = "lokayato_web";

session_start();
// Create connection
$con = new mysqli($servername, $username, $password, $dbname);
if(!$con)
{
	die("could not be connected".mysqli_error($con));
}
else
{  
	$user = mysqli_real_escape_string($con,$_POST['User']);
	$pass = mysqli_real_escape_string($con,$_POST['Pass']);
	
	$sql = "SELECT * from Admin where USERNAME = '$user'";
	$result = mysqli_query($con,$sql);

  	$row = mysqli_fetch_assoc($result);
  	if($user == $row["USERNAME"] && $pass = $row["PASSWORD"])
  	{
  	$_SESSION['USER'] = $user;
  	$_SESSION['PASS'] = $pass;
  	echo "<script>alert('Login Successful!'); window.location.href = 'http://lokayat.org.in/#/dashboard';</script>";
	}
	else {
	$_SESSION['USER'] = "";
	
	echo "<script>alert('Login NOT Successful, try again!'); window.location.href = 'http://lokayat.org.in/#/dashboard';</script>";
	}
}


?>