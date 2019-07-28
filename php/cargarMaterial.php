<?php
$baseurl='';
       
    function ObtenerMaterial($id){
        require('config.php');
        $connect = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
         
        $sql = "SELECT * FROM material WHERE ID_Material='$id'";
        $result = mysqli_query($connect, $sql);
        $num_row = mysqli_num_rows($result);
        $row = mysqli_fetch_array($result, MYSQLI_NUM);
        if ($num_row == "1") {
            return $row;
        }
        else{
            return false;
        }
        if(!$result){
            echo mysqli_error($connect);
        }
    }
?>