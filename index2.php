<?php 

include_once('connect_db.php'); 

include('includes/header.php'); 


$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` ORDER BY `id` DESC";

$result = mysqli_query ($conn, $sql);

//$result = mysqli_fetch_assoc($res);

//var_dump($result);



include('includes/form2.php'); 
 
include('includes/footer.php'); 


?>

<script src="script2.js"></script>
