<?php
$servername = "localhost";
$username = "lokayato_nletter";
$password = "emailID";
$dbname = "lokayato_web";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$email= mysqli_real_escape_string($conn,$_POST{'newsletterAdd'});

$sql = "INSERT INTO newsletter (emailID) VALUES ('$email')";
mail('rishikesh@riseup.net'," Add this to mailing list", "Add this to email subscription database ".$email." okay ? Please dont reply to this mail, it is system generated message");

if ($conn->query($sql) === TRUE) {
    echo "<head>
    <script>alert('Thank you for adding Email ID to newsletter, You will be soon recieving our regular Updates !');
    window.location.href = 'http://lokayat.org.in'
    </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>