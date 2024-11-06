# TESTE FRONTEND THÈOS

Segue abaixo as instruções para rodar o projeto e ao final algumas considerações e TODOS para o projeto.
<br>

## RODANDO O PROJETO

- ### BANCO DE DADOS:

O banco de dados MongoDB está com um arquivo docker-compose.yml configurado para o mesmo, tendo um script em JavaScript para a criação de usuário e database. Para iniciar o docker compose navegue ate a pasta teste-frontend/db/ e execute no terminal o comando:

> docker compose up -d

*Note que o mesmo não funcionará em instalações muito antigas do docker compose.
<br>

**MongoDB está configurado para a porta 27030.
<br>

- ### BACKEND:

Para o backend precisamos utilizar a versão 20 do node (foi desenvolvido mais especificamente na versão 20.18.0). Pode-se utilizar versões 18, 20 e 22 do node, atentando-se para as versões minimas a seguir: 

> ^18.19.1 || ^20.11.1 || ^22.0.0

Tal fato se da pela versão minima de compatibilidade com a versão do angular utilizada (18.2.0).
<br>

Navegue até a pasta teste-frontend/backend e execute o comando:

> npm run dev

*O backend está configurado para rodar na porta 8080.

- ### FRONTEND:
Para o frontend foi utiliza a versão 18.2.0 do angular juntamente da versão 20.18.0 do node, como dito anteriormente.
<br>

Para rodar o projeto certifique-se que a versão latest do angular está instalada globalmente no node especificado.
<br>

Navegue para a pasta teste-frontend/frontend/ e execute o comando:

> ng serve

*A aplicação estará rodando na porta padrão do angular (4200).

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

- Poderia ter sido salvo o token no localstorage visto que o mesmo já foi gerado como jwt no backend, porém o mesmo não foi implementado por questões de tempo.
<br>

- Ao realizar o cadastro de um novo usuário, caso o campo de usuário do github tenha sido preenchido corretamente, será realizada uma busca pela api do github e então salvos os dados de avatar_url e html_url. Caso os dados estejam preenchidos, serão exibidos no card do usuário, caso contrário o link para o github não existirá e uma imagem default de avatar será carregada.
<br>

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

## **TODOS**

- Para melhorias futuras do projeto, poderia ser implementada a questão do token sendo enviado num header pelo backend e salvo em localstorage no frontend para futuras utilizações, abrindo espaço para validação com guarda de rota e redirecionamento em caso de falta de token.
<br>

- Faltaram a integração dos botões de edição e exclusão do card com chamadas para o backend (rotas funcionam porém não foram implementadas no frontend) visto que não temos salvo o usuário logado (poderia ser guardado no momento do login ou cadastro mas a intenção e que fosse salvo o cookie e o ID do usuário ser utilizado de lá), o que atrapalha no reconhecimento de role/usuário logado, deixando aberto o botão de edição e exclusão aberto para todos.
<br>

- Poderia ser implementada a possibilidade de escolha de tema para o site.
<br>