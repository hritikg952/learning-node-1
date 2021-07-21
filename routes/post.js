const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/post/add/:userId', (req, res) => {
  console.log(req.params)
  db.Post.create({
    text: req.body.text,
    UserId: req.params.userId
  }).then(newPost => {
    res.send(newPost)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/post/getAll', (req, res) => {
  db.Post.findAll({
    include: [db.User]
  }).then(post => {
    res.send(post)
  }).catch(err => {
    console.log(err)
  })
})

router.get('/post/get/:postId', (req, res) => {
  db.Post.findAll({
    where: { id: req.params.postId },
    include: [db.User]
  }).then(post => {
    res.send(post)
  }).catch(err => {
    console.log(err)
  })
})
module.exports = router