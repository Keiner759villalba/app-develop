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
    localStorage.removeItem('toker')
    fetch('https://reqres.in/api/login', {
        method: "POST",
        headers: {
            'x-api-key': 'reqres-free-v1',
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
    .then((response) => {
        
        if(response.status === 200){
            response.json()
            
                .then(data => {  
                    console.log('Responde bien:', data);
                    alertType = 'success';
                    message = 'Bienvenido'; 
                    alertBuilder(alertType, message);
                    
                        localStorage.setItem('token', data.token)
                    
                    setTimeout (() =>{
                        location.href = '../admin/dashboard.html';
                    }, 2000)
                });
        } else {
            alertType = 'danger';
            message = 'Datos erróneos';
            alertBuilder(alertType, message);
        }
    })
    .catch((error) => {
        alertType = 'danger';
        message = 'Error inesperado';
        console.log(error);
    });
}

function alertBuilder(alertType, message){
    const mensajeFinal = document.getElementById('alert');
    mensajeFinal.className = ''; // Limpia clases anteriores si las hubiera
    mensajeFinal.classList.add(`alert`, `alert-${alertType}`, `alert-dismissible`, `fade`, `show`);
    mensajeFinal.textContent = message;
}

