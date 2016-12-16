<div class="container">
<div class ="col-md-4"></div>
<div class="col-md-4 container clearfix">
	<div class="panel panel-material-blue-700">
    	<div class="panel-heading ">
    		<div class = "panel-title">
    		<h4>LOGIN</h4>
    		</div>
    	</div>
    	<?php
    	error_reporting(E_ERROR | E_PARSE);
session_start();
    	if(!isset($_SESSION['USER'])){
    	echo '
	<div class="panel-body">
		<form id = "login-form" class = "contact-form" method = post action="/views/login.php">
		<input class="form-control" name ="User" required = required placeholder="Username"/>
		<br>
		<input type ="password" class="form-control" name = "Pass" required = required placeholder="Password"/><br>
		<div class = form-group >
			<input class ="btn btn-material-red-700" value = "submit" type="submit"> </input>
		</div>
		</form>
	</div>';
	}
	else {
echo "Your already logged in, go to <a href='/#/dashboard'>Dashboard</a>";
}
?>
	</div>
</div>
</div>