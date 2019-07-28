<?php

require('config.php');
  $fechaActual = date('Y-m-d');
  
  $titulo = $_POST['titulo'];
  $titulo = utf8_decode($titulo);

  $autor1 = $_POST['autor1'];
  $autor1 = utf8_decode($autor1);

  $autor2 = null;
  if(isset($_POST["autor2"])){
    $autor2 = $_POST['autor2'];
    $autor2 = utf8_decode($autor2);
  }

  $autor3 = null;
  if(isset($_POST["autor3"])){
    $autor3 = $_POST['autor3'];
    $autor3 = utf8_decode($autor3);
  }

  $categoria = $_POST['categoria'];
  $categoria = utf8_decode($categoria);

  $formato = $_POST['formato'];
  $formato = utf8_decode($formato);
  
  $url = $_POST['url'];
  $url = utf8_decode($url);

  $at1 = false;
  $at2 = false;
  $at3 = false;
  
  if (empty($autor1)){
    $at1 = true;
  }
  if ($autor2 == null){
    $at1 = true;
  }
  if ($autor3 == null){
    $at1 = true;
  }

  $descripcion = $_POST['descripcion'];
  $descripcion = utf8_decode($descripcion);

  //echo $fechaActual;
  //echo $nombre;
  
  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 // $Connect->set_charset("utf8");
  if(isset($_POST["titulo"]) && isset($_POST["categoria"]) && isset($_POST["formato"]) && isset($_POST["url"]) && isset($_POST["descripcion"])){
    
    $sql = "INSERT INTO material (Nombre_Area, Tipo_Formato, Titulo, Descripcion, Autor, Url, Fecha_Registro, Fecha_Emision) VALUES ('$categoria','$formato','$titulo','$descripcion','$autor1','$url','$fechaActual','$fechaActual')";
   
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