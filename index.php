<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Iniciar Sesión | Repositorio Universitario</title>
        <link rel="stylesheet" href="css/style.css">
       
        <!-- JAVA BOOTSTRAP -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="js/metodos.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body>    
        <main class="container-fluid">
            <div class="row">
                <article class="col-sm-12 col-md-7 col-lg-8 col-xl-8 padding-issues">
                     <div class="img-fondo"></div>
                </article>
                <article class="col-sm-12 col-md-5 col-lg-4 col-xl-4">
                    <div class="login">
                        <div class="content-login">
                            <h1>Iniciar Sesión</h1>
                           
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Correo</label>
                                    <input type="text" class="form-control" name="correo_cuenta" placeholder="" id="correo" minlength="8" required><br>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" class="form-control" name="password" placeholder="" id="password" minlength="8" required><br>
                                </div>
                                <input type="submit" onclick="validarEvaluador()" class="btn btn-tamaño text-white" value="Ingresar" id="btn-iniciar">
                           
                        
                            <div class="senales-registro">
                            <h5>¿No tienes una cuenta?</h5>
                            <h5><a href="registro.php">¡Registrate!</a></h5>
                        </div>
                        </div>
                        
                    </div>
                </article>
            </div>
        </main>
    </body>
</html>
