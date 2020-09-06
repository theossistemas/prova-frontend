# Projeto API - Cadastro de Desenvolvedores
API Criada em Node JS e MongoDB.

## Objetivo: 
Possibilidade de ter uma solução para gravar/listar de desenvolvedores.

## Requisitos:
* Noções básicas para utilizar Postman.
* Endpoint: `http://servidorHospedado.net`

## Campos

| Campo             | Tipo   | Obrigatório |
|-------------------|--------|-------------|
| githubURL         | string | `NÃO`       |
| avatarURL         | string | `NÃO`       |
| nome              | string | `SIM`       |
| email             | string | `SIM`       |
| cidade            | string | `SIM`       |
| formacao          | string | `NÃO`       |
| tecnologias       | string | `NÃO`       |

## Validações dos campos:
Sem validação

## Métodos criados:

### GET /desenvolvedores
* Retorna um array de objetos contendo os dados dos desenvolvedores
#### Sucesso:
* Status: 200 - OK
```
{
  "nome": "Douglas Sumita",
  "email": "douglas.sumita@gmail.com",
  "cidade": "Sarandi",
  "formacao": "Analise e Desenvolvimento de Sistemas",
  "tecnologias": [
      "NodeJS",
      "Javascript"
  ]
}
```

#### Erro: 
* Status: 400 - Bad Request
```
{
    "error": "mensagem de erro"
}
```

### POST /desenvolvedor
* Adiciona um novo desenvolvedor
* Necessário passar um JSON:
* Body:
```
{
  "nome": "Douglas Sumita",
  "email": "douglas.sumita@gmail.com",
  "cidade": "Sarandi",
  "formacao": "Analise e Desenvolvimento de Sistemas",
  "tecnologias": "NodeJS, Javascript"
  "githubURL": "https://github.com/DouglasSumita/",
  "avatarURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScg9TNqi3nUWdUXfiqb0CT6CEXsqeam1mpZw&usqp=CAU"
}
```
#### Criado:
* Status: 201 - Created
* Sem retorno

#### Erro: 
* Status: 400 - Bad Request
```
{
    "error": "mensagem de erro"
}
```

### DELETE /desenvolvedor/:id
* Deleta um registro referente ao id do desenvolvedor

#### Deletado:
* Status: 204 - No Content
* Sem retorno

#### Erro: 
* Status: 404 - Bad Request
