const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const { apiRouter, serverRouter } = require('./routes/index')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)
app.use('/server', serverRouter)


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
  } catch (e) {

  }
}

start()

