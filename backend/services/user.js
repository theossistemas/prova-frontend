const UserRepository = require('../repositories/user')

const UserService = {
  create: async (user) => {
    const existingUser = await UserRepository.findByEmail(user.email)
    if(existingUser) throw Error('Usuário já existente.')
    return await UserRepository.create(user)
  },

  findByEmail: async (email) => {
    return await UserRepository.findByEmail(email)
  },

  deleteById: async (_id) => {
    return await UserRepository.deleteById(_id)
  }
}

module.exports = UserService