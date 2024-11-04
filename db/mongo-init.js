console.log('\nPRIMEIRA INICIALIZAÇÃO DO BANCO MONGODB...\n')

console.log('\nCRIANDO BANCO DE DADOS...\n')

// cria database no mongo.
db_test_frontend = db.getSiblingDB('dbTestFrontend')

console.log('\nCRIANDO USUÁRIO...\n')

// cria usuário com permissão para ler e escrever no database criado.
db_test_frontend.createUser({
  user: 'user',
  pwd: 'pass',
  roles: [
    {
      role: 'readWrite',
      db: 'dbTestFrontend'
    }
  ]
})

// cria coleção de usuários.
db_test_frontend.createCollection('users')

console.log('\nINICIALIZAÇÃO FINALIZADA...\n')