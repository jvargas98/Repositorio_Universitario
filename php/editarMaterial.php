<?php

require('config.php');
  $fechaActual = date('Y-m-d');
  
  $id = $_POST['id'];

  $titulo = $_POST['titulo'];
  $titulo = utf8_decode($titulo);
  
  $autor1 = $_POST['autor1'];
  $autor1 = utf8_decode($autor1);
  
  $formato = $_POST['formato'];
  $formato = utf8_decode($formato);
  
  $categoria = $_POST['categoria'];
  $categoria = utf8_decode($categoria);

  $descripcion = $_POST['descripcion'];
  $descripcion = utf8_decode($descripcion);
  
  $url = $_POST['url'];
  $url = utf8_decode($url);

  $url = $_POST['descripcion'];
  $url = utf8_decode($url);

  $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 // $Connect->set_charset("utf8");
  if(isset($_POST["id"]) && isset($_POST["titulo"]) && isset($_POST["autor1"]) && isset($_POST["formato"]) && isset($_POST["categoria"]) && isset($_POST["url"]) && isset($_POST["descripcion"])){
    
    $sql = "UPDATE material SET Tipo_Formato=UPPER('$formato'), Nombre_Area='$categoria', Titulo='$titulo', Descripcion='$descripcion', Autor='$autor1', Url='$url', Fecha_Registro='$fechaActual' WHERE ID_Material='$id'";
   
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