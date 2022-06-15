<?php 

include_once('connect_db.php'); 

include('includes/header.php'); 


$sql = "SELECT `id`, `name`,  `role`, `status` FROM `users_system` ORDER BY `id` ASC";

$result = mysqli_query ($conn, $sql);

//$result = mysqli_fetch_assoc($res);

//var_dump($result);



include('includes/form.php'); 
 
include('includes/footer.php'); 


?>

<script src="script.js"></script>
