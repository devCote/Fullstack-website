const uuid = require('uuid')
const { User } = require('../models/index')
const path = require('path')

class UserController {

  async registration(req, res) {
    try {
      const { file } = req.files
      let fileName = uuid.v4() + ".jpg"
      file.mv(path.resolve(__dirname, '../static', fileName))

      console.log(req.body)

      const { firstName, lastName, text } = req.body
      const user = await User.create({ firstName, lastName, text, image: fileName });
      console.log("*************\nTABLE auto-generated new user:\n", user);
      return res.status(200).json(user)
    } catch (e) {
      console.log(e.message)
    }
  }

  async getUsers(_req, res) {
    const users = await User.findAll()
    const mapedUsers = users.map(user => user.dataValues)
    return res.status(200).send(mapedUsers)
  }
}

module.exports = new UserController
