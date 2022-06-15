<?
include('connect_db.php'); 

$id = $_POST['userid'];	




$sql = "DELETE FROM users_system WHERE `users_system`.`id` = " .$id."";
$res  = mysqli_query ($conn, $sql);


$result = array(
            'status' => true,
			'error' => null,
			'id' => $id,
			
            

        );


header('Content-type: text/json; charset=utf-8');
print_r (json_encode($result));
//include_once('select.php'); 
?>