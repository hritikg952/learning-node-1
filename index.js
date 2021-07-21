const express = require("express")
const path = require('path')
const mysql = require('mysql')
const db = require('./models')

const userRoutes = require('./routes/user')
const profileRoutes = require('./routes/profile')
const postRoutes = require('./routes/post')
const app = express()

const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', userRoutes)
app.use('/api', profileRoutes)
app.use('/api', postRoutes)

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })
})