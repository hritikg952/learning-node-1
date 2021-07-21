

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  Profile.associate = model => {
    Profile.belongsTo(model.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Profile
}