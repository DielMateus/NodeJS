const { request, response } = require("express");
const express = require("express");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json()); /*Para que funcione uma requisição do tipo JSON devemos utilizar o MIDDWARE  */

const customers = [];
/** 
* cpf - string
* name - string
* id - uuid
* statement - []
*
* Primeiro requisito: Deve ser possível criar uma conta */
app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    const customerAlreadyExists = customers.some( /*O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false. */
        (customer) => customer.cpf === cpf
    );

    // Verifica se o CPF já existe
    if (customerAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists!"});
    }

    
    customers.push({
        cpf,
        name,
        id: uuidv4(), /*id randômico */
        statement: [],
    });

    return response.status(201).send();

});

app.listen(3333);