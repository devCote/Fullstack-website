const Router = require('express')
const router = new Router()
const { nodemonController } = require('../controllers/index')

router.get('/clear', nodemonController.clear)

module.exports = router
