<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <link rel="stylesheet" href="css/estilo.css">
        <link rel="stylesheet" href="css/style.css">

        <script src="js/usuario.js"></script>
        <script src="js/metodos.js"></script>
        <!-- ICONOS -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- PÁGINA DE ICONOS -->
        <!-- https://materializecss.com/icons.html -->

        <!-- JQUERY -->        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

        <!-- AJAX -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <!-- POPPER -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

        <!-- JAVA BOOTSTRAP -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <!-- JQUERY DATATABLE -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">

        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head
        <div class="container-fluid" id="header" style="">
            <header class="container-fluid" id="header" >
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <a href="inicio.jsp" id="nombre">Repositorio Universitario</a>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div class="input-group input-group-sm mb-3">
                            <form action="" class="form-buscador" method="post">
                                <input type="text" class="form-control"  placeholder="Buscar" name="busqueda" id="busqueda-id">
                                <div class="input-group-append">
                                    <input type="button" onclick="buscador()" class="btn btn-primary" value="Buscar">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4" >
                        <!--
                        <form action="Controlador_Cerrar_Sesion" method="post">
                            <button class="btn" id="btn-salir" type="submit">Salir ></button>
                        </form>
                        -->

                            <button type="button" class="btn" id="btn-salir" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="Large material-icons">person</i>
                              <i class="Large material-icons">arrow_drop_down</i>
                            </button>
                            <div id="drop-salir" class="dropdown-menu">
                             
                              <a class="dropdown-item" href="../repositorio/php/logout.php">Salir</a>
                            </div>

                    </div>
                </div>
            </header>


