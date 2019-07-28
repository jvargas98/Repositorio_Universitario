<?php 
//Crear sesión
session_start();
//Vaciar sesión
$_SESSION = array();
//Destruir Sesión
session_destroy();
//Redireccionar a login.html
header("location: ../index.php");
?>