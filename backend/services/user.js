const UserRepository = require('../repositories/user')

const UserService = {
  create: async (user) => {
    const existingUser = await UserRepository.findByEmail(user)
    if(existingUser) throw Error('Usuário já existente.')
    return await UserRepository.create(user)
  }
}

module.exports = UserService