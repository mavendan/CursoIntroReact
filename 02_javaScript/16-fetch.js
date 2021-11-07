// REST API
// CLIENT -> REST PROTOCOL -> SERVER
// REST:
// CREATE - READ - UPDATE - DELETE
// CRUD OPERATIONS
// CREATE: POST
//      /api/customers/
// boyd      {name: '' ...}
// READ: GET
//      /api/customers
//      /api/customers/1
// UPDATE: PUT, PATCH
//      /api/customers/1
// body      {name: '' ...}
// DELETE
//      /api/customers/1
/*****************
 * STANDARD HTTP METHODS
 GET /api/customers
 GET /api/customers/1
 PUT /api/customers/1
 DELETE /api/customers/1
 POST /api/customers
***********************/


/** GET: Conectarse al api y pasar el response a JSON para tener un promesa
 *  El segundo then, me devuelve los datos
 */
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(jsonData => console.log(jsonData));


/** POST: Uso del catch
 */
 fetch('https://jsonplacekolder.typicode.com/todos')
 .then(response => response.json())
 .then(jsonData => console.log(jsonData))
 .catch(error => {
    console.log('Error al tratar de leer los datos del server')
 });