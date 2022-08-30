//arquivo principal
//inserimos aqui as informações de serviço de transação HTTP

const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3001;

//cria o server e escuta o app, onde estou esportando todo conteudo de exportação
const server = http.createServer(app);
server.listen(`Escutando a porta ${PORT}`);
