const sequelize = require('sequelize')

const sequelizeInstance = new sequelize("test-project", "root", "password", {
  dialect: "mysql",
  host: "localhost"
})

module.exports = sequelizeInstance