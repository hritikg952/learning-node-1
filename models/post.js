

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })

  Post.associate = model => {
    Post.belongsTo(model.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Post
}