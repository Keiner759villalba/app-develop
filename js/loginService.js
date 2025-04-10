const formularioDiv = document.getElementById('card-body');



document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let message = '';
    let alertType = '';

    if(email === "" || password === ""){
        alertType = 'warning';
        message = 'Por favor completa todos los campos';

    } else if(email === 'prueba@gmail.com' && password === '123456'){
        alertType = 'success';
        message = 'Bienvenido';
    } else{
        alertType = 'danger';
        message = 'Datos erroneos';
    }
    const mensajeFinal = document.getElementById('alert');
    mensajeFinal.classList.add(`alert`, `alert-${alertType}`, `alert-dismissible`, `fade`, `show`);

    mensajeFinal.textContent = message;
    document.getElementById('alert').appendChild(mensajeFinal);
});