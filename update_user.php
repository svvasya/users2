<?

include_once('connect_db.php'); 

$id = $_POST['userinfo'];

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
$name_all = $name.' '.$username ;

$check = isset($_POST['status']) ? "1" : "0";

if ($name !=null && $username != null && $role != null){
$sql = "UPDATE `users_system` SET `name`= '".$name_all."', `role` = '".$role."', `status` = '".$check."' WHERE `id`= '".$id."'";
//print_r ($sql);
$res=mysqli_query ($conn, $sql);
$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` WHERE `users_system`.`id` = '" .$id."'";
$res = mysqli_query ($conn, $sql);
//echo $res;
foreach ($res as $items){
	$users['id'] = $items['id'];
	$users['name'] = $items['name'];
	$users['role'] = $items['role'];
	$users['status'] = $items['status'];
	
}

$result = array(
            'users' => $users
            

        );

header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));
}
?>