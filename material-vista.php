<?php
session_start();
 
if(!isset($_SESSION['No_Cuenta'])) 
{
    header("Location: login.php");
} 
else{
    include('inc/header.php');
    include('php/cargarMaterial.php');
    //echo"<br><br><br>" . @$_SESSION['No_Cuenta'];
    //echo "Hola " . @$_SESSION['rol'];
    //echo $_COOKIE["categoria"];

    $id = $_GET['id'];
        $cadena = "";
        $material= ObtenerMaterial($id);
        $cadena .= implode("|",$material);
        //echo $cadena;
        
  }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Material | Repositorio Universitario</title>
    </head>
    <header>
       
    </header>
    <body onload="cargarVistaMaterial()">
        <input type="hidden" id="rol" value="<?php echo $_SESSION['rol']; ?>">
        <input type="hidden" id="material" value="<?php echo ($cadena);?>">
        <div id="vista-main">
            <div class="container" id="usuario" style="max-width: 1500px;">
                <div class="row">    
                    <div class="col-sm" id="opciones-der">
                        <div class="btn-group select-pos" id="seleccion">

                        </div>
                    </div>
                </div>
                <!-- Donde se despliega la tabla, la lista o el material -->
                <div class="row justify-content-md-center" id="usuario-vista">

                </div>
            </div>
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header" id="header-modal">

                </div>
                <div class="modal-body" id="body-modal">

                </div>
                <div class="modal-footer" id="footer-modal">

                </div>
              </div>
            </div>
         </div>
        

    </body>
</html>
