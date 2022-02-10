const { DataTypes, Sequelize } = require('sequelize');
const db = require('../db/Sequelize');

const MonumentPersonnalise = db.define(
  'MonumentPersonnalise',
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

module.exports = MonumentPersonnalise;
