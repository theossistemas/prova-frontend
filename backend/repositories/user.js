const User = require('../models/user')
const bcrypt = require('bcrypt')

const UserRepository = {
  create: async (user) => {
    const salt = 10
    const hashedPassword = await bcrypt.hash(user.password, salt)
    const newUserObject = {
      ...user, password: hashedPassword
    }
    const newUser = new User(newUserObject)
    return await newUser.save()
  },

  findByEmail: async (user) => {
    return await User.findOne({email: user.email})
  }
}

module.exports = UserRepository