<?php
$baseurl='';
       
    function Buscar($material){
        require('config.php');
        $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
         
        $sql = "SELECT * FROM material WHERE Titulo LIKE '%$material%'";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
        $datos = array();
        $arreglo = array();
        $i=0;
        
        while ($row=mysqli_fetch_array($result)) {
            
            $datos[0] = $row[0];                // ID    
            $datos[1] = utf8_encode($row[1]);   // Area
            $datos[2] = $row[2];   // Area
            $datos[3] = utf8_encode($row[3]);   // Titulo
            $datos[4] = utf8_encode($row[4]);   // Descripcion
            $datos[5] = utf8_encode($row[5]);   // Autor
            $datos[6] = $row[6];   // URL
            $datos[7] = $row[7];   // Fecha
            
            $arreglo[$i] = $datos;  
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