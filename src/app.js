//Fetch()
console.log("Prueba de que estoy entrando");
//Sirve para consumir apis o metodos de URL.
const cuerpo = document.getElementById('body_tr');
const variosdatos= document.getElementById('varios')
function llamarapi(){
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json =>{
    console.log(json);
    cuerpo.innerHTML = (`<tr>
      <th scope="row">${json.userId}</th>
      <td>${json.id}</td>
      <td>${json.title}</td>
      <td>${json.completed}</td>
    </tr>
   `)
  })
   
}

function llamardatos(){
console.log("Estoy llamando")
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    console.log(json[0].name);
    json.forEach(element => variosdatos.innerHTML += (` <tr>
      <th scope="row">${element.id}</th>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
    </tr>
      `));
  })
   
}





