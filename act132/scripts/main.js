document.body.style.backgroundColor = '#3498db';
console.log("PRUEBA ERROR");

function getData(form) {
    try {
        var formData = new FormData(form);

        for (var pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

        console.log(Object.fromEntries(formData));
        console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
    } catch (error) {
        //console.error('Error en get: ', error)
        console.log("PRUEBA ERROR");
    }
}


document.getElementById("Formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
});