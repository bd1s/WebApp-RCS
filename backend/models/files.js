"use stricts";

module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define(
    "Files",
    {
      id_file: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Utilisateurs",
          key: "id_utilisateur",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {}
  );

  Files.associate = function (models) {
    Files.belongsTo(models.Utilisateur, { foreignKey: "id_user" });
  };

  return Files;
};
