const UserRepository = require('../repositories/user')

const UserService = {
  create: async (user) => {
    const existingUser = await UserRepository.findByEmail(user.email)
    if(existingUser) throw Error('E-mail já cadastrado.')
    return await UserRepository.create(user)
  },

  findByEmail: async (email) => {
    return await UserRepository.findByEmail(email)
  },

  deleteById: async (_id) => {
    return await UserRepository.deleteById(_id)
  },

  findAll: async() => {
    return await UserRepository.findAll()
  }
} 

module.exports = UserService