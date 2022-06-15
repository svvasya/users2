<?

include('connect_db.php'); 

if (isset($_POST['userid'])){
$id = $_POST['userid'];	
$sql = "SELECT `id` FROM `users_system` WHERE `id` = '" .$id."' ";
$res_id = mysqli_query ($conn, $sql);
//print_r ($res_id);
$count = mysqli_num_rows($res_id);
if( $count > 0 ) {
  $sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` WHERE `users_system`.`id` = '" .$id."'";

$res = mysqli_query ($conn, $sql);
foreach ($res as $items){
	$users['id'] = $items['id'];
	$usr = explode(" ",$items['name']);
	$users['name'] = $usr[0];
	$users['surname'] = $usr[1];
	$users['role'] = $items['role'];
	$users['status'] = $items['status'];
	
	
	}
	$result = array(
            'users' => $users
            

        );
		$result['error']= null;
} else  {
   $result = array(
            'users' => $users
            

        );
		$result['error']= 'Database error: user not found';
}



}



		
		
header('Content-type: text/json; charset=utf-8');
echo (json_encode($result));

unset($id);


?>