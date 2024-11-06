const UserService = require('../services/user')
const Token = require('../auth/token')

const UserController = {
  create: (req, res) => {
    UserService.create(req.body)
      .then((response) => {
        const token = Token.createSecretToken(response._id, response.role)
        res.cookie('token',token, {
          path: '/',
          expires: new Date(Date.now() + 86400000),
          secure: false,
          httpOnly: true,
          sameSite: 'None',
          maxAge: new Date(Date.now() + 86400000)
        })
        res.status(201).send()
      })
      .catch((err) => res.status(409).json({message: err.message}))
  },

  delete: (req, res) => {
    UserService.deleteById(req.params._id)
      .then(() => res.status(204).send())
      .catch((err) => res.status(409).json({message: err.message}))
  },

  findAll: (req, res) => {
    UserService.findAll()
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(400).json({message: err.message}))
  }
}

module.exports = UserController