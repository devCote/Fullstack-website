const Router = require('express')
const apiRouter = new Router()
const serverRouter = new Router()
const userRoute = require('./userRoute')
const nodeRoute = require('./nodemonRoute')

apiRouter.use('/user', userRoute)
serverRouter.use('/node', nodeRoute)

module.exports = { apiRouter, serverRouter } 
