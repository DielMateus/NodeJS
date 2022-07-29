const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());/*Para que funcione uma requisição do tipo JSON devemos utilizar o MIDDWARE  */

/*
app.get("/", (request, response) => {
// return response.send("Hello Wordl!"); não é muito utilizado o send, então vamos usar o json(que pode retornar array e afins...)
    return response.json({
        message: "Hello Wordl Ignite  - Fundamentos NodeJS!" });
});

*/

/*
*Tipos de Parâmetros
*
* Route Params => Identificar um recurso editar/deletar/buscar
* Query Params => Paginação / Filtro
* Body Params => Os objetos inserção/alteração (JSON)
*/


// Aqui estou criando minhas rotas com EXPRESS
app.get("/courses", (request, response)=> {
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response)=> {
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// app.put("/courses/:id", (request, response)=> {
//     return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
// });

app.put("/courses/:id", (request, response)=> {
    const params = request.params;
    console.log(params);
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response)=> {
    return response.json(["Curso 9", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response)=> {
    return response.json(["Curso 8", "Curso 2", "Curso 3", "Curso 4"]);
});



app.listen(3333);
