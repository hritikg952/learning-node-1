const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/profile/add', (req, res) => {
  db.Profile.create({
    name: req.body.name
  }).then(newProfile => {
    res.send(newProfile)
  })
})

module.exports = router