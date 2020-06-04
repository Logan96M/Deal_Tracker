const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:Zoe2020!@localhost:3306/dealtracker_db')

module.exports = sequelize