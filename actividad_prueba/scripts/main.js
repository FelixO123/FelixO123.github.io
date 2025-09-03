document.addEventListener('DOMContentLoaded', () => {

    // FUNCION MOSTRAR Y ESCONDER CONTRASEÑA
    const checkbox = document.getElementById('exampleCheck1');
    const passwordInput = document.getElementById('exampleInputPassword1');

    checkbox.addEventListener('change', function () {
        passwordInput.type = this.checked ? 'text' : 'password';
    });


    //FUNCION 
});