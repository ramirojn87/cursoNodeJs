'use strict' 

module.exports = (sequelize, DataTypes) => {

  let Medico_Hospital = sequelize.define('medico_hospital', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true,  
      allowNull: false 
    },
    createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at', 
      defaultValue: DataTypes.NOW, 
      allowNull: false 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { 
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true, 
    freezeTableName: true, 
  })

  Medico_Hospital.associate = models => {
    Medico_Hospital.belongsTo(models.medico)
    Medico_Hospital.belongsTo(models.hospital)
  }

  return Medico_Hospital
}