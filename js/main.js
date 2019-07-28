var options = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'sales',
    data: [30,40,45,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}

//var chart = new ApexCharts(document.querySelector("#chart"), options);

//chart.render();

/*
window.addEventListener('load', function (){
    document.getElementById('btn-iniciar').addEventListener('click', function (){
        var correo_cuenta = document.getElementById('form-input-correo').value;
        var contraseña = document.getElementById('form-input-password').value;
        
        console.log(correo_cuenta);
        console.log(contraseña);
        
        if((correo_cuenta.length > 0) && (contraseña > 0)){
            document.getElementById("form-inicio").submit();
        }
        else{
            alert("Por favor llena todos los campos");
        }
        
    });
});*/
/*
function validarC(){
   var Max_Length = 30;
    var Min_Length = 8;
    var length = document.getElementById('form-input-correo').value.length;
    if (length > Max_Length) {
      var address1 = document.getElementById('form-input-correo');
      address1.parentNode.innerHTML = address1.parentNode.innerHTML + "<p style='color:red'>El tamaño maximo de caracteres es de "+Max_Length+"</p>";
    }
     else if (length < Min_Length) {
      var address1 = document.getElementById('form-input-correo');
      address1.parentNode.innerHTML = address1.parentNode.innerHTML + "<p style='color:red'>El tamaño min de caracteres es de "+Max_Length+"</p>";
    }
}*/