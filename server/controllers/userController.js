const { User } = require('../models/index')

class UserController {

  async registration(req, res) {
    // name check
    const users = await User.findAll({ attributes: ['name'] })
    const names = users.map((user) => {
      return user.dataValues.name
    })
    if (names.includes(req.body.name)) return res.status(400).send("name is taken")

    console.log('****************************************\n\n')
    console.log(req.body)
    console.log('****************************************\n\n')

    // const reply = await User.create(req.body);
    // console.log("******\nTABLE auto-generated new user:\n", reply.dataValues);
    return res.status(200).send('success')
  }

  async getUsers(_req, res) {
    const users = await User.findAll()
    const mapedUsers = users.map(user => user.dataValues)
    return res.status(200).send(mapedUsers)
  }
}

module.exports = new UserController
