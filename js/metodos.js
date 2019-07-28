var _url = "localhost/repositorio"

function validarEvaluador(){
    var user_email = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var url=""; 
    $.ajax({

    type: 'POST',
    data:{
        correo_cuenta : user_email,
        password : password
    },
    url: url = 'php/login.php',
    dataType: 'html',

    beforeSend:function(){
        console.log('Procesando...');
    },
    success:function(data){
        console.log(data);
        data = JSON.parse(data);
        if(data == "1"){
            location.href="inicio.php";
        }
        else{
            console.log(data);
            alert("Correo incorrecto");
        }
    },
    error:function(data){
        alert("Ha ocurrido un error.");
    },
    });
}
function agregarCategoria(){
    var categoriaNombre = document.getElementById('input-categoria').value;
    categoria = unescape(categoriaNombre);
    //alert(categoria);
    $.ajax({

        type: 'POST',
        data:{
            nombre : categoria
        },
        url: url = 'php/agregarCategoria.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Categoria agregada correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("La categoria ya existe");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });
}

function editarCategoria(){
    var nombreActual = document.getElementById('nombre-actual').value;
    var nombreNuevo = document.getElementById('nombre-nuevo').value;
    nombreActual = unescape(nombreActual);
    nombreNuevo = unescape(nombreNuevo);
    //alert(categoria);
    $.ajax({

        type: 'POST',
        data:{
            nombre_actual : nombreActual,
            nombre_nuevo : nombreNuevo
        },
        url: url = 'php/editarCategoria.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Categoria modificada correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("La categoria ya existe");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });
}

function eliminarCategoria(){
    var categoriaNombre = document.getElementById('input-nombre').value;
    categoria = unescape(categoriaNombre);
    //alert(categoria);
    $.ajax({

        type: 'POST',
        data:{
            nombre : categoria
        },
        url: url = 'php/eliminarCategoria.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Categoria eliminada correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("La categoria tiene materiales");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });

}
function agregarMaterial(){
    var titulo = document.getElementById('titulo').value;
    var autor1 = document.getElementById('autor1').value;
    if($('#autor2').length){
        var autor2 = document.getElementById('autor2').value;
    }
    if($('#autor3').length){
        var autor3 = document.getElementById('autor3').value;
    }
    var categoria = document.getElementById('categoria').value;
    var formato = document.getElementById('formato').value;
    var url = document.getElementById('url').value;
    var descripcion = document.getElementById('descripcion').value;
    
    titulo = unescape(titulo);
    autor1 = unescape(autor1);
    autor2 = unescape(autor2);
    categoria = unescape(categoria);
    descripcion = unescape(descripcion);
    
    var at1 = false; at2=false, at3=false;

    if(autor1 != null){
        at1 = true;
    }
    if (autor2 == null){
        at2 = true;
    }
    if (autor3 == null){
        at3 = true;
    }

    if(at1 == true && at2 == true && at3 == true){
        autor1 = "S/A";
     }
     else if(at1 == false && at2 == true && at3 == true){
        autor1 = autor1;
     }
     else if(at1 == false && at2 == false && at3 == true){
        autor1 = autor1 + "/" + autor2;
     }
     else if(at1 == false && at2 == false && at3 == false){
        autor1 = $autor1 + "/" + autor2 + "/" + autor3;
     }
    
    $.ajax({

        type: 'POST',
        data:{
            titulo : titulo,
            autor1 : autor1,
            categoria : categoria,
            formato : formato,
            url : url,
            descripcion : descripcion
        },
        url: url = 'php/agregarMaterial.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Material agregado correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("El material ya existe");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });
}

function editarMaterial(){
    var id = document.getElementById('id').value;
    var titulo = document.getElementById('titulo').value;
    var autor1 = document.getElementById('autor1').value;
    
    if($('#autor2').length){
        var autor2 = document.getElementById('autor2').value;
        if(autor2.trim().length==0){
            autor2 == null;
        }
        autor2 = unescape(autor2);
    }
    if($('#autor3').length){
        var autor3 = document.getElementById('autor3').value;
        if(autor3.trim().length==0){
            autor3 == null;
        }
        autor3 = unescape(autor3);
    }
    var categoria = document.getElementById('categoria').value;
    var formato = document.getElementById('formato').value;
    var url = document.getElementById('url').value;
    var descripcion = document.getElementById('descripcion').value;
    
    titulo = unescape(titulo);
    autor1 = unescape(autor1);
   
    categoria = unescape(categoria);
    descripcion = unescape(descripcion);
    
    var at1 = false; 
    var at2 = false; 
    var at3 = false;

    if(autor1 == null){
        at1 = true;
    }
    if (autor2 == null){
        at2 = true;
    }
    if (autor3 == null){
        at3 = true;
    }

    var autores = "";
    console.log(at1);
    console.log(at2);
    console.log(at3);

    if(at1 == true && at2 == true && at3 == true){
        autores = "S/A";
     }
     else if(at1 == false && at2 == true && at3 == true){
        autores = autor1;
     }
     else if(at1 == false && at2 == false && at3 == true){
        autores = autor1 + "/" + autor2;
        alert("dos");
     }
     else if(at1 == false && at2 == false && at3 == false){
        autores = autor1 + "/" + autor2 + "/" + autor3;
     }
    
    $.ajax({

        type: 'POST',
        data:{
            id: id,
            titulo : titulo,
            autor1 : autores,
            categoria : categoria,
            formato : formato,
            url : url,
            descripcion : descripcion
        },
        url: url = 'php/editarMaterial.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Material modificado correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("El material ya existe");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });
}

function eliminarMaterial(){
    var id = document.getElementById('id').value;
    //alert(categoria);
    $.ajax({

        type: 'POST',
        data:{
            id : id
        },
        url: url = 'php/eliminarMaterial.php',
        dataType: 'html',
    
        beforeSend:function(){
            console.log('Procesando...');
        },
        success:function(data){
            console.log(data);
            data = JSON.parse(data);
            if(data == "1"){
                $('#exampleModal').modal('hide');
                alert("Material eliminada correctamente");
                location.reload();
            }
            else{
                console.log(data);
                $('#exampleModal').modal('hide');
                alert("Error al eliminar el material");
                location.reload();
            }
        },
        error:function(data){
            alert("Ha ocurrido un error.");
        },
        });

}

function buscador(){
    var material = document.getElementById('busqueda-id').value;
    location = "resultados.php?material="+material;
}