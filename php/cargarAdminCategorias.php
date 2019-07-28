<?php
    function ObtenerCategoriasAdmin(){
        require('config.php');

        $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);

        $sql = "SELECT * FROM area ORDER BY Nombre_Area";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
        $datos = array();
        $arreglo = array();
        $i=0;
        
        while ($row=mysqli_fetch_array($result)) {
            
            $datos[0] = utf8_encode($row[0]);     // Nombre
            $datos[1] = $row[1];     // Total de documentos
            $datos[2] = $row[2];
            $arreglo[$i] = $datos;   // Guardamos el proyecto en el arreglo
            $i++;
        }
        if(!$result){
            echo mysqli_error($connect);
        }
        if ($num_row != "0") { // Se encontro al menos una ocurrencia
            return $arreglo; // Regresamos un arreglo con los arreglos de cada proyecto
        } else {
            return "0";
        }
    }
?>