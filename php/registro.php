<?php

require('config.php');
  
  $nombre = $_POST['nombre-u'];
  $apellidoP = $_POST['aPaterno'];
  $apellidoM = $_POST['aMaterno'];
  $correo = $_POST['correo'];
  $nocuenta = $_POST['nocuenta'];
  $pass = $_POST['pwd'];

  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

  if(isset($_POST["nombre-u"]) && isset($_POST["aPaterno"]) && isset($_POST["aMaterno"]) && isset($_POST["correo"]) && isset($_POST["nocuenta"]) && isset($_POST["pwd"])){
    
    $sql = "INSERT INTO usuario  VALUES ('$nocuenta','$nombre','$apellidoP','$apellidoM','$correo','$pass')";
   
    $result = mysqli_query($connect, $sql);
    
    if(!$result){
        echo json_encode(2);
    }

    else{
        header('Location: ../index.php');
    } 
}
else {
    echo json_encode(0);
}
  
 ?>
