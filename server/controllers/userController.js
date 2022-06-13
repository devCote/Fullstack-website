const { User } = require('../models/index')

class UserController {

  async registration(req, res) {
    const users = await User.findAll({ attributes: ['name'] })
    const names = users.map((user) => {
      return user.dataValues.name
    })
    if (names.includes(req.body.name)) return res.status(400).send("name is taken")
    const reply = await User.create(req.body);
    console.log("******\nTABLE auto-generated new user:\n", reply.dataValues);
    res.status(200).json('success')
  }

  async login(req, res) {
    console.log(req.body)
    res.status(200)
  }

  async getUsers(req, res) {
    const users = await User.findAll()
    const mapedUsers = users.map(user => user.dataValues)
    res.status(200).send(mapedUsers)
  }

  async check(req, res) {
    const query = req.query
    res.json(query)
  }
}

module.exports = new UserController
