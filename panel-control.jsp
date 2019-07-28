<%-- 
    Document   : panel-control
    Created on : 26/11/2018, 11:25:40 AM
    Author     : alexb
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    String visitasC = (String) request.getAttribute("visitas");
    String status = "";
     status = (String) request.getAttribute("status");
     
     if(status == null){
         status = "";
     }
     else{
        // visitasC = "Registro "+ visitasC;
     }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">    
        <title>Panel de control | Repositorio Universitario</title>
    </head>
    <header>
        <jsp:include  page="inc/header.jsp"/>
    </header>
    <body onload="cargarVisitas()">
        <input type="hidden" id="visitas" value="<% out.print(visitasC); %>">
        <input type="hidden" id="status" value="<% out.print(visitasC); %>">
        <div id="vista-main">
            <div class="container" id="usuario" style="max-width: 1500px;">
                <div class="row">
                    <div class="col-sm" id="opciones-der">
                        <div class="btn-group select-pos" id="seleccion">
                           <button type="button" class="btn btn-select-color">Volver</button>
                        </div>
                    </div>
                </div>
                <!-- Donde se despliega la tabla o la lista -->
                <div class="row justify-content-md-center" id="usuario-vista">
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2" id="opciones-izq">
                        <div class="dd-pos">
                            <div class="dropdown" id="dropbox-vista">

                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8" id="table-container">
                        <div class="row">
                             <div class="col-xl-8 col-lg-8 col-md-9 col-sm-9">
                                <label class="titulo-pag">Estadisticas</label>
                                
                             </div>
                        </div>
                            <table class="table table-hover" id="visitas-table">
                                <thead class="estilo-tabla">
                                    <tr>
                                        <th style="width: 30px;">ID</th>
                                        <th>Categoria</th>
                                        <th>Visitas</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla-visitas">

                                </tbody>
                            </table>
                        <div class="row">
                             <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8" id="table-container">
                                 <div class="containerC">
                                 <div id="chart"></div>
                                 <div id="chart2"></div>
                                 
                                 <div class="form-group mx-sm-3 mb-2">
                                   <form class="form-inline">
                                        
                                        <div class="form-group mx-sm-3 mb-2">
                                          <label style="padding-right: 10px;">Hora</label>
                                          <input type="text" class="form-control" id="input-hora" placeholder="">
                                        </div>
                                       <button type="button" class="btn btn-dark" onclick="interpolacion()">Buscar</button>
                                   </form>
                                 </div>
                                 
                                  <div class="form-group mx-sm-3 mb-2">
                                   <form class="form-inline">
                                        
                                        <div class="form-group mx-sm-3 mb-2">
                                          <label style="padding-right: 10px;">Visitas</label>
                                          <input type="text" class="form-control" id="input-visitas" placeholder="">
                                        </div>
                                      
                                   </form>
                                 </div>
                                 
                              </div>
                            <script src='https://cdn.jsdelivr.net/npm/apexcharts'></script>

  


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
    </body>
</html>
