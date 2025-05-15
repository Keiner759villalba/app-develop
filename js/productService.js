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
                        <th scope="col">Action</th>
                        
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
                        
                        <td>${user2.pantone_value}</td>
                        <td><button type="button" class="btn btn-info" onclick="showInfoUser('${user2.id}')">View</button></td>
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
function showInfoUser(userId){
    fetch('https://reqres.in/api/users/'+userId, {
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
    .then((response) =>{
        if(response.status === 200){
            showModalUser(response.body.data)
        }else{
            document.getElementById('info').innerHTML = '<h3>No se encontró usuario</h3>'
        }
    })
}
function showModalUser(user2){
    const modalUser = `
        <!-- Modal -->
        <div class="modal fade" id="modalUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
        <div class="modal-content">
        <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Show User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="card">
            <img src="${user2.color}" class="card-img-top" alt="Avatar">
            <div class="card-body">
            <h5 class="card-title">User Info</h5>
            <p class="card-text">First Name: ${user2.color}</p>
            <p class="card-text">First Name: ${user2.name}</p>
            <p class="card-text">First Name: ${user2.year}</p>


           
        </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
        </div>
        </div>
        </div>
        </div>
    `
    document.getElementById('showModal').innerHTML = modalUser
    const modal = new bootstrap.Modal(document.getElementById('modalUser'))
    modal.show()
}