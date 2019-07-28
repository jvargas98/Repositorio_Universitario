<?php
$baseurl='';
       
    function ObtenerMateriales($area){
        require('config.php');
        $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
         
        $sql = "SELECT * FROM material WHERE Nombre_Area='$area' ORDER BY Titulo";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
        $datos = array();
        $arreglo = array();
        $i=0;
        
        while ($row=mysqli_fetch_array($result)) {
       
            $datos[0] = $row[0];                  // ID
            $datos[1] = utf8_encode($row[1]);     // Area
            $datos[2] = $row[2];                  // Tipo de formato
            $datos[3] = utf8_encode($row[3]);     // Titulo
            $datos[4] = utf8_encode($row[5]);     // Autor
            $datos[5] = $row[8];     // Fecha de emision
            $arreglo[$i] = $datos;   // Guardamos el material en el arreglo
            $i++;
        }
        
        
        if(!$result){
            echo mysqli_error($connect);
        }
        if ($num_row != "0") { // Se encontro al menos una ocurrencia
            return $arreglo;
        } else {
           return "0";
        }
    }
    function ObtenerMateriales2(){
        require('config.php');
        $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
         
        $sql = "SELECT * FROM material ORDER BY Titulo";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
        $datos = array();
        $arreglo = array();
        $i=0;
        
        while ($row=mysqli_fetch_array($result)) {
       
            $datos[0] = $row[0];                  // ID
            $datos[1] = utf8_encode($row[1]);     // Area
            $datos[2] = $row[2];                  // Tipo de formato
            $datos[3] = utf8_encode($row[3]);     // Titulo
            $datos[4] = utf8_encode($row[4]);     // Descripcion
            $datos[5] = utf8_encode($row[5]);     // Autor
            $datos[6] = $row[6];                  // Url
            $datos[7] = $row[8];                  // Fecha de emision
            $arreglo[$i] = $datos;                // Guardamos el material en el arreglo
            $i++;
        }
        
        if(!$result){
            echo mysqli_error($connect);
        }
        if ($num_row != "0") { // Se encontro al menos una ocurrencia
            return $arreglo;
        } else {
           return "0";
        }
    }
?>