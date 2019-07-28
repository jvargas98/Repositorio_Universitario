// FUNCION PARA CARGAR TODAS LAS CATEGORIAS EN FORMA DE LISTA
var categoriasGlobal = "";
var categoriasP = "";
var totalCamposAutor = 0;
var materialesGlobal = "";
var resultados = "";

function obtenerCategorias(){
    var url = "";
    var user_id = "1";
    var cadena = "";
    $.ajax({
        //async: false,
        type: 'POST',
        data:{
            id : user_id,
        },
        url: url='php/cargarCategorias.php',
        dataType: 'html',

        beforeSend:function(){
            console.log('Cargando convocatorias...');
        },
        success:function(data){
            datos_proyectos = JSON.parse(data);
            console.log(datos_proyectos);

            for (let i = 0; i < datos_proyectos.length; i++) {
                for (let j = 0; j < 3; j++) {
                    categoriasP+= datos_proyectos[i][j] + "|";
                }
            }
            console.log(categoriasP);
            cargarVistaUsuarioCategorias()

        },
        error:function(data){
                alert("Ha ocurrido un error.");
        }
    });
}

function cargarAreasUsuario(){
  
    var fila;
    var resto;
    totalCamposAutor = 0;

    var lista = document.getElementById("lista");
    var cat = categoriasP;
    console.log(cat);
    
    var categorias = cat.split("|"); 
    categoriasGlobal = categorias;
    var cont = 0;

    for (var i = 0; i < categorias.length-1; i=i+3) {
        cont++;

        if(cont % 2 === 0) {
            fila = "<a href='material.php?categoria="+categorias[i]+"' class='list-group-item list-group-item-action text-success list-group-item-light lista-tam'>"+categorias[i]+"<span class='span-posicion badge badge-primary badge-pill'>"+categorias[i+1]+"</span></a>";
            lista.innerHTML += "<div id='lista-"+cont+"' class='lista'>" + fila + "</div>";
        }
        else{
            fila = "<a href='material.php?categoria="+categorias[i]+"' class='list-group-item list-group-item-action list-group-item-success lista-tam'>"+categorias[i]+"<span class='span-posicion badge badge-primary badge-pill'>"+categorias[i+1]+"</span></a>";
            lista.innerHTML += "<div id='lista-"+cont+"' class='lista'>" + fila + "</div>";         
        }
    }
    
    cargarOpciones();
}

function salirOpciones(){
    
}

// FUNCION PARA CARGAR LAS OPCIONES DEL ADMINISTRADOR
function cargarOpciones(){
    console.log("cargado");
    var opciones = document.getElementById("rol").value;
    var posDropbox = document.getElementById("dropbox");
    var posSeleccion = document.getElementById("seleccion");
    var cargado = document.getElementById('inputState'); 
    var salir = document.getElementById('drop-salir');
    var dropbox;
    var seleccion;
    var modalMaterial = "<a class='dropdown-item' onclick='modalAgregarMaterial()' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+"Agregar Material"+"</a>";
    var modalCategoria = "<a class='dropdown-item' onclick='modalAgregarCategoria()' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+"Agregar Categoria"+"</a>";
    console.log(opciones);
    console.log("c " +cargado);
    if(opciones == "true"){
        
        var dropSalir = "<a class='dropdown-item' href='Controlador_Panel_Control'>Panel de control</a>";
        dropSalir += "<div class='dropdown-divider'></div>";
        dropSalir += "<a class='dropdown-item' href='../php/logout.php'>Salir</a>";
        
        salir.innerHTML = dropSalir;
        
        dropbox = "<button class='btn-agregar btn dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+"Agregar"+"</button><div class='dropdown-menu dd-pos' aria-labelledby='dropdownMenuButton'>"+modalMaterial+modalCategoria+"</div>";
        posDropbox.innerHTML += dropbox;
        
        if(cargado == null){
           seleccion = "<select id='inputState' class='btn-select-color btn' onchange='cambiarVista()'><option selected value='1'>Ver como usuario...</option><option value='2'>Ver como administrador</option></select>";
           posSeleccion.innerHTML += seleccion;
        }
        else{
            
        }
        
        var limite = categoriasGlobal.length;
        var contador = 0;
         for (var i = 1; i < limite; i++) {
            var cadena = "<div class='dropdown dropright'>";
            cadena += "<button type='button' class='btn btn-opciones btn-color-p' data-toggle='dropdown' style=''>";
            cadena += "<i class='medium material-icons right'>more_vert</i>";
            cadena += "</button>";
            cadena += "<div class='dropdown-menu'>";
            cadena += "<a href='material.php?categoria="+escape(categoriasGlobal[contador])+"' class='dropdown-item'>Abrir</a>";
            cadena += "<a href='#' class='dropdown-item' onclick=modalEditarCategoria('"+escape(categoriasGlobal[contador])+"') data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Editar</a>";
            cadena += "<a href='#' class='dropdown-item' onclick=modalEliminarCategoria('"+escape(categoriasGlobal[contador])+"') data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>Eliminar</a>";
            cadena += "</div>";
            cadena += "</div>";

            var posicion = "lista-"+i;
            var listas = document.getElementById(posicion);
            listas.innerHTML += cadena;
            contador = contador + 3;
        }
    } 
}

// FUNCION PARA INTERCAMBIAR LAS VISTA DE ADMIN A USUARIO
function cambiarVista(){
    var opcion = document.getElementById('inputState').value;
    console.log(opcion);
    if (opcion == 1) {
         location.href="inicio.php";
    }
    else{
        location.href="admin-categoria.php";
    }
}

function cambiarVistaAdminCatyMat(){
    var opcion = document.getElementById('cambiar-admin').value;
    console.log(opcion);
    if (opcion == 1) {
        location.href="admin-categoria.php";
    }
    else{
        location.href="admin-material.php";
    }
}

//FUNCION PARA CARGAR LAS AREAS(CATEGORIAS) DE ADMINISTRADOR EN TABLA
function cargarAreasAdministrador(){
    var cat = document.getElementById('categorias').value;
    var categorias = cat.split("|");
    categoriasGlobal = categorias;
    var cont = 1;
    
    var tabla = document.getElementById("tabla-categorias");
    
    // Iconos correspondiente para cada boton
    var iconoVer = "<i class='medium material-icons right icono-pos'>remove_red_eye</i>";
    var iconoEditar = "<i class='medium material-icons right icono-pos'>edit</i>";
    var iconoEliminar = "<i class='medium material-icons right icono-pos'>delete</i>";
    
    for (var i = 0; i < categorias.length - 1; i=i+3) {
       
        var rColumna1 = "<td>"+ (cont++) +"</td>";
        var rColumna2 = "<td>"+ categorias[i] +"</td>";
        var rColumna3 = "<td>"+ categorias[i+1] +"</td>";
        var rColumna4 = "<td>"+ categorias[i+2]+"</td>";
    
        var botonVer = "<div class='botones-seperacion'><button type='submit' onclick=seleccionarCategoria('"+escape(categorias[i])+"') class='remove_red_eye btn-tam btn btn-dark'>"+iconoVer+"</button></div>";
        var botonEditar = "<div class='botones-seperacion'><button type='submit' onclick=modalEditarCategoria('"+escape(categorias[i])+"') class='btn-tam btn btn-info' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEditar+"</button></div>";
        var botonEliminar = "<div class='botones-seperacion'><button type='submit' onclick=modalEliminarCategoria('"+escape(categorias[i])+"') class='btn-tam btn btn-danger' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEliminar+"</button></div>";
        
        var rColumna5 = "<td><div class='botones-grupo'>"+botonVer+botonEditar+botonEliminar+"</td></div>";
        if(i == 0){
            var registro = "<tr>"+rColumna1+rColumna2+rColumna3+rColumna4+rColumna5+"</tr";
            tabla.innerHTML = registro;  
        }
        else{
            var registro = "<tr>"+rColumna1+rColumna2+rColumna3+rColumna4+rColumna5+"</tr";
            tabla.innerHTML += registro; 
        }
    }
    cargarOpciones();
}

// FUNCION PARA CARGAR LA VISTA COMO USUARIO NORMAL
function cargarVistaUsuarioCategorias(){
    $.ajax({

        type: 'POST',
        url: url ='vistas/usuario.html',
        dataType: 'html',

        beforeSend:function(){
            $('#usuario-vista').html("Procesando...");
        },
        success:function(vista){
            $('#usuario-vista').html(vista);
            cargarAreasUsuario();
        },
        error:function(vista){
            alert("Ha ocurrido un error.");
        }
    });  
}

function modalAgregarCategoria(){
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Agregar Categoria"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form id='form-aCategoria'>";
    var campoNombreInicio = "<div class='form-group'>";
    var nombre = "<label for='recipient-name' class='col-form-label'>"+"Nombre"+"</label>";
    var inputNombre = "<input type='text' class='form-control form-control-sm' name='nombre' id='input-categoria' autocomplete='false' required>";
    var campoNombreFinal = "</div>";
    var finalFormulario = "</form>";
    var botonAgregar = "<input type='button' onclick='agregarCategoria()' class='btn btn-primary' value='Agregar' id='btn-aCategoria'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoNombreInicio + nombre + inputNombre + campoNombreFinal + botonAgregar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
       
}

function modalEditarCategoria(nombre_categoria){
    nombre_categoria = unescape(nombre_categoria);
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Editar Categoria"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form method='post'>";
    
    var campoNombreInicio = "<div class='form-group'>";
    var nombre = "<label for='recipient-name' class='col-form-label'>"+"Nombre"+"</label>";
    var inputNombreActual = "<input type='hidden' class='form-control' name='nombre_actual' id='nombre-actual' value='"+nombre_categoria+"'>";
    var inputNombreNuevo = "<input type='text' class='form-control form-control-sm' name='nombre_nuevo' id='nombre-nuevo' value='"+nombre_categoria+"' required>";
    var campoNombreFinal = "</div>";
    
    var finalFormulario = "</form>";
    var botonEditar = "<input type='button' onclick=(editarCategoria()) class='btn btn-primary' value='Editar'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoNombreInicio + nombre + inputNombreActual + inputNombreNuevo + campoNombreFinal + botonEditar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
}

function modalEliminarCategoria(nombre_categoria){
    nombre_categoria = unescape(nombre_categoria);
    //alert(nombre_categoria);
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Eliminar Categoria"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form method='post'>";
    
    var campoNombreInicio = "<div class='form-group'>";
    var inputValor = "<input type='hidden' name='nombre' id='input-nombre' value='"+nombre_categoria+"'>";
    var nombre = "<label for='recipient-name' class='col-form-label'>"+"¿Esta seguro que quiere eliminar la categoria "+nombre_categoria+"?</label>";
    var campoNombreFinal = "</div>";
    
    var finalFormulario = "</form>";
    var botonEditar = "<input type='button' onclick=(eliminarCategoria()) class='btn btn-primary' value='Eliminar'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoNombreInicio + inputValor + nombre + campoNombreFinal + botonEditar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
}

function modalAgregarMaterial(){
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    var opcion;
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Agregar Material"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form  method='post'>";
    
    var campoTituloInicio = "<div class='form-group'>";
    var titulo = "<label for='recipient-name' class='col-form-label'>"+"Titulo *"+"</label>";
    var inputTitulo = "<input type='text' class='form-control form-control-sm' name='titulo' id='titulo' autocomplete='false' required>";
    var campoTituloFinal = "</div>";
    
    var campoTitulo = campoTituloInicio + titulo + inputTitulo + campoTituloFinal;
    
    var campoAutorInicio = "<div id='autor-campos'><div class='form-group'>";
    var autor = "<label for='recipient-name' class='col-form-label'>"+"Autor"+"</label>";
    var otro = "<button type='button' onclick='modalAgregarCampoAutor()' class='btn-Agregar-Circulo'>+</button>";
    var inputAutor = "<input type='text' class='form-control form-control-sm' name='autor1' id='autor1' autocomplete='false'>";
    var campoAutorFinal = "</div></div>";
    
    var campoAutor = campoAutorInicio + autor + otro+ inputAutor + campoAutorFinal;
    
    var campoCategoriaInicio = "<div class='form-group'>";
    var categoria = "<label for='exampleFormControlSelect2'>Categoria *</label>";
    var selectCategoriaInicio = "<select name='categoria-seleccionada' class='form-control form-control-sm' id='categoria' required>";
        var contador=0;
        opcion += "<option value=''>Selecciona una categoria...</option>";
        for (var i = 0; i < categoriasGlobal.length; i=i+3) {
            opcion += "<option value='"+categoriasGlobal[i]+"'>"+categoriasGlobal[i]+"</option>";
        }
    var selectCategoriaFin = "</select><div class='invalid-feedback'>Example invalid custom select feedback</div>";
    var campoCategoriaFinal = "</div>";
    
    var campoFormatoInicio = "<div class='form-group'>";
    var formato = "<label for='recipient-name' class='col-form-label'>"+"Formato *"+"</label>";
    var inputFormato = "<input type='text' class='form-control form-control-sm' name='formato' id='formato' autocomplete='false' required>";
    var campoFormatoFinal = "</div>";
    
    var campoFormato = campoFormatoInicio + formato + inputFormato + campoFormatoFinal;
    
    var campoCategoria = campoCategoriaInicio + categoria + selectCategoriaInicio + opcion + selectCategoriaFin + campoCategoriaFinal;
    
    var campoUrlInicio = "<div class='form-group'>";
    var url = "<label for='recipient-name' class='col-form-label'>"+"URL *"+"</label>";
    var inputUrl = "<input type='text' class='form-control form-control-sm' name='url' id='url' autocomplete='false' required>";
    var campoUrlFinal = "</div>";
    
    var campoUrl = campoUrlInicio + url + inputUrl + campoUrlFinal;
    
    var campoDescripcionInicio = "<div class='form-group'>";
    var descripcion = "<label for='exampleFormControlTextarea1'>Descripción</label>";
    var inputDescripcion = "<textarea class='form-control form-control-sm' id='descripcion' rows='1' name='descripcion' autocomplete='false'></textarea>";
    var campoDescripcionFinal = "</div>";
    
    var campoDescripcion = campoDescripcionInicio + descripcion + inputDescripcion + campoDescripcionFinal;
    
    var finalFormulario = "</form>";
    
    var botonEditar = "<input type='button' onclick=(agregarMaterial()) class='btn btn-primary' value='Agregar'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoTitulo + campoAutor + campoCategoria + campoFormato + campoUrl + campoDescripcion + botonEditar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
    
    reiniciarContador();
}

function modalEditarMaterial(id){
    //alert("ED");
    
    if ($('#materiales').length) {
        var mat = document.getElementById("materiales").value;
        // si existe
    } else {
        var mat = document.getElementById('resultados').value;
    // no existe
    }
   
    var materiales = mat.split("|");                          // Creamos un vector mediante el String seperando los registros "|" 
    var m;
    console.log(materiales);
    
    for (var i = 0; i < materiales.length - 1; i=i+8) {
        if(id == materiales[i]){
            m = materiales[i] + "|";            // ID
            m += materiales[i+1] + "|";          // AREA
            m += materiales[i+2] + "|";          // FORMATO
            m += materiales[i+3] + "|";          // TITULO
            m += materiales[i+4] + "|";          // DESCRIPCION
            m += materiales[i+5] + "|";          // AUTOR
            m += materiales[i+6] + "|";          // URL
            m += materiales[i+7];          // FECHA
        }
    }
    console.log(m);
    var material = m.split("|");
    var autoresLista = material[5].split("/");
    console.log(material);
    console.log(autoresLista);
    
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Editar Material"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form method='post' id='form'>";
    
    body.innerHTML = inicioFormulario;
    
    var form = document.getElementById('form');
    
    var campoTituloInicio = "<div class='form-group'>";
    var inputValor = "<input type='hidden' name='id' id='id' value='"+material[0]+"'>";
    var titulo = "<label for='recipient-name' class='col-form-label'>"+"Titulo *"+"</label>";
    var inputTitulo = "<input type='text' class='form-control form-control-sm' name='titulo' id='titulo' value='"+material[3]+"' required>";
    var campoTituloFinal = "</div>";
    
    var campoTitulo = campoTituloInicio + inputValor + titulo + inputTitulo + campoTituloFinal;
    
    form.innerHTML += campoTitulo;
    
    for (var i = 0; i < autoresLista.length; i++) {
        if(i == 0){
            var campoAutorInicio = "<div id='autor-campos'><div class='form-group'>";
            var autor = "<label for='recipient-name' class='col-form-label'>"+"Autor"+"</label>";
            var otro = "<button type='button' onclick='modalAgregarCampoAutor()' class='btn-Agregar-Circulo'>+</button>";
            var inputAutor = "<input type='text' class='form-control form-control-sm' name='autor1' id='autor"+(i+1)+"' value='"+autoresLista[i]+"'>";
            var campoAutorFinal = "</div></div>";
            
            var campoAutor = campoAutorInicio + autor + otro+ inputAutor + campoAutorFinal;

            form.innerHTML += campoAutor;
        }
        else{
            var inputpos = document.getElementById('autor-campos');
            var campoAutorInicio = "<div class='form-group'>";
            var autor = "<label for='recipient-name' class='col-form-label'>"+"Autor"+"</label>";
            var input = "<input type='text' class='form-control form-control-sm' value='"+autoresLista[i]+"' name='autor"+(i+1)+"' id='autor"+(i+1)+"'>";
            var campoAutorFinal = "</div>";
            inputpos.innerHTML += campoAutorInicio + autor + input + campoAutorFinal; 
            totalCamposAutor++;
        }
    }
    var campoCategoriaInicio = "<div class='form-group'>";
    var categoria = "<label for='exampleFormControlSelect2'>Categoria *</label>";
    var selectCategoriaInicio = "<select name='categoria' class='form-control form-control-sm' id='categoria' required>";
        var contador=0;
        var opcion = "<option selected>"+material[1]+"</option>";
        for (var i = 0; i < categoriasGlobal.length; i=i+3) {
            opcion += "<option value='"+categoriasGlobal[i]+"'>"+categoriasGlobal[i]+"</option>";
        }
    var selectCategoriaFin = "</select> <div class='invalid-feedback'>Example invalid custom select feedback</div>";
    var campoCategoriaFinal = "</div>";
    
    var campoCategoria = campoCategoriaInicio + categoria + selectCategoriaInicio + opcion + selectCategoriaFin + campoCategoriaFinal;
    
    form.innerHTML += campoCategoria;
    
    var campoFormatoInicio = "<div class='form-group'>";
    var formato = "<label for='recipient-name' class='col-form-label'>"+"Formato *"+"</label>";
    var inputFormato = "<input type='text' class='form-control form-control-sm' name='formato' id='formato' value='"+material[2]+"' autocomplete='false' required>";
    var campoFormatoFinal = "</div>";
    
    var campoFormato = campoFormatoInicio + formato + inputFormato + campoFormatoFinal;
    form.innerHTML += campoFormato;
    
    var campoUrlInicio = "<div class='form-group'>";
    var url = "<label for='recipient-name' class='col-form-label'>"+"URL *"+"</label>";
    var inputUrl = "<input type='text' class='form-control form-control-sm' name='url' id='url' value='" +material[6]+"' autocomplete='false' required>";
    var campoUrlFinal = "</div>";
    
    var campoUrl = campoUrlInicio + url + inputUrl + campoUrlFinal;
    
    form.innerHTML += campoUrl;
    
    var campoDescripcionInicio = "<div class='form-group'>";
    var descripcion = "<label for='exampleFormControlTextarea1'>Descripción</label>";
    var inputDescripcion = "<textarea class='form-control form-control-sm' id='descripcion' rows='1' name='descripcion' autocomplete='false'>"+material[4]+"</textarea>";
    var campoDescripcionFinal = "</div>";
    
    var campoDescripcion = campoDescripcionInicio + descripcion + inputDescripcion + campoDescripcionFinal;
    
    form.innerHTML += campoDescripcion;
    
    var finalFormulario = "</form>";
    
    var botonEditar = "<input type='button' onclick=(editarMaterial()) class='btn btn-primary' value='Editar material'>";
    // AGREGA CODIGO A BODY
    
    form.innerHTML += botonEditar + finalFormulario;
    
    //body.innerHTML = inicioFormulario + campoTitulo + campoAutor + campoCategoria + campoUrl + campoDescripcion + botonEditar + finalFormulario;
    
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
}

function modalEliminarMaterial(id){
    var m;
    var materiales = materialesGlobal;
    
    for (var i = 0; i < materiales.length - 1; i=i+8) {
        if(id == materiales[i]){
            m = materiales[i] + "|";            // ID
            m += materiales[i+1] + "|";          // AREA
            m += materiales[i+2] + "|";          // FORMATO
            m += materiales[i+3] + "|";          // TITULO
            m += materiales[i+4] + "|";          // DESCRIPCION
            m += materiales[i+5] + "|";          // AUTOR
            m += materiales[i+6] + "|";          // URL
            m += materiales[i+7];          // FECHA
        }
    }
    
    var material = m.split("|");
    
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Eliminar Material"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form method='post'>";
    
    var campoNombreInicio = "<div class='form-group'>";
    var inputValor = "<input type='hidden' id='id' name='id' value='"+material[0]+"'>";
    var nombre = "<label for='recipient-name' class='col-form-label'>"+"¿Esta seguro que quiere eliminar el material "+material[3]+"?</label>";
    var campoNombreFinal = "</div>";
    
    var finalFormulario = "</form>";
    var botonEditar = "<input type='button' onclick=(eliminarMaterial()) class='btn btn-primary' value='Eliminar'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoNombreInicio + inputValor + nombre + campoNombreFinal + botonEditar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
    
    
}


function modalSinCategoria(){
    
       
}

function reiniciarContador(){
    totalCamposAutor = 0;
}

function modalAgregarCampoAutor(){
    console.log(totalCamposAutor);
    if(totalCamposAutor < 2){
        var inputpos = document.getElementById('autor-campos');
        var campoAutorInicio = "<div class='form-group'>";
        var autor = "<label for='recipient-name' class='col-form-label'>"+"Autor"+"</label>";
        var input = "<input type='text' class='form-control form-control-sm' name='autor"+(totalCamposAutor+2)+"' id='autor"+(totalCamposAutor+2)+"' autocomplete='false'>";
        var campoAutorFinal = "</div>";
        inputpos.innerHTML += campoAutorInicio + autor + input + campoAutorFinal; 
        totalCamposAutor++;
    }
}


// ENVIA LA SELECCION DE CATEGORIA ATREVES DE AJAX AL CONTROLADOR VER CATEGORIA

function seleccionarCategoria(nombre_categorias){
            
    nombre_categoria = escape(nombre_categorias);
    location = "material.php?categoria="+nombre_categoria;
   // alert("id: "+nombre_categoria.toString());
    /*  $.ajax({
        url: 'material.php',
        dataType: 'html',
        data:{
            area : nombre_categoria
        },
        type: 'POST',
        
        beforeSend:function(){
            console.log('Procesando materiales...');
        },
        success:function(data){
           // datosMaterial = JSON.parse(data);
           // console.log(datosMaterial);
           /* for (let i = 0; i < datosMaterial.length; i++) {
                for (let j = 0; j < 6; j++) {
                    materialesGlobal+= datosMaterial[i][j] + "|";
                }
            }
            location = "material.php"
            
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        }
    });
    */
}

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function obtenerCategoriasModal(){
     $.ajax({
        url: 'php/cargarListaCategorias.php',
        dataType: 'html',
        data:{
            id : "1"
        },
        type: 'POST',
        
        beforeSend:function(){
            console.log('Procesando materiales de categoria...');
        },
        success:function(data){
            console.log(data);
            var lista = data;
           // lista = encode_utf8(lista);
            categoriasGlobal = lista.split("|");
            //console.log(categoriasGlobal);
            //alert(data);
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        }
    });
}


// -------------- V I S T A   M A T E R I A L E S =================


// FUNCION PARA CARGAR LA VISTA DEL MATERIAL, AGREGA CON AJAX EL ARCHIVO 
// material.html DE LA CARPETA VISTA
function cargarVistaUsuarioMateriales(){
    totalCamposAutor = 0;  
    var validarCantidadMateriales = document.getElementById('materiales').value;
    console.log(validarCantidadMateriales); 
    if(validarCantidadMateriales != "null|null|null|null|null|"){
        $.ajax({
            type: 'POST',
            url: url ='vistas/material.html',
            dataType: 'html',

            beforeSend:function(){
                $('#usuario-vista').html("Procesando...");
            },
            success:function(vista){
                $('#usuario-vista').html(vista);
                cargarMateriales();
                obtenerCategoriasModal();
            },
            error:function(vista){
                alert("Ha ocurrido un error al cargar pagina.");
            }
        });  
    }
    else{
       modalSinCategoria();
    }
}

// FUNCION PARA INGRESAR EN LA TABLA LOS REGISTROS MEDIANTE INNERHTML

function cargarMateriales(){
    var categoria = "";
    var titulod = document.getElementById('titulo-m');
    titulod.innerHTML = "<label class='titulo-pag'>Materiales de "+categoria+"</label>"
    var mat = document.getElementById('materiales').value;  // Se obtiene del String que guardamos en el input
    console.log(mat);
    var tabla = document.getElementById("tabla-materiales");  // Obtenemos el id del tbody de la tabla para agregarle el codigo
    var materiales = mat.split("|");                          // Creamos un vector mediante el String seperando los registros "|" 
    console.log(materiales);
  
    for (var i = 0; i < materiales.length - 1; i=i+6) {      // Ciclo de 5 en 5 ya que cada 5 posiciones esta otro registro
       
        var rColumna1 = "<td>" + "<button type='button' class='btn btn-link' onclick=seleccionarMaterial('"+materiales[i]+"')>"+ materiales[i+3] + "</button></td>";         // Titulo
        var rColumna2 = "<td>" + materiales[i+4] + "</td>";       // Autor
        var rColumna3 = "<td>" + materiales[i+5] + "</td>";        // Fecha
        var rColumna4 = "<td>" + materiales[i+2] + "</td>";        // Formato
        
        var registro = "<tr>"+rColumna1+rColumna2+rColumna3+rColumna4+"</tr";
        tabla.innerHTML += registro;  
    }
    cargarOpciones();
    var select = document.getElementById('inputState');             // Cuestiones de vista del admin. NO MODIFICAR
    select.onchange = undefined;                                    // Cuestiones de vista del admin. NO MODIFICAR
    $('#inputState').change(function(){cambiarVistaMaterial();});   // Cuestiones de vista del admin. NO MODIFICAR
}

function cargarMaterialesAdmin(){
    obtenerCategoriasModal();
    var mat = document.getElementById("materiales").value;  // Se obtiene del String que guardamos en el input
    console.log(mat);
    var tabla = document.getElementById("tabla-materiales");  // Obtenemos el id del tbody de la tabla para agregarle el codigo
    var materiales = mat.split("|");                          // Creamos un vector mediante el String seperando los registros "|" 
    materialesGlobal = materiales;
    console.log(materiales);
  
    // Iconos correspondiente para cada boton
    var iconoVer = "<i class='medium material-icons right icono-pos'>remove_red_eye</i>";
    var iconoEditar = "<i class='medium material-icons right icono-pos'>edit</i>";
    var iconoEliminar = "<i class='medium material-icons right icono-pos'>delete</i>";
    
  
    for (var i = 0; i < materiales.length - 1; i=i+8) {      // Ciclo de 5 en 5 ya que cada 5 posiciones esta otro registro
        var rColumna0 = "<td>" + materiales[i] +"</td>";     // ID
        var rColumna1 = "<td>" + materiales[i+1] + "</td>";  // Categoria
        var rColumna2 = "<td>" + materiales[i+3] + "</td>";         // Titulo
        var rColumna3 = "<td>" + materiales[i+5] + "</td>";       // Autor
        var rColumna4 = "<td>" + materiales[i+7] + "</td>";        // Fecha
        var rColumna5 = "<td>" + materiales[i+2] + "</td>";        // Formato
        
        var botonVer = "<div class='botones-seperacion'><button type='submit' onclick=seleccionarMaterial('"+materiales[i]+"') class='remove_red_eye btn-tam btn btn-dark'>"+iconoVer+"</button></div>";
        var botonEditar = "<div class='botones-seperacion'><button type='submit' onclick=modalEditarMaterial('"+materiales[i]+"') class='btn-tam btn btn-info' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEditar+"</button></div>";
        var botonEliminar = "<div class='botones-seperacion'><button type='submit' onclick=modalEliminarMaterial('"+materiales[i]+"') class='btn-tam btn btn-danger' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEliminar+"</button></div>";
        
        var rColumna6 = "<td><div class='botones-grupo'>"+botonVer+botonEditar+botonEliminar+"</td></div>";
        
        var registro = "<tr>"+rColumna0+rColumna1+rColumna2+rColumna3+rColumna4+rColumna5+rColumna6+"</tr";
        tabla.innerHTML += registro;  
    }
    cargarOpciones();
    var select = document.getElementById('inputState');             // Cuestiones de vista del admin. NO MODIFICAR
    select.onchange = undefined;                                    // Cuestiones de vista del admin. NO MODIFICAR
    $('#inputState').change(function(){cambiarVistaMaterial();});   // Cuestiones de vista del admin. NO MODIFICAR
}

 // Cuestiones de vista del admin. NO MODIFICAR
function cambiarVistaMaterial(){
    var opcion = document.getElementById('inputState').value;
    console.log(opcion);
    if (opcion == 1) {
        location.href="material.php";
    }
    else{
        location.href="admin-material.php";
    }
}

function seleccionarMaterial(id_material){
   //alert("id: "+id_material.toString());
   
    location.href="material-vista.php?id="+id_material;
       
}

function cargarVistaMaterial(){
    $.ajax({

        type: 'POST',
        url: url ='vistas/material-vista.html',
        dataType: 'html',

        beforeSend:function(){
            $('#usuario-vista').html("Procesando...");
        },
        success:function(vista){
            $('#usuario-vista').html(vista);
            cargarDatosMaterial();
            obtenerCategoriasModal();
        },
        error:function(vista){
            alert("Ha ocurrido un error.");
        }
    });  
}

function cargarDatosMaterial(){
    var material = document.getElementById('material').value;
    var tarjetaHeader = document.getElementById("tarjeta-header");  
    var tarjetaBody = document.getElementById("tarjeta-body");
    
    var materialDatos = material.split("|");                         
    console.log(materialDatos);
    
    //var header = "<label class='titulo-pag'>"+materialDatos[1]+"</label>" + "<i class='large material-icons icono-editar'>edit</i>";
    var header = "<label class='titulo-pag'>"+materialDatos[1]+"</label>";
    var autor = "<h5 class='card-title'>Autor</h5>";
    var autorDato = "<p class='card-text'>"+materialDatos[5]+"</p>";
    var fecha = "<h5 class='card-title'>Fecha</h5>";
    var fechaDato = "<p class='card-text'>"+materialDatos[7]+"</p>";
    var descripcion = "<h5 class='card-title'>Descripciòn</h5>";
    var descripcionDato = "<p class='card-text'>"+materialDatos[4]+"</p>";
    var formato = "<h5 class='card-title'>Tipo de formato</h5>";
    var formatoDato = "<p class='card-text'>"+materialDatos[2]+"</p>";
    var actualizado = "<h5 class='card-title'>Ultima actualizaciòn</h5>";
    var actualizadoDato = "<p class='card-text'>"+materialDatos[8]+"</p>";
    var botonVer = "<a href='"+materialDatos[6]+"' class='btn btn-color-p'>Visualizar</a>";
    
    tarjetaHeader.innerHTML += header;
    tarjetaBody.innerHTML += autor + autorDato + fecha + fechaDato + descripcion + descripcionDato + formato + formatoDato + actualizado + actualizadoDato + botonVer;
    
    cargarOpciones();
    var select = document.getElementById('inputState');             // Cuestiones de vista del admin. NO MODIFICAR
    select.onchange = undefined;                                    // Cuestiones de vista del admin. NO MODIFICAR
    $('#inputState').change(function(){cambiarVistaMaterialDatos();});   // Cuestiones de vista del admin. NO MODIFICAR
}

function cambiarVistaMaterialDatos(){
     var opcion = document.getElementById('inputState').value;
    console.log(opcion);
    if (opcion == 1) {
        location.href="material-vista.php";
    }
    else{
        location.href="admin-material.php";
    }
}

function cargarVisitas(){
    var datos= new Array();
    var categorias= new Array();
    var status = document.getElementById('status').value;
    
    if(status == "ok"){
        alert("Administrador registrado correctamente");
        location.href="panel-control.jsp";
    }
    
    var v = document.getElementById('visitas').value;
    var visitas = v.split("|");
    var cont = 1;
    var tabla = document.getElementById("tabla-visitas");
    console.log(visitas);
    
    for (var i = 0; i < visitas.length-1; i=i+2) {
        var rColumna1 = "<td>"+ (cont++) +"</td>";
        var rColumna2 = "<td>"+ visitas[i] +"</td>";
        categorias.push(visitas[i]);
        var rColumna3 = "<td>"+ visitas[i+1] +"</td>";
        datos.push(parseInt(visitas[i+1]));
        
        var registro = "<tr>"+rColumna1+rColumna2+rColumna3+"</tr";
        tabla.innerHTML += registro;
    }
     console.log(datos);
       console.log(categorias);
    
    $('#visitas-table').DataTable({
                 bFilter:true, 
            bInfo:false,
            "processing" : "procesando",
            "language" : {
                 "infoEmpty": "Mostrando 0 to 0 of 0 Materiales",
                "search": "Buscar:",
                "paginate": {
                    "previous": "Anterior",
                    "next" : "Siguiente"
                            },
                "lengthMenu": "Categorias _MENU_ desplegados"
                        }
             
            });
    cargarOpcionesPanel();
    
    var options = {
        chart: {
             height: 400,
             widt: "100%",
             type: 'line',
                 
             foreColor: "#333",
             zoom: {
                enabled: false
             }
               
        },
         colors: ['#13956d', '#545454'],
        
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
          name: 'Visitas',
          data: datos
        }],
        title: {
                text: 'Visitas de Categorias',
                align: 'left'
        },
        grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
        xaxis: {
          categories: categorias,
          title: {
                    text: 'Categorias'
          }
        },
        yaxis: {
            title: {
                text: 'Visitas'
            },
                // min: 5,
                // max: 40
         }
    }
    
    // SEGUNDA TABLA
    
     var options2 = {
        chart: {
             height: 400,
             widt: "100%",
             type: 'line',
                 
             foreColor: "#333",
             zoom: {
                enabled: false
             }
               
        },
         colors: ['#13956d', '#545454'],
        
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'smooth'
        },
        series: [{
          name: 'Visitas',
          data: [0,40,45,50,49,60,70,91,125,140,160,185,200]
        }],
        title: {
                text: 'Visitas de Categorias de Español',
                align: 'left'
        },
        grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
        xaxis: {
          categories: ["00:00","02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"],
          title: {
                    text: 'Horas'
          }
        },
        yaxis: {
            title: {
                text: 'Visitas'
            },
                // min: 5,
                // max: 40
         }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

    chart.render();
     chart2.render();
}

function interpolacion(){
    var hora = parseInt(document.getElementById('input-hora').value);
    //alert(hora);
    var visitas = [0,40,45,50,49,60,70,91,125,140,160,185,200];
    var anterior = hora - 1;
    console.log("a " + anterior);
    var siguiente = hora + 1;
    console.log("s " + siguiente);
    if(hora % 2 == 0){
        var y = visitas[(hora/2)];
    }else{
        var x0 = anterior;
        var posicion1 = anterior / 2;
        posicion1 = Math.round(posicion1);
        console.log(posicion1);

        var x = hora;

        var x1 = siguiente;
        var posicion2 = siguiente / 2;
        posicion2 = Math.round(posicion2);
        console.log(posicion2);

        if(anterior == 0)
            var y0 = visitas[0];
        else
            var y0 = visitas[posicion1];

        console.log("y0 "+y0);
        var y = 0;

        var y1 = visitas[(posicion2)];
        console.log("y1 "+y1);

        y = y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
    }
    var ipVisitas = document.getElementById('input-visitas');
    ipVisitas.value = y;
}


function cargarOpcionesPanel(){
    var modalAdministrador = "<a class='dropdown-item' onclick='modalAgregarAdmin()' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+"Agregar Administrador"+"</a>";
    var posDropbox = document.getElementById("dropbox-vista");
    var dropbox = "<button class='btn-agregar btn dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"+"Agregar"+"</button><div class='dropdown-menu dd-pos' aria-labelledby='dropdownMenuButton'>"+modalAdministrador+"</div>";
    posDropbox.innerHTML += dropbox;
}

function cargarResultados(){
    obtenerCategoriasModal()
    var rol = document.getElementById('rol').value;
    if(rol == "true"){
        cargarOpciones();
        var thead = document.getElementById('t-head');
        var columnaOpc = "<th id='opciones-tabla' style='width: 90px;'>Opciones</th>";
        thead.innerHTML += columnaOpc;
    }
    var resultados = document.getElementById('resultados').value;
     var tabla = document.getElementById("tabla-materiales");  // Obtenemos el id del tbody de la tabla para agregarle el codigo
    var materiales = resultados.split("|");                          // Creamos un vector mediante el String seperando los registros "|" 
    materialesGlobal = materiales;
    console.log(materiales);
  
    // Iconos correspondiente para cada boton
    var iconoVer = "<i class='medium material-icons right icono-pos'>remove_red_eye</i>";
    var iconoEditar = "<i class='medium material-icons right icono-pos'>edit</i>";
    var iconoEliminar = "<i class='medium material-icons right icono-pos'>delete</i>";
    
  
    for (var i = 0; i < materiales.length - 1; i=i+8) {      // Ciclo de 5 en 5 ya que cada 5 posiciones esta otro registro
        
        var rColumna1 = "<td>" + "<button type='button' class='btn btn-link' onclick=seleccionarMaterial('"+materiales[i]+"')>"+ materiales[i+3] + "</button></td>";         // Titulo
        var rColumna2 = "<td>" + materiales[i+5] + "</td>";       // Autor
        var rColumna3 = "<td>" + materiales[i+7] + "</td>";        // Fecha
        var rColumna4 = "<td>" + materiales[i+2] + "</td>";        // Formato
        
        
        var botonVer = "<div class='botones-seperacion'><button type='submit' onclick=seleccionarMaterial('"+materiales[i]+"') class='remove_red_eye btn-tam btn btn-dark'>"+iconoVer+"</button></div>";
        var botonEditar = "<div class='botones-seperacion'><button type='submit' onclick=modalEditarMaterial('"+materiales[i]+"') class='btn-tam btn btn-info' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEditar+"</button></div>";
        var botonEliminar = "<div class='botones-seperacion'><button type='submit' onclick=modalEliminarMaterial('"+materiales[i]+"') class='btn-tam btn btn-danger' data-toggle='modal' data-target='#exampleModal' data-whatever='@mdo'>"+iconoEliminar+"</button></div>";
        
        var rColumna5 = "<td><div class='botones-grupo'>"+botonVer+botonEditar+botonEliminar+"</td></div>";
        
        if(rol == "true"){
            var registro = "<tr>"+rColumna1+rColumna2+rColumna3+rColumna4+rColumna5+"</tr";
        }
        else{
            var registro = "<tr>"+rColumna1+rColumna2+rColumna3+rColumna4+"</tr"; 
        }
        tabla.innerHTML += registro;  
    }
}

function justNumbers(e)
{
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
    return true;
             
    return /\d/.test(String.fromCharCode(keynum));
}
function verificar(){
    var status = document.getElementById('status').value;
    
    if(status == "correcto"){
        alert("Registro Correcto");
        location.href="index.jsp";
    }
}

function modalAgregarAdmin(){
    var header = document.getElementById('header-modal');
    var body = document.getElementById('body-modal');
    var footer = document.getElementById('footer-modal');
    // HEADER MODAL
    var titulo = "<h5 class='modal-title' id='titulo-modal'>"+"Agregar Administrador"+"</h5>";
    var botonCerrar = "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
    
    // AGREGA CODIGO A HEADER 
    header.innerHTML = titulo + botonCerrar;
            
    // BODY MODAL
    var inicioFormulario = "<form action='Controlador_Agregar_Admin' method='post' id='form-aCategoria'>";
    var campoNombreInicio = "<div class='form-group'>";
    var nombre = "<label for='recipient-name' class='col-form-label'>"+"Numero de cuenta"+"</label>";
    var inputNombre = "<input type='text' onkeypress='return justNumbers(event);' minlength='8' class='form-control form-control-sm' name='nocuenta' id='input-admin' autocomplete='false' required>";
    var campoNombreFinal = "</div>";
    var finalFormulario = "</form>";
    var botonAgregar = "<input type='submit' class='btn btn-primary' value='Agregar' id='btn-aCategoria'>";
    // AGREGA CODIGO A BODY
    body.innerHTML = inicioFormulario + campoNombreInicio + nombre + inputNombre + campoNombreFinal + botonAgregar + finalFormulario;
    
    // FOOTER MODAL
    var botonCancelar = "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Cancelar</button>";
    
    
    // AGREGA CODIGO A FOOTER
    footer.innerHTML = botonCancelar;
       
}