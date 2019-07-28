<?php
session_start();
 
if(!isset($_SESSION['No_Cuenta'])) 
{
    header("Location: login.php");
} 
else{
    include('inc/header.php');
    include('php/cargarAdminCategorias.php');
    //echo"<br><br><br>" . @$_SESSION['No_Cuenta'];
    //echo "Hola " . @$_SESSION['rol'];
    //echo $_COOKIE["categoria"];

    $categorias = ObtenerCategoriasAdmin();
    $cadena = "";

    for ($i=0; $i < sizeof($categorias); $i++) { 
        $cadena .= implode("|",$categorias[$i]);
        $cadena .= "|";
    }
    //echo $cadena;
        
  }
?>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <title>Inicio | Repositorio Universitario</title>
    </head>
    <header>
    </header>
    <body onload="cargarAreasAdministrador()">
        <input type="hidden" id="rol" value="<?php echo $_SESSION['rol']; ?>">
        <input type="hidden" id="categorias" value="<?php echo ($cadena);?>">
        <div id="vista-main">
            <div class="container" id="usuario" style="max-width: 1500px;">
                <div class="row">    
                    <div class="col-sm" id="opciones-der">
                        <div class="btn-group select-pos" id="seleccion">
                            <select id='inputState' class='btn-select-color btn' onchange='cambiarVista()'><option value='1'>Ver como usuario...</option><option selected value='2'>Ver como administrador</option></select>
           
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
                                   <label class="titulo-pag">Administración de </label>
                                   <!-- Select para cambiar de vista -->
                                   <select id='cambiar-admin' class='btn-select-color btn cambiar-admin' onchange='cambiarVistaAdminCatyMat()'><option selected value='1'>Categorias</option><option value='2'>Materiales</option></select>
                                </div>
                            </div>
                           <div id="tabla-admin">
                                <table id="table_id" class="display">
                                    <thead class="estilo-tabla">
                                        <tr>
                                            <th style="width: 30px;">ID</th>
                                            <th>Nombre</th>
                                            <th style="width: 160px;">Total de materiales</th>    
                                            <th>Actualizada</th>   
                                            <th style="width: 90px;">Opciones</th>                                                                               
                                        </tr>                    
                                    </thead>                    
                                    <tbody id="tabla-categorias">                       

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
        $('#table_id').dataTable({
                 bFilter:true, 
            bInfo:true,
            "processing" : "procesando",
            "language" : {
                 "infoEmpty": "Mostrando 0 al 0 de 0 Categorias",
                "search": "Buscar:",
                "paginate": {
                    "previous": "Anterior",
                    "next" : "Siguiente"
                            },
                "lengthMenu": "Categorias _MENU_ desplegadas"
                        }
             
            });
    });
    </script>
    </body>
</html>
      