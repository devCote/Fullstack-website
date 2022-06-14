const seq = require('../db')
const { DataTypes } = require('sequelize')

const User = seq.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  text: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
})

module.exports = User
