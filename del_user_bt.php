<?
include('connect_db.php'); 

$id = $_POST['userid'];	


$sql = "SELECT `id` FROM `users_system` WHERE `id` = '" .$id."' ";
$res_id = mysqli_query ($conn, $sql);
//print_r ($res_id);
$count = mysqli_num_rows($res_id);
if( $count > 0 ) {
$sql = "SELECT `name` FROM `users_system` WHERE `id` = '" .$id."' ";
$res = mysqli_query ($conn, $sql);
foreach ($res as $items){
	
	$users['name'] = $items['name'];
	
	
	
	}
	$users['id'] = $id;
$result = array(
            'status' => true,
			'error' => null,
			'users' => $users
			
            

        );

}

else  {
$result = array(
            'status' => false,
			'error' => 'Database error: user not found',
			
			
            

        );
		
}



header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));
//include_once('select.php'); 
?>