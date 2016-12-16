<div class="container join-container clearfix">
    <div class = "col-md-4">
    <div class = "panel panel-material-blue-700">
    	<div class = "panel-heading">
    	  <div class = "panel-title">
    	  	<b>Press Releases : </b>
    	  </div>
    	  </div>
    	  <div class = "panel-body">
    	  	<div class = "clearfix">
		<div class ="list-group" style="max-height: 300px; overflow-y:scroll;" > 
			<!--tp <h4>
			<a class ="list-group-item" >Item 1</a>
			<a class ="list-group-item" >Item 2</a>
			<a class ="list-group-item" >Item 3</a>
			<a class ="list-group-item" >Item 1</a>
			<a class ="list-group-item" >Item 2</a>
			<a class ="list-group-item" >Item 3</a></h4> -->
    			<?php
    			
				$servername = "localhost";
				$username = "lokayato_view";
				$password = "aG]yTTO*AHSW";
				$dbname = "lokayato_web";

				// Create connection
				$con = new mysqli($servername, $username, $password, $dbname);
				if(!$con)
				{
					die("could not be connected".mysqli_error($con));
				}
				else
				{  
					$sql = "SELECT * FROM pressR";
					$result = mysqli_query($con,$sql);
				
				  	while($row = mysqli_fetch_assoc($result)) {
				        echo "<a class = 'list-group-item' href =".$row["DLink"]."> <h4 class='list-group-item-heading'>". $row["Title"]. "</h4> <p class = 'list-group-item-text'>Date:" . $row["Date"]."  ".$row["Synop"]."</a>";
				    }
				} 
				
				mysqli_close($con);
			?>
		</div>		
	  </div>
	</div>
	</div>
    </div>
    
     <div class = "col-md-4">
    <div class = "panel panel-material-blue-700">
    	<div class = "panel-heading">
    	  <div class = "panel-title">
    	  	<img height=35 width=35 src="img/dest.ico"></img><b>Upcoming Event : </b>
    	  </div>
    	  </div>
    	  <div class = "panel-body">
    	  	<div class = "clearfix">
		
    			<?php
    			
				$servername = "localhost";
				$username = "lokayato_view";
				$password = "aG]yTTO*AHSW";
				$dbname = "lokayato_web";

				// Create connection
				$con = new mysqli($servername, $username, $password, $dbname);
				if(!$con)
				{
					die("could not be connected".mysqli_error($con));
				}
				else
				{  
					$sql = "SELECT * FROM Event";
					$result = mysqli_query($con,$sql);
				
				  	while($row = mysqli_fetch_assoc($result)) {
				        echo "<h4>Event : <h3>". $row["Name"]. "</h3><br><h4>Details : </h4><p>".$row["Details"]."</p><br><h4>Time :</h4> ".$row["Time"]."<br><h4>Date : </h4>" . $row["Date"]."<br><h4>Venue :</h4>".$row["Venue"]."<br>";
				    }
				} 
				
				mysqli_close($con);
			?>
			
	  </div>
	</div>
	</div>
    </div>
</div>