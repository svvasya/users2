<?
	include('connect_db.php'); 
	
	$request = $_REQUEST;

//print_r($_POST['check-user']);

if (!isset($_POST['check-user'])){
	$users['error'][] = 'Select, please user';
	
			
}
elseif ($_POST['event'] == 0 && $_POST['event2'] == 0 ){
	$users['error'][] = 'Select, please event';
	
			
}



elseif ($_POST['event'] != 0 || $_POST['event2'] != 0 && isset($_POST['check-user']))  {
	$users['error'][] = '';
}
	
	
	if ($_POST['event'] == 3 || $_POST['event2'] == 3) {
		
		
		foreach ($request['check-user']as $items){
		
		$sql = "DELETE FROM users_system WHERE `users_system`.`id` = " .$items."";
		$res = mysqli_query ($conn, $sql);
	}
		
	}
	else if ($_POST['event'] == 2 || $_POST['event2'] == 2) {
		
		foreach ($request['check-user']as $items){
		
		$sql = "UPDATE  `users_system` SET `users_system`.`status` = '0' WHERE `users_system`.`id` = " .$items."" ;
		$res  = mysqli_query ($conn, $sql);
	}
		
	}
	else if ($_POST['event'] == 1 || $_POST['event2'] == 1) {
		
		foreach ($request['check-user']as $items){
		
		$sql = "UPDATE  `users_system` SET `users_system`.`status` = '1' WHERE `users_system`.`id` = " .$items."" ;
		$res = mysqli_query ($conn, $sql);
	}
	
		
	}

$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` ORDER BY `id` ASC";

$res = mysqli_query ($conn, $sql);


foreach ($res as $items){
	$users['id'][] = $items['id'];
	$users['name'][] = $items['name'];
	$users['role'][] = $items['role'];
	$users['status'][] = $items['status'];
	
	
	
	}
		
$result = array(
            'users' => $users
            

        );
		
		
		header('Content-type: text/json; charset=utf-8');
		print_r (json_encode($result));

?>