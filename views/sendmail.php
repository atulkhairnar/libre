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
        $FNAME = $_POST['Fname'];
        $LNAME= $_POST['Lname'] ;
        $EMAIL = $_POST['Email'];
        $PHONE = $_POST['Phone'];
        $MESSAGE = $_POST['message'];
        $mydate = getdate(date("U"));
        $CITY = $_POST['CCity'];
        
        
        $DATE = $mydate[month]." " .$mydate[mday].", ".$mydate[year];
               
        $sql = "INSERT INTO ContactUs (FirstName, LastName, EmailID, ContactNo, AddDate, CCity) VALUES ('$FNAME','$LNAME','$EMAIL','$PHONE','$DATE','$CITY')";
        if(!mysqli_query($con,$sql))
        {
	        die('Error:'.mysqli_error($con));
        }
        
        $msg = "<html><body><p><h3>Here is information about new contact added on website join us page !</h3> <br>Name : ".$FNAME." ".$LNAME."<br>Contact Number : ".$PHONE."<br>Email ID :".$EMAIL."<br>Current City : ".$CITY."<br> Message : ".$MESSAGE."<br> </p> <p><b>Please do not respond to this mail ID, it is system generated email.</b></p></body></html>";
        $headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        mail('swapnil.f@riseup.net,rishikesh@riseup.net','Lokayat.org.in | New Contact Added', $msg,$headers);
        }
mysqli_close($con);
echo "<script>alert('Form submitted successfully, you will be contacted by our activists soon!');
window.location.href = 'http://lokayat.org.in'</script>";
//die();
?>