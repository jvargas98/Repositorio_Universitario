<?php

require('config.php');
  $fechaActual = date('Y-m-d');
  $nombreActual = $_POST['nombre_actual'];
  $nombreActual = utf8_decode($nombreActual);
  $nombreNuevo = $_POST['nombre_nuevo'];
  $nombreNuevo = utf8_decode($nombreNuevo);
  
  //echo $fechaActual;
  //echo $nombreActual;
  //echo $nombreNuevo;
  
  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 // $Connect->set_charset("utf8");
  if(isset($_POST["nombre_actual"]) && isset($_POST["nombre_nuevo"])){
    
    $sql = "UPDATE area SET Nombre_Area='$nombreNuevo', Fecha_Actualizacion='$fechaActual' WHERE Nombre_Area='$nombreActual'";
   
    $result = mysqli_query($connect, $sql);
    
    if(!$result){
        echo json_encode(2);
    }

    else{
      echo json_encode(1);
    } 
}
else {
    echo json_encode(0);
}
  
 ?>