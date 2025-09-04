document.addEventListener('DOMContentLoaded', () => {

    //FORMULARIO REGISTRO CLIENTE:

    // FUNCION MOSTRAR Y ESCONDER CONTRASEÑA
    const checkbox = document.getElementById('exampleCheck1');
    const passwordInput = document.getElementById('exampleInputPassword1');

    checkbox.addEventListener('change', function () {
        passwordInput.type = this.checked ? 'text' : 'password';
    });

    // FUNCION MOSTRAR Y ESCONDER CONTRASEÑA CONFIRMACION
    const checkbox2 = document.getElementById('exampleCheck2');
    const passwordInput2 = document.getElementById('exampleInputPassword2');

    checkbox2.addEventListener('change', function () {
        passwordInput2.type = this.checked ? 'text' : 'password';
    });

    // VALIDACIONES REGISTRO CLIENTE:

   //VALIDACION NOMBRE:
    const form = document.querySelector(".form_registro_usuario");
/*
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que se recargue la página

      // Obtener valores de los inputs
      const nombre = document.getElementById("exampleInputNombre").value;
      const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

      //VALIDAR CAMPO VACIO
            if (nombre === "") {
        alert("El campo Nombre no puede estar vacío");
        console.error("Error: El campo Nombre está vacío");
        return; // Detener el envío del formulario
      }

      // VALIDAR SOLO LETRAS Y ESPACIOS
      if (!nombreRegex.test(nombre)) {
        alert("El Nombre solo debe contener letras y espacios (sin números ni símbolos)");
        return;
      }

        if (nombre.length > 30) {
            alert("El campo Nombre no puede superar los 30 caracteres");
            console.error("Error: El campo Nombre supera los 30 caracteres");
            return; // Detener el envío del formulario
        }


      // Imprimir en la consola
      console.log("Nombre:", nombre);
    });

    //VALIDACION EMAIL:
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que se recargue l

        const email = document.getElementById("exampleInputEmail1").value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@duoc\.cl$/;

        if (!emailRegex.test(email)) {
            alert("El correo debe tener un formato válido y terminar en @duoc.cl");
            return;
        }

    console.log("Email:", email);

    });


    //VALIDACION CONTRASEÑA:
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue l

        const contrasena = document.getElementById("exampleInputPassword1").value.trim();
        const passwordRegex = /^(?=[A-Z])(?=.*[a-z]).*$/;

        if (!passwordRegex.test(contrasena)) {
            alert("La contraseña debe comenzar con una letra mayúscula y tener al menos una letra minúscula");
            return;
        }

        if (!/\d/.test(contrasena)) {
            alert("La contraseña debe contener al menos un número");
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
            alert("La contraseña debe contener al menos un carácter especial");
            return;
        }
        
        if(contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

         console.log("Contraseña:", contrasena);

    });


    //VALIDACION CONFIRMACION CONTRASEÑA:
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página
        const contrasena = document.getElementById("exampleInputPassword1").value.trim();
        const confirmacion = document.getElementById("exampleInputPassword2").value.trim();

        if (contrasena !== confirmacion) {
            alert("La confirmación de la contraseña no coincide con la contraseña");
            return;
        }
        console.log("Confirmación de Contraseña:", confirmacion);

    })


    //vALIDACION TELEFONO:

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        const telefono = document.getElementById("exampleInputTelefono").value.trim();

        if (!/^\d{9}$/.test(telefono)) {
            alert("El teléfono debe contener exactamente 9 dígitos numéricos");
            return;
        }
        console.log("Teléfono:", telefono);
    })*/

    
    /*
    //VALIDACION REGISTRO MASCOTAS:
    const form_registro_mascota = document.querySelector(".form_registro_mascota");
    form_registro_mascota.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página


        const nombreMascota = document.getElementById("exampleInputNombreMascota").value.trim();
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

        if (!nombreRegex.test(nombreMascota)) {
            alert("El Nombre solo debe contener letras y espacios (sin números ni símbolos)");
            return;
        }

        if (nombreMascota.length > 30) {
            alert("La contraseña debe tener menos de 30 caracteres");
            return;
        }

        console.log("Nombre Mascota:", nombreMascota);

    });

    */


    // MOSTRAR CONTRASEÑA EN LOGIN USUARIO:
    // ARREGLAR FUNCION PARA MOSTRAR CONTRASEÑA EN LOGIN USUARIO
    const checkbox_login = document.getElementById('checkbox_login');
    const passwordInput_login = document.getElementById('exampleInputPasswordLogin'); 
    checkbox_login.addEventListener('change', function () {
        passwordInput_login.type = this.checked ? 'text' : 'password'; 
    });
    

});


