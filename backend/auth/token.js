const env = require('dotenv')
const jwt = require('jsonwebtoken')

env.config()

const Token = {
  createSecretToken: (id, role) => {
    return jwt.sign({id, role}, process.env.TOKEN_SECRET, {
      expiresIn: 24 * 60 * 60
    })
  }
}

module.exports = Token