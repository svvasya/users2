<?
include('connect_db.php'); 
	
	$request = $_REQUEST;

	foreach ($request['userId'] as $items){
		
		$sql = "DELETE FROM users_system WHERE `users_system`.`id` = " .$items."";
		$res = mysqli_query ($conn, $sql);
		$k++;	
		$event = 'del';
		$users[] = array (
	
			'id' => $items,
	
	
	);
		
		
		}
$result = array(         
            
			'status' => true,
			'error' => null,
			'users' => $users,
			'count' => $k
			
        );	
header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));	

?>