const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connections')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User