const User = require('../models/user')

const UserRepository = {
  create: async (user) => {
    const existingUser = await User.findOne({email: user.email})
    if(existingUser) throw Error('Usuário já existente.')
    const newUser = new User(user)
    return await newUser.save()
  },

  findByEmail: async (user) => {
    return await User.findOne({email: user.email})
  }
}

module.exports = UserRepository