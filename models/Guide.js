const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');

const Guide = db.define(
  'Guide',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_guide: {
      type: DataTypes.STRING,
    },
    prenom_guide: {
      type: DataTypes.STRING,
    },
    telephone_guide: {
      type: DataTypes.INTEGER,
    },
    specialite_guide: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Guide;
