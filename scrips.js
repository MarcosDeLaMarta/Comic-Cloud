(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


function Validar() {

    //Coger los datos del formulario 
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usuario == "admin" && clave == "1234") {

        //Si somos administrador nos vamos a una web administrador
        window.location.pathname = '/admin.html';



    } else {
        //Si algun dato está erroneo mostramos un mensaje
        document.getElementById("error").innerHTML="Datos del usuario erroneo";
    }

    if (usuario == "Isidro" && clave == "1234") {

        //Si somos usuario nos vamos a una web administrador
        window.location.pathname = '/main.html';

    } else {
        //Si algun dato está erroneo mostramos un mensaje
        document.getElementById("error").innerHTML="Datos del usuario erroneo";

    }



}