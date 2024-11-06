const bcrypt = require('bcrypt')
const env = require('dotenv')
const Token = require('../auth/token')

const UserService = require('../services/user')

env.config()

const AuthController = {
  login: async (req, res) => {
    const { email, password } = req.body
    if(!(email && password)) return res.status(400).json({message: "Campos de login e senha são obrigatórios."})
    const user = await UserService.findByEmail(email)
    if(!(user && (await bcrypt.compare(password, user.password)))) return res.status(401).json({message: "Credenciais inválidas."})
    const token = Token.createSecretToken(user.id, user.role)
    res.cookie('token', token, {
      domain: process.env.FRONTEND_URL,
      path: '/',
      expires: new Date(Date.now() + 86400000),
      secure: false,
      httpOnly: false,
      sameSite: 'lax',
      maxAge: new Date(Date.now() + 86400000)
    })
    res.status(201).send()
  },

  logout: (req, res) => {
    res.clearCookie('token', {
      domain: process.env.FRONTEND_URL,
      path: '/',
      secure: false,
      httpOnly: true,
      sameSite: 'None'
    })
    res.status(204).end()
  }
}

module.exports = AuthController