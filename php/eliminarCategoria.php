<?php

require('config.php');
  $nombre = $_POST['nombre'];
  $nombre = utf8_decode($nombre);
  //echo $fechaActual;
  //echo $nombre;
  
  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 // $Connect->set_charset("utf8");
  if(isset($_POST["nombre"])){
    
    $sql = "DELETE FROM area WHERE Nombre_Area='$nombre'";
   
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