const router = require('express').Router()
const path = require('path')
//serving routes 
router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./dealRoutes.js'))
//need to serve html from server
router.get('/deals', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/deals.html'))
})
router.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
module.exports = router