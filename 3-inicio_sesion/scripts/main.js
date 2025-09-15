document.addEventListener('DOMContentLoaded', () => {

    // FORMULARIO REGISTRO CLIENTE:
    const form = document.querySelector(".form_registro_usuario");

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

    // REGISTRO USUARIO: INICIO LOGICA DE CAJAS DE DESPLIEGUE DE REGION Y COMUNAS DINAMICA
    const comunasPorRegion = {
        metropolitana: ["Santiago", "Maipú", "Puente Alto", "La Florida", "Las Condes"],
        valparaiso: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"],
        biobio: ["Concepción", "Talcahuano", "Chiguayante", "Los Ángeles", "Coronel"],
        araucania: ["Temuco", "Padre Las Casas", "Angol", "Villarrica", "Pucón"],
        nuble: ["Chillán", "San Carlos", "Bulnes", "Yungay", "Quirihue"]
    };

    const regionSelect = document.getElementById("regionSelect");
    const comunaSelect = document.getElementById("comunaSelect");

    regionSelect.addEventListener("change", function () {
        const regionSeleccionada = regionSelect.value;
        comunaSelect.innerHTML = "<option value=''>Seleccione una comuna</option>";

        if (comunasPorRegion[regionSeleccionada]) {
            comunaSelect.disabled = false;
            comunasPorRegion[regionSeleccionada].forEach(comuna => {
                const option = document.createElement("option");
                option.value = comuna.toLowerCase().replace(/\s+/g, "-");
                option.textContent = comuna;
                comunaSelect.appendChild(option);
            });
        } else {
            comunaSelect.disabled = true;
        }
    });

    // VALIDACIONES
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // VALIDACIÓN NOMBRE
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

        if (nombre.length > 30) {
            alert("El campo Nombre no puede superar los 30 caracteres");
            console.error("El campo Nombre no puede superar los 30 caracteres")
            return;
        }

        console.log("Nombre:", nombre);

        // VALIDACIÓN EMAIL
        const emailInput = document.getElementById("exampleInputEmail1");
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

        // VALIDACIÓN CONTRASEÑA
        const contrasena = document.getElementById("exampleInputPassword1").value.trim();
        const passwordRegex = /^(?=[A-Z])(?=.*[a-z]).*$/;

        if (contrasena === "") {
            alert("El campo contraseña no puede estar vacío");
            console.error("El campo contraseña no puede estar vacío")
            return;
        }

        if (!passwordRegex.test(contrasena)) {
            alert("La contraseña debe comenzar con una letra mayúscula y tener al menos una minúscula");
            console.error("La contraseña debe comenzar con una letra mayúscula y tener al menos una minúscula")
            return;
        }

        if (!/\d/.test(contrasena)) {
            alert("La contraseña debe contener al menos un número");
            console.error("La contraseña debe contener al menos un número")
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena)) {
            alert("La contraseña debe contener al menos un carácter especial");
            console.error("La contraseña debe contener al menos un carácter especial")
            return;
        }

        if (contrasena.length < 4 || contrasena.length > 10) {
            alert("La contraseña debe tener entre 4 y 10 caracteres");
            console.error("La contraseña debe tener entre 4 y 10 caracteres")
            return;
        }

        console.log("Contraseña:", contrasena);

        // VALIDACIÓN CONFIRMACIÓN CONTRASEÑA
        const confirmacion = document.getElementById("exampleInputPassword2").value.trim();

        if (confirmacion === "") {
            alert("Debe confirmar la contraseña");
            console.error("Error: Debe confirmar la contraseña")
            return;
        }

        if (contrasena !== confirmacion) {
            alert("La confirmación no coincide con la contraseña");
            console.error("Error: La confirmación no coincide con la contraseña")
            return;
        }

        console.log("Confirmación de Contraseña:", confirmacion);

        // VALIDACIÓN TELÉFONO
        const telefono = document.getElementById("exampleInputTelefono").value.trim();

        if (telefono === "") {
            alert("El campo teléfono no puede estar vacío");
            console.error("Error: El campo teléfono no puede estar vacío")
            return;
        }

        if (!/^9\d{8}$/.test(telefono)) {
            alert("El teléfono debe tener 9 dígitos y comenzar con 9");
            console.error("Error: El teléfono debe tener 9 dígitos y comenzar con 9")
            return;
        }

        console.log("Teléfono:", telefono);

        // VALIDACIÓN REGIÓN Y COMUNA
        const region = regionSelect.value;
        const comuna = comunaSelect.value;

        if (region === "") {
            alert("Debe seleccionar una región.");
            console.error("Error: Debe seleccionar una región.")
            regionSelect.focus();
            return;
        }

        if (comuna === "") {
            alert("Debe seleccionar una comuna.");
            console.error("Error: Debe seleccionar una comuna.")
            comunaSelect.focus();
            return;
        }

        console.log("Región seleccionada:", region);
        console.log("Comuna seleccionada:", comuna);

        // ✅ Si todo está bien, podrías enviar el formulario:
        //form.submit();
        alert("Formulario validado con éxito.");
    });

});