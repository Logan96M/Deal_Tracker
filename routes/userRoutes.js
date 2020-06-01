const router = require('express').Router()
const { User, Deal } = require('../models')

// GET username
router.get('/users/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }, include: [Deal] })
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

// POST user
router.post('/users', (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

module.exports = router

// router.get('/users/:selector', (req, res) => {
//   let query = {}

//   if (parseInt(req.params.selector)) {
//     query = { id: parseInt(req.params.selector) }
//   } else {
//     query = { username: req.params.selector }
//   }

//   orm.getAllWhere('users', query, data => {
//     let user = data[0]
//     orm.getAllWhere('groceries', { userid: user.id }, groceries => {
//       res.json({ user, groceries })
//     })
//   })
// })

// router.post('/users', (req, res) => {
//   orm.createOne('users', req.body, info => {
//     res.json(info)
//   })
// })



// const router = require('express').Router()
// const { User, Pet } = require('../models')

// // GET all users
// router.get('/users', (req, res) => {
//   User.findAll()
//     .then(users => res.json(users))
//     .catch(err => console.error(err))
// })

// // GET one user
// router.get('/users/:id', (req, res) => {
//   User.findOne({ where: { id: req.params.id }, include: [Pet] })
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })

// // POST one user
// router.post('/users', (req, res) => {
//   User.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })

// // PUT one user
// router.put('/users/:id', (req, res) => {
//   User.update(req.body, { where: { id: req.params.id } })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })

// // DELETE one user
// router.delete('/users/:id', (req, res) => {
//   User.destroy({ where: { id: req.params.id } })
//     .then(() => res.sendStatus(200))
//     .catch(err => console.error(err))
// })

// // Log In one user
// router.get('/login/:name', (req, res) => {
//   User.findOne({ where: { name: req.params.name } })
//     .then(user => res.json(user))
//     .catch(err => console.error(err))
// })

