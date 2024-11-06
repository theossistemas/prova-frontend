# TESTE FRONTEND THÈOS

Segue abaixo algumas considerações sobre escolha de padrões e tecnologias para realização do teste frontend da Thèos.
<br>


## CONSIDERAÇÕES

### **FRONTEND:**

- Para o frontend foi utilizado Angular na versão latest (18.2.0 até o momento), com bibliotéca de componentes Angular Material, para estilização e criação de componentes.
<br>

- Foi decidido utilizar standalone components para o mesmo visto que é um projeto pequeno, com possibilidade de lazy loading nos componentes ao invés dos modulos como comumente se era feito.
<br>

- O projeto consiste basicamente de uma tela de login, tela de cadastro e uma pagina home aonde podem ser vistos os cards dos desenvolvedores cadastrados no mesmo.
<br>

- Foi pensado em uma validação de 'Role' de usuário, aonde o mesmo seria enviado como dado no cookie e seria utilizado como estado global pelo NgRx, porém o mesmo não foi implementado pois houveram problemas na utilização/gravação dos cookies como descrito na sessão do backend. O mesmo se da à tela de cadastro de Admins que seria acessada somente pelos mesmos através de verificação de Role contida no cookie como estado global.
<br>

* Poderia ter sido salvo o token no localstorage visto que o mesmo já foi gerado como jwt no backend, porém o mesmo não foi implementado por questões de tempo.


### **BACKEND:**

- Para o projeto foi utilizado Node.JS com JavaScript, Express para requisições Http e Mongoose com MongoDB para persistência de dados, dentre outras dependências como bcript, jsonwebtoken, cookie-parser, cors, dotenv e nodemon.
<br>

- Foi utilizado o padrão MVC com repository.
<br>

- Foi implementada geração de token jwt com dados a serem enviados ao backend por meio de cookies (para invalidar a manipulação de dados do mesmo) mas por problemas com CORS e o fato dos projetos estarem rodando em localhost, com portas diferentes e sem https, não conseguimos salvar o cookie para requisições futuras e por isso a validação do mesmo foi desabilitada do middleware do backend (ainda envia para o front porém não é salvo. Pode ser visto pelo insômnia ou postman).
<br>

- Criadas as operações básicas de crud para usuário bem como login e logout do mesmo.

### **BANCO DE DADOS:**

- Foi utilizado o MongoDB versão 8.0.3 (latest até o momento da realização do teste) rodando em docker através de um docker-compose e com criação de usuário e tabelas na primeira inicialização do mesmo, através de script JS.
<br>