tokenValidate();






function logout(){
    localStorage.removeItem('token');
    location.href = '../admin/index.html';
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token');
    document.getElementById('info').innerHTML = ``;

    
}