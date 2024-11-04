const { Router } = require('express')
const UserController = require('../controllers/user')

const router = new Router()

router.post('/user', UserController.create)

module.exports = router