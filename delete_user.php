<?
include('connect_db.php'); 

$id = $_POST['userid'];	


$sql = "SELECT `id` FROM `users_system` WHERE `id` = '" .$id."' ";
$res_id = mysqli_query ($conn, $sql);
//print_r ($res_id);
$count = mysqli_num_rows($res_id);
if( $count > 0 ) {

$sql = "DELETE FROM users_system WHERE `users_system`.`id` = " .$id."";
$res  = mysqli_query ($conn, $sql);


$result = array(
            'status' => true,
			'error' => null,
			'id' => $id,
			
            

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