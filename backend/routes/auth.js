const { Router } = require('express')
const AuthController = require('../controllers/auth')

const router = new Router()

router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router