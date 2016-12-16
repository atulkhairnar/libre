<div class = "container">

<?php

error_reporting(E_ERROR | E_PARSE);
session_start();

echo "Hi ".$_SESSION['USER']."<br>";

if(!isset($_SESSION['USER'])){
   echo "Please <a href='/#/inq'> log in</a>";
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
	</div>
	
	<div class="col-md-6">
	<div class="status alert alert-success" style="display: none"></div>
        <form id="main-contact-form" class="contact-form" name="contact-form" method="post" action="views/addEvent_script.php" data-toggle="validator" role="form">
            <div class="row">
                <div class="col-sm-5">
                    <div class="form-group">
                    	Name of Event:
                        <input type="text" name="EName" class="form-control" required="required" placeholder="Event Name" />
                    </div>
                    <div class="form-group">
                    	Venue:
                        <input type="text" name="EVenue" class="form-control" required="required" placeholder="Venue" />
                    </div>
                    <div class="form-group">
                    	Date:
                        <input type="text" name="EDate" class="form-control" required="required" placeholder="Date of Event" />
                    </div>
                    <div class="form-group">
                    	Time :
                        <input type="text" name="Time" class="form-control" required="required" placeholder="Time" />
                    </div>
                    <div class="form-group">
                	Event Details :<br>
                    <textarea name="EAbout" id="EAbout" class="form-control" rows="8" placeholder="Message for event (if any)"></textarea>
                </div>
                    <div class="form-group">
                        <input type= "submit" value = "Add Event and Flash on Home page" class="btn btn-material-red-700"/>
                    </div>
                </div>
                
            </div>
        </form>
    </div><!--/.col-sm-8-->
		
		
	</div>';
	
	}
?>

</div>