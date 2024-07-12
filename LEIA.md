# Intruções de como rodar o projeto

1. Edite as variavies de ambiente do backend. Crie um arquivo `.env` na raiz do projeto backend e adicione as seguintes variaveis de ambiente:

    ```bash
    CLIENT_ID=PREENCHA_COM_SEU_CLIENT_ID
    CLIENT_SECRET=PRENCHA_COM_SEU_CLIENT_SECRET
    ```

2. utilize o docker compose para subir o backend e banco de dados MongoDB.
   
    ```bash
    docker-compose up -d --build
    ```

3. Acesse o projeto do front end e executa os comandos:
    
    ```bash
    npm install
    ng serve
    ```
