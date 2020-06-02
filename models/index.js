const User  = require('./User.js')
const Deal = require('./Deal.js')

User.hasMany(Deal)
Deal.belongsTo(User)

module.exports = { User, Deal }
