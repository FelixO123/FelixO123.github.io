document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector(".form_contacto");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    const nombre = document.getElementById("exampleInputNombre").value.trim();
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    




        if (nombre === "") {
            alert("El campo Nombre no puede estar vacío");
            console.error("Error: El campo nombre no puede estar vacío")
            return;
        }

        if (!nombreRegex.test(nombre)) {
            alert("El Nombre solo debe contener letras y espacios");
            console.error("El Nombre solo debe contener letras y espacios")
            return;
        }

        if (nombre.length > 100) {
            alert("El campo Nombre no puede superar los 100 caracteres");
            console.error("El campo Nombre no puede superar los 100 caracteres")
            return;
        }

        console.log("Nombre:", nombre);

        // VALIDACIÓN EMAIL

        const emailInput = document.getElementById("exampleInputCorreo");
        const email = emailInput.value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|gmail\.com|profesor\.duoc\.cl)$/;

        if (email === "") {
            alert("El campo correo no puede estar vacío.");
            console.error("Error: El campo correo no puede estar vacío")
            emailInput.focus();
            return;
        }

        if (email.length > 100) {
            alert("El correo no puede superar los 100 caracteres.");
            console.error("El correo no puede superar los 100 caracteres")
            emailInput.focus();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("El correo debe terminar en @duoc.cl, @gmail.com o @profesor.duoc.cl");
            console.error("El correo debe terminar en @duoc.cl, @gmail.com o @profesor.duoc.cl")
            emailInput.focus();
            return;
        }

        console.log("Email:", email);

        // VALIDACIÓN MENSAJE
        const mensaje = document.getElementById("exampleInputMensaje").value.trim();

        // Validación del mensaje
        if (mensaje === "") {
            alert("El campo Mensaje no puede estar vacío");
            console.error("Error: Mensaje vacío");
            return;
        }

        if (mensaje.length > 500) {
            alert("El mensaje no puede exceder los 500 caracteres");
            console.error("Error: Mensaje demasiado largo");
            return;
        }

        console.log("Mensaje válido:", mensaje);

        // Aquí puedes continuar con la lógica de envío del formulario
        alert("Formulario enviado correctamente");
    })

});
