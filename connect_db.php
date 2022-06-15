<?


$connectData = array (
		
	'dbserver' => 'rr428150.mysql.tools',
	'dbuser' => 'rr428150_dev',
	'dbname' => 'rr428150_dev',
	'dbpass' => 'b5X#x3&9Rf'
		);
$conn = mysqli_connect( $connectData['dbserver'], $connectData['dbuser'],$connectData['dbpass'],$connectData['dbname']);
$conn -> set_charset("utf8");

if (mysqli_connect_errno()){
	echo "Проблеми з підключення до БД ".mysqli_connect_error();
}
?>