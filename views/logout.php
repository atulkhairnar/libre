<?php
   session_start();
   
   if(isset($_SESSION['USER'])) {
   
   session_unset();
   session_destroy()
      header("Location: http://lokayat.org.in/#/dashboard ");
   }

?>