const router = require('express').Router()
const { Deal } = require('../models')

// GET all users
router.get('/deals', (req, res) => {
  Deal.findAll()
    .then(deals => res.json(deals))
    .catch(err => console.error(err))
})

// GET one deal // id = dealID?
router.get('/deals/:id', (req, res) => {
  Deal.findOne({ where: { id: req.params.id }, include: [Deals] })
    .then(deal => res.json(deal))
    .catch(err => console.error(err))
})

// POST one deal
router.post('/deals', (req, res) => {
  Deal.create(req.body)
    .then(deal => res.json(deal))
    .catch(err => console.error(err))
})

// PUT one deal
router.put('/deals/:id', (req, res) => {
  Deal.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// DELETE one deal
router.delete('/deals/:id', (req, res) => {
  Deal.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Log In one deal

// Do not need to log in a deal we think :)

// router.get('/login/:name', (req, res) => {
//   Deal.findOne({ where: { name: req.params.name } })
//     .then(deal => res.json(deal))
//     .catch(err => console.error(err))
// })

module.exports = router


