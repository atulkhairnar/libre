<div class = "container">

<?php

error_reporting(E_ERROR | E_PARSE);
session_start();

echo "Hi ".$_SESSION['USER']."<br>";
if(!isset($_SESSION['USER'])){
   echo "Please log in";
   }
else
{
	echo '<div class ="col-md-11"> Welcome to dashBoard.</div> <div class="col-md-1"><a href= "http://lokayat.org.in/views/logout.php"> Log Out</a><br></div>';
	echo '
	<div class = "col-md-4 panel panel-material-blue-700">
		<div class="panel-heading">
			<div class="panel-title">
				<b>Select Action</b>
			</div>
		</div>
		
		<div>
		<ul>
		<li><a href="http://www.lokayat.org.in/#/AddPressR">Add a Press Release</a></li>
		<li><a href="http://www.lokayat.org.in/#/AddEvent">Add Upcoming Event</a></li>
		</ul>
		</div>
	</div>';
	
	}
?>

</div>