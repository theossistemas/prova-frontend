console.log('\nMONGODB FIRST INITIALIZATION...\n')

console.log('\nCREATING DATABASE...\n')

// cria database no mongo.
db_test_frontend = db.getSiblingDB('db_test_frontend')

console.log('\nCREATING USER...\n')

// cria usuário com permissão para ler e escrever no database criado.
db_test_frontend.createUser({
  user: 'user',
  pwd: 'pass',
  roles: [
    {
      role: 'readWrite',
      db: 'db_test_frontend'
    }
  ]
})

// cria coleção de usuários.
db_test_frontend.createCollection('users')

console.log('\nFINISHED INITIALIZATION...\n')