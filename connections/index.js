const Sequelize = require('sequelize')

// new Sequelize("process.env.JAWSDB_URL", null, null, {})

// const sequelize = new Sequelize("process.env.JAWSDB_URL" || "process.env.LOCAL_URL")

const sequelize = new Sequelize( process.env.JAWSDB_URL || process.env.LOCAL_URL )

module.exports = sequelize