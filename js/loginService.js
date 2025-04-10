const formularioDiv = document.getElementById('card-body');



document.getElementById("formLogin").addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);

    
});

function login(email, password){
    let message = '';
    let alertType = '';
    fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    .then((data) =>{
        console.log('responde bien'+ data);
        alertType = 'success';
        message = 'Bienvenido';
    })
    .catch((error) => {
        console.log(error);
        alertType = 'danger';
        message = 'Datos erroneos';
    })
    const mensajeFinal = document.getElementById('alert');
    mensajeFinal.classList.add(`alert`, `alert-${alertType}`, `alert-dismissible`, `fade`, `show`);

    mensajeFinal.textContent = message;
    document.getElementById('alert').appendChild(mensajeFinal);
}
