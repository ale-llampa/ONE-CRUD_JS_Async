// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

// const listaClientes = () => {
//   const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");

//     http.send();

//     http.onload = () => {
//       const response = JSON.parse(http.response);
//       if (http.status >= 400) {
//         reject(response);
//       } else {
//         resolve(response);
//       }
//     };
//   });
//   return promise;
// };

//Todo lo anterior con 1 linea Usando Fecth API
//Toma por defecto el metodo GET, en cada funcion retorno despues de =>
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  listaClientes,
}