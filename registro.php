<?php
 include('inc/header-registro.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Registro | Repositorio Universitario</title>
        <script src="js/usuario.js"></script>
        
    </head>
    <body onload="verificar()">
        <input type="hidden" id="status" value="<% out.print(visitasC); %>">
        <div class="container-fluid example">
  <div class="row">
      <div class="col-xl-4">
    </div>
    <div class="col-xl-4">
        <div class="container-register-form">
            <form action="php/registro.php" method="post">
                <h4>Formulario de registro</h4>
                <hr>
                <div class="form-group">
                        <label>Nombre(s) *</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="" required="" name="nombre-u">
                        </div>
                </div>
                <div class="form-group">
                        <label>Apellido paterno *</label>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="" required="" name="aPaterno">
                        </div>
                </div>
                <div class="form-group">
                    <label>Apellido materno *</label>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="" required="" name="aMaterno">
                    </div>
                </div>
                <div class="form-group">
                    <label>Correo *</label>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="" required="" name="correo">
                    </div>
                </div>
                <div class="form-group">
                    <label>Número de cuenta *</label>
                    <div class="col">
                        <input type="text"  onkeypress="return justNumbers(event);" minlength="8" class="form-control" required="" name="nocuenta">
                    </div>
                </div>
                <div class="form-group">
                    <label>Contraseña *</label>
                    <div class="col">
                        <input type="password" class="form-control" minlength="8" required="" name="pwd">
                    </div>
                </div>
                
                <hr>
                <input type="submit" class="btn btn-registrar" value="Registrar">
            </form>
        </div>
    </div>
    <div class="col-xl-4">
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
    </body>  
</html>
