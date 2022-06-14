const Router = require('express')
const router = new Router()
const { userController } = require('../controllers/index')

router.post('/registration', userController.registration)
router.get('/getusers', userController.getUsers)

module.exports = router
