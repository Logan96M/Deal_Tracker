const User  = require('./User.js')
const Deal = require('./Deal.js')

//user has many deals
User.hasMany(Deal, {targetKey:'userId',foreignKey: 'userId'})
//deal only has one user
Deal.belongsTo(User)

module.exports = { User, Deal }
