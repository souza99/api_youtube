const express = require('express');
const app = express();


const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos);

////HTTP.CAT == estudar isso, é o status 200, 400 por ai vai  
////next == chamar outro metodo
// app.use((req, res, next) => {
//     res.status(200).send({
//         mensagem: 'OK, Deu certo'
//     });
// });


module.exports = app;
