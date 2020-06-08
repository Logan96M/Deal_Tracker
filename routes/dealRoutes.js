const router = require('express').Router()
const { Deal } = require('../models')
// GET all users
router.get('/deals', (req, res) => {
  Deal.findAll()
    .then(deals => res.json(deals))
    .catch(err => console.error(err))
})
// GET all deals by userId
router.get('/deals/:userId', (req, res) => {
  Deal.findAll({ where: { userId: req.params.userId }})
    .then(deals => res.json(deals))
    .catch(err => console.error(err))
})
// GET one deal // id = dealID?
router.get('/deal/:id', (req, res) => {
  Deal.findOne({ where: { id: req.params.id }})
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
router.put('/deal/:id', (req, res) => {
  Deal.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})
//Deals ID/
router.put('/deals/:id/:status', (req, res) => {
  Deal.update({stage:req.params.status}, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})
// DELETE one deal
router.delete('/deal/:id', (req, res) => {
  Deal.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})
module.exports = router