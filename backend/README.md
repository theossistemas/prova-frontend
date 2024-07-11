<p align="center">
  <a href="https://fastapi.tiangolo.com"><img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI"></a>
</p>
<p align="center">
    <em>FastAPI framework</em>
</p>
<p align="center">




FastAPI é uma estrutura da web moderna e rápida (de alto desempenho) para construir APIs com Python com base em dicas de tipo Python padrão.

The key features are:

* **Velocidade**: Performance elevada em comparação aos demais.
* **Rapida implementação**: Aumente a velocidade de desenvolvimento de recursos em cerca de 200% a 300%. *
* **Baixos Bugs**: Reduza cerca de 40% dos erros induzidos por humanos (desenvolvedores). *
* **Intuitivo**: Otimo suporte do editor. <abbr title="also known as auto-complete, autocompletion, IntelliSense">Conclusão</abbr> em todos os lugares e com Baixo tempo de Debbugging.
* **Facil**: Projetado para ser fácil de usar e aprender. Menos tempo lendo documentos.
* **Curto**: Minimize a duplicação de código. Vários recursos de cada declaração de parâmetro. Menos erros.
* **Robusto**: Obtenha código pronto para produção. Com documentação interativa automática.
* **Otimos padroes**: Baseado (e totalmente compatível com) os padrões abertos para APIs: <a href="https://github.com/OAI/OpenAPI-Specification" class="external-link" target="_blank">OpenAPI</a> (previously known as Swagger) e <a href="https://json-schema.org/" class="external-link" target="_blank">JSON Schema</a>.



## Instalação
<div class="termy">

* Recomendado a criação de um ambiente virtual para instalação.
```console
$ pip install -r requirements.txt

```

* executar o docker antes de rodar o projeto

## Exemplos

### Documentação

* dentro do Postman ou thunder client, faça uma requisição GET para a url:

```console
http://localhost:8000/docs
```

* e tenha acesso a documentação da API.

### buscar devs

* dentro do Postman ou thunder client, faça uma requisição GET para a url:

```console
http://localhost:8000/all/devs
```

## Sistema de testes

* Para rodar os testes, execute o comando:

```console
$ pytest
```