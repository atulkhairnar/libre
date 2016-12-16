<?php


$servername = "localhost";
$username = "lokayato_nletter";
$password = "emailID";
$dbname = "lokayato_web";

// Create connection
$con = new mysqli($servername, $username, $password, $dbname);
if(!$con)
{
	die("could not be connected".mysqli_error($con));
}
else
{  
        $FNAME = $_POST['EName'];
        $LNAME= $_POST['EVenue'] ;
        $EMAIL = $_POST['EDate'];
        $PHONE = $_POST['Time'];
        $MESSAGE = $_POST['EAbout'];
        
        
        
        $sql = "DELETE FROM Event where 1";
        if(!mysqli_query($con,$sql))
        {
	        die('Error:'.mysqli_error($con));
        }
               
        $sql = "INSERT INTO Event (Name,Venue,Date,Time,Details) VALUES ('$FNAME','$LNAME','$EMAIL','$PHONE','$MESSAGE')";
        if(!mysqli_query($con,$sql))
        {
	        die('Error:'.mysqli_error($con));
        }
        

}
mysqli_close($con);
echo "<script>alert('Event Published to website successfully!');
window.location.href = 'http://lokayat.org.in'</script>";
//die();
?>