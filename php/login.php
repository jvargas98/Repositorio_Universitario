<?php
  $baseurl='';

  require('config.php');

  $correo = $_POST['correo_cuenta'];
  $pass = $_POST['password'];

  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

    //echo $correo.$pass;

  if(isset($_POST["correo_cuenta"]) && isset($_POST["password"])){
    $correo = mysqli_real_escape_string($connect, $_POST["correo_cuenta"]);
    $pass = mysqli_real_escape_string($connect, $_POST["password"]);

    $sql = "SELECT * FROM usuario WHERE (Correo='$correo') AND (Contrasena='$pass')";
    $result = mysqli_query($connect, $sql);
    $num_row = mysqli_num_rows($result);
    $row = mysqli_fetch_array($result, MYSQLI_NUM);
    
    if(!$result){
        echo mysqli_error($connect);
    }

    if ($num_row == "1") {
      session_start();
      $data = mysqli_fetch_array($result);
      $_SESSION['No_Cuenta'] = $row[0];
      $validar = validarRol($row[0]);

      if($validar == true){
        $_SESSION['rol'] = "true";
      }
      else{
        $_SESSION['rol'] = "false";
      }

      $_SESSION['start'] = time();
      $_SESSION['expire'] = $_SESSION['start'] + (5 * 60);

      echo json_encode(1);
      exit();
    } else {
      echo json_encode(0);
    }
  } else {
    echo json_encode(0);
  }

  function validarRol($cuenta){
    require('config.php');
    $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

    $sql = "SELECT * FROM bibliotecario WHERE (No_Cuenta='$cuenta')";
    $result = mysqli_query($connect, $sql);
    $num_row = mysqli_num_rows($result);
    $row = mysqli_fetch_array($result, MYSQLI_NUM);
    if ($num_row == "1") {
        return true;
    }
    else{
        return false;
    }
  }


  
 ?>