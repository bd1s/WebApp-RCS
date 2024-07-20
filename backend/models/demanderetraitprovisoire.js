module.exports = (sequelize, DataTypes) => {
  const DemandeRetraitProvisoire = sequelize.define('DemandeRetraitProvisoire', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    motif_retrait: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_debut_prevue: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_retour_prevue: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fichier_demande_retrait: { // Changement du nom du champ
      type: DataTypes.BLOB('long'),
      allowNull: true,
    },
  });

  DemandeRetraitProvisoire.associate = (models) => {
    DemandeRetraitProvisoire.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeRetraitProvisoire;
};
