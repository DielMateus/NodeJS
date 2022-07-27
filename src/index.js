const { response } = require("express");
const express = require("express");

const app = express();


/*
app.get("/", (request, response) => {
// return response.send("Hello Wordl!"); não é muito utilizado o send, então vamos usar o json(que pode retornar array e afins...)
    return response.json({
        message: "Hello Wordl Ignite  - Fundamentos NodeJS!" });
});

*/
// Aqui estou criando minhas rotas com EXPRESS
app.get("/courses", (request, response)=> {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response)=> {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response)=> {
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response)=> {
    return response.json(["Curso 9", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response)=> {
    return response.json(["Curso 8", "Curso 2", "Curso 3", "Curso 4"]);
});



app.listen(3333);
