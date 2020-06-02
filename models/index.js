const User  = require('./User.js')
const Deal = require('./Deal.js')

User.hasMany(Deal, {targetKey:'userId',foreignKey: 'userId'})
Deal.belongsTo(User)

module.exports = { User, Deal }
