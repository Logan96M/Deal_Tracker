const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./dealRoutes.js'))

module.exports = router