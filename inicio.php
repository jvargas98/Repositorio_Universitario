<?php

session_start();
 
if(!isset($_SESSION['No_Cuenta'])) 
{
    header("Location: login.php");
} 
else{
    include('inc/header.php');
    //echo"<br><br><br>" . @$_SESSION['No_Cuenta'];
    //echo "Hola " . @$_SESSION['rol'];
  }
?>
 <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <title>Inicio | Repositorio Universitario</title>
         <script src="js/main.js"></script>
    </head>
    <header>
    </header>
    
    <body onload="obtenerCategorias()">
        
        <input type="hidden" id="rol" value="<?php echo $_SESSION['rol']; ?>">
        <!-- Donde se despliegan todas las paginas  -->
        <div id="vista-main">
            <div class="container" id="usuario" style="max-width: 1500px;">
                <div class="row">    
                    <div class="col-sm" id="opciones-der">
                        <div class="btn-group select-pos" id="seleccion">

                        </div>
                    </div>
                </div>
                <!-- Donde se despliega la tabla o la lista -->
                <div class="row justify-content-md-center" id="usuario-vista">
              
                </div>
            </div>  
        </div>
        <!-- Modal  -->
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
    </body
</html>
