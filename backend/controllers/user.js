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
          sameSite: 'None'
        })
        res.status(201).send()
      })
      .catch((err) => res.status(409).send(err.message))
  },

  delete: (req, res) => {
    UserService.deleteById(req.path)
      .then(() => res.status(204).send())
      .catch((err) => res.status(409).send(err.message))
  }
}

module.exports = UserController