
<?php
$mysqli = new mysqli('127.0.0.1', 'jorge', '12345', 'repositorio')  or die('No se pudo conectar: ' . mysql_error());
echo 'Connected successfully';
?>
