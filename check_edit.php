<?
	include('connect_db.php'); 
	
	$request = $_REQUEST;

//print_r($_POST['check-user']);
$k = 0;
if (!isset($_POST['check-user'])){
	$error['code'] = '100';	
	$error['message'] = 'Please select user';	
	
			
}
elseif ($_POST['event'] == 0 && $_POST['event2'] == 0 ){
	$error['code'] = '100';	
	$error['message'] = 'Please select event';	
	
	
			
}

elseif ($_POST['event'] != 0 || $_POST['event2'] != 0 && isset($_POST['check-user']))  {
	$error = null;
}
	
	
	
	if ($_POST['event'] == 3 || $_POST['event2'] == 3) {
		
		
		foreach ($request['check-user'] as $items){
		
		//$sql = "DELETE FROM users_system WHERE `users_system`.`id` = " .$items."";
		//$res = mysqli_query ($conn, $sql);
		$k++;	
		$event = 'del';
		//$users[] = array (
	
		//	'id' => $items,
	
	
	//);
		
		
		}
	}
		
	
	else if ($_POST['event'] == 2 || $_POST['event2'] == 2) {
		
		foreach ($request['check-user']as $items){
		
		$sql = "UPDATE  `users_system` SET `users_system`.`status` = '0' WHERE `users_system`.`id` = " .$items."" ;
		$res  = mysqli_query ($conn, $sql);
		$k++;	
		$event = 'upd';
	}
		
	}
	else if ($_POST['event'] == 1 || $_POST['event2'] == 1) {
		
		foreach ($request['check-user']as $items){
		
		$sql = "UPDATE  `users_system` SET `users_system`.`status` = '1' WHERE `users_system`.`id` = " .$items."" ;
		$res = mysqli_query ($conn, $sql);
		$k++;	
		$event = 'upd';
	}
	
		
	}
//$result['count'][] = $k;
foreach ($request['check-user']as $items){
	
$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` WHERE `users_system`.`id` = " .$items."";

$res = mysqli_query ($conn, $sql);

foreach ($res as $item){
	
	$users[] = array (
	
	'id' => $item['id'],
	'name' => $item['name'],
	'role' => $item['role'],
	'status' => $item['status'],
	
	);
	
	
	
	
	}	
				
	//unset($users);
	//print_r($result);
	
}




$result = array(         
            
			'status' => true,
			'error' => $error,
			'users' => $users,
			'count' => $k,
			'event' => $event,
			
        );	
header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));	


?>
		
		
		

