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

    for(var pair of formData.entries()){
        console.log(pair[1]);
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

    retornarEdad(e);
    
});
