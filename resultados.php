<?php
session_start();
 
if(!isset($_SESSION['No_Cuenta'])) 
{
    header("Location: login.php");
} 
else{
    include('inc/header.php');
    include('php/buscador.php');
    //echo"<br><br><br>" . @$_SESSION['No_Cuenta'];
    //echo "Hola " . @$_SESSION['rol'];
    //echo $_COOKIE["categoria"];

    $material = $_GET['material'];
    $material = utf8_decode($material);

        $materiales = Buscar($material);
       
        $cadena = "";
        for ($i=0; $i < sizeof($materiales); $i++) { 
            $cadena .= implode("|",$materiales[$i]);
            $cadena .= "|";
        }     
  }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Busqueda</title>
    </head>
    <body onload="cargarResultados()">
        <input type="hidden" id="rol" value="<?php echo $_SESSION['rol']; ?>">
        <input type="hidden" id="resultados" value="<?php echo ($cadena);?>">
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
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2" id="opciones-izq">
                        <div class="dd-pos">
                            <div class="dropdown" id="dropbox">

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8" id="table-container">
                        <div>
                            <div class="row">
                                <div class="col-xl-8 col-lg-8 col-md-9 col-sm-9">
                                    <label class="titulo-pag">Resultados de '<?php echo ($material);?>'</label>
                                </div>
                            </div>
                            <div id="tabla-admin">
                                <table  id="table_id" class="display">
                                    <thead class="estilo-tabla">
                                        <tr id="t-head">
                                            
                                            <th style="width: 150px;">Titulo</th>
                                            <th>Autor</th>
                                            <th>Año</th>
                                            <th>Formato</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody id="tabla-materiales">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">

                    </div>
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
        <script>
    $(document).ready( function () {
        $('#table_id').DataTable({
                 bFilter:false, 
            bInfo:false,
            "processing" : "procesando",
            "language" : {
                "paginate": {
                    "previous": "Anterior",
                    "next" : "Siguiente"
                            },
                "lengthMenu": "Materiales _MENU_ desplegados"
                        }
             
            });
    });

</script>
    </body>
</html>
