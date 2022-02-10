const { DataTypes } = require('sequelize');
const db = require('../db/Sequelize');
const Article = require('./Article');

const Boutique = db.define(
  'Boutique',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nom_boutique: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    proprietaire_boutique: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adresse_boutique: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone_boutique: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Boutique;
