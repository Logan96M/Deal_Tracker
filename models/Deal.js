const { Model, DataTypes } = require('sequelize')
const sequelize = require('../connections')

//define what a deal will look like
class Deal extends Model { }
Deal.init({
  dealName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  organization: {
    type: DataTypes.STRING,
    allowNull: true
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  stage: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Lead"
  },
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    foreignKey: true
  }
}, { sequelize, modelName: 'deal' })

module.exports = Deal
