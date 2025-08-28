console.log("holamundo");
document.writeln("<h3> HOLA </h3>");
document.body.style.backgroundColor = '#3498db';

function getDat(form){
    var formData = new FormData(form);

    for (var pair of formData.entries()){
        console.log(pair[0] + ": " + pair[1]);
    }

    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
}


document.getElementById("Formulario").addEventListener("submit", function (e){
    e.preventDefault();
    getDat(e.target);
});