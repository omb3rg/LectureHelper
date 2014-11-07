<?php
		$help = $_POST["help"];
		print_r($_POST);

		$hostname="eskerud.net.mysql";
		$username="eskerud_net";
		$secret="miwv81ih";
		$db="eskerud_net";
		$con = mysql_connect($hostname,$username,$secret); 
	
			if (!$con) {
				die('Could not connect to MySQL: ' . mysql_error());
			}

			$db_selected = mysql_select_db($db, $con);
			if (!$db_selected) {
				echo "database selection doesn't work:(";
				die ('Can\'t use mydb : ' . mysql_error());
			}

		
			//update without where clause - because we're only using one row.
			$sql = "UPDATE `LectureHelper` SET counter= $help";
			$result = mysql_query($sql, $con);
			mysql_close($con);
?>