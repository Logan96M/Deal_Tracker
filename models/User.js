const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connections')

class User extends Model { }

//define what a user looks like
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User
