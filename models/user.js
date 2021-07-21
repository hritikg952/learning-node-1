
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })
  User.associate = model => {
    User.hasMany(model.Post, {
      onDelete: "cascade"
    })
    User.hasOne(model.Profile, {
      onDelete: "cascade"
    })
  }
  return User
}
