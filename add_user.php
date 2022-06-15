<?

include_once('connect_db.php'); 

if (isset($_POST['name'])&& trim($_POST['name'])!= '') {
	$name = $_POST['name'];
}
else {
	$name = null;
}
if (isset($_POST['username']) && trim($_POST['username'])!='') {
	$username = $_POST['username'];  
}
else {
	$username = null;	
}
	$name_all = $name.' '.$username ;
if (isset($_POST['role']) && trim($_POST['role'])!= ''){
	$role = $_POST['role'];
}
else {
	$role = null;	
}
$check = isset($_POST['status']) ? "1" : "0";

if ($name !=null && $username != null && $role != null){
	$sql = "INSERT INTO `users_system`(`name`, `role`,`status`)  VALUES ('".$name_all."', '".$role."','".$check."')";
	mysqli_query ($conn, $sql);
	
	$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` WHERE `users_system`.`id` = LAST_INSERT_ID()";
	$res = mysqli_query ($conn, $sql);	
	foreach ($res as $items){
	$users['id'] = $items['id'];
	$users['name'] = $items['name'];
	$users['role'] = $items['role'];
	$users['status'] = $items['status'];
	
}     
    $result = array(
            'status' => true,
			'error' => $null,
			'users' => $users,
			
			);
	}

else if ($name == null && $username != null){
	
	$error['code'] = '100';		
	$error['message'] = 'name';	
	$result = array(
            'status' => false,
			'error' => $error
			);
	
	}
else if ($username == null && $name != null){
				
	$error['code'] = '100';		
	$error['message'] = 'username';	
	$result = array(
            'status' => false,
			'error' => $error
			);
	}

else if ($username == null && $name == null){
				
	$error['code'] = '100';		
	$error['message'] = 'name_and_username';	
	$result = array(
            'status' => false,
			'error' => $error
			);
	
	}

else if ($role == null){
				
	$error['code'] = '100';		
	$error['message'] = 'role';	
	$result = array(
            'status' => false,
			'error' => $error
			);
	
	}

header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));


?>