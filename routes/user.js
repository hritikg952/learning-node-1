const express = require('express')
const { sequelize } = require('../models')
const db = require('../models')
const router = express.Router()

router.post('/user/add', (req, res) => {
  db.User.create({
    username: req.body.username
  }).then(newUser => {
    res.send(newUser)
  })
})

router.get('/user/getAll', async (req, res) => {

  try {
    const users = await db.User.findAll({
      // attributes: {
      //   include: [[sequelize.fn('COUNT', sequelize.col('username')), 'n_users']]
      // },
      include: [db.Profile, db.Post]
    })
    const userCount = await db.User.count({})
    console.log("usercount: ", userCount)
    res.send({ ...users, n_users: userCount })
  } catch (err) {
    console.log(err)
  }

})

module.exports = router