tokenValidate();




function getUsers(){
    document.getElementById('cardHeader').innerHTML = '<h4>Listado de Usuarios</h4>'
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
                    body: data
                  
                }
                
            }
        )
    })
    .then((response) => {
        console.log(response);
        if(response.status === 200){
            
           let listUsers = `
                <table class="table">
                    <thead>
                    <tr>
                         <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Avatar</th>
                    </tr>
                </thead>
                <tbody>
                
           
           
           
           `
           response.body.data.forEach(user => {
                listUsers = listUsers.concat(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name}</td>
                        <td><img src="${user.avatar}" class="img-thumbnail" alt="Avatar Usuario"></td>
                    </tr>
                    
                `)
           });
           listUsers = listUsers.concat(`
                </tbody>
            </table>
            `)
            document.getElementById('info').innerHTML = listUsers;

        } else{
            document.getElementById('info').innerHTML = listUsers;
        }
    })
    

}
function getProducts(){
    document.getElementById('cardHeader').innerHTML = '<h4>Listado de Usuarios</h4>'
    fetch('https://reqres.in/api/unknown', {
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
                    body: data
                  
                }
                
            }
        )
    })
    .then((response) => {
        console.log(response);
        if(response.status === 200){
            
           let listUsers = `
                <table class="table">
                    <thead>
                    <tr>
                         <th scope="col">id</th>
                         <th scope="col">name</th>
                        <th scope="col">year</th>
                        <th scope="col">color</th>
                        <th scope="col">pantone_value</th>
                    </tr>
                </thead>
                <tbody>
                
           
           
           
           `
           response.body.data.forEach(user2 => {
                listUsers = listUsers.concat(`
                    <tr>
                        <td>${user2.id}</td>
                        <td>${user2.name}</td>
                        <td>${user2.year}</td>
                        <td><input type="color" value="${user2.color}"> </input> </td>
                        <td>${user2.pantone_value}</td>
                    </tr>
                    
                `)
           });
           listUsers = listUsers.concat(`
                </tbody>
            </table>
            `)
            document.getElementById('info').innerHTML = listUsers;

        } else{
            document.getElementById('info').innerHTML = listUsers;
        }
    })
}
function logout(){
    localStorage.removeItem('token');
    location.href = '../admin/index.html';
}

function tokenValidate(){
    const TOKEN = localStorage.getItem('token');
    document.getElementById('info').innerHTML = ``;

    
}