const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/dealtracker_db')

module.exports = sequelize