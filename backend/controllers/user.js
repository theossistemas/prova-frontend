const UserService = require('../services/user')

const UserController = {
  create: (req, res) => {
    UserService.create(req.body)
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(400).send(err.message))
  }
}

module.exports = UserController