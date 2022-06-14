const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const cors = require('cors')
const { apiRouter, serverRouter } = require('./routes/index')
const fileUpload = require('express-fileupload')
const fs = require('fs')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', apiRouter)
app.use('/server', serverRouter)

<<<<<<< HEAD
<<<<<<< Updated upstream
=======
app.post('/file', (req, res) => {
  console.log('==========================================\n\n')
  console.log(req.files)
  console.log('==========================================\n\n')
  console.log(req.body)
  if (!req.body) return res.status(400)
  return res.status(200)
})
>>>>>>> 27bcbb3a6442b12962e97f6c7757f2c573a1c18d

=======
>>>>>>> Stashed changes
const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`app is running on port ${PORT}`))
  } catch (e) {

  }
}

start()

