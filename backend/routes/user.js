const { Router } = require('express')
const UserController = require('../controllers/user')

const router = new Router()

router.post('/user', UserController.create)
router.delete('/user/:_id', UserController.delete)
router.get('/user', UserController.findAll)

module.exports = router