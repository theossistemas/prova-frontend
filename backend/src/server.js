const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Fazendo a conexão com o mongodb, no caso não possui a necessidade de fazer download do MONGO
//porque estou utlizando o MongoDB Atlas, que é uma versão web do mongo
//Criei um usuário como "theos" e a senha "theos" e tambem uma collection com o nome theos
mongoose.connect('mongodb+srv://theos:theos@cluster0-e37qt.mongodb.net/theos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Aqui estou utilizando o cors liberando qualquer url para acessar minha api
app.use(cors());
//Aqui estou dizendo pro meu servidor express que ele irá receber requisições em JSON
//Sem isso o express não consegue identificar quando vir uma requisição em json
app.use(express.json());
//Aqui o meu servidor express está ouvindo o meu arquivo "routes" para as minhas rotas
app.use(routes);
//Usando a porta 3333 para o meu backend
app.listen(3333);