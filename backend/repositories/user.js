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

  findByEmail: async (email) => {
    return await User.findOne({email: email})
  },

  findById: async (_id) => {
    return await User.findOne({_id: _id})
  },

  deleteById: async (_id) => {
    return await User.deleteOne({_id: _id})
  }
}

module.exports = UserRepository