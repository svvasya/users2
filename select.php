<?

$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` ORDER BY `id` ASC";

$res = mysqli_query ($conn, $sql);


foreach ($res as $items){
	$result['id'][] = $items['id'];
	$result['name'][] = $items['name'];
	$result['role'][] = $items['role'];
	$result['status'][] = $items['status'];
	
	
   

       
	header('Content-type: text/json; charset=utf-8');
	print_r (json_encode($result));
	unset($result);
	}
		

		
		
		
?>