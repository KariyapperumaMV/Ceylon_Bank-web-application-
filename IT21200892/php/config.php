<?php
	$con = new mysqli( "localhost" , "root" , "" , "banking" );
	
	//check connection
	if ($con ->connect_error){
		die("Connection Failed : ").$con->connect_error;
	}
	
	else{
		echo"connection succeded!";
	}
?>