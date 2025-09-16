document.addEventListener('DOMContentLoaded', () => {

    // FORMULARIO REGISTRO CLIENTE:
    const form = document.querySelector(".form_inicio_sesion");

    // FUNCION MOSTRAR Y ESCONDER CONTRASEÑA
    const checkbox = document.getElementById('exampleCheck1');
    const passwordInput = document.getElementById('exampleInputPassword1');


        checkbox.addEventListener('change', function () {
            passwordInput.type = this.checked ? 'text' : 'password';
        });

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("exampleInputNombre").value.trim();
            const contrasena = passwordInput.value.trim();

            const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            // Buscar usuario en la lista
            const usuarioEncontrado = listaUsuarios.find(u => u.email === email);

            if (!usuarioEncontrado) {
                alert("El correo no está registrado");
                console.error("Correo no registrado");
                return;
            }

            if (usuarioEncontrado.contrasena !== contrasena) {
                alert("Contraseña incorrecta");
                console.error("Contraseña incorrecta");
                return;
            }

            alert("Inicio de sesión exitoso");
            console.log("Usuario logueado:", usuarioEncontrado);

        });

    });
