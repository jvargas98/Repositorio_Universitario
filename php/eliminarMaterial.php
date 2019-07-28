<?php

require('config.php');
  $id = $_POST['id'];
  
  //echo $fechaActual;
  //echo $nombre;
  
  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 // $Connect->set_charset("utf8");
  if(isset($_POST["id"])){
    
    $sql = "DELETE FROM material WHERE ID_Material='$id'";
   
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