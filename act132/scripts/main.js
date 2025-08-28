document.body.style.backgroundColor = '#3498db';


function getData(form) {
    console.log("inicio funcion GET DATA");
    var formData = new FormData(form);

    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);

    }

    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
    console.log("Fin funcion GET DATA");
}

function retornarEdad(e) {
    var formData = new FormData(e.target);
    return edad = formData.get("edad");
}

function retornarNombre(e) {
    var formData = new FormData(e.target);
    return nombre = formData.get("nombre_usuario");
}

function descEdad(e){
    var edad = retornarEdad(e);
    var nombre = retornarNombre(e);

    if (edad <= 0) {
        const message = nombre + ", " + edad + " es una EDAD INVALIDA.";
        const parrafo = document.createElement("p");
        parrafo.textContent = message;
        parrafo.style.color = "white";

        const formulario = document.getElementById("Formulario");
        formulario.insertAdjacentElement("afterend", parrafo);
        return edad;
    } else {
        if (edad > 0) {
            if (edad < 18) {
                const message = nombre + ", tu edad " + edad + "es de PERSONA MENOR DE EDAD.";
                const parrafo = document.createElement("p");
                parrafo.textContent = message;
                parrafo.style.color = "white";

                const formulario = document.getElementById("Formulario");
                formulario.insertAdjacentElement("afterend", parrafo);
                return edad;

            } else if (edad < 65) {
                const message = nombre + ", tu edad " + edad + "es de PERSONA ADULTA.";
                const parrafo = document.createElement("p");
                parrafo.textContent = message;
                parrafo.style.color = "white";

                const formulario = document.getElementById("Formulario");
                formulario.insertAdjacentElement("afterend", parrafo);
                return edad;

            } else if (edad < 85) {
                const message = nombre + ", tu edad " + edad + "es de PERSONA ADULTA MAYOR.";
                const parrafo = document.createElement("p");
                parrafo.textContent = message;
                parrafo.style.color = "white";

                // Insertar el párrafo después del formulario
                const formulario = document.getElementById("Formulario");
                formulario.insertAdjacentElement("afterend", parrafo);
                return Edad;

            } else if (edad >= 85) {
                const message = nombre + ", tu edad " + edad + "es de PERSONA DE AÑOS DORADOS";
                const parrafo = document.createElement("p");
                parrafo.textContent = message;
                parrafo.style.color = "white"; // Opcional: poner el texto en rojo para destacarlo  
                // Insertar el párrafo después del formulario
                const formulario = document.getElementById("Formulario");
                formulario.insertAdjacentElement("afterend", parrafo);
                return edad;
            }

        }
    }
        
}

document.getElementById("Formulario").addEventListener("submit", function (e) {
    console.log("INICIO DOCUMENT");
    console.log("INICIO PRINT 'e'");
    console.log(e);
    console.log("fin PRINT 'e'");
    e.preventDefault();
    getData(e.target);
    console.log("Fin DOCUMENT");

    descEdad(e);


    
    
    
});
