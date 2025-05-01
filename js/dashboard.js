function getUsers(){
    fetch('https://reqres.in/api/users?page=1', {
        method: "GET",
        headers: {
            'x-api-key': 'reqres-free-v1',
            "Content-type": "application/json"
        },
        
    })
    .then((result) => {
        return result.json().then(
            data =>{
                return {
                    status: result.status,
                    data: data
                  
                }
                
            }
        )
    })
    .then((response) => {
        console.log(response);
        if(response.status === 200){
            document.getElementById('info').innerHTML = '<h3> Lista de usuarios';

        } else{
            document.getElementById('info').innerHTML = '<h3> No se encontraron usuarios';
        }
    })
    

}
function getProducts(){
    document.getElementById('info').innerHTML = '<h3> Lista de usuarios';
}
function logout(){
    localStorage.removeItem('token');
}