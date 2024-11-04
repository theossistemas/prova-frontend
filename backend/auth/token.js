const env = require('dotenv')
const jwt = require('jsonwebtoken')

env.config()

const Token = {
  createSecretToken: (id, name, email, role) => {
    return jwt.sign({id, name, email, role}, process.env.TOKEN_SECRET, {
      expiresIn: 24 * 60 * 60
    })
  }
}

module.exports = Token