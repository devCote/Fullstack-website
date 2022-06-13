const Router = require('express')
const router = new Router()
const { userController } = require('../controllers/index')

router.post('/register', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)
router.get('/getusers', userController.getUsers)

module.exports = router
