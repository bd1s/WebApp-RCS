const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const DemandeEmailAcademiques = sequelize.define('DemandeEmailAcademiques', {
    id_demande: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'Demandes',
        key: 'id_demande',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    identifiant_souhaite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motif_demande: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    document_necessaire: {
      type: DataTypes.STRING,  
      allowNull: true,        
    },
  });

  DemandeEmailAcademiques.associate = (models) => {
    DemandeEmailAcademiques.belongsTo(models.Demande, {
      foreignKey: 'id_demande',
      onDelete: 'CASCADE',
    });
  };

  return DemandeEmailAcademiques;
};
