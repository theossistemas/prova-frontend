const UserService = require('../services/user')
const Token = require('../auth/token')

const UserController = {
  create: (req, res) => {
    UserService.create(req.body)
      .then((response) => {
        const token = Token.createSecretToken(response._id, response.name, response.email, response.role)
        res.cookie('token',token, {
          path: '/',
          expires: new Date(Date.now() + 86400000),
          secure: false,
          httpOnly: true,
          sameSite: 'None'
        })
        res.status(200).send(response)
      })
      .catch((err) => res.status(400).send(err.message))
  }
}

module.exports = UserController