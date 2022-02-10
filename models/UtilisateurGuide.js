const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db/Sequelize');

const UtilisateurGuide = db.define(
  'UtilisateurGuide',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UtilisateurGuide;
